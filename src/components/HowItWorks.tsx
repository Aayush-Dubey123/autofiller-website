import React from 'react';
import { Upload, Link2, Eye, ShieldCheck, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: <Upload size={22} color="var(--accent-primary)" />,
      title: 'Store Facts or Drop a Document',
      desc: 'Enter your common details once into your local encrypted vault or drop an admission PDF or scan. AutoFiller organizes your structured profile facts.',
    },
    {
      num: '02',
      icon: <Link2 size={22} color="var(--accent-primary)" />,
      title: 'Provide Target Form Link',
      desc: 'Paste the target application URL. AutoFiller launches an automated Chromium browser session and scans form fields without touching existing browser logins.',
    },
    {
      num: '03',
      icon: <Eye size={22} color="var(--accent-primary)" />,
      title: 'Autonomous Fill & Live DOM Verification',
      desc: 'The agent navigates wizard sections, types values, and reads back the browser DOM to verify accuracy. If a value is missing or ambiguous, it pauses and asks you.',
    },
    {
      num: '04',
      icon: <ShieldCheck size={22} color="var(--status-success)" />,
      title: 'Operator Review & Manual Submit',
      desc: 'Automation permanently halts at REVIEW_READY. Final submit buttons are locked by the PolicyEngine. You review the filled form in the browser and press Submit yourself.',
    },
  ];

  return (
    <section
      id="how-it-works"
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
            Workflow Breakdown
          </span>
          <h2 className="section-title" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-title)', marginTop: '4px' }}>
            How AutoFiller AI Works
          </h2>
          <p className="section-subtitle" style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '8px auto 0 auto' }}>
            A deterministic, human-in-the-loop automation cycle built for trust, privacy, and safety.
          </p>
        </div>

        <div
          className="how-it-works-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}
        >
          {steps.map((s, idx) => (
            <div
              key={s.num}
              className="how-it-works-card"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 24px',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-green-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {s.icon}
                </div>
                <span
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--border-subtle)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {s.num}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-title)', marginBottom: '8px' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
