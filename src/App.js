import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cocktail from './components/Cocktail/Coctail';

/*import { useState } from 'react';*/


const App = () => {

  return (
    <div className="App">
      <Header />
      <Cocktail />
      <Footer />
    </div>
  );
}

export default App;