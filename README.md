# 概要

Cloudflare Workers上で動作する、SSRサイトのサンプルです

# コマンド
開発環境起動
```sh
# create wrangler.toml 
cp wrangler.sample.toml wrangler.toml

yarn install
yarn start
```

デプロイ
```sh
npx wrangler login
npx wrangler publish
```