export const BASE_URL = "https://comsci.tech";

export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#founder`,
  "name": "Arya Kagathara",
  "jobTitle": "Founder & CEO",
  "worksFor": { "@id": `${BASE_URL}/#organization` },
  "url": `${BASE_URL}/about`,
  "sameAs": [
    "https://www.linkedin.com/in/aryakagathara",
    "https://x.com/comsci_tech"
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#organization`,
  "name": "Comsci Technologies",
  "legalName": "Comsci Technologies LLP",
  "url": BASE_URL,
  "logo": `${BASE_URL}/images/logo.svg`,
  "image": `${BASE_URL}/images/social-share-og/Facebook.webp`,
  "description": "Premium design & engineering studio building investor-ready SaaS, AI, and branded digital products for high-growth startups in the USA, UK, Canada, Australia, and Europe.",
  "email": "hello@comsci.tech",
  "telephone": "+91 96873 79447",
  "founder": { "@id": `${BASE_URL}/#founder` },
  "foundingDate": "2022",
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "Australia" },
    { "@type": "Country", "name": "Germany" },
    { "@type": "Country", "name": "Netherlands" },
    { "@type": "Country", "name": "France" },
    { "@type": "Country", "name": "Italy" }
  ],
  "knowsAbout": [
    "Custom Web Development",
    "UI/UX Design",
    "Mobile App Development",
    "SaaS Development",
    "Artificial Intelligence",
    "Branding",
    "Technical SEO"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "401 ASMAKAM FLATS, SHAKTINAGAR MAIN ROAD STREET NO. 2, NEAR PANCHAYAT CHOWK, UNIVERSITY ROAD",
    "addressLocality": "Rajkot",
    "addressRegion": "Gujarat",
    "postalCode": "360005",
    "addressCountry": "IN"
  },
  "hasMap": "https://maps.app.goo.gl/xhA6c4h8o6aBssnn8",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 96873 79447",
    "email": "hello@comsci.tech",
    "contactType": "sales",
    "availableLanguage": ["English"],
    "areaServed": ["US", "GB", "CA", "AU", "DE", "NL", "FR", "IT", "IN"]
  },
  "sameAs": [
    "https://www.facebook.com/people/Comsci/61557725482494/",
    "https://www.behance.net/comsci-technologies",
    "https://www.linkedin.com/company/comsci-technologies",
    "https://www.youtube.com/@comsci-technologies",
    "https://x.com/comsci_tech"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "url": BASE_URL,
  "name": "Comsci Technologies",
  "publisher": {
    "@id": organizationSchema["@id"]
  }
};