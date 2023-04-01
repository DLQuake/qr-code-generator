import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import CopyToClipboard from 'react-copy-to-clipboard';
import 'bulma/css/bulma.min.css';
import './App.css';

function App() {
	const [text, setText] = useState('');
	const [copied, setCopied] = useState(false);

	const handleInputChange = (event) => {
		setText(event.target.value);
	};

	const handleCopy = () => {
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 3000);
	};

	return (
		<div className="App">
			<h1 className="title is-1 has-text-centered">QR Code Generator</h1>
			<div className="field">
				<label htmlFor="input-text" className="label">
					Enter Text or URL:
				</label>
				<div className="control">
					<input
						type="text"
						className="input"
						id="input-text"
						placeholder="Enter text or URL"
						value={text}
						onChange={handleInputChange}
					/>
				</div>
			</div>
			{text && (
				<div className="qr-code">
					<QRCode value={text} size={256} />
					<div className="buttons">
						<CopyToClipboard text={text} onCopy={handleCopy}>
							<button className="button is-link">
								Copy to Clipboard
							</button>
						</CopyToClipboard>
						{copied && (
							<span className="icon is-small has-text-success">
								<i className="fas fa-check"></i>
							</span>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
