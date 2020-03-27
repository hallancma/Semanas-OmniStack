const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    //para testar o header basta colcoar .set('authorization','sdfsfd')...
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'ACIU',
        email: 'hallancma@gmail.com',
        whatsapp: '12997331367',
        city: 'Ubatuba',
        uf: 'SP'
      });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
