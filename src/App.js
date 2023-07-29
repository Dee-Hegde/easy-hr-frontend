import { useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './containers/navbar/Navbar';

import AppRouters from './routes/AppRouters';

function App() {
  const location = useLocation();
  return (
    <div className="App">
     {location?.pathname !== "/" ?<Navbar/>:""}
      <AppRouters />
    </div>
  );
}

export default App;