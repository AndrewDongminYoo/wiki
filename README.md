# Website

이 웹사이트는 최신 정적 웹사이트 생성기인 [Docusaurus 2](https://docusaurus.io/)를 사용하여 제작되었습니다.

## Installation

```sh
yarn
```

## Local Development

```sh
yarn start
```

이 명령은 로컬 개발 서버를 시작하고 브라우저 창을 엽니다. 대부분의 변경 사항은 서버를 다시 시작할 필요 없이 실시간으로 반영됩니다.

## Build

```sh
yarn build
```

이 명령은 정적 콘텐츠를 `build` 디렉터리에 생성하며 모든 정적 콘텐츠 호스팅 서비스를 사용하여 제공할 수 있습니다.

## Deployment

Using SSH:

```sh
USE_SSH=true yarn deploy
```

Not using SSH:

```sh
GIT_USER=<Your GitHub username> yarn deploy
```

호스팅에 GitHub 페이지를 사용하는 경우 이 명령은 웹사이트를 빌드하고 `gh-pages` 브랜치로 푸시하는 편리한 방법입니다.
