import { QRCodeCanvas } from 'qrcode.react';
import PropTypes from 'prop-types';

const QRCodeDisplay = ({ text, size, color, canvasRef }) => (
    <div ref={canvasRef} className="has-text-centered box">
        <QRCodeCanvas
            value={text || "Enter your QR Code content"}
            size={size}
            bgColor="#FFFFFF"
            fgColor={color}
        />
    </div>
);

QRCodeDisplay.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    canvasRef: PropTypes.object.isRequired,
};

export default QRCodeDisplay;
