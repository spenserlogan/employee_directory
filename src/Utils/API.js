// import axios from "axios";

export default {
  loadEmployees: function () {
    const url = "https://randomuser.me/api/?inc=name,email,picture,phone,login&results=50"
    return fetch(url);
    // return axios.get("https://randomuser.me/api/?results=50&nat=us");
  }
};