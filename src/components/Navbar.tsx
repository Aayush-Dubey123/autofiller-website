'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Bot, Github, Menu, X, Download } from 'lucide-react';
import { SITE_CONFIG } from '../config/site.config';

interface NavbarProps {
  version: string;
}

export const Navbar: React.FC<NavbarProps> = ({ version }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        drawerRef.current &&
        !drawerRef.current.contains(target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(244, 241, 234, 0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)',
        paddingTop: 'env(safe-area-inset-top, 0px)',
        paddingLeft: 'env(safe-area-inset-left, 0px)',
        paddingRight: 'env(safe-area-inset-right, 0px)',
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
            minWidth: 0,
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
              flexShrink: 0,
            }}
          >
            <Bot size={22} color="var(--bg-sidebar-active)" />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-title)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ whiteSpace: 'nowrap' }}>{SITE_CONFIG.name}</span>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--badge-green-bg)',
                  color: 'var(--badge-green-text)',
                  border: '1px solid var(--badge-green-border)',
                  whiteSpace: 'nowrap',
                }}
              >
                v{version}
              </span>
            </div>
            <div className="brand-tagline" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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

        {/* Mobile Header Actions (Download button + Hamburger toggle, visible <=900px) */}
        <div
          className="mobile-header-actions"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px',
            flexShrink: 0,
          }}
        >
          <a
            href="#download"
            className="mobile-header-download"
            style={{
              padding: '8px 14px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--accent-primary)',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.8125rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              minHeight: '44px',
              boxSizing: 'border-box',
            }}
          >
            <Download size={16} />
            <span>Download</span>
          </a>

          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              padding: '9px',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
            }}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Panel */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-nav-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-nav-drawer"
            ref={drawerRef}
            role="dialog"
            aria-label="Navigation Menu"
            style={{
              position: 'fixed',
              top: 'var(--header-height, 64px)',
              left: 0,
              width: '100%',
              backgroundColor: 'var(--bg-card)',
              borderBottom: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-card)',
              padding: '16px 24px calc(24px + env(safe-area-inset-bottom, 0px)) 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              maxHeight: 'calc(100dvh - var(--header-height, 64px))',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              zIndex: 999,
              boxSizing: 'border-box',
            }}
          >
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              How It Works
            </a>
            <a
              href="#privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              Privacy &amp; Data Flow
            </a>
            <a
              href="#limits"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              Limitations
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
            >
              FAQ
            </a>
            <a
              href={SITE_CONFIG.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Github size={18} />
              <span>GitHub Repository</span>
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                marginTop: '10px',
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
                minHeight: '48px',
                boxSizing: 'border-box',
              }}
            >
              <Download size={18} />
              <span>Download for Windows</span>
            </a>
          </div>
        </>
      )}
    </header>
  );
};
