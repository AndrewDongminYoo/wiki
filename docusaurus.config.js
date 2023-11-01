// @ts-check
// 참고: 유형 주석을 사용하면 유형 검사 및 IDE 자동 완성을 사용할 수 있습니다.

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const algolia = require("@docusaurus/theme-search-algolia");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // 여기에 사이트의 프로덕션 URL을 설정하세요.
  url: "https://andrewdongminyoo.github.io",

  // 사이트가 서비스되는 /<baseUrl>/ 경로명을 설정합니다.
  // GitHub 페이지 배포의 경우, 보통 '/<projectName>/'입니다.
  baseUrl: "/wiki",

  // GitHub 페이지 배포 구성.
  // GitHub 페이지를 사용하지 않는 경우에는 이 설정이 필요하지 않습니다.
  organizationName: "AndrewDongminYoo",
  projectName: "wiki",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // i18n(internalization)을 사용하지 않더라도 이 필드를 사용하여 유용한 메타데이터를 설정할 수 있습니다.
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // TODO: 프로젝트의 소셜 카드로 바꾸기
      image: "img/docusaurus-social-card.jpg",
      /** https://docusaurus.io/blog/2021/11/21/algolia-docsearch-migration */
      algolia: {
        indexName: "wiki",
        appId: "W3IYVVWLWE",
        apiKey: "8ed3f0ba61e9f0db29378e89e6f756ce",
      },
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "localeDropdown",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/AndrewDongminYoo/wiki",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/AndrewDongminYoo/wiki",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
