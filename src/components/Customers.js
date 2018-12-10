import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Customers extends React.Component {
  render() {
    const customersItems = this.props.customers.map((customer, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{customer.name}</td>
        <td>{customer.phone}</td>
      </tr>
    ));

    return (
      <main>
        <div className='col-lg-12'>
          <Link to="/customer/new" className='btn btn-default float-right'>New</Link>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {customersItems}
          </tbody>
        </table>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  customers: state.customerReducer.customers
});

export default connect(mapStateToProps)(Customers);