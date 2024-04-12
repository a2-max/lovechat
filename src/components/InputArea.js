import React, { useState } from 'react'
import OutputArea from './OutputArea';
import SweetAlert from './SweetAlert';

function InputArea() {

    const [text, setText] = useState('');
    const [lines, setLines] = useState(1);
    const [wantCount, setWantCount] = useState('yes');
    const [showAlert, setShowAlert] = useState(false);
    // const [submitted, setSubmitted] = useState(false);

    const handleText = (e) => {
        setText(e.target.value);
    }

    const handleLines = (e) => {
        if (parseInt(e.target.value) > 5000) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 1500);
            setLines(5000);
        }else{
            setLines(parseInt(e.target.value));
        }
    }

    const handleWantCount = (e) => {
        setWantCount(e.target.value);
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setSubmitted(true);
    // }

    return (
        <>
            <div className='input-output-wrapper'>
                <div className='inputarea'>
                    <h1 className='heading'>Input</h1>
                    <form className='form' >
                        <label>Message to Generate</label>
                        <input
                            type='text'
                            placeholder='eg: Love You Babe😘'
                            onChange={handleText}
                        />
                        <label>Number of Lines</label>
                        <input
                            type='number'
                            placeholder='eg. 1000'
                            onChange={handleLines}
                        />
                        {showAlert && <SweetAlert type="error" message="Line Must be less than or equal to 5000" />}
                        <label>Want Count?</label>
                        <select onChange={handleWantCount}>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>

                        {/* <button type='submit' className='submitbtn'>Generate</button> */}
                    </form>
                </div>

                <OutputArea text={text} lines={lines} wantCount={wantCount} />
            </div>
        </>
    )
}

export default InputArea