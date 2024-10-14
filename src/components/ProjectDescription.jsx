const ProjectDescription = () => {
    return (
        <section className="project-description box">
            <h2 className="title is-4">Project Description</h2>
            <p>
                This project is a simple QR code generator built using React and Vite.
                It allows users to input link and then generates a QR code that can be downloaded as an image
                or copied to the clipboard. The goal of the project is to provide an easy and quick way to generate QR codes
                in an intuitive manner.
            </p>
            <h3 className="title is-5">Usage Instructions</h3>
            <ol>
                <li>Enter the Link you want to encode in the text field.</li>
                <li>Select the QR code color by clicking the color icon.</li>
                <li>Adjust the QR code size using the slider.</li>
                <li>Click the <strong>&quot;Download QR Code (PNG)&quot;</strong> button to save the code as a PNG file.</li>
                <li>Click the <strong>&quot;Copy QR Code to Clipboard&quot;</strong> button to copy the code to the clipboard.</li>
            </ol>
        </section>
    );
};

export default ProjectDescription;
