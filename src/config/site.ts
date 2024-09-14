export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "GGROWW",
  description: "GGROWW online smarter and faster",
  navItems: [
    {
      label: "About Us",
      href: "/docs",
    },
    {
      label: "Contact Us",
      href: "/pricing",
    },
  ],
  dropDownMenuItems: [
    {
      label: "SEO",
      href: "/services/seo",
      description: "Rise to the Top with Strategic On-Site SEO Techniques",
    },
    {
      label: "Web Development",
      href: "/services/web-development",
      description: "Web Development that Brings Your Vision to Life",
    },
    {
      label: "Paid Traffic",
      href: "/services/paid-traffic",
      description: "Our main service is to make your business thrive",
    },
    {
      label: "UGC & Influencer Marketing",
      href: "/services/ugc-influencer-marketing",
      description: "Influence Your Brand Growth",
    },
    {
      label: "UX & UI",
      href: "/services/ux-ui",
      description: "Let's Design Digital Experiences that Set You Apart",
    },
    {
      label: "Web Analytics & CRO",
      href: "/services/web-analytics-cro",
      description: "Achieve Sustainable Growth with Proven CRO Techniques",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
