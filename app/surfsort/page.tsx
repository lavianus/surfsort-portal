export default function SurfSortLanding() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:      #080d1a;
          --surface: #0d1529;
          --card:    #101d35;
          --border:  #1a2d4a;
          --border2: #243d60;
          --text:    #e4eaf5;
          --sub:     #7a8eaa;
          --sub2:    #3a5070;
          --lime:    #90be6d;
          --lime-dim: rgba(144,190,109,.1);
          --font-h:  'Barlow Condensed', system-ui, sans-serif;
          --font-b:  system-ui, -apple-system, sans-serif;
        }

        .ss-body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-b);
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── NAV ── */
        .ss-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(20px, 5vw, 64px);
          height: 60px;
          background: rgba(8,13,26,.8);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }

        .ss-logo {
          font-family: var(--font-h);
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ss-logo-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--lime);
          flex-shrink: 0;
        }

        .ss-nav-cta {
          background: var(--lime);
          color: #080d1a;
          border: none;
          border-radius: 6px;
          padding: 8px 20px;
          font-family: var(--font-h);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: background .15s, transform .1s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .ss-nav-cta:hover { background: #a8d484; transform: translateY(-1px); }

        /* ── HERO ── */
        .ss-hero {
          position: relative;
          padding: clamp(80px, 14vw, 160px) clamp(20px, 5vw, 64px) clamp(80px, 10vw, 120px);
          text-align: center;
          overflow: hidden;
        }

        .ss-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(144,190,109,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(144,190,109,.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
          pointer-events: none;
        }

        .ss-hero-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(144,190,109,.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .ss-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--lime-dim);
          border: 1px solid rgba(144,190,109,.2);
          border-radius: 20px;
          padding: 6px 16px;
          font-family: var(--font-h);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          color: var(--lime);
          margin-bottom: 32px;
        }

        .ss-hero-h1 {
          font-family: var(--font-h);
          font-size: clamp(48px, 10vw, 96px);
          font-weight: 800;
          letter-spacing: 3px;
          line-height: .95;
          margin-bottom: 24px;
          background: linear-gradient(180deg, #fff 0%, var(--sub) 160%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ss-hero-h1 em {
          font-style: normal;
          -webkit-text-fill-color: var(--lime);
        }

        .ss-hero-sub {
          font-size: clamp(16px, 2.5vw, 20px);
          color: var(--sub);
          max-width: 480px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        .ss-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ss-btn-primary {
          background: var(--lime);
          color: #080d1a;
          border: none;
          border-radius: 8px;
          padding: 14px 28px;
          font-family: var(--font-h);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: background .15s, transform .1s, box-shadow .15s;
          text-decoration: none;
          box-shadow: 0 0 32px rgba(144,190,109,.2);
        }

        .ss-btn-primary:hover {
          background: #a8d484;
          transform: translateY(-2px);
          box-shadow: 0 4px 40px rgba(144,190,109,.35);
        }

        .ss-btn-secondary {
          background: transparent;
          color: var(--sub);
          border: 1px solid var(--border2);
          border-radius: 8px;
          padding: 14px 28px;
          font-family: var(--font-h);
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 2px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: border-color .15s, color .15s;
          text-decoration: none;
        }

        .ss-btn-secondary:hover { border-color: var(--lime); color: var(--lime); }

        /* ── FEATURES ── */
        .ss-features {
          padding: clamp(60px, 10vw, 100px) clamp(20px, 5vw, 64px);
          border-top: 1px solid var(--border);
        }

        .ss-section-label {
          font-family: var(--font-h);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          color: var(--sub2);
          text-align: center;
          margin-bottom: 48px;
        }

        .ss-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
          max-width: 960px;
          margin: 0 auto;
        }

        .ss-feat-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px;
          transition: border-color .2s, transform .2s;
          position: relative;
          overflow: hidden;
        }

        .ss-feat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(144,190,109,.3), transparent);
          opacity: 0;
          transition: opacity .2s;
        }

        .ss-feat-card:hover { border-color: var(--border2); transform: translateY(-3px); }
        .ss-feat-card:hover::before { opacity: 1; }

        .ss-feat-icon {
          width: 44px;
          height: 44px;
          background: var(--lime-dim);
          border: 1px solid rgba(144,190,109,.15);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-bottom: 20px;
        }

        .ss-feat-title {
          font-family: var(--font-h);
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .ss-feat-desc {
          font-size: 14px;
          color: var(--sub);
          line-height: 1.65;
        }

        /* ── PORTAL PREVIEW ── */
        .ss-portal-section {
          padding: clamp(60px, 10vw, 100px) clamp(20px, 5vw, 64px);
          border-top: 1px solid var(--border);
        }

        .ss-portal-inner {
          max-width: 760px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        @media (max-width: 640px) {
          .ss-portal-inner { grid-template-columns: 1fr; }
        }

        .ss-portal-text h2 {
          font-family: var(--font-h);
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.05;
          margin-bottom: 16px;
        }

        .ss-portal-text h2 span { color: var(--lime); }

        .ss-portal-text p {
          font-size: 15px;
          color: var(--sub);
          line-height: 1.7;
        }

        .ss-portal-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,.4);
        }

        .ss-portal-bar {
          background: var(--card);
          border-bottom: 1px solid var(--border);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ss-portal-dots {
          display: flex;
          gap: 5px;
        }

        .ss-portal-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--border2);
        }

        .ss-portal-url {
          flex: 1;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 5px;
          padding: 4px 10px;
          font-size: 11px;
          color: var(--sub);
          font-family: monospace;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ss-portal-url span { color: var(--lime); }

        .ss-portal-content {
          padding: 24px;
        }

        .ss-portal-avatar-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }

        .ss-portal-av {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--lime-dim);
          border: 1px solid rgba(144,190,109,.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-h);
          font-size: 14px;
          font-weight: 700;
          color: var(--lime);
          flex-shrink: 0;
        }

        .ss-portal-av-name {
          font-family: var(--font-h);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .ss-portal-av-sub {
          font-size: 11px;
          color: var(--sub);
        }

        .ss-portal-album-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
        }

        .ss-portal-album-thumb {
          aspect-ratio: 1;
          border-radius: 5px;
          background: var(--card);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .ss-portal-album-lbl {
          font-family: var(--font-h);
          font-size: 9px;
          letter-spacing: 1px;
          color: var(--sub2);
          text-align: center;
          padding: 0 4px;
        }

        /* ── BOTTOM CTA ── */
        .ss-cta {
          padding: clamp(80px, 12vw, 140px) clamp(20px, 5vw, 64px);
          text-align: center;
          border-top: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        .ss-cta-glow {
          position: absolute;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 300px;
          background: radial-gradient(ellipse at center, rgba(144,190,109,.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .ss-cta h2 {
          font-family: var(--font-h);
          font-size: clamp(40px, 8vw, 80px);
          font-weight: 800;
          letter-spacing: 3px;
          line-height: 1;
          margin-bottom: 32px;
          color: var(--text);
        }

        /* ── FOOTER ── */
        .ss-footer {
          border-top: 1px solid var(--border);
          padding: 24px clamp(20px, 5vw, 64px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ss-footer-copy {
          font-size: 12px;
          color: var(--sub2);
          font-family: var(--font-h);
          letter-spacing: 1px;
        }

        .ss-footer-powered {
          font-size: 12px;
          color: var(--sub2);
          font-family: var(--font-h);
          letter-spacing: 1px;
        }

        .ss-footer-powered span { color: var(--lime); }
      `}</style>

      <div className="ss-body">

        {/* Nav */}
        <nav className="ss-nav">
          <div className="ss-logo">
            SURFSORT
            <div className="ss-logo-dot" />
          </div>
          <a href="#download" className="ss-nav-cta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            DOWNLOAD
          </a>
        </nav>

        {/* Hero */}
        <section className="ss-hero">
          <div className="ss-hero-grid" />
          <div className="ss-hero-glow" />

          <div className="ss-hero-badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--lime)">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            PARA FOTÓGRAFOS DE SURF
          </div>

          <h1 className="ss-hero-h1">
            SORT FASTER.<br />
            <em>DELIVER</em> SMARTER.
          </h1>

          <p className="ss-hero-sub">
            O app para fotógrafos de surf organizarem sessões em segundos e publicarem previews para os surfistas encontrarem suas fotos.
          </p>

          <div className="ss-hero-actions">
            <a href="#download" className="ss-btn-primary" id="download">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              DOWNLOAD PARA MAC
            </a>
            <a href="#features" className="ss-btn-secondary">
              VER COMO FUNCIONA
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="ss-features" id="features">
          <div className="ss-section-label">— FUNCIONALIDADES —</div>
          <div className="ss-features-grid">

            <div className="ss-feat-card">
              <div className="ss-feat-icon">⚡</div>
              <div className="ss-feat-title">Sorting em tempo real</div>
              <p className="ss-feat-desc">
                Atribua fotos a surfistas com atalhos de teclado. Visualize, decida e avance em segundos por sessão.
              </p>
            </div>

            <div className="ss-feat-card">
              <div className="ss-feat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="1.8">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="ss-feat-title">Estrutura automática</div>
              <p className="ss-feat-desc">
                Pastas organizadas automaticamente por surfista, dia e wave. Entrega em segundos, sem arrastar arquivos.
              </p>
            </div>

            <div className="ss-feat-card">
              <div className="ss-feat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="ss-feat-title">Portal público</div>
              <p className="ss-feat-desc">
                Publique previews com marca d&#39;água. Surfistas acessam seu portal e encontram as próprias fotos.
              </p>
            </div>

          </div>
        </section>

        {/* Portal Preview */}
        <section className="ss-portal-section">
          <div className="ss-portal-inner">

            <div className="ss-portal-text">
              <h2>SEU PORTAL,<br /><span>SEU NEGÓCIO.</span></h2>
              <p>
                Cada fotógrafo tem seu portal único. Surfistas encontram suas fotos, fotógrafos vendem seu trabalho — sem trocas de contato na água.
              </p>
            </div>

            <div className="ss-portal-card">
              {/* Browser bar */}
              <div className="ss-portal-bar">
                <div className="ss-portal-dots">
                  <div className="ss-portal-dot" />
                  <div className="ss-portal-dot" />
                  <div className="ss-portal-dot" />
                </div>
                <div className="ss-portal-url">
                  liimestudio.com/surfsort/<span>lime-studio</span>
                </div>
              </div>

              {/* Fake portal content */}
              <div className="ss-portal-content">
                <div className="ss-portal-avatar-row">
                  <div className="ss-portal-av">LS</div>
                  <div>
                    <div className="ss-portal-av-name">Lime Studio</div>
                    <div className="ss-portal-av-sub">Surf Photography · Florianópolis</div>
                  </div>
                </div>
                <div className="ss-portal-album-grid">
                  {['Mental Eye', 'Unknown', 'Pipeline'].map((name, i) => (
                    <div key={i} className="ss-portal-album-thumb">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sub2)" strokeWidth="1.5">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                      <div className="ss-portal-album-lbl">{name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom CTA */}
        <section className="ss-cta">
          <div className="ss-cta-glow" />
          <h2>COMECE HOJE.</h2>
          <a href="#download" className="ss-btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            DOWNLOAD GRATUITO · MAC
          </a>
        </section>

        {/* Footer */}
        <footer className="ss-footer">
          <div className="ss-footer-copy">© 2026 SURFSORT</div>
          <div className="ss-footer-powered">POWERED BY <span>LIIME STUDIO</span></div>
        </footer>

      </div>
    </>
  )
}
