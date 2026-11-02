'use client';

import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Globe,
  Sliders,
  History,
  FileText,
  User,
  Settings,
  HelpCircle,
  Eye,
  Check,
} from 'lucide-react';

export const AppReplica: React.FC = () => {
  return (
    <section
      id="replica"
      className="viewport-section"
      style={{
        padding: 'clamp(36px, 5vh, 64px) 0',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-primary)',
            }}
          >
            Real Desktop Interface
          </span>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: 'var(--text-title)', marginTop: '4px' }}>
            Permanent Review-Ready State
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '8px auto 0 auto' }}>
            Watch the automation autonomous fill and halt permanently at <strong>REVIEW_READY</strong>.
            Form submission is strictly user-controlled.
          </p>
        </div>

        {/* Desktop App Window Frame */}
        <div
          className="replica-window"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid #CBD5E1',
            boxShadow: '0 20px 48px -12px rgba(15, 46, 35, 0.16), 0 0 0 1px rgba(15, 46, 35, 0.05)',
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
          }}
        >
          {/* Windows Title Bar */}
          <div
            className="replica-title-bar"
            style={{
              height: '38px',
              backgroundColor: '#0A2018',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 14px',
              color: '#94A3B8',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
              <span className="replica-title-text" style={{ marginLeft: '10px', color: '#E2E8F0' }}>AutoFiller AI 1.0.0 — Form Automation Session</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
                Never-Submit Active
              </span>
            </div>
          </div>

          {/* App Body Grid (Sidebar + Main Workspace) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '220px 1fr',
              minHeight: '520px',
            }}
            className="replica-grid"
          >
            {/* Dark Green Sidebar */}
            <div
              style={{
                backgroundColor: 'var(--bg-sidebar)',
                padding: '20px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#E2E8F0',
              }}
              className="replica-sidebar"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ padding: '8px 12px', fontSize: '0.8125rem', color: '#94A3B8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FileText size={16} />
                  <span>Home</span>
                </div>
                <div
                  style={{
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-sidebar-active)',
                    color: 'var(--text-sidebar-active)',
                    fontWeight: 800,
                    fontSize: '0.8125rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Sliders size={16} />
                  <span>New Session</span>
                </div>
                <div style={{ padding: '8px 12px', fontSize: '0.8125rem', color: '#94A3B8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <User size={16} />
                  <span>My Details</span>
                </div>
                <div style={{ padding: '8px 12px', fontSize: '0.8125rem', color: '#94A3B8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <History size={16} />
                  <span>History</span>
                </div>
                <div style={{ padding: '8px 12px', fontSize: '0.8125rem', color: '#94A3B8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Settings size={16} />
                  <span>Settings</span>
                </div>
              </div>

              {/* Status pill in sidebar */}
              <div
                style={{
                  padding: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.72rem',
                  lineHeight: 1.4,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--bg-sidebar-active)', marginBottom: '4px' }}>
                  Policy Guard Active
                </div>
                <div style={{ color: '#CBD5E1' }}>Final submit button clicks permanently blocked.</div>
              </div>
            </div>

            {/* Main Content Workspace */}
            <div className="replica-workspace" style={{ padding: '24px', backgroundColor: '#F8FAFC', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Session Header Strip */}
              <div
                className="replica-session-strip"
                style={{
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Globe size={16} color="var(--accent-primary)" />
                  <span className="replica-url" style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0F172A', wordBreak: 'break-all' }}>
                    http://127.0.0.1:8000/mock_school_form.html
                  </span>
                </div>
                <div className="replica-badges" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: '#ECFDF5',
                      color: '#047857',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      border: '1px solid #A7F3D0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <CheckCircle2 size={13} />
                    <span>REVIEW READY</span>
                  </span>
                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--accent-green-bg)',
                      color: 'var(--accent-green-text)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    14 Facts Ready
                  </span>
                </div>
              </div>

              {/* Review Ready Alert Banner */}
              <div
                className="replica-banner"
                style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#ECFDF5',
                  border: '2px solid #86EFAC',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <ShieldCheck size={22} color="var(--text-brand)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9375rem', color: '#064E3B' }}>
                      Ready for Human Review & Manual Submission
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#047857', marginTop: '2px' }}>
                      All 12 fillable fields were verified in the browser DOM. The agent halted per the Never-Submit
                      safety policy. Review the browser window and press Submit yourself when ready.
                    </div>
                  </div>
                </div>

                <div className="replica-banner-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '2px' }}>
                  <button
                    type="button"
                    style={{
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--status-success)',
                      color: '#FFFFFF',
                      border: 'none',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                    }}
                  >
                    <CheckCircle2 size={14} />
                    <span>I Have Submitted</span>
                  </button>
                  <button
                    type="button"
                    style={{
                      padding: '8px 14px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#FFFFFF',
                      color: '#064E3B',
                      border: '1px solid #A7F3D0',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                    }}
                  >
                    <Eye size={14} />
                    <span>View In Browser</span>
                  </button>
                </div>
              </div>

              {/* Mock Form Section View (Step 5 of 5) */}
              <div
                className="replica-form-section"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #E2E8F0',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div className="replica-form-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '10px' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0F172A' }}>
                    Section 5: Previous School & Admission Details
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Check size={14} />
                    <span>All DOM Values Verified</span>
                  </div>
                </div>

                {/* Field 1: Grade (Filled & Verified) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span style={{ fontWeight: 700, color: '#334155' }}>Applying Grade / Class*</span>
                    <span style={{ color: '#059669', fontWeight: 700 }}>DOM Verified: Grade 10</span>
                  </div>
                  <div
                    style={{
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#F0FDF4',
                      border: '1px solid #86EFAC',
                      fontSize: '0.8125rem',
                      color: '#064E3B',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>Grade 10</span>
                    <CheckCircle2 size={14} color="#059669" />
                  </div>
                </div>

                {/* Field 2: Previous School */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span style={{ fontWeight: 700, color: '#334155' }}>Previous School Attended</span>
                    <span style={{ color: '#059669', fontWeight: 700 }}>DOM Verified</span>
                  </div>
                  <div
                    style={{
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#F0FDF4',
                      border: '1px solid #86EFAC',
                      fontSize: '0.8125rem',
                      color: '#064E3B',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>Greenwood High</span>
                    <CheckCircle2 size={14} color="#059669" />
                  </div>
                </div>

                {/* Field 3: Terms Checkbox (Left for human) */}
                <div
                  className="replica-terms-card"
                  style={{
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#FFFBEB',
                    border: '1px solid #FCD34D',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#92400E' }}>
                    <input type="checkbox" disabled aria-label="I agree to the school admission terms and conditions" style={{ cursor: 'not-allowed' }} />
                    <span>I agree to the school admission terms and conditions*</span>
                  </div>
                  <span
                    className="replica-terms-badge"
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: '#FEF3C7',
                      color: '#B45309',
                      border: '1px solid #FDE68A',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Left for you (Safety Invariant)
                  </span>
                </div>

                {/* Submit button locked */}
                <div style={{ paddingTop: '8px' }}>
                  <div
                    className="replica-locked-btn"
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#E2E8F0',
                      color: '#64748B',
                      fontSize: '0.875rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'not-allowed',
                      border: '1px dashed #94A3B8',
                    }}
                  >
                    <Lock size={16} />
                    <span>Submit Application (Locked: Human Operator Action Required)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
