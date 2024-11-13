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

routes.get('/posts', authMiddleware, PostController.index);
routes.get('/users/recover', authMiddleware, UserController.show);

export { routes };
