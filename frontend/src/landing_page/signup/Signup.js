import { useState } from "react";
import "./Signup.css";

const DonutChart = () => (
  <svg width="80" height="80" viewBox="0 0 80 80">
    <circle cx="40" cy="40" r="28" fill="none" stroke="#e8e8e8" strokeWidth="14" />
    <circle cx="40" cy="40" r="28" fill="none" stroke="#387ed1" strokeWidth="14"
      strokeDasharray="88 88" strokeDashoffset="22" transform="rotate(-90 40 40)" />
    <circle cx="40" cy="40" r="28" fill="none" stroke="#f0a500" strokeWidth="14"
      strokeDasharray="44 132" strokeDashoffset="-66" transform="rotate(-90 40 40)" />
    <text x="40" y="44" textAnchor="middle" fontSize="8" fill="#555">Mutual</text>
    <text x="40" y="53" textAnchor="middle" fontSize="8" fill="#555">funds</text>
  </svg>
);

const KiteCard = () => (
  <div className="card kite-card">
    <div className="kite-header">
      <span className="kite-icon">◀</span>
      <strong>Kite</strong>
    </div>
    <p className="kite-tagline">Ultra-fast investing platform</p>
    <div className="index-row">
      <span className="index-label">NIFTY 50</span>
      <div className="index-bar"><div className="index-bar-fill" style={{ width: "60%" }} /></div>
      <span className="index-label">SENSEX</span>
      <div className="index-bar"><div className="index-bar-fill" style={{ width: "45%" }} /></div>
    </div>
  </div>
);

const ConsoleCard = () => (
  <div className="card console-card">
    <div className="console-tabs">
      <span className="tab-inactive">Reports and analytics</span>
      <span className="tab-active">console</span>
    </div>
    <p className="console-label">Account value</p>
    <p className="console-value">₹ 4.33L</p>
    <div className="donut-wrapper">
      <DonutChart />
      <div className="legend">
        <div className="legend-item">
          <span className="legend-dot" style={{ background: "#387ed1" }} />
          <span className="legend-text">Equity holdings</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ background: "#f0a500" }} />
          <span className="legend-text">Mutual funds</span>
        </div>
      </div>
    </div>
    <p className="holdings-label">Holdings</p>
    <div className="holdings-bars">
      <div className="holdings-bar" style={{ width: "55%", background: "#387ed1" }} />
      <div className="holdings-bar" style={{ width: "25%", background: "#48c774" }} />
      <div className="holdings-bar" style={{ width: "12%", background: "#f0a500" }} />
    </div>
  </div>
);

const PortfolioCard = () => (
  <div className="card portfolio-card">
    <div className="portfolio-tabs">
      {["Portfolio", "SIPs", "Orders"].map((t) => (
        <span key={t} className={t === "Portfolio" ? "ptab-active" : "ptab"}>{t}</span>
      ))}
    </div>
    <div className="portfolio-links">
      {["Overview", "P&L", "XIRR"].map((l) => (
        <span key={l} className="pt-link">{l}</span>
      ))}
    </div>
    <div className="pt-rows">
      {[80, 60, 45, 30].map((w, i) => (
        <div key={i} className="pt-row" style={{ width: `${w}%`, opacity: 1 - i * 0.15 }} />
      ))}
    </div>
    <div className="pt-footer">
      <span className="pt-footer-label">Invested</span>
      <span className="pt-footer-label">Current</span>
    </div>
  </div>
);

const DashboardMockup = () => (
  <div className="mockup-wrapper">
    <KiteCard />
    <ConsoleCard />
    <PortfolioCard />
    <div className="coin-badge">
      <div className="coin-icon">coin</div>
      <span className="coin-text">Direct mutual funds<br />at 0% commission</span>
    </div>
    <div className="hi-bubble">Hi ....</div>
    <div className="equity-tabs">
      <span className="etab-active">Equity</span>
      <span className="etab">Commodity</span>
    </div>
  </div>
);

const Signup = () => {
  const [isLogin, setIsLogin]   = useState(false);
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [success, setSuccess]   = useState("");
  const [loading, setLoading]   = useState(false);

  const resetForm = () => {
    setName(""); setEmail(""); setPassword("");
    setError(""); setSuccess("");
  };

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Email and Password are required!");
      return;
    }
    if (!isLogin && !name) {
      setError("Name is required!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // ✅ Updated Backend URL
      const endpoint = isLogin
        ? "https://zerodha-main-f4tg.onrender.com/login"
        : "https://zerodha-main-f4tg.onrender.com/signup";

      const body = isLogin
        ? { email, password }
        : { name, email, password };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(isLogin
          ? `Welcome back, ${data.name}!`
          : "Account created successfully!"
        );
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("name", data.name);
        }
        setTimeout(() => {
          const encodedName = encodeURIComponent(data.name);
          window.location.href = `https://zerodha-main-2-jger.onrender.com?name=${encodedName}`;
        }, 1000);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Unable to connect to server!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="hero-text">
        <h1 className="hero-heading">Open a free demat and trading account online</h1>
        <p className="hero-subheading">
          Start investing brokerage free and join a community of 1.6+ crore investors and traders
        </p>
      </div>

      <div className="hero">
        <DashboardMockup />

        <div className="form-side">
          <div className="toggle-tabs">
            <button
              className={!isLogin ? "tab-btn active" : "tab-btn"}
              onClick={() => { setIsLogin(false); resetForm(); }}
            >
              Sign Up
            </button>
            <button
              className={isLogin ? "tab-btn active" : "tab-btn"}
              onClick={() => { setIsLogin(true); resetForm(); }}
            >
              Login
            </button>
          </div>

          <h1 className="signup-title">{isLogin ? "Welcome back!" : "Create your account"}</h1>
          <p className="signup-sub">{isLogin ? "Login to your Zerodha account" : "Or track your existing application"}</p>

          {!isLogin && (
            <input
              type="text"
              className="form-input"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            className="form-input"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-input"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error   && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}

          <button className="otp-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? "Please wait..." : isLogin ? "Login" : "Create Account"}
          </button>

          <p className="switch-text">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span className="switch-link" onClick={() => { setIsLogin(!isLogin); resetForm(); }}>
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>

          <p className="terms-text">
            By proceeding, you agree to the Zerodha{" "}
            <a href="#" className="link">terms</a> &amp; <a href="#" className="link">privacy policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;