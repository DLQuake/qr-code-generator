// src/App.jsx
import { useState, useRef } from "react";
import QRCodeForm from "./components/QRCodeForm";
import QRCodeDisplay from "./components/QRCodeDisplay";
import Footer from "./components/Footer";
import "bulma/css/bulma.css";
import "./App.css";
import ProjectDescription from "./components/ProjectDescription";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
	const [text, setText] = useState("");
	const [color, setColor] = useState("#000000");
	const [size, setSize] = useState(128);
	const canvasRef = useRef();

	const downloadQRCode = () => {
		const canvas = canvasRef.current.querySelector("canvas");
		const url = canvas.toDataURL("image/png");
		const link = document.createElement("a");
		link.href = url;
		link.download = "qrcode.png";
		link.click();
	};

	const copyQRCodeToClipboard = () => {
		const canvas = canvasRef.current.querySelector("canvas");
		canvas.toBlob((blob) => {
			const item = new ClipboardItem({ "image/png": blob });
			navigator.clipboard.write([item]);
			alert("QR code copied to clipboard!");
		});
	};

	return (
		<div>
			<div className="hero">
				<div className="hero-body">
					<h1 className="title is-1 has-text-centered">QR code generator</h1>
					<ThemeSwitcher />
					<ProjectDescription />
					<div className="columns box mx-1">
						<div className="column">
							<QRCodeForm
								text={text}
								setText={setText}
								color={color}
								setColor={setColor}
								size={size}
								setSize={setSize}
							/>
						</div>
						<div className="column qr-code-container">
							<QRCodeDisplay text={text} size={size} color={color} canvasRef={canvasRef} />
							<div className="buttons is-centered" style={{ marginTop: '20px' }}>
								<button className="button is-primary" onClick={downloadQRCode}>
									Download QR code (PNG)
								</button>
								<button className="button is-info" onClick={copyQRCodeToClipboard}>
									Copy the QR code to the clipboard
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
