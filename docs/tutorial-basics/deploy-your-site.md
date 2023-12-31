---
sidebar_position: 5
---

# 사이트 배포

도큐사우루스는 **정적 사이트 생성기**([**Jamstack**](https://jamstack.org/)이라고도 함)입니다.

간단한 **정적 HTML, 자바스크립트 및 CSS 파일**로 사이트를 구축합니다.

## 사이트 빌드하기

프로덕션용 사이트를 **구축**합니다:

```bash
npm run build
```

정적 파일은 `build` 폴더에 생성됩니다.

## 사이트 배포

로컬에서 프로덕션 빌드를 테스트합니다:

```bash
npm run serve
```

`build` 폴더는 이제 [http://localhost:3000/](http://localhost:3000/)에서 제공됩니다.

이제 `build` 폴더를 **거의 모든 곳에서** 쉽게, **무료 또는 아주 적은 비용**으로 배포할 수 있습니다([**배포 가이드**](https://docusaurus.io/docs/deployment) 참조).
