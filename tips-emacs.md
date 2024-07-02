# emacs C-h

- version 29.3 2024-06-17 [追加] \*Help\* \*Quick Help\* mhtml-mode elisp-mode scheme-mode

## All: C-h C-q =&gt; \*Quick Help\*

```
File           Buffer             Window              Mark & Kill          Projects
C-x C-c exit   C-x k   kill       C-x 0 only other    C-SPC   mark         C-x p p switch
C-x C-f find   C-x b   switch     C-x 1 only this     C-k     kill line    C-x p f find file
C-x C-w write  M-g g   goto line  C-x 2 split vert.   C-w     kill region  C-x p g search
C-x C-s save   C-x C-q read only  C-x 3 split horiz.  C-y     yank         C-x p r search & replace
C-x s   all                       C-x o other window  C-x C-x swap         C-x p c compile

Misc.
C-x u undo
C-s   search
C-r   reverse search
M-%   search & replace
M-q   reformat
```

## \*Help\* \*Quick Help\* : C-h m =&gt; \*Help\*

```
Minor modes enabled in this buffer: Font-Lock Isearch-Fold-Quotes

The major mode is Help mode defined in help-mode.el:

Major mode for viewing help text and navigating references in it.
Also see the ‘help-enable-variable-value-editing’ variable.
```

| Key                 | Binding |
|:--------------------|:--------|
| TAB                 | forward-button |
| SPC                 | scroll-up-command |
| -                   | negative-argument |
| 0 .. 9              | digit-argument |
| <                   | beginning-of-buffer |
| >                   | end-of-buffer |
| ?                   | describe-mode |
| I                   | help-goto-lispref-info |
| c                   | help-customize |
| g                   | revert-buffer |
| h                   | describe-mode |
| i                   | help-goto-info |
| l                   | help-go-back |
| n                   | help-goto-next-page |
| p                   | help-goto-previous-page |
| q                   | quit-window |
| r                   | help-go-forward |
| s                   | help-view-source |
| DEL                 | scroll-down-command |
| S-SPC               | scroll-down-command |
| &lt;XF86Back&gt;    | help-go-back |
| &lt;XF86Forward&gt; | help-go-forward |
| &lt;backtab&gt;     | backward-button |
| C-c C-b             | help-go-back |
| C-c C-c             | help-follow-symbol |
| C-c C-f             | help-go-forward |
| C-M-i               | backward-button |

```
In addition to any hooks its parent mode ‘special-mode’ might have
run, this mode runs the hook ‘help-mode-hook’, as the final or
penultimate step during initialization.

Global minor modes enabled: Auto-Encryption Blink-Cursor Column-Number
Desktop-Save Electric-Indent File-Name-Shadow Global-Eldoc
Global-Font-Lock Line-Number Show-Paren Tooltip Transient-Mark
```

## mhtml-mode (HTML+): C-h m =&gt; \*Help\*

```
Minor modes enabled in this buffer: Auto-Save Font-Lock

The major mode is HTML+ mode defined in mhtml-mode.el:

Major mode based on ‘html-mode’, but works with embedded JS and CSS.

Code inside a <script> element is indented using the rules from
‘js-mode’; and code inside a <style> element is indented using
the rules from ‘css-mode’.

In addition to any hooks its parent mode might have run, this mode
runs the hook ‘mhtml-mode-hook’, as the final or penultimate step
during initialization.
```

