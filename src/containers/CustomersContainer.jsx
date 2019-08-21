import React, { Component } from "react";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import CustomersList from "../components/CustomersList";
import CustomerActions from "../components/CustomerActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCustomers } from "../actions/fetchCustomers";

const customers = [
  {
    dni: "1239015",
    name: "Juancito",
    age: "37"
  },
  {
    dni: "1239015",
    name: "Juancito",
    age: "37"
  },
  {
    dni: "1239015",
    name: "Juancito",
    age: "37"
  }
];

class CustomersContainer extends Component {
  componentDidMount() {
    this.props.fetchCustomers();
  }
  
  renderBody = customers => (
    <div>
      <CustomersList customers={customers} urlPath={"customer/"} />;
      <CustomerActions>
        <button onClick={this.handleAddNew}>Nuevo cliente</button>
      </CustomerActions>
    </div>
  );
  render() {
    return (
      <div>
        <AppFrame
          header={"Listado de clientes"}
          body={this.renderBody(customers)}
        />
      </div>
    );
  }
}
const mapDispatchToProps =(dispatch) => (
  {
    fetchCustomers: () => dispatch(fetchCustomers())
  }
)
CustomersContainer.propTypes = {
  customers: PropTypes.array.isRequired,
  fetchCustomers: PropTypes.func.isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer));
