---
sidebar_position: 1
---

# 페이지 만들기

**마크다운 또는 리액트** 파일을 `src/pages`에 추가하여 **독립형 페이지**를 생성합니다:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## 첫 번째 React 페이지 만들기

`src/pages/my-react-page.js`에 파일을 생성합니다:

```jsx title="src/pages/my-react-page.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

이제 새 페이지가 [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page)에 있습니다.

## 첫 번째 마크다운 페이지 만들기

`src/pages/my-markdown-page.md`에 파일을 생성합니다:

```mdx title="src/pages/my-markdown-page.md"
# 내 마크다운 페이지

이것은 마크다운 페이지입니다.
```

이제 새 페이지가 [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page)에 있습니다.
