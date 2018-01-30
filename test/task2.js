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
    it('Check for correct response', (next) => {
      const url = '/api/rest/v1/users/';
      server
        .post(url)
        .send({name: 'ivan', score: '100'})
        .expect(200)
        .end((err, res) => {
          if (err) throw next(err);
          expect(res.text).to.equal('Пользователь ivan добавлен с ID 1');
          next();
        });
    });
    it('Incorrect user parameters', (next) => {
      const url = '/api/rest/v1/users/';
      server
        .post(url)
        .send({name: 'ivan'})
        .expect(400)
        .end((err, res) => {
          if (err) throw next(err);
          expect(res.text).to.equal('Параметры пользователя указаны не верно.');
          next();
        });
    });
  });

  describe('Remove user', () => {
    it('Check for correct response', (next) => {
      const url = '/api/rest/v1/users/0';
      server
        .delete(url)
        .expect(200)
        .end((err, res) => {
          if (err) throw next(err);
          expect(res.text).to.equal('Пользователь с ID 0 удален.');
          next();
        });
    });
    it('ID dont exist', (next) => {
      const url = '/api/rest/v1/users/999';
      server
        .delete(url)
        .expect(404)
        .end((err, res) => {
          if (err) throw next(err);
          expect(res.text).to.equal('Пользователь с таким ID не найден');
          next();
        });
    });
    it('Remove all users', (next) => {
      const url = '/api/rest/v1/users/all';
      server
        .delete(url)
        .expect(200)
        .end((err, res) => {
          if (err) throw next(err);
          expect(res.text).to.equal('База Очищена');
          next();
        });
    });
  });
});