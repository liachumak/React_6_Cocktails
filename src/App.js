import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

/*import { useState } from 'react';*/


const App = () => {

  return (
    <div className="App">
      <Header />

      <Main />
      <Footer />
    </div>
  );
}

export default App;