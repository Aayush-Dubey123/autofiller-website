import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, HardDrive, Cpu, Trash2 } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { SITE_CONFIG } from '../../config/site.config';

export const metadata = {
  title: `Privacy Policy — ${SITE_CONFIG.name}`,
  description: 'Full privacy policy and cryptographic data flow disclosures for AutoFiller AI.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar version={SITE_CONFIG.version} />
      <main style={{ minHeight: 'calc(100svh - var(--header-height) - var(--footer-height))', padding: '56px 0 80px 0', boxSizing: 'border-box' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--text-brand)',
              marginBottom: '28px',
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--accent-green-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
              }}
            >
              <Shield size={22} />
            </div>
            <div>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-title)' }}>
                Privacy Policy &amp; Data Flow Disclosure
              </h1>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                Last updated: {SITE_CONFIG.releaseDate} • Applies to AutoFiller AI v{SITE_CONFIG.version}+
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              padding: '36px',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              lineHeight: 1.7,
              fontSize: '0.9375rem',
              color: 'var(--text-primary)',
            }}
          >
            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-title)', marginBottom: '10px' }}>
                1. Overview &amp; Core Philosophy
              </h2>
              <p>
                AutoFiller AI is an open-source Windows desktop application created to automate form filling
                from extracted documents without compromising user privacy. Unlike cloud autofill services
                or invasive browser extensions, AutoFiller AI does not run analytics trackers, does not sell
                user telemetry, and does not maintain cloud database servers holding user profiles.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-title)', marginBottom: '10px' }}>
                2. What Information Stays Exclusively on Your PC
              </h2>
              <p>
                The vast majority of AutoFiller AI workflows execute 100% locally on your machine using
                bundled Node.js/Electron processes, Playwright browser instances, and local Python subprocesses:
              </p>
              <ul style={{ paddingLeft: '24px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li><strong>Local Encrypted Vault:</strong> All saved personal profiles, contact records, academic marks, and ID numbers are stored in an AES-256-GCM encrypted database (<code>autofiller.vault</code>) in your local Windows <code>%APPDATA%</code> directory.</li>
                <li><strong>Cryptographic Key Protection:</strong> The Data Encryption Key (DEK) is wrapped via Windows DPAPI using Electron <code>safeStorage</code>, meaning only your logged-in Windows account can decrypt the vault.</li>
                <li><strong>Browser Automation:</strong> Playwright launches an automated Chromium instance strictly on your desktop. Keystroke population, select dropdown interactions, and radio clicks never pass through external proxies.</li>
                <li><strong>DOM Field Verification:</strong> Live verification reads back the browser DOM using local Playwright locators to ensure fields match before proceeding.</li>
                <li><strong>Session History:</strong> Past automation logs record date, URL host, and field counts only. Sensitive values are permanently stripped before logging.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-title)', marginBottom: '10px' }}>
                3. What Information Is Sent to External AI Providers
              </h2>
              <p>
                AutoFiller AI integrates with the Google Gemini API to perform document reasoning and form field mapping.
                We explicitly distinguish between two distinct operations:
              </p>
              <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ padding: '16px', backgroundColor: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <strong style={{ color: 'var(--text-title)' }}>A. Document Facts Extraction (When Uploading a Document)</strong>
                  <p style={{ marginTop: '4px', fontSize: '0.875rem' }}>
                    When you voluntarily choose to extract facts from an uploaded document (such as an admission form, PDF certificate, or identity scan), the raw document text or page images are transmitted over secure TLS directly to Google Gemini to extract structured key-value entities (e.g. Student Name, Date of Birth).
                  </p>
                </div>

                <div style={{ padding: '16px', backgroundColor: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <strong style={{ color: 'var(--text-title)' }}>B. The Zero-Value Privacy Contract (Form Field Mapping)</strong>
                  <p style={{ marginTop: '4px', fontSize: '0.875rem' }}>
                    When mapping target web forms to your saved facts, outbound requests send <strong>zero sensitive profile values</strong>. Outbound prompts include only form field descriptors (e.g. <em>&quot;Student Email Address&quot;</em>) and schema keys (e.g. <em>&quot;email&quot;</em>). The AI model reasons only over labels and keys. Actual personal values are attached strictly locally within Electron on your machine.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-title)', marginBottom: '10px' }}>
                4. AI Provider Zero-Training Commitment
              </h2>
              <p>
                API requests to Google Gemini use the Gemini Developer API. Under Google&apos;s API service terms, customer data sent through paid or API tier services is not used to train or fine-tune Google foundation models.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-title)', marginBottom: '10px' }}>
                5. The Never-Submit Safety Invariant
              </h2>
              <p>
                AutoFiller AI is architected so that the automated engine is permanently denied the capability
                to execute final submission. Automation halts permanently at <code>REVIEW_READY</code>. The user
                retains 100% control over review and clicking Submit on the target website.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-title)', marginBottom: '10px' }}>
                6. User Control &amp; Complete Data Erasure
              </h2>
              <p>
                You can permanently delete all local data stored by AutoFiller AI at any time.
                Clicking <strong>&quot;Erase All My Data&quot;</strong> in Settings permanently deletes:
              </p>
              <ul style={{ paddingLeft: '24px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li>Your encrypted profile vault (<code>autofiller.vault</code>)</li>
                <li>Your encrypted DPAPI credentials and Gemini API key</li>
                <li>All session audit logs and run traces</li>
                <li>All temporary PDF upload caches and remembered documents</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-title)', marginBottom: '10px' }}>
                7. Contact &amp; Questions
              </h2>
              <p>
                For questions, security concerns, or vulnerability disclosures, please reach out to:
                <br />
                <strong>Email:</strong> <a href={`mailto:${SITE_CONFIG.supportEmail}`} style={{ color: 'var(--text-brand)', fontWeight: 700 }}>{SITE_CONFIG.supportEmail}</a>
                <br />
                <strong>Website:</strong> <a href={SITE_CONFIG.portfolioUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-brand)', fontWeight: 700 }}>ayushdubey.studio</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
