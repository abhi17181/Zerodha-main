import React from "react";
function Universe() {
    return (
        <div className="container">
            <div className="row text-center">
                <h1 className="mt-5">The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 mt-3">
                    <img src="media/images/zerodhaFundhouse1.png" className="img-fluid w-50" />
                    <p className="text-small text-muted mt-3" style={{ fontSize: "13px" }}>
                        Our asset management venture
                        <br />
                        that is creating simple and transparent index
                        <br />
                        funds to help you save for your goals.

                    </p>
                </div>
                <div className="col-4 mt-4">
                    <img src="media/images/sensibullLogo.svg" className="img-fluid w-50" />
                    <p className="text-small text-muted mt-4" style={{ fontSize: "13px" }}>
                        Options trading platform that lets you
                        <br />
                        create strategies, analyze positions, and examine
                        <br />
                        data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4 mt-3">
                    <img src="media/images/tijori.svg" className="img-fluid w-50" />
                    <p className="text-small text-muted mt-2" style={{ fontSize: "13px" }}>
                        Investment research platform
                        <br />
                        that offers detailed insights on stocks,
                        <br />
                        sectors, supply chains, and more.</p>
                </div>

                <div className="col-4 mt-5">
                    <img src="media/images/streakLogo.png" className="img-fluid w-50" />
                    <p className="text-small text-muted mt-3" style={{ fontSize: "13px" }}>
                        Systematic trading platform
                        <br />
                        that allows you to create and backtest
                        <br />
                        strategies without coding.</p>
                </div>
                <div className="col-4 mt-5">
                    <img src="media/images/smallcaseLogo.png" className="img-fluid w-50" />
                    <p className="text-small text-muted mt-4" style={{ fontSize: "13px" }}>
                        Thematic investing platform
                        <br />
                        that helps you invest in diversified
                        <br />
                        baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 mt-5">
                    <img src="media/images/dittoLogo.png" className="img-fluid w-50" />
                    <p className="text-small text-muted mt-3" style={{ fontSize: "13px" }}>
                        Personalized advice on life
                        <br />
                        and health insurance. No spam
                        <br />
                        and no mis-selling.
                        Sign up for free
                    </p>
                </div>
            </div>
            <div className="text-center mt-5">
                <button className="btn btn-primary btn-lg">
                    Sign up for free
                </button>
            </div>

        </div>
    )
}
export default Universe;
