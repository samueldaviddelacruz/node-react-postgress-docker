import React, { Component } from 'react';
import axios from 'axios';

class Products extends Component {
  state = {
    products: [],
    despcription:''
  };

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const response = await axios.get('/api/products');
    this.setState({ products: response.data });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const price = Math.round(Math.random() * 15000)

    await axios.post('/api/products',  {
      "description":this.state.despcription,
      "price":price
    });
    this.setState({ despcription: '' });
    await this.fetchProducts()
  };

  renderProducts() {
    return this.state.products.map( product => {
      return <div key={product.id}>
         <div>
           <p>{product.description}</p>
           <b>{product.price}</b>
         </div>
      </div>
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter product description:</label>
          <input
            value={this.state.despcription}
            onChange={event => this.setState({ despcription: event.target.value })}
          />
          <button>Submit</button>
        </form>

        <h3>Products:</h3>
        {this.renderProducts()}
      </div>
    );
  }
}

export default Products;
