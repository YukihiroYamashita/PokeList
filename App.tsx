import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';

import { api } from './src/util/api';

import Routes from './src/routes';

import { store } from './src/redux';

export default function App() {
  const [listLoaded, setListLoaded] = useState<boolean>(false);

  let [fontsLoaded] = useFonts({
    'Gilroy-Bold': require('./src/fonts/Gilroy-Bold.ttf'),
    'Gilroy-Light': require('./src/fonts/Gilroy-Light.ttf'),
    'Gilroy-Medium': require('./src/fonts/Gilroy-Medium.ttf'),
    'Gilroy-Regular': require('./src/fonts/Gilroy-Bold.ttf'),
  });

  useEffect(() => { 
    fetchApi();
  }, []);

  async function fetchApi() { 
    const { data } = await api.get('/pokemon?limit=2000');
    store.dispatch({ type: 'pokelist/home/get-pokemon-list', payload: data.results });
    setTimeout(() => setListLoaded(true), 2000);
  }

  if(!fontsLoaded && !listLoaded) { 
    return <View/>
  } else { 
    return (
      <Provider store={store}>
        <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
          <Routes />
        </View>
      </Provider>
    );
  }
}
