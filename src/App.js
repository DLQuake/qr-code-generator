import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import CopyToClipboard from 'react-copy-to-clipboard';

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
      <h1>QR Code Generator</h1>
      <div className="form-group">
        <label htmlFor="input-text">Enter Text or URL:</label>
        <input
          type="text"
          className="form-control"
          id="input-text"
          placeholder="Enter text or URL"
          value={text}
          onChange={handleInputChange}
        />
      </div>
      {text && (
        <div className="qr-code">
          <QRCode value={text} size={256} />
          <div className="btn-group">
            <CopyToClipboard text={text} onCopy={handleCopy}>
              <button className="btn btn-primary">Copy to Clipboard</button>
            </CopyToClipboard>
            {copied && <span className="text-success">Copied!</span>}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
