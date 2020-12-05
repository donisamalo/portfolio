import React from 'react';

import '@/styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
const MyApp = ({Component, pageProps}) =>
  <Component {...pageProps} />

export default MyApp
