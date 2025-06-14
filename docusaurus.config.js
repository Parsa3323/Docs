// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config();
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AdvancedArmorStands docs',
  tagline: 'Documentation for AdvancedArmorStands',
  favicon: 'img/favicon.ico',

  url: 'https://docs.advancedarmorstands.ir',
  baseUrl: '/',

  organizationName: 'AdvancedArmorStands',
  projectName: 'Docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/AdvancedArmorStands/Docs/tree/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      navbar: {
        title: 'AdvancedArmorStands',
        logo: {
          alt: 'AdvancedArmorStands Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/AdvancedArmorStands/Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // algolia: {
      //   appId: process.env.APP_ID,
      //   apiKey: process.env.ALGOLIA_API_KEY,
      //   indexName: process.env.INDEX_NAME,
      
      //   contextualSearch: true,
      //   searchParameters: {},s
      //   searchPagePath: 'search',
      // },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Documentation',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Parsa3323/AdvancedArmorStands/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Parsa3323`,
      },
      prism: {
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.oneDark,
        additionalLanguages: ['java', 'yaml'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;