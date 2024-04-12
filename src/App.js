import Footer from './components/Footer';
import InputArea from './components/InputArea';
import Nav from './components/Nav';
// import OutputArea from './components/OutputArea';
import './css/app.css';
import { Helmet } from 'react-helmet';
import Logo from '../src/images/lovechatlogo.svg';
import OgImage from '../src/images/ogimage.png';
import AppDescription from './components/AppDescription';

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Love Chat | Message Generator App</title>
        <meta name="keywords" content="love chat, say sorry 1000 times, chat generator, relationship, love app, chat love, lovely chat" />
        <meta name="description" content="Apologize with ease using Love Chat, the app that generates the same message multiple times. Say sorry 1000 times or more effortlessly, saving you from the nightmare of typing the same message repeatedly. Browse now and mend relationships with ease." />
        <link rel="icon" type="image/png" href={Logo} sizes="32x32" />
        <meta property="og:title" content="Love Chat | Message Generator App" />
        <meta property="og:description" content="Apologize with ease using Love Chat, the app that generates the same message multiple times. Say sorry 1000 times or more effortlessly, saving you from the nightmare of typing the same message repeatedly. Browse now and mend relationships with ease." />
        <meta property="og:image" content={OgImage} />
      </Helmet>
      <Nav />
      <div className='mxwidth'>
        <h1 className='pagetitle'>Message Generator App</h1>
        <InputArea />
        {/* <OutputArea /> */}
        <AppDescription />
      </div>
      <Footer />
    </div>
  );
}

export default App;
