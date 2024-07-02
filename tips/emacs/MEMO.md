# emacs MEMO

## 操作

- ```M-x``` execute-extended-command コマンド呼び出し<br>
  ```M-:``` eval-expression 任意の Lisp 式を評価

- ```C-x C-e``` eval-last-sexp ﾎﾟｲﾝﾄ以前の式を評価

- ```C-x e``` kmacro-end-and-call-macro 最後に定義したｷｰﾎﾞｰﾄﾞﾏｸﾛを実行<br>
  ```C-x (``` kmacro-start-macro ｷｰﾎﾞｰﾄﾞﾏｸﾛ記録開始<br>
  ```C-x )``` kmacro-end-macro ｷｰﾎﾞｰﾄﾞﾏｸﾛ記録終了

## ｼｰｹﾝｽ (文字列 リスト 配列)

- ```Function: length  sequence```<br>
  ｼｰｹﾝｽの長さ

- ```Function: length< sequence length```<br>
  ```Function: length> sequence length```<br>
  ```Function: length= sequence length```<br>
  ｼｰｹﾝｽの長さの比較

- ```Function: elt sequence index```<br>
  ｼｰｹﾝｽのindex番目の要素を返す

- ```Function: reverse sequence```<br>
  ```Function: sort sequence predicate```<br>

## 文字列

- ```Function: substring string &optional start end```<br>
  部分文字列

- ```Function: string-trim       string &optional trim-left trim-right```<br>
  ```Function: string-trim-left  string &optional regexp```<br>
  ```Function: string-trim-right string &optional regexp```<br>
  ﾄﾘﾐﾝｸﾞ

- ```Function: split-string string &optional separators omit-nulls trim```<br>
  分解

- ```Function: string-join list separator```<br>
  ```Function: concat &rest sequences```<br>
  結合

- ```Function: string-width string &optional from to```<br>
  画面での表示幅

- ```Function: string-pixel-width string```<br>
  表示幅のピクセル値. 以下の window-text-pixel-size を使用する

- ```Function: window-text-pixel-size &optional window from to x-limit y-limit mode-lines ignore-line-at-end ```<br>
  window が省略または nil ならカレントウインドウ. 指定したウインドウの
  バッファを表示させるのに必要なピクセル幅とピクセル高さの cons を返す.

## ファイル

- ```Function: find-file-noselect filename &optional nowarn rawfile wildcards```<br>
  filename のバッファが既存なら、そのバッファを返す.
  既存でないならバッファを新規作成し、filename を読み込み、バッファを返す.
  カレントバッファは変更しない.

## バッファとウインドウ

- ```Function: current-buffer```<br>
  カレントバッファを返す.

- ```Function: set-buffer buffer-or-name```<br>
  指定したバッファをカレントバッファにする

- ```Function: bobp``` ポイントがバッファ先頭なら t<br>
  ```Function: eobp``` ポイントがバッファ終端なら t

- ```(point-min)``` バッファ先頭のポイント<br>
  ```(point-max)``` バッファ先頭のポイント<br>
  ```(point)``` 現在のポイント

- ```(goto-char (point-min))``` バッファ先頭に移動<br>
  ```(goto-char (point-max))``` バッファ終端に移動

- ```Function: bolp``` ポイントが行の先頭なら t<br>
  ```Function: eolp``` ポイントが行の終端なら t

- ```Function: pos-bol &optional count``` 行の先頭のポイント<br>
  ```Function: pos-eol &optional count``` 行の終端のポイント<br>

- ```Command: beginning-of-line &optional count``` 行の先頭に移動<br>
  ```Command: end-of-line       &optional count``` 行の終端に移動

- ```Function: char-after  &optional position``` 直後の文字<br>
  ```Function: char-before &optional position``` 直前の文字<br>
  position のデフォルトは (point)

- ```Function: buffer-substring start end```<br>
  バッファ文字列の部分文字列

- ```Command: forward-line &optional count```<br>
  count が省略または nil ならカレントバッファのポイントを 1行 前進<br>
  count が指定されたらカレントバッファのポイントを count 行 前進<br>
  count が負なら、カレントバッファのポイントを |count| 行 後退<br>
  count がゼロなら、ポイントを同じ行の先頭に移動<br>
  count が何であろうとポイントは行の先頭になる

