---
sidebar_position: 2
---

# 문서 만들기

문서는 **페이지 그룹**을 통해 연결된 문서입니다:

- **사이드바**를 통해 연결됩니다.
- **이전/다음 탐색**
- **버전 관리**

## 첫 번째 문서 만들기

`docs/hello.md`에 마크다운 파일을 만듭니다:

```md title="docs/hello.md"
# Hello

이것은 **첫 번째 Docusaurus 문서**입니다!
```

새 문서는 이제 [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello)에서 사용할 수 있습니다.

## 사이드바 구성하기

도큐사우루스는 `docs` 폴더에서 자동으로 **사이드바를 생성**합니다.

메타데이터를 추가하여 사이드바 레이블과 위치를 사용자 지정합니다:

```md title="docs/hello.md" {1-4}
---
sidebar_label: "Hi!"
sidebar_position: 3
---

# Hello

제 **첫 도큐사우루스 문서**입니다!
```

사이드바를 `sidebars.js`에 명시적으로 만들 수도 있습니다:

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    "intro",
    // highlight-next-line
    "hello",
    {
      type: "category",
      label: "Tutorial",
      items: ["tutorial-basics/create-a-document"],
    },
  ],
};
```
