# Next.js ChatGPT Client

このプロジェクトは、練習用に作成されたNext.jsを使用したChatGPTクライアントです。OpenAIのGPT-3.5-turboエンジンを利用して、リアルタイムでチャットができるシンプルなWebアプリケーションです。

## セットアップ

1. このリポジトリをクローンします。

   ```
   git clone https://github.com/yourusername/yourrepository.git
   cd yourrepository
   ```

2. 必要なパッケージをインストールします。

   ```
   npm install
   ```

3. OpenAI APIキーを設定します。プロジェクトのルートディレクトリに`.env.local`ファイルを作成し、以下の内容を追加します（`your_openai_api_key_here`を実際のAPIキーに置き換えてください）。

   ```
   CHATGPT_API_KEY=your_openai_api_key_here
   ```

4. 開発サーバーを起動します。

   ```
   npm run dev
   ```

   ブラウザで`http://localhost:3000`にアクセスして、アプリケーションを確認します。

## 使用技術

- Next.js
- TypeScript
- OpenAI API (GPT-3.5-turbo)

## ライセンス

このプロジェクトは、練習目的でのみ使用されることを意図しています。商用利用はしないでください。
