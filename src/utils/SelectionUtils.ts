'use strict';
import { Range, window, Position, TextEdit, WorkspaceEdit, workspace } from "vscode";

export default class SelectionUtils {

    get editor() {
        return window.activeTextEditor
    }

    get selection() {
        return this.editor.selection
    }

    public static hasEdit() {
        return !!window.activeTextEditor
    }

    public static isSelectionWord() {
        return !window.activeTextEditor.selection.isEmpty
    }

    public static GetActiveSelection(): string {
        if (!this.hasEdit() || !this.isSelectionWord()) {
            return undefined
        }
        const editor = window.activeTextEditor
        const { start, end } = editor.selection

        const range = new Range(start.line, start.character, end.line, end.character);
        const value = editor.document.getText(range).trim();

        return value;
    }

    public static EditActiveSelection(text: string): void {
        const textEdits = []
        
        const editor = window.activeTextEditor

        const { start, end } = editor.selection
        const range = new Range(start.line, start.character, end.line, end.character);
        const aTextDel = new TextEdit(range, text)

        textEdits.push(aTextDel)

        const workspaceEdit = new WorkspaceEdit()
        workspaceEdit.set(editor.document.uri, textEdits)

        workspace.applyEdit(workspaceEdit)
    }
}