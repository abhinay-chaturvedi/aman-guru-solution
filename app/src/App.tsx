// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React from 'react';
// import type { PropsWithChildren } from 'react';
import AmanGuru from './AmanGuru';
import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';
function App(): JSX.Element {

  return (
    <StoreProvider store={store}>
      <AmanGuru/>
    </StoreProvider>
  );
}


export default App;
