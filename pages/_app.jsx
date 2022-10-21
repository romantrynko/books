import { ThemeProvider } from '@emotion/react';
import Header from '../components/Header';
import '../styles/globals.css';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
