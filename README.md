# Codex

Written Realms Blog Repo

## Docker Setup

docker build -t codex .

docker run -p 8080:80 --rm codex


## Kubernetes
`kubectl apply -f k8s/deployment.yaml`
`kubectl apply -f k8s/ingress.yaml`
`kubectl apply -f k8s/service.yaml`


## Local build

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
