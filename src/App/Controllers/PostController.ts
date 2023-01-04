import { Request, Response } from 'express';

import { data } from '../mocks/posts';

class PostController {
  async getStore(req: Request, res: Response) {
    return res.status(200).json({ posts: data });
  }
}

export default new PostController();
