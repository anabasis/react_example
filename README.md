# 환경 준비

## react-ts-gdc6sl

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-ts-gdc6sl)

## NPM

```bash
## NPM, NPX 설치
npm install -g create-react-app
npm install npx -g

npx create-react-app react_example
cd react_example

npm start

## Material UI 설치(v5.2.5)
// with npm
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @mui/icons-material

// with yarn
yarn add @mui/material @emotion/react @emotion/styled
yarn add @mui/material @mui/styled-engine-sc styled-components
yarn add @mui/icons-material

## React Router 설치
npm install --save react-router
npm install --save react-router-dom
```

```bash
## 모듈 업데이트
npm i -g npm-check-updates
ncu -u
```

## PORT변경

```json
//Mac OS, 리눅스 환경
"scripts": { "start": "export PORT=3001 && react-scripts start", ... }
//Windows
"scripts": { "start": "set PORT=3001 && react-scripts start", ... }
```

## Git

### Git global setup

```bash
git config --global user.name "조준성"
git config --global user.email "jscho@cslac.com"
```

### Create a new repository

```bash
git clone http://git.cslac.com:30000/solution/react_example.git
cd react_example
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

### Push an existing folder

```bash
cd existing_folder
git init
git remote add origin http://git.cslac.com:30000/solution/react_example.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

### Push an existing Git repository

```bash
cd existing_repo
git remote rename origin old-origin
git remote add origin http://git.cslac.com:30000/solution/react_example.git
git push -u origin --all
git push -u origin --tags
```

## NPM 설치

npm install -g create-react-app
npm install npx -g

npx create-react-app react_example
cd react_example
