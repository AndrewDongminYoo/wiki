---
sidebar_position: 3
---

# 블로그 글 만들기

도큐사우루스는 각 블로그 게시물에 대해 **페이지**를 생성할 뿐만 아니라 **블로그 색인 페이지**, **태그 시스템**, **RSS** 피드도 생성합니다...

## 첫 글 만들기

`blog/2021-02-28-greetings.md`에 파일을 만듭니다:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

첫 번째 게시물을 작성하셨습니다!

이 글을 마음껏 수정해 보세요.
```

새 블로그 게시물은 이제 [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings)에서 확인할 수 있습니다.
