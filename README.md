### 内容

- Docker で postgres を起動
- Nest.js/typeorm/postgres を接続
- 全検索と追加の API 作成

### 立ち上げる手順

```
# postgresの起動 (docker-compose に設定してある、postgres が立ち上がり使える様になる。)
docker-compose up -d

# 依存パッケージのインストール
yarn

# マイグレーションファイルの実行　(DB作成)
yarn typeorm migration:run

# 開発環境の起動
yarn start dev


```

### API

- 全データ検索
  http://localhost:3000/item

- データ追加
  http://localhost:3000/item
  - method -> post
  - Body -> todo

コマンドから

```
curl http://localhost:3000/item -X POST -d "todo=test"
```

### キータ

https://qiita.com/toki_k/items/14cb5df53fce12e83b4b
