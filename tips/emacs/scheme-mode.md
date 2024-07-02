## `scheme-mode` (`Scheme`): `C-h m => *Help*`

Minor modes enabled in this buffer: `Auto-Save` `Font-Lock`

The major mode is `Scheme` mode defined in `scheme.el`:

Major mode for editing `Scheme` code.
Editing commands are similar to those of `lisp-mode`.

In addition, if an inferior `Scheme` process is running, some additional
commands will be defined, for evaluating expressions and controlling
the interpreter, and the state of the process will be displayed in the
mode line of all `Scheme` buffers.  The names of commands that interact
with the `Scheme` process start with "xscheme-" if you use the MIT
Scheme-specific `xscheme` package; for more information see the
documentation for `xscheme-interaction-mode`.  Use `M-x run-scheme` to
start an inferior `Scheme` using the more general `cmuscheme` package.

Commands:
Delete converts tabs to spaces as it moves back.
Blank lines separate paragraphs.  Semicolons start comments.

| `Key`   | `Binding` |
|:--------|:----------|
| `DEL`   | `backward-delete-char-untabify` |
| `C-M-q` | `indent-sexp` |
| `C-M-q` | `prog-indent-sexp` <br> (this binding is currently shadowed) |

In addition to any hooks its parent mode `prog-mode` might have run,
this mode runs the hook `scheme-mode-hook`, as the final or
penultimate step during initialization.

Global minor modes enabled: `Auto-Encryption` `Blink-Cursor` `Column-Number`
`Desktop-Save` `Electric-Indent` `File-Name-Shadow` `Global-Eldoc`
`Global-Font-Lock` `Line-Number` `Show-Paren` `Tooltip` `Transient-Mark`
