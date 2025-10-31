const request = require('supertest');
const app = require('../app');

describe('Testes de autenticação e acesso', () => {
  let token;

  it('GET /produtos sem token → deve retornar 401', async () => {
    const res = await request(app).get('/produtos');
    expect(res.status).toBe(401);
    expect(res.body.msg).toBe('Não autorizado');
  });

  it('GET /produtos com token inválido → deve retornar 401', async () => {
    const res = await request(app)
      .get('/produtos')
      .set('authorization', '123456789');
    expect(res.status).toBe(401);
    expect(res.body.msg).toBe('Token inválido');
  });

  it('POST /usuarios/login → deve retornar token válido', async () => {
    const res = await request(app)
      .post('/usuarios/login')
      .send({ usuario: 'email@exemplo.com', senha: 'abcd1234' });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
    token = res.body.token;
  });

  it('GET /produtos com token válido → deve retornar 200', async () => {
    const res = await request(app)
      .get('/produtos')
      .set('authorization', token);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /usuarios/renovar → deve retornar novo token', async () => {
    const res = await request(app)
      .post('/usuarios/renovar')
      .set('authorization', token);

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
