# Twilightbloom
  
Twilightbloom（フロントエンドWeb開発テンプレート）-シンプルだがスケーラブルで保守可能なアーキテクチャ。
  
  
## Getting Started  

TWILIGHTBOOMを始めましょう。  
レスポンシブなモバイルファーストWebアプリまたはサイトを構築するための、シンプルでありながらスケーラブルで保守可能なアーキテクチャ。  
Twilightbloomは、高速であるだけでなく、スケーラブルで保守可能なWebアプリまたはサイトの構築を支援します。  「Twilightbloom」を使用すると、方法論、コード、パッケージなど、開発者の最高の知識と労力で構築されたパッケージを取得できます。  

Twilightbloomを使用してプロジェクトを開始する準備はできましたか？[パッケージをダウンロードします。](https://jackryanoracoy.github.io/twilightbloom)  
必ず最新の設計および開発標準でページをセットアップしてください。 つまり、HTML5 Doctypeを使用し、適切な応答動作のためにビューポートメタタグを含めることを意味します。 または、パッケージに含まれる「boilerplate.html」を使用できます。  
  
Note: This is translated using Google Translate. This may be wierd to read and the message may be incorrect, if you want to help with this documentation please email me. Thank you!  
  
### Content  
  
パッケージに含まれるものを見つけます。 ダウンロードしたら、圧縮フォルダを解凍すると、次のようなものが表示されます。  
  
```
Twilightbloom/
├── addon/
├── assets/
│   ├── fonts/
│   └── images/
├── scripts/
│   ├── jquery-3.4.1.min.js
│   ├── object-fit-images-3.2.3.min.js
│   └── script.js
├── styles/
│   ├── source
│   │   ├── base
│   │   │   └── *.scss
│   │   ├── component
│   │   │   └── *.scss
│   │   ├── layout
│   │   │   └── *.scss
│   │   ├── setting
│   │   │   └── *.scss
│   │   ├── utility
│   │   │   └── *.scss
│   │   ├── all.scss
│   │   ├── base.scss
│   │   ├── component.scss
│   │   ├── layout.scss
│   │   ├── setting.scss
│   │   └── utility.scss
│   ├── all.css
│   ├── all.css.map
│   ├── base.css
│   ├── base.css.map
│   ├── component.css
│   ├── component.css.map
│   ├── layout.css
│   ├── layout.css.map
│   ├── setting.css
│   ├── setting.css.map
│   ├── style.css
│   ├── utility.css
│   └── utility.css.map
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .htaccess
├── android-icon-192x192.png
├── apple-icon-precomposed.png
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-96x96.png
├── favicon.png
├── 404.html
├── boilerplate.html
├── index.html
└── robots.txt
```
  
### Theming  
  
テーマやコンポーネントを簡単に変更できるように、グローバルスタイル設定用にCSS変数またはSASS変数で「Twilightbloom」をカスタマイズします。  
含めるCSS変数は次のとおりです。「：root」が必要であることに注意してください。 詳細については、「settings.css」または「scss」コードベース（ミックスイン、変数など）を確認してください。  
  
```
:root {

  /* Color */
  --primary: #263238;
  --secondary: #37474F;
  --success: #4CAF50;
  --warning: #FF5722;
  --danger: #F44336;
  --info: #2196F3;
  --light: #FAFAFA;
  --dark: #212121;

  --red: #F44336;
  --pink: #E91E63;
  --purple: #9C27B0;
  --deep-purple: #673AB7;
  --indigo: #3F51B5;
  --blue: #2196F3;
  --light-blue: #03A9F4;
  --cyan: #00BCD4;
  --teal: #009688;
  --green: #4CAF50;
  --light-green: #8BC34A;
  --lime: #CDDC39;
  --yellow: #FFEB3B;
  --amber: #FFC107;
  --orange: #FF9800;
  --deep-orange: #FF5722;
  --brown: #795548;
  --blue-grey: #607D8B;

  --grey-50: #FAFAFA;
  --grey-100: #F5F5F5;
  --grey-200: #EEEEEE;
  --grey-300: #E0E0E0;
  --grey-400: #BDBDBD;
  --grey-500: #9E9E9E;
  --grey-600: #757575;
  --grey-700: #616161;
  --grey-800: #424242;
  --grey-900: #212121;

  /* Transition */
  --transition: all 300ms ease-in-out 120ms;

  /* font-family */
  --font-family-sans-serif: "Noto Sans JP", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "游ゴシック", "游ゴシック体", YuGothic, "Yu Gothic", "メイリオ", Meiryo, "ＭＳ ゴシック", "MS Gothic", HiraKakuProN-W3, "TakaoExゴシック", TakaoExGothic, "MotoyaLCedar", "Droid Sans Japanese", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
```
  
### Breakpoints  
  
Twilightbloomは、いくつかのメディアクエリを使用して、レイアウトとインターフェイスの賢明なブレークポイントを作成します。  
これらのブレークポイントは主に最小ビューポート幅に基づいており、ビューポートの変更に応じて要素を拡大できます。  
  
```
// Small devices (576px and up)
@media (min-width: 576px) {...}

// Medium devices (768px and up)
@media (min-width: 768px) {...}

// Large devices (992px and up)
@media (min-width: 992px) {...}

// Extra large devices (1200px and up)
@media (min-width: 1200px) {...}
```
  
### Accessibility  
  
視覚的には非表示にする必要がありますが、スクリーンリーダーなどの支援技術からはアクセス可能なコンテンツは、「.sr-only」クラスを使用してスタイル設定できます。  
これにより、コントロールがフォーカスされると表示されるようになります。  
  
```
<p class="text-danger">
  <span class="sr-only">Danger: </span>
  This action is not reversible
</p>
```
  
従来の「スキップ」リンクなど、視覚的に隠されたインタラクティブコントロールの場合、 「.sr-only」を「.sr-only--focusable」クラスと組み合わせることができます。これにより、コントロールがフォーカスされるとコントロールが表示されるようになります。  
  
```
<a class="sr-only sr-only--focusable" href="#site-content">Skip to main content</a>
```
  
Note: To extend template's accessibility please see [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/), [WCAG 2.0](https://www.w3.org/TR/WCAG20/) and similar accessibility standards and requirements.  
  
  
## CSS Methodologies  
  
グローバル名前空間、カスケード、セレクターの特異性など、CSSの特性をより適切に処理できるプロジェクトファイルを整理します。  
「ITCSS」、「BEM」、「SMACSS」、「OOCSS」などのいくつかの一般的な方法論と同じ方法論を共有します。  
このアプローチは、Webサイトの開発に参加するすべての人が単一のコードベースで作業し、同じ言語を話せるようにすることです。  
  
### Separated CSS codebase  
  
CSSコードベースをいくつかのセクションに分離します。これにより、「グローバル名前空間」、「カスケード」、「セレクターの特異性」などの「CSSの特性」をより適切に処理できるプロジェクトファイルを整理できます。  
  
setting.css - contains custom properties (css variables), font-face, etc.  
base.css - reset and/or normalize styles, box-sizing definition, etc.  
utitity.css - utilities and helper classes with ability to override anything.  
layout.css - specific UI layouts.  
component.css - specific UI components.  
  
Sassy CSS  
  
```
Twilightbloom/
└── styles/
    ├── source
    │   ├── base
    │   │   └── *.scss
    │   ├── component
    │   │   └── *.scss
    │   ├── layout
    │   │   └── *.scss
    │   ├── setting
    │   │   └── *.scss
    │   ├── utility
    │   │   └── *.scss
    │   ├── all.scss
    │   ├── base.scss
    │   ├── component.scss
    │   ├── layout.scss
    │   ├── setting.scss
    │   └── utility.scss
    ├── all.css
    ├── all.css.map
    ├── base.css
    ├── base.css.map
    ├── component.css
    ├── component.css.map
    ├── layout.css
    ├── layout.css.map
    ├── setting.css
    ├── setting.css.map
    ├── style.css
    ├── utility.css
    └── utility.css.map
```
  
  
### Naming Convention 
  
フロントエンドコードを読みやすく、理解しやすく、操作しやすく、スケーリングしやすくする、非常に便利で強力かつシンプルな命名規則。 より堅牢で明示的で、より厳密です。  
  
prefix - (u) utility, (l) layout, (c) component, and (js) javascript related classes.  
name - preferred class/object name.  
modifier - preferred modifier name.  
viewport - (sm) small, (md) medium, (lg) large, (xl) extra large.  
int - integer (0, 1, 2, 3, 4, 5, 6, 7, 8, 9).  
others - min, max, auto.  
  
```
.prefix-name {...}
.prefix-name-int {...}
.prefix-name-viewport {...}
.prefix-name-viewport-int {...}
.prefix-name--modifier {...}
.prefix-name--modifier-int {...}
.prefix-name--modifier-viewport {...}
.prefix-name--modifier-viewport-int {...}
.prefix-name__child {...}
.prefix-name__child-int {...}
.prefix-name__child-viewport {...}
.prefix-name__child-viewport-int {...}
```  
  
Samples:  
  
```
.l-flex {...}
.l-flex--wrp-no {...}
.l-flex--wrp-no-md {...}
.l-flex__item {...}
.l-flex__item-12 {...}
.l-flex__item-md {...}
.l-flex__item-md-12 {...}
.u-mar-top-10 {...}
.u-mar-top-sm-20 {...}
.u-mar-top-md-50 {...} 
```
  
Import order:  
  
```
@import "setting.css";
@import "base.css";
@import "layout.css";
@import "component.css";
@import "utility.css";
```
  
  
## Includes  
  
Twilightbloomに含まれているいくつかの素晴らしい作品。
   
* [jQuery (v3.4.1)](https://jquery.com/)  
* [Object-Fit Images (v3.2.3)](https://github.com/fregante/object-fit-images/)  
* [Apache Server Configs (v3.2.1)](https://github.com/h5bp/server-configs-apache)  
* [Normalize (v8.0.1)](https://necolas.github.io/normalize.css/)  
* [Google Fonts](https://fonts.google.com/)  
* [EditorConfig](https://editorconfig.org)  
  
  
## Author  
  
Jack Ryan Oracoy  
[https://jackryanoracoy.github.io](https://jackryanoracoy.github.io)  
jackryanoracoy@gmail.com  
  
[Github](https://github.com/jackryanoracoy), 
[Facebook](https://facebook.com/JackRyanOracoy), 
[Twitter](https://twitter.com/JackRyanOracoy), 
[Behance](https://www.behance.net/jackryanor7dac), 
[LinkedIn](https://www.linkedin.com/in/jackryanoracoy)  
  
  
## License  
  
This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.  
