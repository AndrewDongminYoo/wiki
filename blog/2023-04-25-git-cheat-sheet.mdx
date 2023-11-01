---
slug: git-cheat-sheet
title: GIT CHEAT SHEET
authors: andrew
tags: [version control, git]
---

# GIT CHEAT SHEET

## VERSION CONTROL TIPS

### COMMIT RELATED CHANGES

커밋은 관련 변경사항에 대한 래퍼여야 한다. 예를 들어 서로 다른 두 가지 버그를 수정하려면 두 개의 커밋을 생성해야 한다. 작은 커밋을 사용하면 다른 개발자가 변경 내용을 쉽게 이해하고 문제가 발생했을 때 롤백할 수 있다. 스테이징 영역과 파일의 일부만 스테이징하는 기능과 같은 도구를 사용하면 Git을 통해 매우 세분화된 커밋을 쉽게 만들 수 있다.

### COMMIT OFTEN

커밋을 자주 하면 커밋을 작게 유지할 수 있고, 관련 변경 사항만 커밋하는 데 도움이 된다. 또한 다른 사람들과 코드를 더 자주 공유할 수 있다. 이렇게 하면 모든 사람이 정기적으로 변경 사항을 통합하고 병합 충돌을 피하기가 더 쉬워진다. 반대로 큰 커밋을 거의 하지 않고 공유를 거의 하지 않으면 충돌을 해결하기가 어려워진다.

### DO NOT COMMIT HALF-DONE WORK

코드가 완료되었을 때만 커밋해야 한다. 그렇다고 해서 커밋하기 전에 전체 대규모 기능을 완료해야 한다는 뜻은 아니다. 오히려 기능 구현을 논리적인 덩어리로 나누고 '일찍 그리고 자주' 커밋하는 것을 잊지 말아야 한다. 하지만 하루 일과를 마치고 퇴근하기 전에 리포지토리에 무언가를 저장하기 위해 커밋하지 말 것.

:::danger Git Stash
브랜치를 체크아웃하거나 변경 사항을 가져오기 위해 깨끗한 작업 복사본이 필요하다는 이유만으로 커밋하고 싶은 유혹을 받는다면, 대신 Git의 "Stash" 기능을 사용하는 것이 좋다.
:::

## BEST PRACTICES

### TEST CODE BEFORE YOU COMMIT

완료되었다고 "생각되는" 내용을 커밋하려는 유혹을 뿌리쳐야 한다. 정말 완료되었는지, 부작용은 없는지 철저히 테스트한다(가능한 한). 로컬 리포지토리에 WIP 커밋을 하는 것은 스스로를 용서하는 것만으로도 충분하지만, 다른 사람과 코드를 푸시/공유할 때는 코드 테스트를 하는 것이 훨씬 더 중요한다.

### WRITE GOOD COMMIT MESSAGES

변경 사항에 대한 간단한 요약으로 메시지를 시작한다(가이드라인은 50자 이내). 빈 줄을 포함하여 다음 본문과 구분한다. 메시지 본문에는 다음 질문에 대한 자세한 답변이 포함되어야 한다.

- 변경의 동기는 무엇인가요?
- 이전 구현과 어떻게 다른가요?

명령형 현재 시제를 사용하여 git merge와 같은 명령에서 생성된 메시지와 일관성을 유지한다.

### VERSION CONTROL IS NOT A BACKUP SYSTEM

원격 서버에 파일을 백업하는 것은 버전 관리 시스템의 좋은 측면이다. 하지만 VCS를 백업 시스템처럼 사용해서는 안 된다. 버전 관리를 할 때는 의미론적으로 커밋하는 데 주의를 기울여야 하며("관련 변경 사항" 참조), 파일을 무작정 밀어넣어서는 안 된다.

### USE BRANCHES

브랜치는 Git의 가장 강력한 기능 중 하나이며, 이는 우연이 아니라 처음부터 빠르고 쉬운 브랜치 생성/삭제/변경이 핵심 요구 사항이었기 때문이다. 브랜치는 서로 다른 줄기들이 섞이지 않도록 도와주는 완벽한 도구이며 분산형 버전관리 개발의 핵심이다. 새로운 기능, 버그 수정, 아이디어 등 개발 워크플로에서 브랜치를 광범위하게 사용해야 한다.

### AGREE ON A WORKFLOW

Git을 사용하면 장기 실행 브랜치, 토픽 브랜치, 병합 또는 리베이스, 깃 플로우 등 다양한 워크플로우 중에서 선택할 수 있다. 어떤 것을 선택할지는 프로젝트, 전반적인 개발 및 배포 워크플로, 그리고 가장 중요한 것은 여러분과 팀원들의 개인적 선호도에 따라 달라질 수 있다. 어떤 방식을 선택하든 모두가 따를 수 있는 공통 워크플로에 동의해야 한다.

