'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'How does AutoFiller AI enforce that forms are never submitted without my permission?',
    a: 'AutoFiller has a hardcoded, non-negotiable Never-Submit invariant enforced by an internal PolicyEngine. All button clicks with type="submit", ID/classes containing "submit" or "register", or submission labels are permanently intercepted and blocked (DENIED_FINAL_SUBMISSION). The automation always stops at the REVIEW_READY stage, requiring the human operator to manually review the form and press Submit on the webpage.',
  },
  {
    q: 'Do my personal profile details or document contents get used to train AI models?',
    a: 'No. Outbound API calls to Google Gemini use the Gemini Developer API under terms that specify customer inputs and outputs are not used to train foundation models. Furthermore, during form field mapping, AutoFiller uses a Zero-Value Privacy Contract: only form field labels (e.g. "Date of Birth") and schema keys are sent to AI — zero personal values are transmitted for field mapping.',
  },
  {
    q: 'How is my local data secured on my Windows machine?',
    a: 'All stored details and session metadata are encrypted on your local disk in an AES-256-GCM vault using 12-byte random IVs and 16-byte authentication tags. By default, the Data Encryption Key is protected using Windows DPAPI via Electron safeStorage, binding decryption strictly to your logged-in Windows account. You can optionally enable Extra Protection with a master passphrase stretched using scrypt (N=131072).',
  },
  {
    q: 'What happens when a form presents a CAPTCHA, SMS OTP, or login screen?',
    a: 'AutoFiller never attempts to bypass or cheat bot protection. When security challenges appear (such as Cloudflare Turnstile, reCAPTCHA, two-factor authentication, or sign-in walls), the agent detects the blocker, brings the browser window to the front, and transitions to USER_TAKEOVER. You complete the challenge yourself in the browser, then click "I\'m done, continue" to resume automation.',
  },
  {
    q: 'Does AutoFiller require Administrator rights on Windows?',
    a: 'No. The installer installs AutoFiller to your local user directory (%LOCALAPPDATA%\\Programs) without requiring Windows UAC administrator elevation. The portable version can also be launched directly from any folder or USB drive.',
  },
  {
    q: 'How do I completely wipe my stored information?',
    a: 'Go to Settings inside the application and click "Erase All My Data". This permanently deletes the encrypted vault file, secret store keys, audit history records, cached documents, and upload scratch directories from your PC.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
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
            Frequently Asked Questions
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-title)', marginTop: '4px' }}>
            Questions &amp; Technical Details
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '8px auto 0 auto' }}>
            Everything you need to know about safety, cryptography, and automation mechanics.
          </p>
        </div>

        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: `1px solid ${isOpen ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                  overflow: 'hidden',
                  transition: 'border 0.2s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '18px 22px',
                    textAlign: 'left',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    cursor: 'pointer',
                    color: 'var(--text-title)',
                    fontWeight: 700,
                    fontSize: '0.9375rem',
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={18} color="var(--accent-primary)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 22px 20px 22px',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '14px',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
