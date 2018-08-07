'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let bracketChanger = new BaracketChanger();

    // The command has been defined in the package.json file
    let disposable = vscode.commands.registerCommand('extension.changeBrackets', () => {
        bracketChanger.changeBrackets();
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}

class BaracketChanger {
    public changeBrackets() {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return ;
        }

        let selection = editor.selection

        // Replace the brackets in the text with different ones
        let txt = editor.document.getText(selection);
        txt = txt.replace(/([\(\{\[])(.*)([\)\]\}])/, this._replacer);
        console.log(txt);

        editor.edit(editBuilder => {
            editBuilder.replace(selection, txt);
        });
    }

    private _replacer(match : string, bracketOpen : string, content : string, bracketClosed : string) : string {
        switch(bracketOpen) {
            case '(':
                return `{${content}}`;
            break;
            case '[':
                return `(${content})`;
            break;
            case '{':
                return `[${content}]`;
            break;
        }
        return content;
    }
}