## BASIC COMMANDS

### CREATE

기존 리포지토리를 복제한다.

```sh
git clone ssh://AndrewDongminYoo@github.com/repo.git
```

새 로컬 리포지토리를 만든다.

```sh
git init
```

### LOCAL CHANGES

작업 디렉터리의 변경된 파일.

```sh
git status
```

추적된 파일에 대한 변경 사항.

```sh
git diff
```

현재 모든 변경 내용을 다음 커밋에 추가한다. (glob 패턴을 사용해 특정 파일만 추가할 수 있다.)

```sh
git add .
git add **/*.js
```

\<파일\>의 일부 변경 내용을 다음 커밋에 추가한다.

```sh
git add -p <file>
```

추적된 파일의 모든 로컬 변경 내용을 커밋한다.

```sh
git commit -a
```

이전 단계의 변경 내용을 커밋한다.

```sh
git commit
```

마지막 커밋을 변경한다. (덮어쓴다. 보통 커밋 메세지 등의 작은 실수를 보정하기 위함)

리모트에 게시된 커밋은 수정하지 않기!! (보안적인 중요한 이슈라면 팀에 보고해야 한다. 혼란을 야기할 수 있다.)

```sh
git commit --amend
```

### COMMIT HISTORY

최신 커밋부터 시작하여 모든 커밋을 표시한다.

```sh
git log
```

특정 파일에 대한 시간 경과에 따른 변경 내용을 표시한다.

```sh
git log -p <file>
```

\<파일\>에서 누가 언제 무엇을 변경했는지 보여준다. (팀 문화에서 지양하는 경우도 많다.)

```sh
git blame <file>
```

### BRANCHES & TAGS

모든 기존 브랜치를 나열한다.

```sh
git branch -av
```

`HEAD` 브랜치 전환.

```sh
git checkout <branch>
```

현재 `HEAD`를 기준으로 새 브랜치를 만든다.

```sh
git branch <new-branch>
```

원격 브랜치를 기반으로 새 추적 브랜치를 만든다.

```sh
git checkout --track <remote/branch>
```

로컬 브랜치를 삭제한다.

```sh
git branch -d <branch>
```

현재 커밋을 태그로 표시한다.

```sh
git tag <tag-name>
```

### UPDATE & PUBLISH

현재 구성된 모든 리모트를 나열한다.

```sh
git remote -v
```

리모트에 대한 정보를 표시한다.

```sh
git remote show <remote>
```

remote라는 이름의 새 원격 리포지토리를 추가한다.

```sh
git remote add <shortname> <url>
```

remote에서 모든 변경 내용을 다운로드하되 `HEAD`에 통합하지 않는다. (변경 사항만 가져온다.)

```sh
git fetch <remote>
```

변경 내용을 다운로드하고 브랜치의 `HEAD`에 직접 병합/통합한다.

```sh
git pull <remote> <branch>
```

원격에 로컬 변경 내용을 게시한다.

```sh
git push <remote> <branch>
```

리모트에서 브랜치를 삭제한다.

```sh
git branch -dr <remote/branch>
```

태그를 게시한다.

```sh
git push --tags
```

### MERGE & REBASE

branch를 현재 `HEAD`에 병합한다.

```sh
git merge <branch>
```

현재 `HEAD`를 \<branch\>로 리베이스한다. 퍼블리시된 리포지토리를 리베이스하지 하면 안된다!!!

```sh
git rebase <branch>
```

리베이스 중단.

```sh
git rebase --abort
```

충돌을 해결한 후 리베이스 작업을 계속한다.

```sh
git rebase --continue
```

구성된 병합 도구를 사용하여 충돌을 해결한다.

```sh
git mergetool
```

편집기를 사용하여 수동으로 충돌을 해결하고 (해결 후) 파일을 해결된 것으로 표시한다.

```sh
git add <resolved-file>
git rm <resolved-file>
```

### UNDO

작업 디렉터리의 모든 로컬 변경 내용을 삭제한다.

```sh
git reset --hard HEAD
```

특정 파일의 로컬 변경 내용을 삭제한다.

```sh
git checkout HEAD <file>
```

커밋을 되돌리기(반대되는 변경 사항이 있는 새 커밋을 생성하여).

```sh
git revert <commit>
```

이전 커밋에 대한 `HEAD` 포인터를 재설정하고 ...그 이후의 모든 변경사항을 삭제한다.

```sh
git reset --hard <commit>
```

...그리고 모든 변경 사항을 스테이징되지 않은 변경 사항으로 보존한다.

```sh
git reset <commit>
```

...그리고 커밋되지 않은 로컬 변경 사항을 보존한다.

```sh
git reset --keep <commit>
```
