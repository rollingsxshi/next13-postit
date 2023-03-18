![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)


# Project notes

## Tailwind
```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
in tailwind.config.js:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
}
```

in globals.css:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Postgres DB
- railway.app > provision PostgreSQL

## Prisma
```shell
npm install typescript ts-node @types/node --save-dev
npx prisma init # create prisma folder and .env
npm install @prisma/client
```

once models in schema.prisma is created, run:
```shell
npx prisma migrate dev # run whenever Models are changed
```

```shell
npx prisma generate  # check docs what this does
```

## Next auth
```shell
npm install next-auth
npm install @next-auth/prisma-adapter
```
- create auth/[...nextauth.js] in app/api folder
- create .env.local file in project root

## Google Cloud (OAuth)
- create new project
- APIs & Services > Credentials > Create Credentials > OAuth client id

## React Query
```shell
npm i @tanstack/react-query axios
```

## React Toast
```shell
npm i react-hot-toast
```

## Deployment
- change build script in package.json to `npx prisma generate && npx prisma migrate deploy && next build`
- add env variables in vercel deploy settings from .env & .env.local files
- add deployed url to Google dev console (APIs & Services > Credentials > Create Credentials > projectName > Authorized JavaScript origins & Authorized redirect URIs
)