//const assert = require('assert');
const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../src/task2/index.js');

describe('Task2. REST API tests', () => {
  let server;

  before((done) => {
    setTimeout(() => {
      server = supertest.agent(app);
      done();
      }, 1000);
  });
  describe('Add user', () => {
    it('Check for correct response', (done) => {
      const url = '/api/rest/v1/users/';
      server
        .post(url)
        .send({name: 'ivan', score: '100'})
        .expect(200)
        .end((err, res) => {
          if (err) throw done(err);
          expect(res.text).to.equal('Пользователь ivan добавлен с ID 1');
          done();
        });
    });
  });

  describe('Remove user', () => {
    it('Check for correct response', (done) => {
      const url = '/api/rest/v1/users/0';
      server
        .delete(url)
        .expect(200)
        .end((err, res) => {
          if (err) throw done(err);
          expect(res.text).to.equal('Пользователь с ID 1 удален.');
          done();
        });
    });
  });
});