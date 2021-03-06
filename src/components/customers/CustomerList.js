import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import { useHistory } from "react-router-dom"
import "./Customer.css"

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext)
  
  const history = useHistory() 
  
  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers")
    getCustomers()
  }, [])

  return (
    <div className="customerComponent">
      <h2>Customers</h2>
      <button onClick={() => { history.push("/customers/create") }}>
        Add Customer
      </button>

      <div className="customers">
        {console.log("CustomerList: Render", customers)}
        {
          customers.map(customer => {

            return <CustomerCard key={customer.id} customer={customer} />
          })
        }
      </div>
    </div>
  )
}