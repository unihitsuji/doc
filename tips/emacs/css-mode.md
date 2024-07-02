## `css-mode` `mhtml-mode` (`HTML+CSS`): `C-h m => *Help*`

Minor modes enabled in this buffer: `Auto-Save` `Font-Lock`

The major mode is `HTML+CSS` mode defined in `css-mode.el`:

Major mode to edit `Cascading Style Sheets` (`CSS`).

This mode provides syntax highlighting, indentation, completion,
and documentation lookup for `CSS`.

Use `C-M-i` to complete `CSS` properties, property values,
pseudo-elements, pseudo-classes, at-rules, bang-rules, and HTML
tags, classes and IDs.  Completion candidates for HTML class
names and IDs are found by looking through open HTML mode
buffers.

Use `C-h S` to look up documentation of `CSS` properties, at-rules,
pseudo-classes, and pseudo-elements on the `Mozilla Developer Network` (MDN).

Use `M-q` to reformat `CSS` declaration blocks.  It can also
be used to fill comments.

| `Key`                          | `Binding` |
|:-------------------------------|:----------|
| `C-c C-f`                      | `css-cycle-color-format` |
| `<remap> <complete-symbol>`    | `completion-at-point` |
| `<remap> <info-lookup-symbol>` | `css-lookup-symbol` |
| `C-M-q`                        | `prog-indent-sexp` |

In addition to any hooks its parent mode ‘css-base-mode’ might have
run, this mode runs the hook ‘css-mode-hook’, as the final or
penultimate step during initialization.

Global minor modes enabled: `Auto-Encryption` `Blink-Cursor` `Column-Number`
`Desktop-Save` `Electric-Indent` `File-Name-Shadow` `Global-Eldoc`
`Global-Font-Lock` `Line-Number` `Show-Paren` `Tooltip` `Transient-Mark`
