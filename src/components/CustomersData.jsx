import React from 'react'
import PropTypes from 'prop-types'

const CustomersData = ({name, dni, age}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>DNI<i>{dni}</i></strong> </div>
                <div><strong>Edad<i>{age}</i></strong></div>
            </div>
        </div>
    )
}

CustomersData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default CustomersData;
