import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '../config/site.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${SITE_CONFIG.domain}`;
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/license`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
