import { SITE_CONFIG, ReleaseArtifact } from '../config/site.config';

export interface LatestReleaseData {
  version: string;
  releaseDate: string;
  tag: string;
  body: string;
  installer: ReleaseArtifact;
  portable: ReleaseArtifact;
  isLive: boolean;
}

/**
 * Fetch the latest release from GitHub Releases with automatic 5-minute ISR revalidation.
 * Seamlessly falls back to verified site.config.ts defaults on network errors or rate-limits.
 */
export async function getLatestRelease(): Promise<LatestReleaseData> {
  const fallback: LatestReleaseData = {
    version: SITE_CONFIG.version,
    releaseDate: SITE_CONFIG.releaseDate,
    tag: `v${SITE_CONFIG.version}`,
    body: 'Initial production release with Never-Submit invariant, local AES-256-GCM vault, and Playwright automation.',
    installer: { ...SITE_CONFIG.artifacts.installer },
    portable: { ...SITE_CONFIG.artifacts.portable },
    isLive: false,
  };

  try {
    const res = await fetch(
      'https://api.github.com/repos/Aayush-Dubey123/autofiller/releases/latest',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'AutoFiller-Showcase-Site',
        },
        next: { revalidate: 300 }, // 5 minutes on Vercel
      }
    );

    if (!res.ok) {
      return fallback;
    }

    const data = await res.json();
    if (!data || !Array.isArray(data.assets)) {
      return fallback;
    }

    const tag = String(data.tag_name || `v${SITE_CONFIG.version}`);
    const cleanVersion = tag.replace(/^v/i, '');
    const publishedAt = data.published_at
      ? new Date(data.published_at).toLocaleDateString('en-US', {
          month: 'long',
          year: 'numeric',
        })
      : SITE_CONFIG.releaseDate;

    let installer = { ...SITE_CONFIG.artifacts.installer };
    let portable = { ...SITE_CONFIG.artifacts.portable };

    // Match assets by name patterns
    const installerAsset = data.assets.find(
      (a: { name: string }) => /setup.*\.exe$/i.test(a.name) || /installer.*\.exe$/i.test(a.name)
    );
    const portableAsset = data.assets.find(
      (a: { name: string }) => /portable.*\.exe$/i.test(a.name) || (/autoFiller.*\.exe$/i.test(a.name) && !/setup/i.test(a.name))
    );
    const checksumsAsset = data.assets.find(
      (a: { name: string }) => /checksums.*\.txt$/i.test(a.name)
    );

    if (installerAsset) {
      const mb = (installerAsset.size / (1024 * 1024)).toFixed(1);
      installer = {
        filename: installerAsset.name,
        url: installerAsset.browser_download_url,
        sizeMb: `${mb} MB`,
        sha256: fallback.installer.sha256,
      };
    }

    if (portableAsset) {
      const mb = (portableAsset.size / (1024 * 1024)).toFixed(1);
      portable = {
        filename: portableAsset.name,
        url: portableAsset.browser_download_url,
        sizeMb: `${mb} MB`,
        sha256: fallback.portable.sha256,
      };
    }

    // Try reading checksums.txt from release assets if present
    if (checksumsAsset && checksumsAsset.browser_download_url) {
      try {
        const checkRes = await fetch(checksumsAsset.browser_download_url, {
          next: { revalidate: 300 },
        });
        if (checkRes.ok) {
          const text = await checkRes.text();
          for (const line of text.split('\n')) {
            const trimmed = line.trim();
            if (trimmed.startsWith('#') || !trimmed) continue;
            const parts = trimmed.split(/\s+/);
            if (parts.length >= 2) {
              const hash = parts[0];
              const target = parts[1].replace(/^\*/, '');
              if (installerAsset && target.includes(installerAsset.name)) {
                installer.sha256 = hash;
              }
              if (portableAsset && target.includes(portableAsset.name)) {
                portable.sha256 = hash;
              }
            }
          }
        }
      } catch {
        // Fallback hashes remain intact
      }
    }

    return {
      version: cleanVersion,
      releaseDate: publishedAt,
      tag,
      body: String(data.body || ''),
      installer,
      portable,
      isLive: true,
    };
  } catch {
    return fallback;
  }
}
