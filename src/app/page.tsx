import { getLatestRelease } from '../lib/github-release';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AppReplica } from '../components/AppReplica';
import { HowItWorks } from '../components/HowItWorks';
import { PrivacyPanel } from '../components/PrivacyPanel';
import { LimitsSection } from '../components/LimitsSection';
import { DownloadSection } from '../components/DownloadSection';
import { FaqSection } from '../components/FaqSection';
import { SupportSection } from '../components/SupportSection';
import { Footer } from '../components/Footer';

// Revalidate latest release data from GitHub API every 5 minutes
export const revalidate = 300;

export default async function HomePage() {
  const release = await getLatestRelease();

  return (
    <>
      <Navbar version={release.version} />
      <main>
        <Hero release={release} />
        <AppReplica />
        <HowItWorks />
        <PrivacyPanel />
        <LimitsSection />
        <DownloadSection release={release} />
        <FaqSection />
        <SupportSection />
      </main>
      <Footer />
    </>
  );
}
