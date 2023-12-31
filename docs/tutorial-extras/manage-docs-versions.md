---
sidebar_position: 1
---

# 문서 버전 관리

도큐사우루스는 여러 버전의 문서를 관리할 수 있습니다.

## 문서 버전 만들기

프로젝트의 버전 1.0을 릴리스합니다:

```bash
npm run docusaurus docs:version 1.0
```

`docs` 폴더가 `versioned_docs/version-1.0`에 복사되고 `versions.json`이 생성됩니다.

이제 문서에 두 가지 버전이 있습니다:

- 버전 1.0 문서의 경우 `http://localhost:3000/docs/`에 `1.0`이 있습니다.
- 곧 출시될 미출시 문서의 경우 `http://localhost:3000/docs/next/`에 `current`가 표시됩니다.

## 버전 드롭다운 추가

여러 버전을 원활하게 탐색하려면 버전 드롭다운을 추가하세요.

`docusaurus.config.js` 파일을 수정합니다:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "docsVersionDropdown",
        },
        // highlight-end
      ],
    },
  },
};
```

문서 버전 드롭다운이 탐색 모음에 나타납니다:

![문서 버전 드롭다운](./img/docsVersionDropdown.png)

## 기존 버전 업데이트

버전이 지정된 문서는 해당 폴더에서 편집할 수 있습니다:

- `versioned_docs/version-1.0/hello.md` 업데이트 `http://localhost:3000/docs/hello`
- `docs/hello.md` 업데이트 `http://localhost:3000/docs/next/hello`
