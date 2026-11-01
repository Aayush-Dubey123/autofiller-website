import React from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export const LimitsSection: React.FC = () => {
  return (
    <section
      id="limits"
      className="viewport-section"
      style={{
        padding: 'clamp(36px, 5vh, 64px) 0',
        backgroundColor: 'var(--bg-surface-subtle)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-primary)',
            }}
          >
            Honest Boundaries
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-title)', marginTop: '4px' }}>
            What AutoFiller AI Does &amp; Doesn&apos;t Do
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '8px auto 0 auto' }}>
            We refuse to make inflated claims. Here are the realistic boundaries of the system.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            maxWidth: '960px',
            margin: '0 auto',
          }}
          className="limits-grid"
        >
          {/* What it does */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px',
              border: '1px solid #86EFAC',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--status-success)', fontWeight: 800 }}>
              <CheckCircle size={20} />
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-title)' }}>What Works Reliably</h3>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--status-success)', fontWeight: 800 }}>✓</span>
                <span>Standard HTML form inputs (text, email, tel, date, number, textarea).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--status-success)', fontWeight: 800 }}>✓</span>
                <span>Accessible ARIA controls (custom radiogroups, listboxes, comboboxes, switches).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--status-success)', fontWeight: 800 }}>✓</span>
                <span>Multi-section wizard pagination (navigates through Next/Continue sections).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--status-success)', fontWeight: 800 }}>✓</span>
                <span>Honeypot detection (ignores bot-trap invisible and off-screen inputs).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--status-success)', fontWeight: 800 }}>✓</span>
                <span>Live DOM verification (confirms populated values exist in page before proceeding).</span>
              </li>
            </ul>
          </div>

          {/* What it doesn't do */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px',
              border: '1px solid #FECACA',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--status-danger)', fontWeight: 800 }}>
              <XCircle size={20} />
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-title)' }}>Known Limits &amp; Non-Goals</h3>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--status-danger)', fontWeight: 800 }}>✕</span>
                <span><strong>Never submits automatically:</strong> The agent permanently halts at REVIEW_READY.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--status-danger)', fontWeight: 800 }}>✕</span>
                <span><strong>No CAPTCHA/OTP bypass:</strong> The agent pauses and waits for your manual completion.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--status-danger)', fontWeight: 800 }}>✕</span>
                <span><strong>Canvas &amp; WebGL forms:</strong> Non-DOM canvas-rendered text cannot be read by browser locators.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--status-danger)', fontWeight: 800 }}>✕</span>
                <span><strong>Closed cross-origin iframes:</strong> Forms embedded inside heavily restricted cross-origin iframes may require direct URL navigation.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: 'var(--status-danger)', fontWeight: 800 }}>✕</span>
                <span><strong>Financial payment gateways:</strong> Credit card entry and payments require human intervention.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
};
