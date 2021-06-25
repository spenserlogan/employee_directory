// import reactDom from "react-dom";
import React, { useState } from "react";
import EmployeesTable from "../EmployeesTable/EmployeesTable";
import API from "../../Utils/API";
import Search from "../Search/Search";
// import { render } from "@testing-library/react";

function Directory({search, setSearch}) {
    const [filteredEmployees, setFilteredEmployees] = useState ([])
        return(
            <>
                <Search
                   search = {search}
                   setSearch = {setSearch}
                />
                <div className = "container mt-4">
                    <EmployeesTable
                    search = {search}
                    filteredEmployees = {filteredEmployees}
                    setFilteredEmployees = {setFilteredEmployees}
                />
                </div>
            </>
        );
    }
// }

export default Directory