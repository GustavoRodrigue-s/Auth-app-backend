import { Router } from 'express';

import {
  UserController,
  AuthController,
  PostController,
} from './App/Controllers';

import { authMiddleware } from './App/middlewares';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/auth', AuthController.authenticate);

routes.get('/posts', authMiddleware, PostController.getStore);
routes.get('/users', authMiddleware, UserController.index);
routes.get('/users/recover', authMiddleware, UserController.getStore);

export { routes };
