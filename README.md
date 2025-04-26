# vite-plugin-cloudflare-workers-env-shims

Vite plugin to add Cloudflare Workers environment shims.

## Why?

If you are using vanilla Vite, you can use [@cloudflare/vite-plugin](https://www.npmjs.com/package/@cloudflare/vite-plugin). However if you use some frameworks including `nitro`, this plugin does not work. It is because there is some layer between Vite environment API and Vite plugin API. 
This plugin enables to access to Cloudflare Workers environment API in dev mode in ergonomic way.

I created this because I have some troubles to use `@cloudflare/vite-plugin` in my Tanstack Start project.

## Installation

```bash
npm install vite-plugin-cloudflare-workers-env-shims --save-dev
```

## Usage

`vite.config.ts`

```ts
import { defineConfig } from 'vite'
import cloudflareWorkersEnvShims from 'vite-plugin-cloudflare-workers-env-shims'

export default defineConfig({
  plugins: [
    cloudflareWorkersEnvShims(),
  ],
})
```

That's it! You can use Cloudflare Workers environment API in your code.

```ts
import { env } from 'cloudflare:workers'

// example
env.MY_KV.get('key').then((value) => {
  console.log(value)
})
```
