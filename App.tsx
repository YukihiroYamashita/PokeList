import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './src/redux';
import Home from './src/pages/Home';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, marginTop: 40 }}>
        <Home/>
      </View>
    </Provider>
  );
}
