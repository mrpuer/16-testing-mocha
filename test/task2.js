//const assert = require('assert');
const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../src/task2/index.js');

describe('Task2. REST API tests', () => {
  // let server;

  // before((done) => {
  //   require('../src/task2/index.js');
  //   setTimeout(() => {
  //     server = supertest.agent('http://localhost:3000');
  //     done();
  //     }, 1000);
  // });
  describe('Add user', () => {
    it('Can add user without errors', (done) => {
      supertest(app.restApi)
        .get('/api/rest/v1/users')
        .expect(200)
        .then((err, res) => {
          if (err) return done(err);
          console.log(res.body);
          expect(res.body[0].name).to.equal('misha');
          done();
        });
    });
  });
});