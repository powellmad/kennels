import React, { useContext, useState } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"
import { useHistory } from 'react-router-dom'

export const CustomerForm = () => {
    
    const { addCustomer } = useContext(CustomerContext)


    const [customer, setCustomer] = useState({
      name: "",
      address: ""
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
    
      const newCustomer = { ...customer }
      let selectedVal = event.target.value
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }

      newCustomer[event.target.id] = selectedVal
      setCustomer(newCustomer)
    }

    const handleClickSaveCustomer = (event) => {
      event.preventDefault()

        addCustomer(customer)
        .then(() => history.push("/customers"))
      }
    

    return (
      <form className="customerForm">
          <h2 className="customerForm__title">New Customer</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Customer name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer name" value={customer.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="breed">Customer address:</label>
                  <input type="text" id="breed" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer address" value={customer.address}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSaveCustomer}>
            Save Customer
          </button>
      </form>
    )
}