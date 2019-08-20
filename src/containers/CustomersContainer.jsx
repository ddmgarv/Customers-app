import React, { Component } from "react";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import CustomersList from "../components/CustomersList";
import CustomerActions from "../components/CustomerActions";
import { withRouter } from "react-router-dom";

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

CustomersContainer.propTypes = {
  customers: PropTypes.array.isRequired
};

export default withRouter(CustomersContainer);
