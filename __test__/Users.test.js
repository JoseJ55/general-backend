const app = require('./../app');
const request = require('supertest');

let testId;

describe('Users GET all', () => {
    it('test succuss get request', async () => {
        const res = await request(app).get('/users');

        expect(res.statusCode).toEqual(200);
        expect(res.body.results);
    })
})

describe('Users GET one', () => {
    it('test success get one request', async () => {
        const res = await request(app).get('/users/f2ub42u43');

        expect(res.statusCode).toEqual(200);
        expect(res.body.results);
    })
    
    it('test error get one request', async () => {
        const res = await request(app).get('/users/f34');

        expect(res.statusCode).toEqual(400);
        expect(typeof res.error).toBe('object');
    })
})

describe('user POST', () => {
    it('test success adding one user', async () => {
        const res = await request(app).post('/users').send({
            first_name: "Luis",
            last_name: "Bill",
            email: "e@gmail.com",
            username: 'test1'
        });

        testId = res.body.user_id;

        expect(res.statusCode).toEqual(200);
        expect(res.body.user_id);
    })

    it('test error adding one user', async () => {
        const res = await request(app).post('/users').send({
            first_name: "Luis",
            last_name: "Bill",
            email: "e@gmail.com"
        })

        expect(res.statusCode).toEqual(401);
    })
})

describe('user PATCH', () => {
    it('test success patch user', async () => {
        const res = await request(app).patch(`/users/${testId}`).send({
            first_name: "change"
        })

        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('updated user');
    })

    it('test error patch user', async () => {
        const res = await request(app).patch(`/users/f4e`).send({
            first_name: "change"
        })

        expect(res.statusCode).toEqual(401);
        expect(res.body.error).toBe('user does not exist');
    })
})

describe('user DELETE', () => {
    it('test success delete user', async () => {
        const res = await request(app).delete(`/users/${testId}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('deleted user');
    })

    it('test error delete user', async () => {
        const res = await request(app).delete(`/users/gtr3`);

        expect(res.statusCode).toEqual(401);
        expect(res.body.error).toBe('user does not exist');
    })
})