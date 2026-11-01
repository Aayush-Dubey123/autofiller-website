# AutoFiller AI — Verified Claims Matrix

This document enforces strict factual accuracy across all marketing, documentation, and user-facing copy on `autofiller.ayushdubey.studio`.

## 1. Permitted Claims & Grounding

| Claim | Grounding in Code | User-Facing Copy Rule |
|---|---|---|
| **Never-Submit Invariant** | `desktop/electron/policy/PolicyEngine.ts:133-210` strictly blocks automated clicks on final submit buttons (`DENIED_FINAL_SUBMISSION`). Automation halts at `REVIEW_READY`. | "AutoFiller AI never clicks final Submit buttons. Form submission is 100% human-controlled after your review." |
| **Local AES-256-GCM Vault** | `desktop/electron/services/VaultService.ts:141-144, 250-255` uses Node `crypto.createCipheriv('aes-256-gcm', key, iv)` with 12-byte IV and 16-byte tag. | "Your saved details are stored locally on your PC in an AES-256-GCM encrypted vault." |
| **Windows DPAPI Protection** | `desktop/electron/services/VaultService.ts:96-129` wraps the Data Encryption Key with Windows DPAPI via Electron `safeStorage`. | "Standard protection wraps your vault key using Windows DPAPI (tied to your Windows user account)." |
| **Zero Sensitive Profile Values in Field Mapping** | `desktop/electron/services/BackendClient.ts:299-304` and `backend/core/services/gemini_service.py:920-930` strip all values before sending field labels and fact keys to AI. | "AI providers receive form field labels and schema keys only — zero personal profile values or document values are sent during field mapping." |
| **Human Takeover for CAPTCHAs, OTPs, and Sign-Ins** | `desktop/electron/agent/AgentController.ts:799-864` detects blockers and transitions to `USER_TAKEOVER`, bringing the browser to front. | "AutoFiller never attempts to bypass security checks. When a CAPTCHA, two-factor code (OTP), or sign-in page appears, it pauses and hands control to you." |
| **Interactive Clarifications for Ambiguities** | `desktop/electron/agent/AgentController.ts:1085-1175` sequentially prompts the user when choices or required facts are missing. | "If a required form field is missing from your profile or has multiple options, AutoFiller pauses and asks you to clarify before filling." |
| **One-Click Local Data Erasure** | `desktop/electron/ipc/ipcHandlers.ts:297-310` deletes the vault, credentials, history, remembered documents, and upload caches. | "You have complete control: click 'Erase All My Data' in Settings to permanently delete your vault, keys, and session history." |

## 2. Forbidden Claims (Never Use)

- **FORBIDDEN:** *"Works on 100% of all websites and forms"* (Real web forms feature canvas rendering, dynamic iframes, and proprietary anti-bot protections that may require manual operator handling).
- **FORBIDDEN:** *"Zero data leaves your PC"* (When an operator chooses to upload a document, raw text or images are sent to Google Gemini over TLS to extract key-value pairs).
- **FORBIDDEN:** *"Bypasses CAPTCHAs, OTPs, or cloudflare"* (AutoFiller never circumvents or cheats security gates; it halts for the operator).
- **FORBIDDEN:** Unsubstantiated speed or accuracy percentages without benchmarking citations.

## 3. Windows SmartScreen & Code Signing

- **Disclosure:** AutoFiller AI is an open-source project by an independent software engineer and is not signed with an enterprise commercial EV Code Signing certificate. Windows Defender SmartScreen displays an "Unknown Publisher" prompt.
- **Guidance:** Users must verify the download source (`github.com/Aayush-Dubey123/autofiller/releases`) and compare the computed SHA-256 hash using PowerShell before proceeding via "More info > Run anyway".
