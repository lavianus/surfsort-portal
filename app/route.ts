export const dynamic = 'force-static'

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SurfSort — Sort Fast. Deliver Faster.</title>
<meta name="description" content="Stop wasting hours organizing footage after every trip. One keystroke per file. Every surfer gets their folder. You get back in the water.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600&family=Barlow:wght@300;400;500&display=swap" rel="stylesheet">
<style>
:root {
  --lime:    #90BE6D;
  --blue:    #007BFF;
  --black:   #0A0A14;
  --deep:    #0f0f1e;
  --surface: #14141f;
  --border:  #1a1a2e;
  --border2: #22223a;
  --slate:   #33333D;
  --sub:     #5a5a70;
  --sub2:    #8888a0;
  --white:   #ffffff;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--black);
  color: var(--white);
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 17px;
  overflow-x: hidden;
  cursor: default;
}

h1, h2, h3, h4, .label {
  font-family: 'Barlow Condensed', sans-serif;
  letter-spacing: 0;
}

/* ── NAV ───────────────────────────────────────────── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 60px; height: 64px;
  background: rgba(10,10,20,0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  display: flex; align-items: center; gap: 0;
}
.nav-logo-name {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 22px; font-weight: 500;
  letter-spacing: 0.5px;
  color: var(--white);
}
.nav-logo-sep {
  width: 1px; height: 18px; background: var(--slate);
  margin: 0 14px;
}
.nav-logo-sub {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px; font-weight: 400;
  letter-spacing: 1px;
  color: var(--lime);
}
.nav-links {
  display: flex; align-items: center; gap: 36px;
  list-style: none;
}
.nav-links a {
  font-size: 15px; font-weight: 400; letter-spacing: 0;
  color: var(--sub);
  text-decoration: none; transition: color .15s;
}
.nav-links a:hover { color: var(--white); }
.nav-cta {
  background: var(--lime); color: var(--black) !important;
  padding: 8px 20px; font-size: 15px !important;
  font-weight: 500 !important; letter-spacing: 0 !important;
  transition: background .15s !important;
}
.nav-cta:hover { background: #a8d484 !important; }

/* ── HERO ───────────────────────────────────────────── */
.hero {
  min-height: 100vh;
  display: flex; flex-direction: column; justify-content: center;
  padding: 120px 60px 80px;
  position: relative; overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  background:
    radial-gradient(ellipse 60% 50% at 80% 50%, rgba(144,190,109,0.04) 0%, transparent 70%),
    radial-gradient(ellipse 40% 60% at 20% 30%, rgba(0,123,255,0.03) 0%, transparent 70%);
  pointer-events: none;
}
.hero-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
  max-width: 1200px; margin: 0 auto; width: 100%;
}
.hero-eyebrow {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px; font-weight: 400; letter-spacing: 1px;
  color: var(--lime);
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 20px;
}
.hero-eyebrow::before {
  content: ''; display: block;
  width: 24px; height: 2px; background: var(--lime);
}
.hero h1 {
  font-size: clamp(64px, 8vw, 96px);
  font-weight: 500; line-height: 0.95;
  letter-spacing: -1px;
  margin-bottom: 28px;
}
.hero h1 span { color: var(--lime); }
.hero-sub {
  font-size: 18px; color: var(--sub2); line-height: 1.8;
  max-width: 420px; margin-bottom: 44px;
  font-weight: 300;
}
.hero-actions { display: flex; align-items: center; gap: 20px; }
.btn-primary {
  background: var(--lime); color: var(--black);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
  text-decoration: none;
  padding: 16px 40px; display: inline-block;
  transition: background .15s;
}
.btn-primary:hover { background: #a8d484; }
.btn-secondary {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
  color: var(--sub);
  text-decoration: none; transition: color .15s;
  display: flex; align-items: center; gap: 8px;
}
.btn-secondary:hover { color: var(--white); }
.btn-secondary::after { content: '→'; }

/* Hero mock UI */
.hero-visual {
  position: relative;
}
.mock-window {
  background: var(--deep);
  border: 1px solid var(--border2);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(144,190,109,0.08);
}
.mock-titlebar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 16px;
  background: var(--black);
  border-bottom: 1px solid var(--border);
}
.mock-dots { display: flex; gap: 6px; }
.mock-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--border2);
}
.mock-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 11px; font-weight: 400; letter-spacing: 0.5px;
  color: var(--sub);
}
.mock-body {
  display: grid; grid-template-columns: 1fr 200px;
  height: 320px;
}
.mock-canvas {
  background: #080810;
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
}
.wave-visual {
  width: 100%; height: 100%;
  background:
    linear-gradient(180deg, #041828 0%, #062035 30%, #0a3050 60%, #0d4060 80%, #1a5070 100%);
  position: relative; overflow: hidden;
}
.wave-visual::after {
  content: '';
  position: absolute; bottom: 30%; left: 0; right: 0;
  height: 40%;
  background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(200,230,255,0.25) 40%, rgba(255,255,255,0.1) 100%);
  clip-path: polygon(0% 60%, 5% 40%, 10% 55%, 15% 30%, 20% 50%, 25% 20%, 30% 45%, 35% 25%, 40% 50%, 45% 15%, 50% 45%, 55% 20%, 60% 50%, 65% 25%, 70% 55%, 75% 30%, 80% 50%, 85% 35%, 90% 55%, 95% 40%, 100% 50%, 100% 100%, 0% 100%);
}
.mock-filename {
  position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%);
  background: rgba(0,0,0,.7); border: 1px solid rgba(255,255,255,.08);
  border-radius: 20px; padding: 5px 16px;
  font-family: monospace; font-size: 11px; color: #8888a0;
  white-space: nowrap;
}
.mock-sidebar {
  background: var(--surface);
  border-left: 1px solid var(--border);
  padding: 12px;
  display: flex; flex-direction: column;
}
.mock-sb-label {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 10px; font-weight: 400; letter-spacing: 0.5px;
  color: var(--sub);
  margin-bottom: 10px;
}
.mock-bucket {
  display: flex; align-items: center; gap: 8px;
  padding: 7px 8px; border-radius: 6px; margin-bottom: 4px;
}
.mock-bucket.active { background: rgba(144,190,109,0.1); border: 1px solid rgba(144,190,109,0.2); }
.mock-bucket:not(.active) { border: 1px solid transparent; }
.mock-key {
  width: 24px; height: 24px; border-radius: 5px;
  background: var(--border); display: flex; align-items: center;
  justify-content: center; font-family: monospace;
  font-size: 11px; font-weight: 500; flex-shrink: 0;
}
.mock-bucket.active .mock-key { background: var(--lime); color: var(--black); }
.mock-bucket-name { font-size: 11px; font-weight: 400; flex: 1; }
.mock-bucket.active .mock-bucket-name { font-weight: 500; }
.mock-bucket-cnt { font-size: 10px; color: var(--sub); }

