# pastry-cafe

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Editor Setup (Recommended)

For a consistent development experience, please install the following VS Code extensions:

- **Prettier – Code formatter**  
  (https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- **ESLint**  
  (https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- **Volar** (for Vue 3)  
  (https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

A recommended extensions file is included in this project at `.vscode/extensions.json` to help prompt you to install these.

### Global SCSS Setup

Global styles are maintained in `src/assets/styles.scss`. This file is imported in `src/main.js` so that all styles are applied across the application.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Git Workflow

- **Development Branch (dev):**  
  All active development occurs on the `dev` branch.
- **Stable Branch (main):**  
  Merge into `main` only when the project is stable and ready for deployment.
- **Pull Requests:**  
  Use PRs to merge changes from `dev` into `main`.
