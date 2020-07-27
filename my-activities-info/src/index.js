import React from 'react';
import ReactDOM from 'react-dom';
import route from './route';
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';

class Root extends React.Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        {route}
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));