/* Progress bar */
.mock-progress {
  padding: 8px 16px;
  background: var(--black);
  border-top: 1px solid var(--border);
  display: flex; align-items: center; gap: 10px;
}
.mock-prog-outer { flex: 1; height: 3px; background: var(--border); border-radius: 3px; }
.mock-prog-inner { width: 37%; height: 100%; background: var(--lime); border-radius: 3px; }
.mock-prog-txt { font-family: monospace; font-size: 10px; color: var(--sub); white-space: nowrap; }

/* ── STRIP ───────────────────────────────────────────── */
.strip {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 18px 60px;
  display: flex; align-items: center; gap: 0;
  overflow: hidden;
}
.strip-item {
  display: flex; align-items: center; gap: 10px;
  padding: 0 40px; border-right: 1px solid var(--border);
  white-space: nowrap;
}
.strip-item:first-child { padding-left: 0; }
.strip-label {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px; font-weight: 400; letter-spacing: 0.5px;
  color: var(--sub);
}
.strip-value {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 15px; font-weight: 500; letter-spacing: 0;
  color: var(--white);
}
.strip-dot { width: 6px; height: 6px; background: var(--lime); border-radius: 50%; }

/* ── HOW IT WORKS ────────────────────────────────────── */
.section {
  padding: 120px 60px;
  max-width: 1200px; margin: 0 auto;
}
.section-full { padding: 120px 0; }
.section-inner { max-width: 1200px; margin: 0 auto; padding: 0 60px; }

