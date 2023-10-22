# Ryan's Next13 Awesome Starter

![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/boilerplate-next13-view)

## Features
- [x] ⚙️&nbsp;&nbsp;Small & Fast Bundler (Turbo)
- [x] 🗝️&nbsp;&nbsp;Typed Programming (Typescript)
- [x] 🧩&nbsp;&nbsp;SSR & Page Transition (Next13)
- [x] 🕋&nbsp;&nbsp;Simple Store (Zustand)
- [x] 📙&nbsp;&nbsp;Code Formatter (ESLint Airbnb & Prettier)
- [x] 🧵&nbsp;&nbsp;Built-in Component & Layout
- [x] 🚰&nbsp;&nbsp;Handle Page to Middleware
- [x] ✨&nbsp;&nbsp;Setting Reset Style
- [x] ⚡️&nbsp;&nbsp;Setting Mixin Style
- [x] 📍&nbsp;&nbsp;Absolute Path
- [x] 📫&nbsp;&nbsp;Page SEO
- [ ] 🪄&nbsp;&nbsp;Dark Mode
- [ ] 📱&nbsp;&nbsp;Check Device

## Framworks
- **Bundler** : Turbo
- **SSR** : Next3
- **Core** : React18
- **Store** : Zustand

## Code Pattern
- **Static(public)**
- **Root(src)** <br/>
- ⎣&nbsp;**_components** - 최소 단위 컴포넌트(atom, molecule, organism) <br/>
- ⎣&nbsp;**_constants** - 정적 데이터(텍스트, 상수 등) <br/>
- ⎣&nbsp;**_containers** - 비즈니스 로직 컴포넌트 <br/>
- ⎣&nbsp;**_interface** - 객체 타입 지정 <br/>
- ⎣&nbsp;**_hooks** - 커스텀 훅 <br/>
- ⎣&nbsp;**_store** - 전역 스토어 <br/>
- ⎣&nbsp;**_styles** - 스타일 모음<br/>
- ⎣&nbsp;**_utils** - 라이브러리, 유틸리티<br/>


## Getting Started
### 1) Installation
```shell
git clone ryan-ahn/boilerplate-next13-view
cd ryan-ahn/boilerplate-next13-view
npm install
```
### 2) Configuration VSCode
```
// 기본 세팅
setting.json 파일을 vscode 세팅에 입력

// Material 아이콘 세팅
"material-icon-theme.folders.associations": {
  "_constants": "constant",
  "_components": "components",
  "_containers": "container",
  "_interface": "interface",
  "_utils": "utils",
  "_hooks": "hook",
  "(route)": "routes",
}

// 관련 익스텐션 전부 설치(문서 확인)
```
### 3) Run development server
```shell
npm run dev
```

## Using with Store

```javascript
// 스토어 불러오기
import { useDataStore } from '@store/index';

// 구조 분해 할당 사용
const { data, setData } = useStore();
</script>
```

## Using with Mixin

```javascript
// 믹스인 불러오기
import { flexSet, boxSet, colorSet, backgroundSet, fontSet } from '@styles/mixin';

// 세트 사용(코드 참조)
const Style = styled.div`
  ${() => theme.flexSet('center', 'center', 'column')};
  ${() => theme.boxSet('00px', '00px', '00px')};
  ${() => theme.colorSet('white', 'black')};
  ${() => theme.backgroundSet('URL','contain')};
  ${() => theme.fontSet(00, 000, 00)};
`
```
