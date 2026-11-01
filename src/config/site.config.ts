export interface ReleaseArtifact {
  filename: string;
  url: string;
  sizeMb: string;
  sha256: string;
}

export interface SiteConfig {
  name: string;
  version: string;
  releaseDate: string;
  taglinePrimary: string;
  taglineSecondary: string;
  description: string;
  githubRepo: string;
  releasesUrl: string;
  portfolioUrl: string;
  domain: string;
  supportEmail: string;
  license: string;
  artifacts: {
    installer: ReleaseArtifact;
    portable: ReleaseArtifact;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: 'AutoFiller AI',
  version: '1.0.0',
  releaseDate: 'November 2026',
  taglinePrimary: 'From Documents to Opportunities',
  taglineSecondary: 'Less Manual Work, More Opportunities',
  description:
    'Secure Windows desktop automation that fills repetitive web forms from your extracted documents while you retain 100% control over final submission.',
  githubRepo: 'https://github.com/Aayush-Dubey123/autofiller',
  releasesUrl: 'https://github.com/Aayush-Dubey123/autofiller/releases',
  portfolioUrl: 'https://ayushdubey.studio',
  domain: 'autofiller.ayushdubey.studio',
  supportEmail: 'aayush@ayushdubey.studio',
  license: 'MIT',
  artifacts: {
    installer: {
      filename: 'AutoFiller-AI-Setup-1.0.0.exe',
      url: 'https://github.com/Aayush-Dubey123/autofiller/releases/download/v1.0.0/AutoFiller-AI-Setup-1.0.0.exe',
      sizeMb: '129.6 MB',
      sha256: '30b3ecb92f737aa9f46dd1cf4c7acc8aec4e013f5517b64a71a04f8ba38e0f18',
    },
    portable: {
      filename: 'AutoFiller-AI-1.0.0-Portable.exe',
      url: 'https://github.com/Aayush-Dubey123/autofiller/releases/download/v1.0.0/AutoFiller-AI-1.0.0-Portable.exe',
      sizeMb: '129.4 MB',
      sha256: 'ec921946d0c741cbf1350e238f0283eaa6fe494e3ffd67b5d9681587cc02bc2c',
    },
  },
} as const;
