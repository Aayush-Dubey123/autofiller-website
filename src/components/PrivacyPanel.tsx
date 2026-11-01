import React from 'react';
import { Lock, HardDrive, Cpu, ShieldAlert, Trash2, CheckCircle2 } from 'lucide-react';

export const PrivacyPanel: React.FC = () => {
  return (
    <section
      id="privacy"
      className="viewport-section"
      style={{
        padding: 'clamp(36px, 5vh, 64px) 0',
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
            Data Privacy & Cryptography
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-title)', marginTop: '4px' }}>
            The Zero-Value Privacy Contract
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '680px', margin: '8px auto 0 auto' }}>
            We believe you should know exactly what leaves your machine and what never leaves your PC.
          </p>
        </div>

        {/* Data Breakdown Table */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-card)',
            overflow: 'hidden',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              borderBottom: '2px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-surface-subtle)',
            }}
            className="privacy-table-header"
          >
            <div style={{ padding: '18px 24px', fontWeight: 800, color: 'var(--text-title)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HardDrive size={18} color="var(--status-success)" />
              <span>Processed 100% Locally on Your PC</span>
            </div>
            <div style={{ padding: '18px 24px', fontWeight: 800, color: 'var(--text-title)', display: 'flex', alignItems: 'center', gap: '8px', borderLeft: '1px solid var(--border-subtle)' }}>
              <Cpu size={18} color="#0284C7" />
              <span>Sent to AI Over TLS (Google Gemini)</span>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
            }}
            className="privacy-table-body"
          >
            {/* Left Column: Local */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={16} color="var(--status-success)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div style={{ fontSize: '0.84375rem', color: 'var(--text-primary)' }}>
                  <strong>Personal Profile Values:</strong> Your name, birth date, phone, address, and ID numbers are stored in an AES-256-GCM encrypted vault on your disk.
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={16} color="var(--status-success)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div style={{ fontSize: '0.84375rem', color: 'var(--text-primary)' }}>
                  <strong>Browser Automation & Typing:</strong> Playwright launches an automated browser that types values and clicks dropdowns strictly on your PC.
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={16} color="var(--status-success)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div style={{ fontSize: '0.84375rem', color: 'var(--text-primary)' }}>
                  <strong>Live DOM Verification:</strong> The agent reads back the browser DOM to verify that fields were filled correctly without sending values out.
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={16} color="var(--status-success)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div style={{ fontSize: '0.84375rem', color: 'var(--text-primary)' }}>
                  <strong>Audit History & Logs:</strong> Session history records contain field counts and status only; raw personal values are sanitized before saving.
                </div>
              </div>
            </div>

            {/* Right Column: AI Provider */}
            <div style={{ padding: '24px', borderLeft: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={16} color="#0284C7" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div style={{ fontSize: '0.84375rem', color: 'var(--text-primary)' }}>
                  <strong>Uploaded Document Content:</strong> When you choose to extract data from an uploaded admission form, PDF text or page images are sent to Gemini to identify fact keys.
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={16} color="#0284C7" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div style={{ fontSize: '0.84375rem', color: 'var(--text-primary)' }}>
                  <strong>Zero-Value Field Mapping:</strong> Outbound mapping requests send ONLY form field labels (e.g. <em>&quot;Student Email&quot;</em>) and schema keys (e.g. <em>&quot;email&quot;</em>). Zero personal values are transmitted.
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={16} color="#0284C7" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div style={{ fontSize: '0.84375rem', color: 'var(--text-primary)' }}>
                  <strong>Zero-Training Enterprise Terms:</strong> Google Gemini API calls are made under API terms where inputs and outputs are not used to train foundation models.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Lock size={20} color="var(--accent-primary)" />
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-title)' }}>
                AES-256-GCM + Windows DPAPI
              </h3>
            </div>
            <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Vault records are encrypted using Node.js crypto <code>aes-256-gcm</code> with 12-byte random initialization vectors.
              The Data Encryption Key (DEK) is protected using Windows DPAPI via Electron <code>safeStorage</code>, binding decryption to your logged-in Windows user account.
            </p>
          </div>

          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <ShieldAlert size={20} color="#D97706" />
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-title)' }}>
                Responsible Anti-Bot Stance
              </h3>
            </div>
            <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              AutoFiller AI never circumvents or cheats security gates. When CAPTCHAs, two-factor authentication codes (OTP), or login screens appear, automation pauses immediately and hands over to the human operator.
            </p>
          </div>

          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Trash2 size={20} color="#DC2626" />
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-title)' }}>
                One-Click Local Data Erasure
              </h3>
            </div>
            <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              You retain total control over your machine. Clicking &quot;Erase All My Data&quot; in Settings permanently deletes your encrypted vault file, API key, audit logs, remembered documents, and all upload caches immediately.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
