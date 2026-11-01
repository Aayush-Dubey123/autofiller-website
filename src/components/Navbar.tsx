'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bot, Github, Menu, X, Download } from 'lucide-react';
import { SITE_CONFIG } from '../config/site.config';

interface NavbarProps {
  version: string;
}

export const Navbar: React.FC<NavbarProps> = ({ version }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(244, 241, 234, 0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div
        className="container navbar-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-sidebar)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--bg-card)',
            }}
          >
            <Bot size={22} color="var(--bg-sidebar-active)" />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-title)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>{SITE_CONFIG.name}</span>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--badge-green-bg)',
                  color: 'var(--badge-green-text)',
                  border: '1px solid var(--badge-green-border)',
                }}
              >
                v{version}
              </span>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              {SITE_CONFIG.taglinePrimary}
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
          className="desktop-nav"
        >
          <a href="#how-it-works" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            How It Works
          </a>
          <a href="#privacy" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Privacy & Data
          </a>
          <a href="#limits" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Limits
          </a>
          <a href="#faq" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            FAQ
          </a>
          <a
            href={SITE_CONFIG.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
            }}
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="#download"
            style={{
              padding: '9px 18px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--accent-primary)',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'background 0.2s',
            }}
          >
            <Download size={16} />
            <span>Download</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: 'var(--text-primary)',
          }}
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer - overlay dropdown to keep header height stable */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-card)',
            padding: '16px 24px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 99,
          }}
        >
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            How It Works
          </a>
          <a
            href="#privacy"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            Privacy & Data Flow
          </a>
          <a
            href="#limits"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            Limitations
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            FAQ
          </a>
          <a
            href={SITE_CONFIG.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: 600 }}
          >
            <Github size={18} />
            <span>GitHub Repository</span>
          </a>
          <a
            href="#download"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              padding: '12px 20px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--accent-primary)',
              color: '#FFFFFF',
              fontWeight: 700,
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <Download size={18} />
            <span>Download for Windows</span>
          </a>
        </div>
      )}
    </header>
  );
};
