import { Router } from 'express';
import { UserController } from '../controllers/user';
import { PostController } from '../controllers/post';
import { auth } from './middleware/auth';

const router = Router();
const userController = new UserController();
const postController = new PostController();

// User routes
router.get('/users', auth, userController.list);
router.post('/users', userController.create);
router.get('/users/:id', auth, userController.get);
router.put('/users/:id', auth, userController.update);
router.delete('/users/:id', auth, userController.delete);

// Post routes
router.get('/posts', postController.list);
router.post('/posts', auth, postController.create);
router.get('/posts/:id', postController.get);
router.put('/posts/:id', auth, postController.update);
router.delete('/posts/:id', auth, postController.delete);

export { router }; 