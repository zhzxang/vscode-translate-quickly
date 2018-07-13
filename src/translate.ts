import * as vscode from 'vscode';

export function startTranslate(text: String) {
  return text
}

export function getSelectionText(document: vscode.TextDocument, position: vscode.Position,) {
  let wordAtPosition = document.getWordRangeAtPosition(position);
  let currentWord = '';
  if (wordAtPosition && wordAtPosition.start.character < position.character) {
      var word = document.getText(wordAtPosition);
      currentWord = word.substr(0, position.character - wordAtPosition.start.character);
  }
  return currentWord
}