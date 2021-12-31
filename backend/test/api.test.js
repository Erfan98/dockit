const request = require('supertest');

const app = require('../src/app');


describe('Perfectly working backend', () => {
  it('responds withfound message', (done) => {
    request(app)
      .get('/api')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /api/v1/task/list/get', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1/task/list')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API - 👋🌎🌍🌏'
      }, done);
  });
});

describe('GET /api/emojis', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/emojis')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, ['😀', '😳', '🙄'], done);
  });
});


