var url = 'https://jsonplaceholder.typicode.com/users/1';

// const axios = require('axios');
var user = {};
user.name = 'some name';
user.id = 'some_id';

/**
 * use jsdoc to define types
 * @typedef {object} User
 * @property {string} name
 * @property {Address} address
*/
/**
 * use nested objects if necessary
 * @typedef {object} Address
 * @property {string} city
 * @property {string} street
*/

/**
 * @returns {Promise<User>}
 */
function fetchUser(){
    return axios.get(url);
}

function startApp() {
    fetchUser()
      .then(function (response) {
        console.log(response);
        user = response.data;
        // view js object in console
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  startApp();