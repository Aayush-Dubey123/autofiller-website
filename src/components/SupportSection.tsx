import React from 'react';
import { Heart, Github, ExternalLink, Mail, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../config/site.config';

export const SupportSection: React.FC = () => {
  return (
    <section
      id="support"
      className="viewport-section-terminal"
      style={{
        padding: 'clamp(32px, 4.5vh, 56px) 0',
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            padding: '36px 32px',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-green-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
              }}
            >
              <Heart size={18} fill="currentColor" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-title)' }}>
                A Note from the Creator
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                Built by Ayush Dubey • Independent Software Engineering
              </p>
            </div>
          </div>

          <p style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
            AutoFiller AI was created out of frustration with repetitively re-typing identical admission and registration details across bureaucratic web forms. Existing browser extensions either sell personal autofill data or execute blind, reckless automation that submits incorrect data.
          </p>

          <p style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
            AutoFiller AI takes the opposite stance: rigorous cryptographic vault protection on your machine, strict Zero-Value privacy contracts where personal values never reach cloud AI prompts, and an unbreakable Never-Submit policy where form submission remains 100% human-controlled.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              paddingTop: '12px',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <a
              href={SITE_CONFIG.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'var(--text-brand)',
              }}
            >
              <span>ayushdubey.studio</span>
              <ExternalLink size={14} />
            </a>

            <a
              href={`${SITE_CONFIG.githubRepo}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              <MessageSquare size={14} />
              <span>Report an Issue</span>
            </a>

            <a
              href={`mailto:${SITE_CONFIG.supportEmail}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              <Mail size={14} />
              <span>Contact Support</span>
            </a>

            <a
              href={SITE_CONFIG.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              <Github size={14} />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
