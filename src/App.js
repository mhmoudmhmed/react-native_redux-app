/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import Header from './components/common/Header';
import LibraryList from './components/LibraryList';
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{flex: 1}}>
        <Header />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
