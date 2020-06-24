/*
Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.
*/

const request = require('request');
const url= 'https://api.thecatapi.com/v1/breeds/search?q=';
const breedName = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, description) => {
    if (error) {
      console.log("Potential error in URL");
      return;
    } else {
      callback(description);
    }
  });
};

const printBreed = function (description) {
  const data = JSON.parse(description.body); // In order to scan this data like a JavaScript object, we need to convert the string version of it into an object first. 
    if (data[0] === undefined) {
        console.log("Search Query denied. Please search a cat breed that exists.");
      } else {
        console.log(`DESCRIPTION: ${data[0].description}`);
      }
};

fetchBreedDescription(breedName, printBreed);

module.exports = { fetchBreedDescription };
