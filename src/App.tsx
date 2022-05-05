import React from 'react';
import { SVG } from './views/components/shapes/Svg';

import './bootstrap/boot';

const App: React.FC = () => {
  return (
    <div className="main">
      <button>fill</button>
      <SVG />
    </div>
  );
};
export default App;
