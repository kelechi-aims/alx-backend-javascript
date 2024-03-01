const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('shouldt return correct status code and message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
