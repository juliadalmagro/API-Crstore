import userController from '../controllers/userController';

export default (app) => {
  app.post('/user/persist', userController.persist);
  app.post('/user/persist/:id', userController.persist);
  app.post('/user/destroy', userController.destroy);
  app.get('/user', userController.get);
  app.get('/user/:id', userController.get);
  app.post('/user/register', userController.register);
  app.post('/user/login', userController.login);
};
