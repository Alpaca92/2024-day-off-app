import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Router from '@routes/router';
import '@styles/global.css';
import ThemeProvider from '@providers/ThemeProvider';

const router = createBrowserRouter(Router);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
