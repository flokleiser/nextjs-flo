// Place your key bindings in this file to override the defaultsauto[]
[
    {
        "key": "cmd+[IntlBackslash]",
        "command": "terminal.focus",
        "when": "editorFocus",
    },
    {
        "key": "cmd+up",
        "command": "editorScroll",
        "args": {
            "to": "up",
            "by": "halfPage",
            "revealCursor": true,
            "value": 1
        },
        "when": "editorTextFocus"
    },
    {   
        "key": "cmd+down",
        "command": "editorScroll",
        "args": {
            "to": "down",
            "by": "halfPage",
            "revealCursor": true,
            "value": 2
        },
        "when": "editorTextFocus"
    },
    // {
    //     "key": "cmd+up",
    //     "command": "cursorMove",
    //     "args": {
    //         "to": "up",
    //         "by": "line",
    //         "value": 10
    //     },
    //     "when": "editorTextFocus"
    // },
    // {
    //     "key": "cmd+down",
    //     "command": "cursorMove",
    //     "args": {
    //         "to": "down",
    //         "by": "line",
    //         "value": 10
    //     },
    //     "when": "editorTextFocus"
    // },
    {
        "key": "cmd+down",
        "command": "-editor.action.goToBottomHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "cmd+up",
        "command": "-editor.action.goToTopHover",
        "when": "editorHoverFocused"
    },
    {
        "key": "shift+cmd+v",
        "command": "-markdown.showPreview",
        "when": "!notebookEditorFocused && editorLangId == 'markdown'"
    },
    {
        "key": "shift+cmd+v",
        "command": "-notebook.cell.pasteAbove",
        "when": "notebookEditorFocused && !inputFocus"
    },
    {
        "key": "ctrl+tab",
        "command": "selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "ctrl+n",
        "command": "-selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion"
    },
    {
        "key": "shift+cmd+l",
        "command": "workbench.action.moveEditorToLeftGroup"
    },
    {
        "key": "ctrl+2",
        "command": "-workbench.action.openEditorAtIndex2"
    },
    {
        "key": "ctrl+1",
        "command": "-workbench.action.openEditorAtIndex1"
    },
    {
        "key": "cmd+1",
        "command": "workbench.action.previousEditor"
    },
    {
        "key": "alt+cmd+left",
        "command": "-workbench.action.previousEditor"
    },
    {
        "key": "cmd+2",
        "command": "workbench.action.nextEditor"
    },
    {
        "key": "alt+cmd+right",
        "command": "-workbench.action.nextEditor"
    },
    {
        "key": "alt+tab",
        "command": "workbench.action.quickOpenNavigateNextInEditorPicker",
        "when": "inEditorsPicker && inQuickOpen"
    },
    {
        "key": "alt+tab",
        "command": "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
        "when": "!activeEditorGroupEmpty"
    },
    {
        "key": "shift+cmd+0",
        "command": "-workbench.action.zoomIn"
    },
    {
        "key": "shift+cmd+1",
        "command": "-workbench.action.zoomIn"
    },
    {
        "key": "cmd+[IntlBackslash]",
        "command": "workbench.action.focusFirstEditorGroup",
        "when": "terminalFocus"
    },
    {
        "key": "cmd+1",
        "command": "-workbench.action.focusFirstEditorGroup"
    },
    {
        "key": "cmd+2",
        "command": "-workbench.action.focusSecondEditorGroup"
    },
    {
        "key": "shift+cmd+c",
        "command": "workbench.action.terminal.new"
    },
    {
        "key": "shift+cmd+c",
        "command": "-workbench.action.terminal.openNativeConsole",
        "when": "!terminalFocus"
    }
]