.eyebrow {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px; font-weight: 400; letter-spacing: 1px;
  color: var(--lime);
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 16px;
}
.eyebrow::before { content: ''; width: 20px; height: 2px; background: var(--lime); display: block; }

.section-title {
  font-size: clamp(42px, 5vw, 66px);
  font-weight: 500; line-height: 1.0;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
}
.section-title span { color: var(--lime); }
.section-desc {
  font-size: 18px; color: var(--sub2); line-height: 1.8;
  max-width: 480px; font-weight: 300;
}

/* Steps */
.steps {
  margin-top: 72px;
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 1px; background: var(--border);
  border: 1px solid var(--border);
}
.step {
  background: var(--deep); padding: 40px 32px;
  position: relative;
}
.step-num {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 72px; font-weight: 500;
  color: var(--border2); line-height: 1;
  margin-bottom: 20px; letter-spacing: -2px;
}
.step-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 22px; font-weight: 500; letter-spacing: 0;
  margin-bottom: 10px;
}
.step-desc { font-size: 16px; color: var(--sub); line-height: 1.7; font-weight: 300; }
.step-accent {
  position: absolute; top: 0; left: 0; right: 0;
  height: 2px; background: var(--border2);
}
.step:first-child .step-accent { background: var(--lime); }

/* ── FEATURES ────────────────────────────────────────── */
.features-bg {
  background: var(--deep);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.features-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--border); margin-top: 64px;
  border: 1px solid var(--border);
}
.feature {
  background: var(--black); padding: 36px 32px;
  border-top: 2px solid transparent;
  transition: border-color .2s;
}
.feature:hover { border-color: var(--lime); }
.feature-icon {
  width: 40px; height: 40px; margin-bottom: 20px;
}
.feature-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 20px; font-weight: 500; letter-spacing: 0;
  margin-bottom: 10px;
}
.feature-desc { font-size: 16px; color: var(--sub); line-height: 1.7; font-weight: 300; }

