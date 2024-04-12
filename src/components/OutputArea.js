import React, { useState } from 'react';
import SweetAlert from './SweetAlert';

const GenerateOutput = ({ text, lines, wantCount }) => {
    let output = '';
    for (let i = 1; i <= lines; i++) {
        if (wantCount === "yes") {
            output += `${i}. ${text}\n`;
        } else {
            output += `${text}\n`;
        }
    }
    return <pre>{output}</pre>;
};

function OutputArea({ text, lines, wantCount }) {
    const [showAlert, setShowAlert] = useState(false);

    const handleCopy = () => {
        const outputElement = document.querySelector('.outputbox');
        // const copyBtn = document.querySelector('.copybtn');
        const textToCopy = outputElement.innerText;

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 1500);
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <>
            <div className='outputarea'>
                <h1 className='heading'>Output</h1>
                <div className='outputbox'>
                    <GenerateOutput text={text} lines={lines} wantCount={wantCount} />
                </div>
                <button className='copybtn' onClick={handleCopy}>Copy</button>
                {showAlert && <SweetAlert type="success" message="Copied to Clipboard" />}
            </div>
        </>
    );
}

export default OutputArea;
