// var React = require("react");
import React from 'react';

// var ReactDom = require("react-dom");
import ReactDOM from 'react-dom';

// importing stylesheet
import '../src/assets/stylesheet/style.scss';

// importing components
import LeftHeader from './components/LeftHeader';
import RightHeader from './components/RightHeader';
import HeroLeft from './components/HeroLeft';
import HeroCenter from './components/HeroCenter';
import HeroRight from './components/HeroRight';
// App component
function App() {
  return (
    <>
      <div className="header">
        <LeftHeader />
        <RightHeader />
      </div>
      <div className="hero">
        <HeroLeft />
        <HeroCenter />
        <HeroRight />
      </div>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
