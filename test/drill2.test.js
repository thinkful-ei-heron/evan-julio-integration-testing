const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../index');

// describe('GET /frequency endpoint', () => {
//     it('It should return a count of two', () => {
//         return supertest(app)
//             .get('/frequency')
//             .query({ s: 'aaBBAAbbaa'})
//             .expect(200)
//             .expect('Content-Type', /json/)
//             .then((res) => {
//                 expect(res.body).to.be.an('object');
//                 // expect(res.body).count.to.be === 2;
//                 expect(res.body).to.have.all.keys('count', 'average', 'highest');
//             })
//     })
// }

describe('GET /frequency endpoint', () => {
  it('should return a count of two', () => {
    const expected = {
      unique: 2,
      average: 5,
      highest: 'a',
      'a': 6,
      'b': 4
    };
    return supertest(app)
      .get('/frequency') // invoke the endpoint
      .query({ s: 'aaBBAAbbaa'})
      .expect(200) // assert that you get a 200  OK status
      .expect('Content-Type', /json/)
      .then((res) => {
        // make sure you get an array
        expect(res.body).to.be.an('object');
        expect(res.body).to.eql(expected);
        expect(res.body).to.have.all.keys('unique', 'average', 'highest', 'a', 'b');
      });
  });
});