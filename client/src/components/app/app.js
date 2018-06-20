import React from 'react';
import { ThemeProvider } from 'styled-components';
import Hello from '../hello/hello';
import { theme } from '../styled/theme/globalStyle';


const App = () => (
  <ThemeProvider theme={theme}>
    <Hello />
  </ThemeProvider>
);

export default App;
