import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import api from "../services/api";

export default class Main extends Component {
  state = {
    productInfo: {},
    products: [],
    page: 1
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    this.setState({
      productInfo,
      products: [...this.state.products, ...docs],
      page
    });
  };

  renderItem = ({ item }) => (
    <View style={styles.containerProduct}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <TouchableOpacity
        style={styles.productButton}
        onPress={() =>
          this.props.navigation.navigate("Product", { product: item })
        }
      >
        <Text style={styles.productButtonTitle}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  loadMore = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  };

  render() {
    const { products } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#DA552F" />
        <FlatList
          data={products}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          contentContainerStyle={styles.list}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  },

  list: {
    padding: 20
  },

  containerProduct: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },

  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333"
  },

  productDescription: {
    fontSize: 16,
    color: "#999999",
    marginTop: 5,
    lineHeight: 24
  },

  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DA552F",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },

  productButtonTitle: {
    fontSize: 16,
    color: "#DA552F",
    fontWeight: "bold"
  }
});
