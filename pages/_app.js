import Navbar from '../components/Navbar';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
