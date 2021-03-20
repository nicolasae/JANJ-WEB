import React from 'react';
import '../../App.css';
import '../../styles/services/Convert.css'


function Convert() {
    return (
        <div>
            <h1>Convert</h1>
            <div className="container">
                <div className="price-box">
                    <div className="row">
                        <div className="col-sm-6">
                            <form className="form-horizontal form-pricing" role="form">
                                <div className="price-slider">
                                    <h4 className="great">Amount</h4>
                                    <span>Minimum $100K is required</span>
                                    <div className="col-sm-12">
                                        <div id="slider_amirol"></div>
                                    </div>
                                </div>
                                <div className="price-slider">
                                    <h4 className="great">Duration</h4>
                                    <span>Please choose one</span>
                                    <div className="btn-group btn-group-justified">
                                        <div className="btn-group btn-group-lg">
                                            <button type="button" className="btn btn-primary btn-lg btn-block month active-month selected-month" id='24month'>24 Months</button>
                                        </div>
                                        <div className="btn-group btn-group-lg">
                                            <button type="button" className="btn btn-primary btn-lg btn-block month" id='18month'>18 Months</button>
                                        </div>
                                        <div className="btn-group btn-group-lg">
                                            <button type="button" className="btn btn-primary btn-lg btn-block month" id='12month'>12 Months</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-slider">
                                    <h4 className="great">Term</h4>
                                    <span>Please choose one</span>
                                    <input name="sliderVal" type="hidden" id="sliderVal" value='0' readonly="readonly" />
                                    <input name="month" type="hidden" id="month" value='24month' readonly="readonly" />
                                    <input name="term" type="hidden" id="term" value='quarterly' readonly="readonly" />
                                    <div className="btn-group btn-group-justified">
                                        <div className="btn-group btn-group-lg">
                                            <button type="button" className="btn btn-primary btn-lg btn-block term active-term selected-term" id='quarterly'>Quarterly</button>
                                        </div>
                                        <div className="btn-group btn-group-lg">
                                            <button type="button" className="btn btn-primary btn-lg btn-block term" id='monthly'>Monthly</button>
                                        </div>
                                        <div className="btn-group btn-group-lg">
                                            <button type="button" className="btn btn-primary btn-lg btn-block term" id='weekly'>Weekly</button>
                                        </div>
                                    </div>
                                </div>
                                {/* EL ERROR EN LA PAGINA COMIENZA AQUI */}
                                {/* <div className="col-sm-6">
                                    <div className="price-form">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label for="amount_amirol" className="control-label">Annually ($): </label>
                                                    <span className="help-text">Amount that you need to pay</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="hidden" id="amount_amirol" className="form-control"/>
                                                    <input className="price lead" name="totalprice" type="text" id="total" disabled="disabled" style="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label for="amount_amirol" className="control-label">Monthly ($): </label>
                                                    <span className="help-text">Amount that you need to pay</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="hidden" id="amount_amirol" className="form-control"/>
                                                    <input className="price lead" name="totalprice12" type="text" id="total12" disabled="disabled" style="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label for="amount_amirol" className="control-label">Weekly ($): </label>
                                                    <span className="help-text">Amount that you need to pay</span>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="hidden" id="amount_amirol" className="form-control"/>
                                                    <input className="price lead" name="totalprice52" type="text" id="total52" disabled="disabled" style="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <button type="submit" className="btn btn-primary btn-lg btn-block">Proceed <span className="glyphicon glyphicon-chevron-right"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    );
  }
  
  export default Convert
  