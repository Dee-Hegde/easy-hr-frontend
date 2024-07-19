import { Route, Routes } from "react-router-dom";
import AppLayouts from "./layouts/AppLayouts";
import Login from "./containers/Login/Login";
import SignUp from "./containers/SignUp/SignUp";
import Dashboard from "./containers/Dashboard/Dashboard";
import Candidates from "./containers/Candidates/Candidates";
import Users from "./containers/PagePermissions/PagePermissions";
import UserPermissions from "./containers/UserPermissions/UserPermissions";

function App() {
  const appRoutes = [
    {
      path: "/",
      component: <Login />,
    },
    {
      path: "/signup",
      component: <SignUp />,
    },
    {
      path: "/dashboard",
      component: (
        <AppLayouts>
          <Dashboard />
        </AppLayouts>
      ),
    },
    {
      path: "/candidates",
      component: (
        <AppLayouts>
          <Candidates />
        </AppLayouts>
      ),
    },
    {
      path: "/employees",
      component: (
        <AppLayouts>
          <Candidates />
        </AppLayouts>
      ),
    },
    {
      path: "/assets",
      component: (
        <AppLayouts>
          <Candidates />
        </AppLayouts>
      ),
    },
    {
      path: "/clients",
      component: (
        <AppLayouts>
          <Candidates />
        </AppLayouts>
      ),
    },
    {
      path: "/permissions",
      component: (
        <AppLayouts>
          <Users />
        </AppLayouts>
      ),
    },
    {
      path: "permissions/edit/:id",
      component: (
        <AppLayouts>
          <UserPermissions />
        </AppLayouts>
      ),
    },
    {
      path: "/settings",
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
            exact
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
