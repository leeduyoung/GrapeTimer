import React, {Component} from 'react';
import Timer from './src/components/Timer/index';
import reducer from './src/reducer/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);
console.log(store);
console.log(store.getState());

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Timer />
        </Provider>
    );
  }
}