const supertest = require('supertest');
const app = require('../app');

test('Test hello route', async () => {
  const { statusCode, body: { msg } } = await supertest(app).get('/hello');
  expect(statusCode).toBe(200);
  expect(msg).toBe('hello');
});