/* ── KEYBOARD ────────────────────────────────────────── */
.keyboard-section {
  padding: 120px 60px;
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.shortcuts-table {
  margin-top: 40px; border: 1px solid var(--border);
}
.shortcut-row {
  display: flex; align-items: center; gap: 0;
  border-bottom: 1px solid var(--border);
  padding: 16px 20px;
}
.shortcut-row:last-child { border-bottom: none; }
.shortcut-key {
  font-family: 'Courier New', monospace;
  font-size: 14px; font-weight: 500; color: var(--lime);
  background: var(--deep); border: 1px solid var(--border2);
  padding: 4px 10px; min-width: 64px; text-align: center;
  letter-spacing: 0;
}
.shortcut-desc {
  font-size: 16px; color: var(--sub2); margin-left: 20px;
  font-weight: 300;
}

/* Keyboard visual */
.keys-visual {
  display: flex; flex-wrap: wrap; gap: 6px;
  margin-top: 40px;
}
.key-cap {
  width: 52px; height: 52px; background: var(--surface);
  border: 1px solid var(--border2); border-bottom: 3px solid var(--border2);
  border-radius: 6px; display: flex; align-items: center; justify-content: center;
  font-family: 'Barlow Condensed', sans-serif; font-size: 17px;
  font-weight: 500; color: var(--sub); transition: all .15s;
  cursor: default;
}
.key-cap.active {
  background: var(--lime); color: var(--black);
  border-color: #6a9050; border-bottom-color: #4a7030;
}
.key-cap.wide { width: 80px; }

/* ── PRICING ─────────────────────────────────────────── */
.pricing-section {
  background: var(--deep);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 120px 60px;
}
.pricing-inner { max-width: 900px; margin: 0 auto; text-align: center; }
.pricing-card {
  margin-top: 60px;
  border: 1px solid var(--border2);
  position: relative; overflow: hidden;
  background: var(--black);
}
.pricing-top-bar { height: 3px; background: var(--lime); }
.pricing-body { padding: 56px; }
.pricing-label {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px; font-weight: 400; letter-spacing: 1px;
  color: var(--lime); margin-bottom: 20px;
}
.pricing-price {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 88px; font-weight: 500; line-height: 1;
  letter-spacing: -3px; color: var(--white); margin-bottom: 4px;
}
.pricing-price sup { font-size: 36px; vertical-align: top; margin-top: 14px; letter-spacing: 0; }
.pricing-cadence {
  font-size: 16px; color: var(--sub); margin-bottom: 40px;
}
.pricing-divider { height: 1px; background: var(--border); margin-bottom: 40px; }
.pricing-features {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 16px; text-align: left; margin-bottom: 48px;
}
.pricing-feature {
  display: flex; align-items: flex-start; gap: 12px;
  font-size: 16px; color: var(--sub2); font-weight: 300; line-height: 1.5;
}
.pricing-feature::before {
  content: '';
  width: 14px; height: 14px; flex-shrink: 0; margin-top: 3px;
  background: var(--lime);
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}
.trial-note {
  margin-top: 20px;
  font-size: 14px; color: var(--sub); letter-spacing: 0;
}
.trial-note strong { color: var(--lime); }

/* ── FOUNDER ─────────────────────────────────────────── */
.founder-section {
  padding: 120px 60px;
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 100px; align-items: center;
}
.founder-quote {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 500; line-height: 1.3;
  letter-spacing: 0; margin-bottom: 32px;
  padding-left: 28px;
  border-left: 3px solid var(--lime);
}
.founder-name {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 17px; font-weight: 500; letter-spacing: 0.5px;
  color: var(--white);
}
.founder-role {
  font-size: 15px; color: var(--sub); margin-top: 4px;
}
.founder-stats {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 1px; background: var(--border);
  border: 1px solid var(--border);
}
.founder-stat {
  background: var(--deep); padding: 32px 28px;
}
.founder-stat-val {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 56px; font-weight: 500; line-height: 1;
  letter-spacing: -2px; color: var(--lime); margin-bottom: 6px;
}
.founder-stat-lbl {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px; font-weight: 400; letter-spacing: 0.5px;
  color: var(--sub);
}

/* ── CTA FINAL ───────────────────────────────────────── */
.cta-section {
  background: var(--lime);
  padding: 100px 60px;
  text-align: center;
  position: relative; overflow: hidden;
}
.cta-section::before {
  content: 'SURFSORT';
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 240px; font-weight: 600; letter-spacing: -8px;
  color: rgba(0,0,0,0.06); white-space: nowrap;
  pointer-events: none; user-select: none;
}
.cta-eyebrow {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px; font-weight: 400; letter-spacing: 1px;
  color: rgba(0,0,0,0.5);
  margin-bottom: 16px;
}
.cta-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(50px, 7vw, 90px);
  font-weight: 500; line-height: 0.95;
  letter-spacing: -1px; color: var(--black);
  margin-bottom: 32px;
}
.btn-dark {
  background: var(--black); color: var(--white);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
  text-decoration: none;
  padding: 16px 48px; display: inline-block;
  transition: background .15s; position: relative;
}
.btn-dark:hover { background: #1a1a2e; }
.cta-sub {
  margin-top: 20px; font-size: 15px;
  color: rgba(0,0,0,0.5); letter-spacing: 0;
}

/* ── FOOTER ─────────────────────────────────────────── */
footer {
  background: var(--black);
  border-top: 1px solid var(--border);
  padding: 40px 60px;
  display: flex; align-items: center; justify-content: space-between;
}
.footer-logo {
  display: flex; align-items: center; gap: 0;
}
.footer-logo-name {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 18px; font-weight: 500; letter-spacing: 0.5px;
  color: var(--white);
}
.footer-logo-sep { width: 1px; height: 14px; background: var(--slate); margin: 0 12px; }
.footer-logo-sub {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 13px; font-weight: 400; letter-spacing: 1px;
  color: var(--lime);
}
.footer-links {
  display: flex; gap: 32px; list-style: none;
}
.footer-links a {
  font-size: 14px; font-weight: 400; letter-spacing: 0;
  color: var(--sub);
  text-decoration: none; transition: color .15s;
}
.footer-links a:hover { color: var(--white); }
.footer-copy {
  font-size: 13px; color: var(--sub); letter-spacing: 0;
}

/* ── ANIMATIONS ─────────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-eyebrow { animation: fadeUp .6s ease both; }
.hero h1      { animation: fadeUp .6s .1s ease both; }
.hero-sub     { animation: fadeUp .6s .2s ease both; }
.hero-actions { animation: fadeUp .6s .3s ease both; }
.hero-visual  { animation: fadeUp .8s .2s ease both; }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-logo">
    <span class="nav-logo-name">SurfSort</span>
    <div class="nav-logo-sep"></div>
    <span class="nav-logo-sub">By Lime Studio</span>
  </div>
  <ul class="nav-links">
    <li><a href="#how">How it works</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="#download" class="nav-cta">Download</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-grid">
    <div>
      <div class="hero-eyebrow">For surf photographers &amp; cinematographers</div>
      <h1>Sort Fast.<br><span>Deliver</span><br>Faster.</h1>
      <p class="hero-sub">
        Stop wasting hours organizing footage after every trip.
        One keystroke per file. Every surfer gets their folder.
        You get back in the water.
      </p>
      <div class="hero-actions">
        <a href="#download" class="btn-primary">Download Free — Mac</a>
        <a href="#how" class="btn-secondary">See how it works</a>
      </div>
    </div>

    <!-- Mock app UI -->
    <div class="hero-visual">
      <div class="mock-window">
        <div class="mock-titlebar">
          <div class="mock-dots">
            <div class="mock-dot"></div>
            <div class="mock-dot"></div>
            <div class="mock-dot"></div>
          </div>
          <div class="mock-title">SurfSort — Mentawai 2026 · HT's</div>
          <div style="width:60px;"></div>
        </div>
        <div class="mock-body">
          <div class="mock-canvas">
            <div class="wave-visual"></div>
            <div class="mock-filename">C0739.MP4</div>
          </div>
          <div class="mock-sidebar">
            <div class="mock-sb-label">Buckets</div>
            <div class="mock-bucket active">
              <div class="mock-key">1</div>
              <div class="mock-bucket-name" style="font-size:12px;">Kelly</div>
              <div class="mock-bucket-cnt">14</div>
            </div>
            <div class="mock-bucket">
              <div class="mock-key">2</div>
              <div class="mock-bucket-name" style="font-size:12px;">John</div>
              <div class="mock-bucket-cnt">9</div>
            </div>
            <div class="mock-bucket">
              <div class="mock-key">3</div>
              <div class="mock-bucket-name" style="font-size:12px;">Gabriel</div>
              <div class="mock-bucket-cnt">11</div>
            </div>
            <div class="mock-bucket">
              <div class="mock-key">4</div>
              <div class="mock-bucket-name" style="font-size:12px;">Italo</div>
              <div class="mock-bucket-cnt">7</div>
            </div>
            <div style="margin-top:auto; padding-top:12px; border-top:1px solid var(--border);">
              <div style="font-size:10px;color:var(--sub);letter-spacing:0.5px;font-family:'Barlow Condensed',sans-serif;margin-bottom:6px;">Session Time</div>
              <div style="font-family:monospace;font-size:14px;font-weight:500;color:var(--lime);">18m 42s</div>
            </div>
          </div>
        </div>
        <div class="mock-progress">
          <div class="mock-prog-outer"><div class="mock-prog-inner"></div></div>
          <div class="mock-prog-txt">168 / 452</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- STRIP -->
<div class="strip">
  <div class="strip-item">
    <div class="strip-dot"></div>
    <span class="strip-label">Platform</span>
    <span class="strip-value">macOS</span>
  </div>
  <div class="strip-item">
    <div class="strip-dot"></div>
    <span class="strip-label">Formats</span>
    <span class="strip-value">RAW · JPG · MP4 · MOV</span>
  </div>
  <div class="strip-item">
    <div class="strip-dot"></div>
    <span class="strip-label">Trial</span>
    <span class="strip-value" style="color:var(--lime);">30 Days Free</span>
  </div>
  <div class="strip-item">
    <div class="strip-dot"></div>
    <span class="strip-label">After Trial</span>
    <span class="strip-value">$15 / Month</span>
  </div>
</div>

<!-- HOW IT WORKS -->
<div id="how">
<div class="section">
  <div class="eyebrow">How it works</div>
  <h2 class="section-title">Four Steps.<br><span>Zero Friction.</span></h2>
  <p class="section-desc">From raw footage to organized delivery in a single workflow. No dragging. No clicking. Just keys.</p>

  <div class="steps">
    <div class="step">
      <div class="step-accent"></div>
      <div class="step-num">01</div>
      <div class="step-title">Create a Trip</div>
      <p class="step-desc">Name your trip, add your surfers, assign a key to each one. Takes 60 seconds.</p>
    </div>
    <div class="step">
      <div class="step-accent"></div>
      <div class="step-num">02</div>
      <div class="step-title">Select Folder</div>
      <p class="step-desc">Point SurfSort to your source folder. Reads subfolders automatically — drone, underwater, camera, all in one session.</p>
    </div>
    <div class="step">
      <div class="step-accent"></div>
      <div class="step-num">03</div>
      <div class="step-title">Sort with Keys</div>
      <p class="step-desc">Each file appears full-screen. Press the surfer's key. File moves instantly. Next file loads. Repeat.</p>
    </div>
    <div class="step">
      <div class="step-accent"></div>
      <div class="step-num">04</div>
      <div class="step-title">Deliver</div>
      <p class="step-desc">Every surfer's folder is ready. Clean structure. Done. Go back to the water.</p>
    </div>
  </div>
</div>
</div>

<!-- FEATURES -->
<div id="features" class="features-bg">
<div class="section">
  <div class="eyebrow">Features</div>
  <h2 class="section-title">Built for the Real<br><span>Workflow.</span></h2>
  <p class="section-desc">Every feature exists because a photographer on a trip needed it.</p>

  <div class="features-grid">
    <div class="feature">
      <svg class="feature-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="8" width="36" height="24" rx="3" stroke="#90BE6D" stroke-width="1.5"/>
        <rect x="7" y="13" width="4" height="4" fill="#90BE6D" rx="1"/>
        <rect x="14" y="13" width="4" height="4" fill="#90BE6D" rx="1"/>
        <rect x="21" y="13" width="4" height="4" fill="#90BE6D" rx="1"/>
        <rect x="28" y="13" width="4" height="4" fill="#90BE6D" rx="1"/>
        <rect x="7" y="22" width="16" height="4" fill="#90BE6D" rx="1"/>
        <rect x="26" y="22" width="6" height="4" fill="#33333D" rx="1"/>
      </svg>
      <div class="feature-title">1-Key Sorting</div>
      <p class="feature-desc">Press a key, file moves. No mouse required. Keyboard-first design for maximum speed.</p>
    </div>
    <div class="feature">
      <svg class="feature-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10C4 8.9 4.9 8 6 8H16L20 12H34C35.1 12 36 12.9 36 14V30C36 31.1 35.1 32 34 32H6C4.9 32 4 31.1 4 30V10Z" stroke="#5a5a70" stroke-width="1.5"/>
        <line x1="12" y1="22" x2="28" y2="22" stroke="#5a5a70" stroke-width="1.5"/>
        <line x1="20" y1="17" x2="20" y2="27" stroke="#90BE6D" stroke-width="1.5"/>
      </svg>
      <div class="feature-title">Trip System</div>
      <p class="feature-desc">Create trips with full surfer rosters. Structure delivery by surfer, wave, or day. Reuse across sessions.</p>
    </div>
    <div class="feature">
      <svg class="feature-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="10" width="36" height="24" rx="3" stroke="#5a5a70" stroke-width="1.5"/>
        <circle cx="20" cy="22" r="6" stroke="#5a5a70" stroke-width="1.5"/>
        <circle cx="20" cy="22" r="2" fill="#5a5a70"/>
        <path d="M14 10V8C14 6.9 14.9 6 16 6H24C25.1 6 26 6.9 26 8V10" stroke="#5a5a70" stroke-width="1.5"/>
      </svg>
      <div class="feature-title">RAW Support</div>
      <p class="feature-desc">DNG, ARW, CR2, NEF — live previews using macOS native rendering. No conversion, no quality loss.</p>
    </div>
    <div class="feature">
      <svg class="feature-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="16" stroke="#5a5a70" stroke-width="1.5"/>
        <polyline points="20,10 20,20 27,26" stroke="#5a5a70" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="20" cy="20" r="2" fill="#90BE6D"/>
      </svg>
      <div class="feature-title">Resume Sessions</div>
      <p class="feature-desc">Save mid-session, close the app, continue exactly where you stopped. Days later if needed.</p>
    </div>
    <div class="feature">
      <svg class="feature-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 30C11 24 14 20 17 22C20 24 21 28 24 28C27 28 29 24 32 22" stroke="#5a5a70" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M6 22C9 16 12 12 15 14C18 16 19 20 22 20C25 20 27 16 30 14C33 12 36 16 36 16" stroke="#90BE6D" stroke-width="1.5" stroke-linecap="round"/>
        <rect x="2" y="6" width="36" height="28" rx="3" stroke="#33333D" stroke-width="1"/>
      </svg>
      <div class="feature-title">Video Speed Control</div>
      <p class="feature-desc">¼× slow motion to 4× fast forward. Frame-by-frame with comma and period keys. Full control.</p>
    </div>
    <div class="feature">
      <svg class="feature-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8C8 6.9 8.9 6 10 6H22L30 14V32C30 33.1 29.1 34 28 34H10C8.9 34 8 33.1 8 32V8Z" stroke="#5a5a70" stroke-width="1.5"/>
        <path d="M22 6V14H30" stroke="#5a5a70" stroke-width="1.5"/>
        <circle cx="30" cy="30" r="8" fill="#0A0A14" stroke="#90BE6D" stroke-width="1.5"/>
        <path d="M27 30L29 32L33 28" stroke="#90BE6D" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <div class="feature-title">Source Detection</div>
      <p class="feature-desc">Automatically identifies Drone, GoPro, Camera footage by filename. Organize into subfolders in one click.</p>
    </div>
  </div>
</div>
</div>

<!-- KEYBOARD SECTION -->
<div class="keyboard-section">
  <div>
    <div class="eyebrow">Keyboard-first</div>
    <h2 class="section-title">Every Action.<br><span>One Key.</span></h2>
    <p class="section-desc" style="margin-bottom:0;">SurfSort is designed so your hands never leave the keyboard. Every action has a shortcut.</p>

    <div class="shortcuts-table">
      <div class="shortcut-row">
        <span class="shortcut-key">1 – 0</span>
        <span class="shortcut-desc">Assign file to surfer 1 through 10</span>
      </div>
      <div class="shortcut-row">
        <span class="shortcut-key">← →</span>
        <span class="shortcut-desc">Navigate between files</span>
      </div>
      <div class="shortcut-row">
        <span class="shortcut-key">F</span>
        <span class="shortcut-desc">Add to Favorites folder</span>
      </div>
      <div class="shortcut-row">
        <span class="shortcut-key">⌘ Z</span>
        <span class="shortcut-desc">Undo last sort — file returns to origin</span>
      </div>
      <div class="shortcut-row">
        <span class="shortcut-key">, .</span>
        <span class="shortcut-desc">Step backward / forward one frame</span>
      </div>
      <div class="shortcut-row">
        <span class="shortcut-key">⌃ N</span>
        <span class="shortcut-desc">Add new surfer mid-session</span>
      </div>
    </div>
  </div>

  <div>
    <div class="eyebrow">Built for speed</div>
    <h2 class="section-title">10 Surfers.<br><span>10 Keys.</span></h2>
    <p class="section-desc">One keystroke per file. A photographer can sort 400+ photos in under 10 minutes.</p>

    <div class="keys-visual">
      <div class="key-cap active">1</div>
      <div class="key-cap active">2</div>
      <div class="key-cap active">3</div>
      <div class="key-cap active">4</div>
      <div class="key-cap active">5</div>
      <div class="key-cap active">6</div>
      <div class="key-cap active">7</div>
      <div class="key-cap active">8</div>
      <div class="key-cap active">9</div>
      <div class="key-cap active">0</div>
      <div class="key-cap wide">← →</div>
      <div class="key-cap">F</div>
      <div class="key-cap">,</div>
      <div class="key-cap">.</div>
      <div class="key-cap wide">⌘ Z</div>
    </div>

    <div style="margin-top:32px;padding:20px 24px;border:1px solid var(--border);border-left:3px solid var(--lime);background:var(--deep);">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:500;letter-spacing:0.5px;color:var(--lime);margin-bottom:6px;">Pro tip</div>
      <div style="font-size:16px;color:var(--sub2);line-height:1.7;font-weight:300;">Edit any shortcut mid-session without interrupting your workflow. Press ⌃N to add a surfer anytime.</div>
    </div>
  </div>
</div>

<!-- PRICING -->
<div id="pricing" class="pricing-section">
  <div class="pricing-inner">
    <div class="eyebrow" style="justify-content:center;">Pricing</div>
    <h2 class="section-title" style="text-align:center;">Simple.<br><span>No Surprises.</span></h2>
    <p class="section-desc" style="text-align:center;margin:0 auto;">One plan. Everything included. Cancel anytime.</p>

    <div class="pricing-card">
      <div class="pricing-top-bar"></div>
      <div class="pricing-body">
        <div class="pricing-label">Professional Plan</div>
        <div class="pricing-price"><sup>$</sup>15</div>
        <div class="pricing-cadence">per month · cancel anytime</div>
        <div class="pricing-divider"></div>
        <div class="pricing-features">
          <div class="pricing-feature">Unlimited trips &amp; sessions</div>
          <div class="pricing-feature">RAW file support (DNG, ARW, CR2, NEF)</div>
          <div class="pricing-feature">Video playback with speed control</div>
          <div class="pricing-feature">Automatic source detection</div>
          <div class="pricing-feature">Session save &amp; resume</div>
          <div class="pricing-feature">Favorites &amp; Screenshots folders</div>
          <div class="pricing-feature">Frame-by-frame navigation</div>
          <div class="pricing-feature">Unlimited surfers per trip</div>
        </div>
        <a href="#download" class="btn-primary" style="display:block;text-align:center;">Start 30-Day Free Trial</a>
        <p class="trial-note">No credit card required. <strong>30 days free</strong>, then $15/month.</p>
      </div>
    </div>
  </div>
</div>

<!-- FOUNDER -->
<div class="founder-section">
  <div>
    <div class="eyebrow">The maker</div>
    <blockquote class="founder-quote">
      "I built SurfSort because I was the one spending hours organizing footage after every trip. Now I spend that time in the water."
    </blockquote>
    <div class="founder-name">Raphael "Lime"</div>
    <div class="founder-role">Filmmaker · Surf Cinematographer · Founder, Lime Studio</div>
    <div style="margin-top:24px;font-size:16px;color:var(--sub);line-height:1.8;font-weight:300;max-width:420px;">
      With a background spanning cinema, documentary, and surf media, Raphael built SurfSort as the tool he always needed on trips. SurfSort is the first product from Lime Studio — with more to come.
    </div>
    <div style="margin-top:24px;">
      <a href="https://liimestudio.com" style="font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:500;letter-spacing:0.5px;color:var(--lime);text-decoration:none;">
        liimestudio.com →
      </a>
    </div>
  </div>

  <div class="founder-stats">
    <div class="founder-stat">
      <div class="founder-stat-val">10×</div>
      <div class="founder-stat-lbl">Faster sorting vs manual</div>
    </div>
    <div class="founder-stat">
      <div class="founder-stat-val">RAW</div>
      <div class="founder-stat-lbl">Full format support</div>
    </div>
    <div class="founder-stat">
      <div class="founder-stat-val">30</div>
      <div class="founder-stat-lbl">Days free trial</div>
    </div>
    <div class="founder-stat">
      <div class="founder-stat-val" style="font-size:36px;letter-spacing:-1px;">MAC</div>
      <div class="founder-stat-lbl">Native macOS app</div>
    </div>
  </div>
</div>

<!-- FINAL CTA -->
<div id="download" class="cta-section">
  <div class="cta-eyebrow">Download Now</div>
  <div class="cta-title">Stop Wasting<br>Time.</div>
  <a href="#" class="btn-dark">Download for Mac — Free</a>
  <p class="cta-sub">30 days free · No credit card · macOS 12+</p>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">
    <span class="footer-logo-name">SurfSort</span>
    <div class="footer-logo-sep"></div>
    <span class="footer-logo-sub">By Lime Studio</span>
  </div>
  <ul class="footer-links">
    <li><a href="#how">How it works</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="https://liimestudio.com">Lime Studio</a></li>
  </ul>
  <div class="footer-copy">© 2026 Lime Studio. All rights reserved.</div>
</footer>

</body>
</html>`

export async function GET() {
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
}
