# Ryan's Next13 Awesome Starter

![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/boilerplate-next13-client)

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

## Frameworks
- **Bundler** : Turbo
- **SSR** : Next3
- **Core** : React18
- **Store** : Zustand

## Code Structure
- **Static(public)**
- **Root(app)** <br/>
- ⎣&nbsp;**components** - stateless components <br/>
- ⎣&nbsp;**config** - configure <br/>
- ⎣&nbsp;**constants** - static data <br/>
- ⎣&nbsp;**containers** - stateful components <br/>
- ⎣&nbsp;**interface** - interfaces <br/>
- ⎣&nbsp;**libs** - store, hooks, utils <br/>
- ⎣&nbsp;**styles** - 스타일 모음<br/>


## Getting Started
### 1) Installation
```shell
git clone ryan-ahn/boilerplate-next13-client
cd ryan-ahn/boilerplate-next13-client
npm install
```
### 2) Run Project
```shell
npm run dev
```
### 3) Run Deploy
```shell
npm run deploy
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
