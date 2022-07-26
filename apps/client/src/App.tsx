import React from 'react';
// import { SVG } from './views/components/shapes/Svg';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

// import './bootstrap/boot';
// import Playground from './pages/playground';

const Home = React.lazy(() => import('./pages/home'));

// const SignUp = React.lazy(() => import('./pages/SignUp'));
// const LogIn = React.lazy(() => import('./pages/Login'));

const RouteMap = [{ path: '/home', comp: Home }];

export default function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="home" replace />} />
          {RouteMap.map(e => (
            <Route path={e.path} key={e.path} element={<e.comp />} />
          ))}
        </Routes>
      </React.Suspense>
    </Router>
  );
}
