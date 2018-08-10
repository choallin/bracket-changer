import * as vscode from 'vscode';

export default class BaracketChanger {
  public changeBrackets() {
      let editor = vscode.window.activeTextEditor;
      if (!editor) {
          return ;
      }

      let selection = editor.selection

      // Replace the brackets in the text with different ones
      let txt = editor.document.getText(selection);
      txt = txt.replace(/([({[])([\w\d\s:,;$]*)([)\]}])/, this._replacer);

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

// export { BaracketChanger };
