---
sidebar_position: 2
---

# 사이트 번역하기

문서를 프랑스어로 번역해 봅시다.

## i18n 구성

`docusaurus.config.js`를 수정하여 `fr` 로캘에 대한 지원을 추가합니다:

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
};
```

## 문서 번역

`docs/intro.md` 파일을 `i18n/fr` 폴더에 복사합니다:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

`i18n/fr/docusaurus-plugin-content-docs/current/intro.md`를 프랑스어로 번역합니다.

## 현지화된 사이트 시작

프랑스어 로케일로 사이트를 시작합니다:

```bash
npm 실행 시작 -- --locale fr
```

현지화된 사이트는 [http://localhost:3000/fr/](http://localhost:3000/fr/)에서 액세스할 수 있으며 '시작하기' 페이지가 번역됩니다.

:::caution

개발 시에는 동시에 하나의 로캘만 사용할 수 있습니다.

:::

## 로캘 드롭다운 추가

여러 언어를 원활하게 탐색하려면 로캘 드롭다운을 추가하세요.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "localeDropdown",
        },
        // highlight-end
      ],
    },
  },
};
```

이제 로캘 드롭다운이 탐색 모음에 나타납니다:

![로캘 드롭다운](./img/localeDropdown.png)

## 현지화된 사이트 빌드

특정 로캘에 맞게 사이트를 빌드합니다:

```bash
npm run build -- --locale fr
```

또는 모든 로캘을 한 번에 포함하도록 사이트를 빌드하세요:

```bash
npm run build
```
