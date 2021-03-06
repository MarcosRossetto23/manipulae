import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store/index';

import Header from '../../components/Header';
import List from '../../components/List';
import Menu from '../../components/Menu';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Provider store={store}>
        <Header />
        <List />
        <Menu />
      </Provider>
    </Container>
  );
};

export default Home;
