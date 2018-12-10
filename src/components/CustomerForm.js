import React from 'react';
import { connect } from 'react-redux';

import { createCustomer } from '../actions/customerActions';

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        name: '',
        phone: ''
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.createCustomer(this.state.customer);
    this.props.history.push('/');
  }

  onChange(event) {
    const field = event.target.name;
    let customer = { ...this.state.customer };
    customer[field] = event.target.value;
    this.setState({ customer });
  }

  render() {
    return (
      <main>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} aria-describedby="emailHelp" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.onChange} placeholder="Enter phone" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </main>
    );
  }
}

export default connect(null, { createCustomer })(CustomerForm);