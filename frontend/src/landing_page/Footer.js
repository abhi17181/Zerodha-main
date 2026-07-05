import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fafafa" }}>
      <div className="container border-top mt-5 pt-5">
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "60%" }}
            />
            <p className="mt-3 text-muted">
              © 2010 - 2026, Zerodha Broking Ltd.
            </p>
            <p className="text-muted">All rights reserved.</p>
          </div>

          {/* Column 2 */}
          <div className="col-md-2 mb-4">
            <h6>Account</h6>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Open demat account</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Minor demat account</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">NRI demat account</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Commodity</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Dematerialisation</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Fund transfer</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">MTF</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap">Referral program</a>
          </div>

          {/* Column 3 */}
          <div className="col-md-2 mb-4">
            <h6>Support</h6>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Contact us</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Support portal</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">How to file a complaint?</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Status of your complaints</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Bulletin</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Circular</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Z-Connect blog</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap">Downloads</a>
          </div>

          {/* Column 4 */}
          <div className="col-md-2 mb-4">
            <h6>Company</h6>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">About</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Philosophy</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Press & media</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Careers</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Zerodha Cares (CSR)</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Zerodha.tech</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap">Open source</a>
          </div>

          {/* Column 5 */}
          <div className="col-md-3 mb-4">
            <h6>Quick links</h6>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Upcoming IPOs</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Brokerage charges</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Market holidays</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Economic calendar</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Calculators</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap mb-2">Markets</a>
            <a href="#" className="d-block text-muted text-decoration-none text-nowrap">Sectors</a>
          </div>

        </div>
            <div className='mt-5 text-muted small' style={{lineHeight: "1.8",fontSize:"12px",color: "#6c757d"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href=''>complaints@zerodha.com</a>, for DP related to <a href=''>dp@zerodha.comZerodha</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF </p>
            <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances </p>
            <p>
            <a href="" className="text-decoration-none">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>
            </p>
            <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>
            <p>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
            India's largest broker based on networth as per NSE.<a href="" className="text-decoration-none"> NSE broker factsheet</a>
            </p>
            <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="" className="text-decoration-none">create a ticket here.</a>
            </p>
            <p>
            *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        </div>
        </div>
        </footer>
     );
}

export default Footer;