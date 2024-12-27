[![Hosted with GH Pages](https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white)](https://pages.github.com/)
[![Made with GH Actions](https://img.shields.io/badge/CI-GitHub_Actions-blue?logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![dependency - mdbook](https://img.shields.io/badge/dependency-mdbook-blue)](https://github.com/rust-lang/mdBook)

# まともライブラリー
https://kuromedayo.github.io/matomo-library

まとも書房で出版された本の中で、著作権がフリーなものをweb上で公開しています。

[mdbook](https://github.com/rust-lang/mdBook)を使ってhtmlを生成しています。

`sources`内の`"*-source"`を対象として`mdbook build`し、生成されたものををPagesにデプロイするようにGithub Actionsを設定しています。