- ```Special Form: save-current-buffer body ...```<br>


- ```Macro: with-current-buffer buffer-or-name body ...```<br>
  開始時のカレントバッファから buffer-or-name バッファをカレントバッファに変え
  body ... を評価し、開始時のカレントバッファに戻す. body の最後の値を返す.

- ```Macro: save-selected-window forms ...```<br>

- ```Macro: with-selected-window window forms ...```<br>

- ```Function: get-buffer buffer-or-name```<br>
  buffer-or-name バッファが既存なら返す. 既存でなければ nil を返す.

- ```Function: get-buffer-create buffer-or-name &optional inhibit-buffer-hooks```<br>
  buffer-or-name が既存なら、その buffer を返す.
  既存でないならバッファを新規作成して返す.

- ```Command: kill-buffer &optional buffer-or-name```<br>
  指定したバッファを削除する.

- ```Command: erase-buffer```<br>
  カレントバッファの全テキストを削除する.

- ```Macro: save-selected-window forms ...```<br>
  カレントの frame、各 frame のカレント window を記録し、
  forms ... を評価した後、記録した frame や window に戻す.
  最後の forms の値を返す.

- ```switch-to-buffer buffer-or-name &optional norecord force-same-window```<br>
  選択中の window で buffer-or-name をカレントバッファにする.

- ```Command: switch-to-buffer-other-window buffer-or-name &optional norecord```<br>
  選択中の window ではない別の window に buffer-or-name バッファを表示する.

- ```Function: next-window &optional window minibuf all-frames```<br>
  window が省略または nil なら次の生きたウインドウを返す.
  window が指定されたら window ウインドウの次の生きたウインドウを返す.

- ```Function: window-buffer &optional window```<br>
  window が省略または nil なら選択中のウインドウの表示中バッファを返す.
  window が指定されたら window の表示中バッファを返す.

## キーマップ

- ```Variable: global-map```<br>
  ```Function: current-global-map```<br>
  ```Function: current-local-map```<br>
  [アクティブなキーマップの制御](http://localhost:8888/tips/emacs/29.3/elisp-ja.html#Controlling-Active-Maps)

- ```Function: make-sparse-keymap &optional prompt```<br>
  空のキーマップを作成？ '(keymap) を返すだけ？<br>
  [キーマップの作成](29.3/elisp-ja.html#Creating-Keymaps)

```elisp
(make-sparse-keymap)
(keymap)
```

- ```Function: keymap-set keymap key binding```<br>
  [キーバインディングの変更](29.3/elisp-ja.html#Changing-Key-Bindings)

- [コマンドのリマップ](29.3/elisp-ja.html#Remapping-Commands)<br>
  ```(keymap-set my-mode-map "<remap> <kill-line>" 'my-kill-line)```

- ```Function: lookup-key keymap key &optional accept-defaults```<br>
  [低レベルなキーバインディング](29.3/elisp-ja.html#Low_002dLevel-Key-Binding)

```elisp
(lookup-key global-map (kbd "C-x l")) ; C-j
count-lines-page
```

```elisp
(define-key global-map (kbd "M-[ 1 ; 5 a") 'my-other-scroll-up) ; C-j
my-other-scroll-up

(lookup-key global-map (kbd "M-[ 1 ; 5 a")) ; C-j
my-other-scroll-up
```

- ```Function: where-is-internal command &optional keymap firstonly noindirect no-remap```<br>
  C-h w の where-is とほぼ同じ<br>
  [キーマップのスキャン](29.3/elisp-ja.html#Scanning-Keymaps)

```elisp
(where-is-internal 'forward-word) ; C-j
([134217830] [27 right])
```

```elisp
(define-key global-map (kbd "M-[ 1 ; 5 a") 'my-other-scroll-up) ; C-j
my-other-scroll-up

(where-is-internal 'my-other-scroll-up) ; C-j
([134217819 49 59 53 97])

(kbd "M-[ 1 ; 5 a") ; C-j
[134217819 49 59 53 97]
```
