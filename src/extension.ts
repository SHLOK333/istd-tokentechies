import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('solidity-analyzer.checkVulnerabilities', async () => {
        // Get the active editor's text (Solidity code)
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const code = editor.document.getText();
            
            try {
                const response = await axios.post('http://127.0.0.1:5000/check-vulnerabilities', {
                    contract_code: code
                });

                // Display the result
                vscode.window.showInformationMessage('Vulnerability Analysis: ' + response.data.analysis);
            } catch (error) {
                vscode.window.showErrorMessage('Error analyzing contract code: ' + (error as any).message);
            }
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
