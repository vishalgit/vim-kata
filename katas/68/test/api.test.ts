import request from 'supertest';
import { app } from '../src/server';
import { connectDB, closeDB } from '../src/server/database';
import { createTestUser, clearDatabase } from './helpers';

describe('API Tests', () => {
    beforeAll(async () => {
        await connectDB();
    });

    afterAll(async () => {
        await closeDB();
    });

    beforeEach(async () => {
        await clearDatabase();
    });

    describe('User API', () => {
        it('should create a new user', async () => {
            const response = await request(app)
                .post('/api/users')
                .send({
                    name: 'Test User',
                    email: 'test@example.com',
                    password: 'password123'
                });

            expect(response.status).toBe(201);
            expect(response.body.data.name).toBe('Test User');
        });

        it('should get user details', async () => {
            const user = await createTestUser();
            const response = await request(app)
                .get(`/api/users/${user.id}`)
                .set('Authorization', `Bearer ${user.token}`);

            expect(response.status).toBe(200);
            expect(response.body.data.id).toBe(user.id);
        });
    });

    describe('Post API', () => {
        it('should create a new post', async () => {
            const user = await createTestUser();
            const response = await request(app)
                .post('/api/posts')
                .set('Authorization', `Bearer ${user.token}`)
                .send({
                    title: 'Test Post',
                    content: 'Test Content'
                });

            expect(response.status).toBe(201);
            expect(response.body.data.title).toBe('Test Post');
        });
    });
}); 