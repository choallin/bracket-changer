import * as vscode from 'vscode';

export default class ApostropheChanger {
  public changeApostrophe() {
      let editor = vscode.window.activeTextEditor;
      if (!editor) {
          return ;
      }

      let selection = editor.selection
      // Replace the apostrophes in the text with different ones
      let txt = editor.document.getText(selection);
      let txtReplaced = txt.replace(/"/g, "'");
      if (txt === txtReplaced) {
          txtReplaced = txt.replace(/'/g, '"');
      }

      editor.edit(editBuilder => {
          editBuilder.replace(selection, txtReplaced);
      });
  }
}
