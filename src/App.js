import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';
import { Header } from './components/Header';
import Customers from './components/Customers';
import CustomerForm from './components/CustomerForm';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='container'>
            <Header />
            <Route exact path="/" component={Customers} />
            <Route exact path="/customer/new" component={CustomerForm} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;