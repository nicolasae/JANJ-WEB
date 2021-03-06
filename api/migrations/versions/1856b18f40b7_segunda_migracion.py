"""segunda migracion

Revision ID: 1856b18f40b7
Revises: 9c968c1d9750
Create Date: 2021-04-26 22:23:05.335154

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1856b18f40b7'
down_revision = '9c968c1d9750'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Contactos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=128), nullable=True),
    sa.Column('correo', sa.String(length=128), nullable=True),
    sa.Column('asunto', sa.String(length=128), nullable=True),
    sa.Column('mensaje', sa.String(length=500), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('Contactos')
    # ### end Alembic commands ###
