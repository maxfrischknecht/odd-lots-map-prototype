# nuxt-boilerplate-plain

## Build Setup

```
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Deployment

### Vercel
When deploying a static site on Vercel you need the change the build command:

nuxt.config.js
```
"scripts": {
    ...
    "build": "nuxt generate",
}
```

When deploying a server side rendered app on Vercel please include the [Vercel Builder](https://github.com/nuxt/vercel-builder).

More information regarding Vercel deployment [here](https://nuxtjs.org/faq/now-deployment/).