## `elisp-mode` (`ELisp`): `C-h m => *Help*`

Minor modes enabled in this buffer: `Auto-Save` `Eldoc` `Font-Lock`

The major mode is `ELisp/l` mode defined
in `/snap/emacs/2464/usr/share/emacs/29.3/lisp/progmodes/elisp-mode.el`:

Major mode for editing `Lisp` code to run in `Emacs`.
Commands:
Delete converts tabs to spaces as it moves back.
Blank lines separate paragraphs.  Semicolons start comments.

When editing `Lisp` data (as opposed to code), `lisp-data-mode` can
be used instead.

| `Key`      | `Binding` |
|:----------|:--------|
| `DEL`     | `backward-delete-char-untabify` |
| `C-c C-b` | `elisp-byte-compile-buffer` |
| `C-c C-e` | `elisp-eval-region-or-buffer` |
| `C-c C-f` | `elisp-byte-compile-file` |
| `C-M-i`   | `completion-at-point` |
| `C-M-q`   | `indent-pp-sexp` |
| `C-M-x`   | `eval-defun` |
| `C-M-q`   | `indent-sexp` <br> (this binding is currently shadowed) |
| `C-M-q`   | `prog-indent-sexp` <br> (this binding is currently shadowed) |

In addition to any hooks its parent mode might have run, this mode
runs the hook `emacs-lisp-mode-hook`, as the final or penultimate step
during initialization.

Other commands for this mode, not bound to any keys:
<br>`checkdoc`
<br>`checkdoc-comments`
<br>`checkdoc-continue`
<br>`checkdoc-current-buffer`
<br>`checkdoc-interactive`
<br>`checkdoc-message-interactive`
<br>`checkdoc-message-text`
<br>`checkdoc-rogue-spaces`
<br>`checkdoc-start`
<br>`emacs-lisp-byte-compile`
<br>`emacs-lisp-byte-compile-and-load`
<br>`emacs-lisp-native-compile`
<br>`emacs-lisp-native-compile-and-load`

Global minor modes enabled: `Auto-Encryption` `Blink-Cursor` `Column-Number`
`Desktop-Save` `Electric-Indent` `File-Name-Shadow` `Global-Eldoc`
`Global-Font-Lock` `Line-Number` `Show-Paren` `Tooltip` `Transient-Mark`
