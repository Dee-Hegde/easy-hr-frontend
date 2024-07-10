import { Route, Routes } from 'react-router-dom';
import 'antd/dist/reset.css';
import AppLayouts from './layouts/AppLayouts';
import Login from './containers/Login/Login';
import SignUp from './containers/SignUp/SignUp';
import Dashboard from './containers/Dashboard/Dashboard';
import Candidates from './containers/Candidates/Candidates';

function App() {
  const appRoutes = [
    {
      path: '/',
      component: <Login />,
    },
    {
      path: '/signup',
      component: <SignUp />,
    },
    {
      path: '/dashboard',
      component: (
        <AppLayouts>
          <Dashboard />
        </AppLayouts>
      ),
    },
    {
      path: '/candidates',
      component: (
        <AppLayouts>
          <Candidates />
        </AppLayouts>
      ),
    },
    {
      path: '/employees',
      component: (
        <AppLayouts>
          <Candidates />
        </AppLayouts>
      ),
    },
    {
      path: '/assets',
      component: (
        <AppLayouts>
          <Candidates />
        </AppLayouts>
      ),
    },
    {
      path: '/clients',
      component: (
        <AppLayouts>
          <Candidates />
        </AppLayouts>
      ),
    },
    {
      path: '/users',
      component: (
        <AppLayouts>
          <Candidates />
        </AppLayouts>
      ),
    },
    {
      path: '/settings',
      component: (
        <AppLayouts>
          <Candidates />
        </AppLayouts>
      ),
    },
  ];
  return (
    <div>
      <Routes>
        {appRoutes?.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={item.component}
            data={item}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
