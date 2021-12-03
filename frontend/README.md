# Notes

- Project only works on node <= 14 becasue fibers dependency is not supported for node >= 14
- Google Maps api key is expired
- Data is populated on CS. nuxtServerInit can'T be used to populate data on static site generation because of IntersectionObserver API.

## Build Setup

```bash
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
