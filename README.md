# Trick or Treat

>![CAUTION]
>本Chrome拡張機能はScrapbox.ioが意図しない挙動やセキュリティ上の問題を引き起こす可能性があります. 自己責任の範囲で利用できない場合は利用を取りやめてください.
> 
> This a Google Chrome extension may causes unintentional or security issues. Unless you would take full responsibility for your action, do not use this extension.

>![CAUTION]
> このChrome拡張機能を利用しScrapbox.ioの非公式APIにアクセスする場合には, 必ずリクエストとリクエストの間隔を5秒以上開けるなどしてサービスに負荷をかけないようにしてください.
> If you use this Google Chrome extension to access Scrapbox.io unofficial API, you must have an interval of 5 seconds or more to send request.

Scrapbox.io の非公式APIを利用しprivateプロジェクトにアクセスする際に必要なcookie、`connect.sid`　を簡単に表示するためのChrome拡張機能です。

This is a Google Chrome extension makes `connect.sid`, Scrapbox.io cookie, visible simply from extension. This cookie is used to accces to private project in Scrapbox.io via unofficial API.


## 参照 / Reference

[ScrapboxのprivateプロジェクトのAPIを叩く](https://scrapbox.io/nishio/Scrapbox%E3%81%AEprivate%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AEAPI%E3%82%92%E5%8F%A9%E3%81%8F)

## 使い方 / Usage

拡張機能は現在Chromeウェブストアにて配布していません。そのため自分でビルド・管理の必要があります。

This Google Chrome extension is not distributed official store. You need to build yourself.

### ビルド方法 / How to Build

ビルドにはnpmを利用します。以下コマンドを利用しビルドしてください。
ビルド後の`build/chrome-mv3-prod`をGoogle Chrome設定から読み込むことで拡張機能を有効化できます。

To build, use npm. Use following commands.
After you build, you can enable the extension to load directory `build/chrome-mv3-prod` from Google Chrome extension prefrence.

```
npm install && npm run build
```

# 作者 / Author

Wataru Nishimura<wataru.chame.gon@gmail.com>

# LICENSE

本プロジェクト固有のプログラム・成果物・画像等の著作物に限り、著作者の許可なくいかなる用途であっても再配布・改変を禁止します。

This project prohibit re-distribution and modification only this project's unique program, outputs or images etc without author's permission.