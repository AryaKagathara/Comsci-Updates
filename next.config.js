/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // --- NEW SERVICE PAGE REDIRECTS (Sitemap URLs -> New URLs) ---
      {
        source: '/services/logo-design-branding',
        destination: '/branding-agency-usa-uk-europe',
        permanent: true,
      },
      {
        source: '/services/ux-ui-designing',
        destination: '/ui-ux-design-agency-london-nyc-sf',
        permanent: true,
      },
      {
        source: '/services/website-web-application',
        destination: '/saas-web-development-usa-uk-canada-australia',
        permanent: true,
      },
      {
        source: '/services/mobile-application-development',
        destination: '/mobile-app-development-company-usa-uk-canada-australia',
        permanent: true,
      },
      {
        source: '/services/artificial-intelligence-machine-learning',
        destination: '/custom-ai-solutions-boston-amsterdam',
        permanent: true,
      },
      {
        source: '/services/search-engine-optimization',
        destination: '/technical-seo-services-los-angeles-barcelona',
        permanent: true,
      },
      {
        source: '/services/video-art-direction',
        destination: '/video-art-direction-paris-la-creative',
        permanent: true,
      },

      // --- PROJECT REDIRECTS ---
      {
        source: '/projects/eatcoast_restaurant_management_food_delivery_platform',
        destination: '/projects/eatcoast-food-delivery',
        permanent: true,
      },
      {
        source: '/projects/medical_escape_milan_skin_care_clinic',
        destination: '/projects/medical-escape-milan',
        permanent: true,
      },
      {
        source: '/projects/nuai_artificial_intelligence_enabled_health_app',
        destination: '/projects/nuai-artificial-intelligence-health-app',
        permanent: true,
      },
      {
        source: '/projects/w3dart_bug_reporting_saas_tool',
        destination: '/projects/w3dart-bug-reporting-saas',
        permanent: true,
      },
      {
        source: '/project/medical-escape',
        destination: '/projects/medical-escape-milan',
        permanent: true,
      },

      // --- GENERAL PAGES & LEGACY SERVICE PATHS ---
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/service/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/service/approach',
        destination: '/approach',
        permanent: true,
      },
      {
        source: '/service/terms-conditions',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/project/terms-conditions',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/project/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/project/approach',
        destination: '/approach',
        permanent: true,
      },
      {
        source: '/service/seo',
        destination: '/technical-seo-services-los-angeles-barcelona', // Updated to new URL
        permanent: true,
      },
      {
        source: '/service/video-art-direction',
        destination: '/video-art-direction-paris-la-creative', // Updated to new URL
        permanent: true,
      },
      {
        source: '/service',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/project',
        destination: '/projects/',
        permanent: true,
      },
      {
        source: '/services/custom-web-development',
        destination: '/saas-web-development-usa-uk-canada-australia', // Mapping specific legacy service to new logic
        permanent: true,
      },

      // --- BLOG REDIRECTS ---
      {
        source: '/blog/nihil-ipsa-veritatis-occaecati-facere-4',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/blog/comsci-establishes-own-3d-department-with-new-services-in-3d-design-ar-vr-and-web3-metaverse-2-7',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/blog/nihil-ipsa-veritatis-occaecati-facere-2',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/blog/nihil-ipsa-veritatis-occaecati-facere',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/project/blog',
        destination: '/blogs/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;