| Key               | Binding |
|:------------------|:--------|
|  .. ÿ         | sgml-maybe-name-self |
| /                 | sgml-slash |
| M-o b             | facemenu-set-bold |
| M-o d             | facemenu-set-default |
| M-o i             | facemenu-set-italic |
| M-o l             | facemenu-set-bold-italic |
| M-o o             | facemenu-set-face |
| M-o u             | facemenu-set-underline |
| C-c C-j           | html-line |
| C-c RET           | html-paragraph |
| C-c C-s           | html-autoview-mode |
| C-c C-v           | browse-url-of-buffer |
| C-c 1             | html-headline-1 |
| C-c 2             | html-headline-2 |
| C-c 3             | html-headline-3 |
| C-c 4             | html-headline-4 |
| C-c 5             | html-headline-5 |
| C-c 6             | html-headline-6 |
| C-c C-a           | sgml-attributes |
| C-c C-b           | sgml-skip-tag-backward |
| C-c C-d           | sgml-delete-tag |
| C-c C-e           | sgml-close-tag |
| C-c C-f           | sgml-skip-tag-forward |
| C-c TAB           | sgml-tags-invisible |
| C-c C-n           | sgml-name-char |
| C-c C-o           | sgml-tag |
| C-c C-t           | sgml-tag |
| C-c C-v           | sgml-validate <br> (this binding is currently shadowed) |
| C-c /             | sgml-close-tag |
| C-c 8             | sgml-name-8bit-mode |
| C-c ?             | sgml-tag-help |
| C-c ]             | sgml-close-tag |
| C-c DEL           | sgml-delete-tag |
| C-c &lt;left&gt;  | sgml-skip-tag-backward |
| C-c &lt;right&gt; | sgml-skip-tag-forward |
| C-M-i             | ispell-complete-word |
| M-o M-o           | font-lock-fontify-block |
| C-c C-c #         | html-id-anchor |
| C-c C-c -         | html-horizontal-rule |
| C-c C-c c         | html-checkboxes |
| C-c C-c f         | html-href-anchor-file |
| C-c C-c h         | html-href-anchor |
| C-c C-c i         | html-image |
| C-c C-c l         | html-list-item |
| C-c C-c n         | html-name-anchor |
| C-c C-c o         | html-ordered-list |
| C-c C-c r         | html-radio-buttons |
| C-c C-c u         | html-unordered-list |

```
Global minor modes enabled: Auto-Encryption Blink-Cursor Column-Number
Desktop-Save Electric-Indent File-Name-Shadow Global-Eldoc
Global-Font-Lock Line-Number Show-Paren Tooltip Transient-Mark
```

## mhtml-mode (HTML+CSS): C-h m =&gt; \*Help\*

```
Minor modes enabled in this buffer: Auto-Save Font-Lock

The major mode is HTML+CSS mode defined in css-mode.el:

Major mode to edit Cascading Style Sheets (CSS).

This mode provides syntax highlighting, indentation, completion,
and documentation lookup for CSS.

Use ‘C-M-i’ to complete CSS properties, property values,
pseudo-elements, pseudo-classes, at-rules, bang-rules, and HTML
tags, classes and IDs.  Completion candidates for HTML class
names and IDs are found by looking through open HTML mode
buffers.

Use ‘C-h S’ to look up documentation of CSS properties, at-rules,
pseudo-classes, and pseudo-elements on the Mozilla Developer
Network (MDN).

Use ‘M-q’ to reformat CSS declaration blocks.  It can also
be used to fill comments.
```

| Key                          | Binding |
|:-----------------------------|:--------|
| C-c C-f                      | css-cycle-color-format |
| <remap> <complete-symbol>    | completion-at-point |
| <remap> <info-lookup-symbol> | css-lookup-symbol |
| C-M-q                        | prog-indent-sexp |

```
In addition to any hooks its parent mode ‘css-base-mode’ might have
run, this mode runs the hook ‘css-mode-hook’, as the final or
penultimate step during initialization.

Global minor modes enabled: Auto-Encryption Blink-Cursor Column-Number
Desktop-Save Electric-Indent File-Name-Shadow Global-Eldoc
Global-Font-Lock Line-Number Show-Paren Tooltip Transient-Mark
```

## mhtml-mode (HTML+JS): C-h m =&gt; \*Help\*

```
Minor modes enabled in this buffer: Auto-Save Font-Lock

The major mode is HTML+JS mode defined in js.el:

Major mode for editing JavaScript.

In addition to any hooks its parent mode ‘js-base-mode’ might have
run, this mode runs the hook ‘js-mode-hook’, as the final or
penultimate step during initialization.
```

| Key   | Binding |
|:------|:--------|
| M-.   | js-find-symbol |
| C-M-q | prog-indent-sexp |

```
Global minor modes enabled: Auto-Encryption Blink-Cursor Column-Number
Desktop-Save Electric-Indent File-Name-Shadow Global-Eldoc
Global-Font-Lock Line-Number Show-Paren Tooltip Transient-Mark
```
