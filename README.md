# Solidity Vulnerability Analyzer

## Overview
The **Solidity Vulnerability Analyzer** is a tool designed to help developers identify security vulnerabilities in their Solidity smart contracts. It uses advanced AI and natural language processing techniques to analyze smart contract code and highlight potential risks. This tool is ideal for both beginners and experienced developers to ensure their code is secure before deploying it on the blockchain.

## Features
- **AI-based analysis:** Automatically detects common vulnerabilities such as reentrancy attacks, uninitialized state variables, and more.
- **Real-time feedback:** Provides immediate analysis on the code in your editor and suggests improvements.
- **Solidity code support:** Specifically built to understand Solidity syntax and its unique features.
- **Easy integration:** A Visual Studio Code extension that can be easily added to your development environment.

## Technologies Used
- **Flask** for the backend API
- **Ollama** for AI-based contract analysis
- **Visual Studio Code** extension for integration
- **Axios** for HTTP requests
- **Webpack** for bundling the extension
- **Node.js** and **TypeScript** for extension development

## Installation

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/SHLOK333/solidity-vuln-analyzer.git
    ```
2. Navigate to the backend folder and set up the Python environment:
    ```bash
    cd backend
    python -m venv .venv
    source .venv/bin/activate  # On Windows, use `.venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. Start the Flask server:
    ```bash
    python app.py
    ```

### Frontend (VS Code Extension) Setup
1. Clone the repository and navigate to the `SHLOK` folder:
    ```bash
    git clone https://github.com/SHLOK333/solidity-vuln-analyzer.git
    cd SHLOK
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Compile the extension:
    ```bash
    npm run compile
    ```

4. Start the extension in Visual Studio Code:
    - Open the folder in VS Code
    - Press `F5` to launch the extension.

## Usage

1. Open a Solidity file in Visual Studio Code.
2. Use the command `Check Solidity Vulnerabilities` from the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
3. The extension will analyze the code, and any detected vulnerabilities will be displayed in a message.

## Challenges We Ran Into
- **Handling Solidity syntax:** Ensuring the analysis engine can handle different types of Solidity code and syntax errors.
- **Integration with AI:** Integrating Ollama API with Flask to provide real-time feedback on the code.
- **Cross-platform compatibility:** Ensuring the VS Code extension works seamlessly on both Windows and macOS.

## Future Improvements
- **Support for more vulnerabilities:** Adding support for a wider range of known vulnerabilities in Solidity.
- **Better analysis techniques:** Integrating more sophisticated machine learning models for deeper analysis.
- **Enhanced UX/UI:** Improving the feedback UI and adding more interactive features.

## License
This project is licensed under the MIT License.

## Contact
For any issues or suggestions, feel free to reach out to [Shlok](https://github.com/SHLOK333) via GitHub.
