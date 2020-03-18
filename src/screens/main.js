import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import api from '../services/api';

export default class Main extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    const { docs } = response.data;

    this.setState({ products: docs });
  };

  render() {
    const { products } = this.state;
    return (
      <View>
        <StatusBar barStyle='light-content' backgroundColor='#DA552F' />
        {products.map(product => (
          <Text key={product._id}>{product.title}</Text>
        ))}
      </View>
    );
  }
}
