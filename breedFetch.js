const request = require('request');
const url= 'https://api.thecatapi.com/v1/breeds/search?q=';
const breedName = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, description, body) => {
    if (error) {
      console.log("Potential error in URL");
      return;
    } else {
      //   console.log("body:", body);
      const data = JSON.parse(body);
    if (data[0] === undefined) {
        console.log("Search Query denied. Please search a cat breed that exists.");
      } else {
        // console.log(data);
        // console.log(content);
        // console.log(typeof data);
        console.log(null, data[0].description);
      }
    }
  });
};
fetchBreedDescription(breedName);

module.exports = { fetchBreedDescription };
