import React from 'react';
import '../css/appDescription.css';

function AppDescription() {
    return (
        <>
            <div className='app-description-wrapper'>
                <h1 className='description-title'>What is Love Chat?</h1>
                <p className='description-paragraph'>
                    Introducing "Love Chat" – your go-to app for expressing love and sincerity effortlessly.
                    Whether you want to shower your loved one with a thousand heartfelt messages or simply
                    convey your feelings with ease, "Love Chat" has you covered. Say "I love you" a thousand
                    times or more without the hassle of repetitive typing. Download "Love Chat" today and let
                    your love be heard loud and clear.
                </p>

                {/* How to use */}
                <br />
                <h1 className='description-title'>How to Use Love Chat?</h1>
                <p className='description-paragraph bold'>
                    Here's a step-by-step guide on how to use the "Love Chat" app:
                </p>
                <ol>
                    <li><b>Open: </b>Browse the App in your favourite browser.</li>
                    <li>
                        <b>Enter Your Message: </b>
                        In the app's text input field, enter the message you want to generate multiple times.
                        This could be an apology, a declaration of love, or any other message you want to repeat.
                    </li>
                    <li>
                        <b>Set the Number of Times: </b>
                        Use the number input field to specify how many times you want the message to be repeated.
                        You can choose any number, from a few repetitions to hundreds or even thousands.
                    </li>
                    <li>
                        <b>Select Your Preference: </b>
                        Choose whether you want the message to be numbered (e.g., "1. Message") or if you want it
                        to be repeated without numbering.
                    </li>
                    <li>
                        <b>Copy and Share: </b>
                        The app will display the generated message. You can copy the entire message to your clipboard
                        with the click of a button. You can then paste the message into your messaging app, email, or
                        any other platform you want to use to send your message.
                    </li>
                </ol>
            </div>
        </>
    )
}

export default AppDescription