import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import routes from './config/routes';
import Navbar from './Components/Navbar'
import './index.css';

function App() {

  return (
    <HashRouter>
    <Navbar />
      <Routes>
        { routes.map((route: any, index: any) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.component />
            }
            />
        )) }
      </Routes>
  </HashRouter>
  )
}

export default App
