const request = require('request');
const url= 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, description) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(description.body); // In order to scan this data like a JavaScript object, we need to convert the string version of it into an object first. 
    if (data[0] === undefined) {
        console.log("Search Query denied. Please search a cat breed that exists.");
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
