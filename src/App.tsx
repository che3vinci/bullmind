import React from 'react';
import { SVG } from './views/components/shapes/Svg';

import './bootstrap/boot';
import Playground from './pages/playground';

const App: React.FC = () => {
  return (
    <div className="main">
      <button>fill</button>
      <Playground />
    </div>
  );
};
export default App;
