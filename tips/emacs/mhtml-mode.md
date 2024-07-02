## `mhtml-mode` (`HTML+`): `C-h m => *Help*`

Minor modes enabled in this buffer: `Auto-Save` `Font-Lock`

The major mode is `HTML+` mode defined in `mhtml-mode.el`:

Major mode based on `html-mode`, but works with embedded `JS` and `CSS`.

Code inside a `<script>` element is indented using the rules from
`js-mode`; and code inside a `<style>` element is indented using
the rules from `css-mod`.

In addition to any hooks its parent mode might have run, this mode
runs the hook `mhtml-mode-hook`, as the final or penultimate step
during initialization.

| `Key`         | `Binding` |
|:--------------|:----------|
| ` .. ÿ`   | `sgml-maybe-name-self` |
| `/`           | `sgml-slash` |
| `M-o b`       | `facemenu-set-bold` |
| `M-o d`       | `facemenu-set-default` |
| `M-o i`       | `facemenu-set-italic` |
| `M-o l`       | `facemenu-set-bold-italic` |
| `M-o o`       | `facemenu-set-face` |
| `M-o u`       | `facemenu-set-underline` |
| `C-c C-j`     | `html-line` |
| `C-c RET`     | `html-paragraph` |
| `C-c C-s`     | `html-autoview-mode` |
| `C-c C-v`     | `browse-url-of-buffer` |
| `C-c 1`       | `html-headline-1` |
| `C-c 2`       | `html-headline-2` |
| `C-c 3`       | `html-headline-3` |
| `C-c 4`       | `html-headline-4` |
| `C-c 5`       | `html-headline-5` |
| `C-c 6`       | `html-headline-6` |
| `C-c C-a`     | `sgml-attributes` |
| `C-c C-b`     | `sgml-skip-tag-backward` |
| `C-c C-d`     | `sgml-delete-tag` |
| `C-c C-e`     | `sgml-close-tag` |
| `C-c C-f`     | `sgml-skip-tag-forward` |
| `C-c TAB`     | `sgml-tags-invisible` |
| `C-c C-n`     | `sgml-name-char` |
| `C-c C-o`     | `sgml-tag` |
| `C-c C-t`     | `sgml-tag` |
| `C-c C-v`     | `sgml-validate` <br> (this binding is currently shadowed) |
| `C-c /`       | `sgml-close-tag` |
| `C-c 8`       | `sgml-name-8bit-mode` |
| `C-c ?`       | `sgml-tag-help` |
| `C-c ]`       | `sgml-close-tag` |
| `C-c DEL`     | `sgml-delete-tag` |
| `C-c <left>`  | `sgml-skip-tag-backward` |
| `C-c <right>` | `sgml-skip-tag-forward` |
| `C-M-i`       | `ispell-complete-word` |
| `M-o M-o`     | `font-lock-fontify-block` |
| `C-c C-c #`   | `html-id-anchor` |
| `C-c C-c -`   | `html-horizontal-rule` |
| `C-c C-c c`   | `html-checkboxes` |
| `C-c C-c f`   | `html-href-anchor-file` |
| `C-c C-c h`   | `html-href-anchor` |
| `C-c C-c i`   | `html-image` |
| `C-c C-c l`   | `html-list-item` |
| `C-c C-c n`   | `html-name-anchor` |
| `C-c C-c o`   | `html-ordered-list` |
| `C-c C-c r`   | `html-radio-buttons` |
| `C-c C-c u`   | `html-unordered-list` |

Global minor modes enabled: `Auto-Encryption` `Blink-Cursor` `Column-Number`
`Desktop-Save` `Electric-Indent` `File-Name-Shadow` `Global-Eldoc`
`Global-Font-Lock` `Line-Number` `Show-Paren` `Tooltip` `Transient-Mark`
