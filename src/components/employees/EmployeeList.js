import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()
  }, [])

  return (
    <div className="employeeComponent">
      <h2>Employees</h2>
      <div className="employees">
        {console.log("EmployeeList: Render", employees)}
        {
          employees.map(employee => {

            return <EmployeeCard key={employee.id} employee={employee} />
          })
        }
      </div>
    </div>
  )
}