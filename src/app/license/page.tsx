import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { SITE_CONFIG } from '../../config/site.config';

export const metadata = {
  title: `License — ${SITE_CONFIG.name}`,
  description: 'MIT Open Source License text for AutoFiller AI.',
};

export default function LicensePage() {
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
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
              <Scale size={22} />
            </div>
            <div>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-title)' }}>
                MIT Open Source License
              </h1>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                AutoFiller AI is free, open-source software created by Ayush Dubey.
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
            }}
          >
            <pre
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                color: 'var(--text-primary)',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
{`MIT License

Copyright (c) ${new Date().getFullYear()} Ayush Dubey (https://ayushdubey.studio)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
            </pre>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
