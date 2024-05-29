import adressController from '../controllers/adressController';

export default (app) => {
  app.post('/adress/persist', adressController.persist);
  app.post('/adress/persist/:id', adressController.persist);
  app.post('/adress/destroy', adressController.destroy);
  app.get('/adress', adressController.get);
  app.get('/adress/:id', adressController.get);
};
