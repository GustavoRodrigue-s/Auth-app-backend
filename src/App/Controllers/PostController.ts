import { Request, Response } from 'express';

import { posts } from '@app/utils';

class PostController {
  async index(req: Request, res: Response) {
    return res.status(200).json({ posts });
  }
}

export default new PostController();
