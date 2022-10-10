import './App.css';
import { useRoutes } from 'react-router-dom';
import {
  HomePage,
  HomeContent,
  LoginPage,
  Settings,
  Dashboard,
} from './components/global';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage></HomePage>,
      children: [
        {
          index: true,
          element: <HomeContent></HomeContent>,
        },
        {
          path: '/login',
          element: <LoginPage></LoginPage>,
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>,
        },
        {
          path: '/settings',
          element: <Settings />,
        },
      ],
    },
  ]);

  return routes;
}

export default App;
