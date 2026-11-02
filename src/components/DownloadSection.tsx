'use client';

import React, { useState } from 'react';
import { Download, Check, Copy, AlertTriangle, Terminal, ExternalLink, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { LatestReleaseData } from '../lib/github-release';
import { SITE_CONFIG } from '../config/site.config';

interface DownloadSectionProps {
  release: LatestReleaseData;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ release }) => {
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const [smartScreenOpen, setSmartScreenOpen] = useState(true);
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(id);
    setTimeout(() => setCopiedHash(null), 2500);
  };

  return (
    <section
      id="download"
      className="viewport-section-tall"
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
            Get AutoFiller AI
          </span>
          <h2 className="section-title" style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-title)', marginTop: '4px' }}>
            Download for Windows (64-bit)
          </h2>
          <p className="section-subtitle" style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '8px auto 0 auto' }}>
            Requires Windows 10 or Windows 11 (64-bit). No dependencies required; includes bundled Chromium automation engine.
          </p>
        </div>

        {/* Dual Cards */}
        <div
          className="download-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '920px',
            margin: '0 auto 40px auto',
          }}
        >
          {/* Card 1: Setup Installer */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px 28px',
              border: '2px solid var(--accent-primary)',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                right: '24px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--accent-primary)',
                color: '#FFFFFF',
                fontSize: '0.75rem',
                fontWeight: 800,
              }}
            >
              Recommended
            </div>

            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-title)' }}>
                Windows Installer (Setup)
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                Standard NSIS installation with Start Menu and Desktop shortcuts.
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', margin: '20px 0' }}>
                <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-title)' }}>
                  {release.installer.sizeMb}
                </span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  v{release.version} ({release.releaseDate})
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="var(--status-success)" />
                  <span>Automatic background Python &amp; Playwright setup</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="var(--status-success)" />
                  <span>Single-user installation, no admin rights required</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="var(--status-success)" />
                  <span>Clean Windows Add/Remove Programs uninstaller</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href={release.installer.url}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--accent-primary)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '0.9375rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(22, 101, 78, 0.25)',
                }}
              >
                <Download size={18} />
                <span>Download Installer (.exe)</span>
              </a>

              <div style={{ marginTop: '14px', fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                File: <code>{release.installer.filename}</code>
              </div>
            </div>
          </div>

          {/* Card 2: Portable */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px 28px',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-title)' }}>
                Portable Application
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                Zero-install executable. Runs standalone from any directory or USB drive.
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', margin: '20px 0' }}>
                <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-title)' }}>
                  {release.portable.sizeMb}
                </span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  v{release.version} ({release.releaseDate})
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="var(--status-success)" />
                  <span>No registry modifications or system installation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="var(--status-success)" />
                  <span>Encrypted vault saved locally in user AppData</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="var(--status-success)" />
                  <span>Ideal for testing, lab, or secondary computers</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href={release.portable.url}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  color: 'var(--text-title)',
                  border: '1px solid var(--border-subtle)',
                  fontWeight: 800,
                  fontSize: '0.9375rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                }}
              >
                <Download size={18} />
                <span>Download Portable (.exe)</span>
              </a>

              <div style={{ marginTop: '14px', fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                File: <code>{release.portable.filename}</code>
              </div>
            </div>
          </div>
        </div>

        {/* Checksum & PowerShell Verification Box */}
        <div
          className="download-hash-box"
          style={{
            maxWidth: '920px',
            margin: '0 auto 36px auto',
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            padding: '24px 28px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Terminal size={18} color="var(--accent-primary)" />
            <h3 style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--text-title)' }}>
              Cryptographic Integrity Verification (SHA-256)
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Installer Hash */}
            <div
              className="download-hash-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-surface-subtle)',
                border: '1px solid var(--border-subtle)',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  Installer SHA-256 ({release.installer.filename}):
                </span>
                <code className="download-hash-code" style={{ fontSize: '0.75rem', color: 'var(--text-brand)', wordBreak: 'break-all', overflowWrap: 'anywhere' }}>
                  {release.installer.sha256}
                </code>
              </div>
              <button
                onClick={() => copyToClipboard(release.installer.sha256, 'installer')}
                className="download-copy-btn"
                style={{
                  padding: '6px 10px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                {copiedHash === 'installer' ? <Check size={14} color="#059669" /> : <Copy size={14} />}
                <span>{copiedHash === 'installer' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Portable Hash */}
            <div
              className="download-hash-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-surface-subtle)',
                border: '1px solid var(--border-subtle)',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  Portable SHA-256 ({release.portable.filename}):
                </span>
                <code className="download-hash-code" style={{ fontSize: '0.75rem', color: 'var(--text-brand)', wordBreak: 'break-all', overflowWrap: 'anywhere' }}>
                  {release.portable.sha256}
                </code>
              </div>
              <button
                onClick={() => copyToClipboard(release.portable.sha256, 'portable')}
                className="download-copy-btn"
                style={{
                  padding: '6px 10px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                {copiedHash === 'portable' ? <Check size={14} color="#059669" /> : <Copy size={14} />}
                <span>{copiedHash === 'portable' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* PowerShell Snippet */}
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Run in Windows PowerShell to verify:
              <pre
                className="download-ps-pre"
                style={{
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-sidebar)',
                  color: '#A5DCB4',
                  marginTop: '6px',
                  overflowX: 'auto',
                  fontSize: '0.75rem',
                }}
              >
                Get-FileHash .\{release.installer.filename} -Algorithm SHA256
              </pre>
            </div>
          </div>
        </div>

        {/* Windows Defender SmartScreen Notice (Responsible Transparency) */}
        <div
          className="smartscreen-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            backgroundColor: '#FFFBEB',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid #FCD34D',
            padding: '24px 28px',
          }}
        >
          <div className="smartscreen-layout" style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <AlertTriangle size={24} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 800, color: '#92400E' }}>
                <button
                  type="button"
                  onClick={() => setSmartScreenOpen(!smartScreenOpen)}
                  className="smartscreen-toggle-btn"
                  aria-expanded={smartScreenOpen}
                  aria-label="Toggle SmartScreen disclosure"
                >
                  <span>Open-Source Code Signing &amp; Windows SmartScreen Disclosure</span>
                  <span className="smartscreen-chevron">
                    {smartScreenOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
              </h3>
              {smartScreenOpen && (
                <div className="smartscreen-body">
                  <p style={{ fontSize: '0.84375rem', color: '#B45309', marginTop: '6px', lineHeight: 1.6 }}>
                    AutoFiller AI is an independent open-source project. Because commercial Extended Validation (EV) code
                    signing certificates cost hundreds of dollars annually, this software is released without an enterprise commercial signature.
                    When you launch the installer, Windows Defender SmartScreen may display an <em>&quot;Unknown Publisher&quot;</em> prompt.
                  </p>

                  <div
                    style={{
                      marginTop: '12px',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8125rem',
                      color: '#78350F',
                      lineHeight: 1.6,
                    }}
                  >
                    <strong>Security Recommendation:</strong> Never bypass warnings blindly. Confirm that you downloaded the file from our official repository (<code>github.com/Aayush-Dubey123/autofiller</code>) and verify the SHA-256 hash using the PowerShell snippet above. Once verified, click <strong>&quot;More info&quot;</strong> and then <strong>&quot;Run anyway&quot;</strong>.
                  </div>

                  <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <a
                      href={SITE_CONFIG.releasesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        color: '#92400E',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        textDecoration: 'underline',
                      }}
                      className="smartscreen-link"
                    >
                      <span>View GitHub Release Mirror</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
