import express from 'express';
import { indexPage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/about', indexPage);

export default indexRouter;
