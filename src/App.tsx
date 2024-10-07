import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Router from '@routes/router';
import '@styles/global.css';

const router = createBrowserRouter(Router);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
