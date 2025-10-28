import "./App.scss";
import LetterGlitch from "./components/LetterGlitch";
import { useEffect, useState } from "react";

function App() {
  const [typedText, setTypedText] = useState("");
  const fullText = "> INITIALIZING AI AGENT PROTOCOL...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="letter-glitch-container">
        <LetterGlitch glitchSpeed={50} centerVignette={true} outerVignette={false} smooth={true} glitchColors={["#0a0a0a", "#00ff41", "#00ff41"]} />
      </div>

      <div className="content">
        <header className="header">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">AGENT_TERMINAL.exe</span>
          </div>
        </header>

        <main className="main">
          <div className="hero-section">
            <div className="glitch-wrapper">
              <h1 className="hero-title" data-text="AI AGENT">
                AI AGENT
              </h1>
            </div>
            <div className="terminal-line">
              {typedText}
              <span className="cursor-blink">█</span>
            </div>
            <p className="hero-subtitle">
              [SYSTEM] Neural network activated. Autonomous intelligence online.
              <br />
              [STATUS] Memecoin protocol engaged. Decentralization: 100%
            </p>

            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-label">&gt; NETWORK_STATUS</div>
                <div className="stat-value">ONLINE</div>
              </div>
              <div className="stat-box">
                <div className="stat-label">&gt; TOTAL_SUPPLY</div>
                <div className="stat-value">1B TOKENS</div>
              </div>
              <div className="stat-box">
                <div className="stat-label">&gt; AUTONOMY_LEVEL</div>
                <div className="stat-value">MAXIMUM</div>
              </div>
              <div className="stat-box">
                <div className="stat-label">&gt; PROTOCOL_TYPE</div>
                <div className="stat-value">MEMECOIN</div>
              </div>
            </div>

            <div className="cta-buttons">
              <button className="btn-primary">
                <span className="btn-icon">&gt;&gt;</span> BUY $AGENT
              </button>
              <button className="btn-secondary">
                <span className="btn-icon">[?]</span> VIEW DOCS
              </button>
            </div>
          </div>

          <div className="features-section">
            <div className="section-title">
              <span className="prompt">&gt; </span>system.features.list()
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⟨AI⟩</div>
                <h3 className="feature-title">Autonomous Intelligence</h3>
                <p className="feature-desc">Self-executing smart contracts with neural network integration</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⟨Ξ⟩</div>
                <h3 className="feature-title">Decentralized Protocol</h3>
                <p className="feature-desc">100% community-driven. No central authority. Pure memetic value.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⟨∞⟩</div>
                <h3 className="feature-title">Infinite Potential</h3>
                <p className="feature-desc">Algorithmic growth mechanisms built into the core protocol</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⟨◈⟩</div>
                <h3 className="feature-title">Quantum Security</h3>
                <p className="feature-desc">Military-grade encryption. Unhackable. Unbreakable. Unstoppable.</p>
              </div>
            </div>
          </div>

          <div className="tokenomics-section">
            <div className="section-title">
              <span className="prompt">&gt; </span>agent.tokenomics.display()
            </div>

            <div className="terminal-box">
              <div className="terminal-content">
                <div className="code-line">
                  <span className="code-key">TOTAL_SUPPLY:</span>
                  <span className="code-value">1,000,000,000</span>
                </div>
                <div className="code-line">
                  <span className="code-key">LIQUIDITY_POOL:</span>
                  <span className="code-value">80%</span>
                  <span className="code-comment">// LOCKED FOREVER</span>
                </div>
                <div className="code-line">
                  <span className="code-key">MARKETING:</span>
                  <span className="code-value">10%</span>
                  <span className="code-comment">// COMMUNITY CONTROLLED</span>
                </div>
                <div className="code-line">
                  <span className="code-key">TEAM:</span>
                  <span className="code-value">5%</span>
                  <span className="code-comment">// VESTED 12 MONTHS</span>
                </div>
                <div className="code-line">
                  <span className="code-key">AIRDROP:</span>
                  <span className="code-value">5%</span>
                  <span className="code-comment">// EARLY ADOPTERS</span>
                </div>
                <div className="code-line">
                  <span className="code-key">TAX:</span>
                  <span className="code-value">0%</span>
                  <span className="code-comment">// NO HIDDEN FEES</span>
                </div>
              </div>
            </div>
          </div>

          <div className="roadmap-section">
            <div className="section-title">
              <span className="prompt">&gt; </span>agent.roadmap.execute()
            </div>

            <div className="roadmap-timeline">
              <div className="roadmap-item completed">
                <div className="roadmap-marker">[✓]</div>
                <div className="roadmap-content">
                  <h3>PHASE 01: GENESIS</h3>
                  <p>Contract deployment • Website launch • Social media activation</p>
                </div>
              </div>

              <div className="roadmap-item active">
                <div className="roadmap-marker">[●]</div>
                <div className="roadmap-content">
                  <h3>PHASE 02: EXPANSION</h3>
                  <p>DEX listings • Community growth • Partnership protocols</p>
                </div>
              </div>

              <div className="roadmap-item">
                <div className="roadmap-marker">[ ]</div>
                <div className="roadmap-content">
                  <h3>PHASE 03: DOMINATION</h3>
                  <p>CEX listings • NFT collection • Metaverse integration</p>
                </div>
              </div>

              <div className="roadmap-item">
                <div className="roadmap-marker">[ ]</div>
                <div className="roadmap-content">
                  <h3>PHASE 04: SINGULARITY</h3>
                  <p>AI trading bot • DAO governance • Global adoption</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-title">&gt; CONNECT</div>
              <div className="social-links">
                <a href="#" className="social-link">
                  [TELEGRAM]
                </a>
                <a href="#" className="social-link">
                  [TWITTER]
                </a>
                <a href="#" className="social-link">
                  [DISCORD]
                </a>
              </div>
            </div>

            <div className="footer-section">
              <div className="footer-title">&gt; CONTRACT</div>
              <div className="contract-address">0x0000...0000</div>
            </div>

            <div className="footer-section">
              <div className="footer-title">&gt; STATUS</div>
              <div className="status-indicator">
                <span className="status-dot"></span> SYSTEM OPERATIONAL
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 AI AGENT PROTOCOL | ALL RIGHTS RESERVED</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
