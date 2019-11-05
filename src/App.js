import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Products from './components/Products';
import Service from './components/Service';
import Portofolio from './components/Portofolio';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Head/>
      <Products/>
      <Service/>
      <Portofolio/>
      <Team/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
