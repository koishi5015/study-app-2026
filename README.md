# Study App 2026

試験日、忘却曲線、弱点演習をまとめて管理する静的Webアプリです。

## GitHub Pages で使う

1. GitHubで新しいリポジトリを作成する。
   - 推奨: private repository
   - 例: `study-app-2026`
2. このフォルダをそのリポジトリへpushする。
3. GitHubの `Settings > Pages` で `Source` を `GitHub Actions` にする。
4. `Actions` の `Deploy static site to GitHub Pages` が成功すると、Pages URL が発行される。
5. スマホでURLを開き、ホーム画面に追加する。

## データ同期

アプリ内の `保存・引き継ぎ` からメールアドレスとパスワードでログインすると、同じアカウントの端末間で学習履歴を同期できます。

- 保存するとクラウドにも自動反映されます。
- `今すぐクラウド保存` と `クラウドから取り込む` で手動同期もできます。
- 引き継ぎコードとJSONバックアップも保険として残しています。

## 注意

授業資料由来の内容を含む場合、URLを知っている人が誰でも見られる公開設定は避けてください。private repository と限定共有を推奨します。
