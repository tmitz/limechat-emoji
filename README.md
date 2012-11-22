# Limechat-emoji

Limechat for macにgithubで使える絵文字を表示させるJavaScript

# how to

1. ユーザテーマディレクトリ(~/Library/Application Support/LimeChat/Themes) 配下にファイルを展開
2. Preferences - Theme - Current themeを展開したファイル名のテーマに変更 (Limelight-emoji)
3. メッセージ入力時にgithubのemoji入力フォーマットで絵文字表示 (ex. :smile:)
4. enjoy!

# emoji list
http://www.emoji-cheat-sheet.com/ を参考に

# TODO
* github.comに置いてる画像を引っ張ってきてるので大勢で使う場合はローカルに画像持ちましょう
* cssを調整してもう少し見栄え良く
* ":"で囲まれた文字列は絵文字にしてしまうので正規表現ルールもっと必要そう
 * http://~ は対応済み(http:が含まれてる場合は絵文字展開しない)
* 他のテーマ対応
 * jsファイル自体は同じものが使い回せるので前述のユーザテーマディレクトリにLimechat同梱のテーマをリネームして置けば対応可能
 * Limechatデフォルトテーマディレクトリ /Applications/LimeChat.app/Contents/Themes
