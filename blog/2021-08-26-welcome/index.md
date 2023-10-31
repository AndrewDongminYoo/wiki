---
slug: welcome
title: 개요
authors: andrew
tags: [docusaurus]
---

[도큐사우루스 블로그 기능](https://docusaurus.io/docs/blog)은 [블로그 플러그인](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog)에 의해 구동됩니다.

마크다운 파일(또는 폴더)을 `blog` 디렉터리에 추가하기만 하면 됩니다.

일반 블로그 작성자는 `authors.yml`에 추가할 수 있습니다.

블로그 게시물 날짜는 파일 이름에서 추출할 수 있습니다:

- 2019-05-30-welcome.md`와 같이 파일 이름에서 추출할 수 있습니다.
- `2019-05-30-welcome/index.md`

블로그 게시물 폴더는 블로그 게시물 이미지를 함께 배치하는 데 편리할 수 있습니다:

![도큐사우루스 봉제인형](./docusaurus-plushie-banner.jpeg)

블로그는 태그도 지원합니다!

**블로그를 원하지 않는 경우**: 이 디렉토리를 삭제하고 Docusaurus 설정에서 `blog: false`를 사용하세요.
