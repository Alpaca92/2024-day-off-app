import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Router from '@routes/router';
import '@styles/global.css';
import { ModalProvider, ThemeProvider } from '@providers/index';

const router = createBrowserRouter(Router);

function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
