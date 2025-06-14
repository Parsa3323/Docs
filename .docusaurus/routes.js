import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ad5'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '1dd'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '5be'),
            routes: [
              {
                path: '/api',
                component: ComponentCreator('/api', '652'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/configuration',
                component: ComponentCreator('/configuration', '5ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/development',
                component: ComponentCreator('/development', '1b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faq',
                component: ComponentCreator('/faq', 'a3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-starteds',
                component: ComponentCreator('/getting-starteds', '9dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/installation',
                component: ComponentCreator('/installation', 'd21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/placeholders',
                component: ComponentCreator('/placeholders', '64b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/plugin-usage',
                component: ComponentCreator('/plugin-usage', '65c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/troubleshooting',
                component: ComponentCreator('/troubleshooting', '810'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/version-support-error',
                component: ComponentCreator('/version-support-error', 'd7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
