// The module 'vscode' contains the VS Code extensibility API
const vscode = require('vscode');

/**
 * This method is called when your extension is activated
 *
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Congratulations, your extension "tomcathelper" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand

    //   "onCommand:tomcathelper.helloWorld",
    let commandGreeting = vscode.commands.registerCommand('tomcathelper.helloWorld', function () {
        vscode.window.showInformationMessage('Tomcat Helper - Greeting!');
    });
    context.subscriptions.push(commandGreeting);

    let commandNewServer = vscode.commands.registerCommand('tomcathelper.newServer', function () {
        vscode.window.showInformationMessage('Tomcat Helper - new Server!');
    });
    context.subscriptions.push(commandNewServer);

    let commandRenameServer = vscode.commands.registerCommand('tomcathelper.renameServer', function () {
        vscode.window.showInformationMessage('Tomcat Helper - renaming Server!');
    });
    context.subscriptions.push(commandRenameServer);

    let commandDeleteServer = vscode.commands.registerCommand('tomcathelper.deleteServer', function () {
        vscode.window.showInformationMessage('Tomcat Helper - deleting Server!');
    });
    context.subscriptions.push(commandDeleteServer);

    let commandStartServer = vscode.commands.registerCommand('tomcathelper.startServer', function () {
        vscode.window.showInformationMessage('Tomcat Helper - starting Server!');
    });
    context.subscriptions.push(commandStartServer);

    let commandStopServer = vscode.commands.registerCommand('tomcathelper.stopServer', function () {
        vscode.window.showInformationMessage('Tomcat Helper - stopping Server!');
    });
    context.subscriptions.push(commandStopServer);
}

/**
 * This method is called when your extension is deactivated
 */
function deactivate() {}

module.exports = {
    activate,
    deactivate
};
