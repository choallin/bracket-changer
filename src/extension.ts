'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import BaracketChanger from './bracket_changer'
import ApostropheChanger from './apostrophe_changer'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let bracketChanger = new BaracketChanger();
    let apostropheChanger = new ApostropheChanger();

    // The command has been defined in the package.json file
    let disposableBracket = vscode.commands.registerCommand('char-changer.changeBrackets', () => {
        bracketChanger.changeBrackets();
    });
    let disposableApostrophe = vscode.commands.registerCommand('char-changer.changeApostrophe', () => {
        apostropheChanger.changeApostrophe();
    });

    context.subscriptions.push(disposableBracket);
    context.subscriptions.push(disposableApostrophe);
}

export function deactivate() {
}

