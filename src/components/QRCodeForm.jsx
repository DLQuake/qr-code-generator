import PropTypes from 'prop-types';

const QRCodeForm = ({ text, setText, color, setColor, size, setSize }) => (
    <div>
        <div className="field">
            <label className="label">Enter Link:</label>
            <div className="control">
                <input
                    className="input"
                    type="url"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter Link"
                />
            </div>
        </div>
        <div className="field">
            <label className="label">Set size:</label>
            <div className="control">
                <input
                    className="slider is-fullwidth size-slider"
                    type="range"
                    min="100"
                    max="500"
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                />
                <span>{size}px</span>
            </div>
        </div>
        <div className="field">
            <label className="label">Select color:</label>
            <div className="control">
                <input
                    className="input color-input"
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </div>
        </div>
    </div>
);

QRCodeForm.propTypes = {
    text: PropTypes.string.isRequired,
    setText: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    setColor: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
    setSize: PropTypes.func.isRequired,
};

export default QRCodeForm;
