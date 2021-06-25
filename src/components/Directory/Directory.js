// import reactDom from "react-dom";
import React, { useState } from "react";
import EmployeesTable from "../EmployeesTable/EmployeesTable";
import API from "../../Utils/API";
import Search from "../Search/Search";
// import { render } from "@testing-library/react";

function Directory({search, setSearch}) {
    const [filteredEmployees, setFilteredEmployees] = useState ([])

// class Employees extends Component {
//     state = {
//         search: "",
//         emplName:[],
//         filteredEmpl: [],
//         dortDirection: this.initialSortDirections,
//     }

//     get initialSortDirections() {
//         return{
//             name: "",
//             email: "",
//             phone: "",

//         }
//     }

//     componentDidMount () {
//         API.loadEmployees ()
//         .then(res => 
//             this.setState({
//                 emplName: res.data.results,
//                 filteredEmployees: res.data.results,
//             })
//         )
//         .catch(err => console.log(err));
//     }

//     handleInputChange = (e) => {
//         const value = e.target.value;
//         this.setState({search: value});
//         this.filteredEmployees(value.toLowerCase().trim());
//     };

//     handleSubmitForm = (e) => {
//         e.preventDefault();
//     };

//     sortBy = (key,primary = 0, secondary = 0) => {
//         let sortedEmpl = this.state.filteredEmployees;
//         if(this.setState.sortDirections[key]) {
//             this.setState({
//                 filteredEmployees: sortedEmpl.reverse(),
//                 sortDirections: {
//                     ...this.initialSortDirections,
//                     [key]: this.state.sortDirections[key] === "asc" ? "desc": "asc",
//                 },
//             });
//         }else {
//             sortedEmpl = this.state.filteredEmployees.sort((a,b) => {
//                 a = a[key];
//                 b = b[key];
//                 if (primary) {
//                     if (secondary && a[primary] === b[primary]) {
//                         return a[secondary].localeCompare(b[secondary]);
//                     }
//                     return a[primary].localeCompare(b[primary]);
//                 }else {
//                     return a.localeCompare(b);
//                 }
//             });

//             this.setState({
//                 filteredEmployees: sortedEmpl,
//                 sortDirections: {
//                     ...this.initialSortDirections,
//                     [key]: "asc",
//                 }
//             });
//         }
//     }

//     filterEmpl = (data) => {
//         if (data) {
//             this.setState({
//                 filteredEmployees: this.state.emplName.filter((employee) => {
//                     return(
//                         employee.name.first.toLowerCase().concat(" ", employee.name.last.toLowerCase()).includes(data) ||
//                         employee.email.includes(data) ||
//                         employee.phone.includes(data) ||
//                         employee.phone.replace(/[^\w\s]/gi, " ").includes(data)
//                     );
//                 }),
//             });
//         }else {
//             this.setState({
//                 filteredEmployees: this.state.emplName
//             });
//         }
//     }

//     render() {
        return(
            <>
                <Search
                   search = {search}
                   setSearch = {setSearch}
                />
                <div className = "container mt-4">
                    <EmployeesTable
                    search = {search}
                    // state = {this.state}
                    // sortBy = {this.sortBy}
                    // filterEmpl = {this.filterEmpl}
                    filteredEmployees = {filteredEmployees}
                    setFilteredEmployees = {setFilteredEmployees}
                />
                </div>
            </>
        );
    }
// }

export default Directory