import numpy as np
import pandas as pd
import requests
import xlsxwriter
import math

stocks = pd.read_csv('sp_500_stocks.csv')


from secrets import IEX_CLOUD_API_TOKEN

symbol = 'AAPL'
api_url = f'https://sandbox.iexapis.com/stable/stock/{symbol}/quote?token={IEX_CLOUD_API_TOKEN}'
data = requests.get(api_url).json()

my_columns = ['Ticker', 'Price','Market Capitalization', 'Number Of Shares to Buy']
final_dataframe = pd.DataFrame(columns = my_columns)

final_dataframe = final_dataframe.append(
    pd.Series(['AAPL',
               data['latestPrice'],
               data['marketCap'],
               'N/A'],
              index = my_columns),
    ignore_index = True)

final_dataframe = pd.DataFrame(columns = my_columns)
for symbol in stocks['Ticker'][:5]:
    api_url = f'https://sandbox.iexapis.com/stable/stock/{symbol}/quote?token={IEX_CLOUD_API_TOKEN}'
    data = requests.get(api_url).json()
    final_dataframe = final_dataframe.append(
        pd.Series(
        [
            symbol,
            data['latestPrice'],
            data['marketCap'],
            'N/A'
        ],
        index = my_columns
        ),
        ignore_index = True
    )

print(final_dataframe)

def split_list(lst,n):
    for i in range(0, len(lst),n):
        yield lst[i:i+n]


symbol_groups = list(split_list(stocks['Ticker'],100))
symbol_strings = []
for i in range(0,len(symbol_groups)):
    symbol_strings.append(','.join(symbol_groups[i]))

final_dataframe = pd.DataFrame(columns = my_columns)

for symbol_string in symbol_strings:
    batch_api_call_url = f'https://sandbox.iexapis.com/stable/stock/market/batch/?types=quote&symbols={symbol_string}&token={IEX_CLOUD_API_TOKEN}'
    data = requests.get(batch_api_call_url).json()
    for symbol in symbol_string.split(','):
        final_dataframe = final_dataframe.append(
            pd.Series(
            [
                symbol,
                data[symbol]['quote']['latestPrice'],
                data[symbol]['quote']['marketCap'],
                'N/A'
            ],
            index = my_columns
            ),
            ignore_index = True
        )


portfolio_size = input('Enter your portfolio: ')

try:
    value = float(portfolio_size)
except ValueError:
    print("That's not a number, try again")
    portfolio_size = input('Enter your portfolio')
    value = float(portfolio_size)


position_size = value/len(final_dataframe.index)
for i in range(0,len(final_dataframe.index)):
    final_dataframe.loc[i, 'Number Of Shares to Buy'] = math.floor(position_size/final_dataframe.loc[i,'Price'])

writer = pd.ExcelWriter('recommended.xlsx', engine='xlsxwriter')
final_dataframe.to_excel(writer, 'Recommended', index = False)

background_color = '#0a0a23'
font_color = '#ffffff'

string_format = writer.book.add_format(
    {
        'font_color': font_color,
        'bg_color': background_color,
        'border': 1
    }
)

dollar_format = writer.book.add_format(
    {
        'num_format': '$0.00',
        'font_color': font_color,
        'bg_color': background_color,
        'border': 1
    }
)

integer_format = writer.book.add_format(
    {
        'num_format': '0',
        'font_color': font_color,
        'bg_color': background_color,
        'border': 1
    }
)

column_format = {
    'A': ['Ticker', string_format],
    'B': ['Price', dollar_format],
    'C': ['Market Capitalization', dollar_format],
    'D': ['Number Of Shares to Buy', integer_format]
}

for column in column_format.keys():
    writer.sheets['Recommended'].set_column(f'{column}:{column}', 18, column_format[column][1])
    writer.sheets['Recommended'].write(f'{column}1', column_format[column][0], column_format[column][1])


writer.save()
