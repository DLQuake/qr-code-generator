# QR Code Generator
This is a web application built with React and Vite that generates QR codes for inputted text or website URLs. The application includes customization options such as changing QR code colors, sizes, and more. It also allows users to download or copy the generated QR code image to the clipboard.

## Features
- **QR Code Customization**: Adjust the color and size of the generated QR code.
- **Download & Copy**: Download the QR code as an image or copy it to the clipboard.
- **Responsive Design**: The layout is responsive, ensuring usability on both desktop and mobile devices.
- **Dark/Light Theme Toggle**: Switch between light and dark themes with an interactive button that uses custom icons for sun (light) and moon (dark).
- **Bulma for Styling**: The application is styled using the Bulma CSS framework.
- **Instructions & About**: Includes an informational section about the project and usage instructions.

## Instructions for Use

1. **Enter text or a URL** into the input field on the left side.
2. **Customize the QR code**:
   - Use the color picker to change the QR code's color.
   - Adjust the size using the slider.
3. **Download or Copy the QR code**:
   - Click "Download QR Code" to save the code as an image.
   - Click "Copy QR Code to Clipboard" to copy it for immediate use.

## Themes
This project includes a theme switcher for toggling between light and dark modes:
- The **sun icon** indicates light mode.
- The **moon icon** indicates dark mode.

## Technology Stack
- **React**: For building the user interface.
- **Vite**: For faster development and building.
- **Bulma**: For responsive styling.
- **React Icons**: For the theme switcher (sun/moon icons).
- **QRCode.react**: For generating QR codes.

## Download
There are two ways to download the repository:

* Clone the repository:
  ```bash
  git clone https://github.com/DLQuake/qr-code-generator.git
  ```
* [Download ZIP](https://github.com/DLQuake/qr-code-generator/archive/refs/heads/main.zip)

### Running the Project Locally
After downloading or cloning the repository, you can run the project locally by following these steps:

1. **Navigate** to the project directory:
   ```bash
   cd qr-code-generator
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

   This will start the app in development mode. Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the app.

The page will reload as you make changes, and you may also see any lint errors in the console.