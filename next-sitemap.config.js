/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://comsci.tech',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/server-sitemap-index.xml'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/404', '/api/'] },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Per-path priority + changefreq tuning
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path === '/services' || path === '/projects' || path === '/blogs' || path === '/industries') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/blog/')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.startsWith('/projects/') || path.startsWith('/industries/')) {
      priority = 0.7;
      changefreq = 'monthly';
    } else if (
      path === '/about' ||
      path === '/contact' ||
      path === '/approach' ||
      path === '/faqs' ||
      path === '/freebies' ||
      path === '/jobposition'
    ) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/privacy') {
      priority = 0.3;
      changefreq = 'yearly';
    } else if (path.startsWith('/resources/')) {
      priority = 0.6;
      changefreq = 'monthly';
    } else {
      // Service detail pages (dynamic top-level slugs like /branding-agency-usa-uk-europe)
      priority = 0.9;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
