import React, {useState, useEffect} from "react";
import API from "../../Utils/API"
import "./style.css";

const EmployeesTable = ({filteredEmployees, setFilteredEmployees, search}) => {
   const [isAscending, setIsAscending] =useState(false)
   useEffect(() => {
      API.loadEmployees()
      .then(res => res.json())
      .then(response => setFilteredEmployees(response.results))
      .then (console.log(filteredEmployees))
      .catch(err => console.log(err))
   }, [])

   const sortName = () => {
      setIsAscending(!isAscending)
      if(isAscending) {
         const array = [...filteredEmployees]
         array.sort((a,b) => (a.name.first + " " + a.name.last).localeCompare(b.name.first + " " + b.name.last))
         setFilteredEmployees(array)
      }else {
         const array = [...filteredEmployees]
         array.sort((a,b) => (b.name.first + " " + b.name.last).localeCompare(a.name.first + " " + a.name.last))
         setFilteredEmployees(array)
      }
   }

   return(
      <table className = "table table-bordered table-hover table-stripped text-center table-sortable">
         <thead>
            <tr>
               <th scope = "col">Image</th>
               <th scope = "col" data-field = "name" data-sortable = "true">
                  <div onClick = {sortName}>
                     Name
                  </div>
               </th>
               <th scope = "col">
                  <div>
                     Email
                  </div>
               </th>
               <th scope = "col">
                  <div>
                     Phone
                  </div>
               </th>
            </tr>
         </thead>

         <tbody>
            {filteredEmployees 
            .filter(employee => employee.name.first.toUpperCase().includes(search.toUpperCase()) || employee.name.last.toUpperCase().includes(search.toUpperCase()))
            .map(employee => {
               return(
                  <tr key = {employee.login.uuid}>
                     <th scope = "row">
                        <img src={employee.picture.medium} alt = "employee"/>
                     </th>
                     <td className = "align-center">{employee.name.first} {employee.name.last}</td>
                     <td className = "align-center"><a href={`mailto:${employee.email}`}>{employee.email}</a></td>
                     <td className = "align-center"><a href={`tel:+1${employee.phone}`}>{employee.phone}</a></td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   )
}

export default EmployeesTable;
