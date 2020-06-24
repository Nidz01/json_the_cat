const { fetchBreedDescription } = require('../breedFetch');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
  it("shows an error if an invalid breed is called", done => {
    fetchBreedDescription("abCDEF", (err, desc) => {
      assert.equal(desc, null);
      const expectedDesc =
        "Search Query denied. Please search a cat breed that exists.";
      assert.equal(err, expectedDesc);
      done();
    });
  });
});

