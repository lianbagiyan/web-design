import React from 'react';
import './App.scss';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import BodySection from './components/BodySection';
import FooterSection from './components/FooterSection';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ImageCarousel />
      <BodySection />
      <FooterSection />
    </div>
  );
};

export default App;
