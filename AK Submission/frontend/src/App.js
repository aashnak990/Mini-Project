import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './pages/Error';
import EventsPage, {loader as eventsLoader} from './pages/EventsPage';
import RootLayout from './pages/Root';
import AuthenticationPage from './pages/Authentication';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true, 
        element: <EventsPage />,
        loader: eventsLoader 
      },
      {
        path: '/login',
        element: <AuthenticationPage />
      },
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
