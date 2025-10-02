const request = require('supertest');
const app = require('../app');

const api = request(app);

let tarefaId; 

describe('Testes para API de Tarefas', () => {
  
  it('Deve criar uma nova tarefa e retornar status 201 e JSON', async () => {
    const res = await api
      .post('/tarefas')
      .send({ nome: 'Estudar Node', concluida: false })
      .set('Accept', 'application/json');

    expect(res.statusCode).toBe(201);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toHaveProperty('id'); 
    expect(res.body.nome).toBe('Estudar Node');
    expect(res.body.concluida).toBe(false);

    tarefaId = res.body.id; 
  });

  it('Deve retornar status 200 e JSON para a tarefa criada', async () => {
    const res = await api.get(`/tarefas/${tarefaId}`);

    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toHaveProperty('id', tarefaId);
  });

  it('Deve retornar status 404 e JSON para tarefa inexistente', async () => {
    const res = await api.get('/tarefas/1');

    expect(res.statusCode).toBe(404);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  it('Deve atualizar a tarefa criada e retornar status 200 e JSON', async () => {
    const res = await api
      .put(`/tarefas/${tarefaId}`)
      .send({ nome: 'Estudar Node e Express', concluida: true })
      .set('Accept', 'application/json');

    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toHaveProperty('id', tarefaId);
    expect(res.body.nome).toBe('Estudar Node e Express');
    expect(res.body.concluida).toBe(true);
  });

  it('Deve retornar status 404 e JSON ao atualizar tarefa inexistente', async () => {
    const res = await api
      .put('/tarefas/1')
      .send({ nome: 'Teste inválido', concluida: true })
      .set('Accept', 'application/json');

    expect(res.statusCode).toBe(404);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  it('Deve excluir a tarefa criada e retornar status 204 sem conteúdo', async () => {
    const res = await api.delete(`/tarefas/${tarefaId}`);
    
    expect(res.statusCode).toBe(204);
    expect(res.text).toBe('');
  });

  it('Deve retornar status 404 e JSON ao tentar excluir tarefa inexistente', async () => {
    const res = await api.delete('/tarefas/1');

    expect(res.statusCode).toBe(404);
    expect(res.headers['content-type']).toMatch(/json/);
  });
});
