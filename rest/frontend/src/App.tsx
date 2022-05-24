import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import BookSolo from './pages/BookSolo';
import Home from './pages/Home';
import Login from './pages/Login';
import Stores from './pages/Stores';
import StoresSolo from './pages/StoreSolo';
import { store } from './store';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <Provider store={store}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withNormalizeCSS withGlobalStyles>
          <NotificationsProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />}>
                  <Route path="books" element={<Books></Books>} />
                  <Route path="books/:id" element={<BookSolo></BookSolo>} />
                  <Route path="stores/:id" element={<StoresSolo></StoresSolo>} />
                  <Route path="stores" element={<Stores></Stores>} />
                  <Route path="/" element={<Navigate to="/books" replace />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </Provider>
  );
}

export default App;
