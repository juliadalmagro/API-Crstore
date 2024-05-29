import orderProductController from '../controllers/orderProductController';

export default (app) => {
  app.post('/orderProduct/persist', orderProductController.persist);
  app.post('/orderProduct/persist/:id', orderProductController.persist);
  app.post('/orderProduct/destroy', orderProductController.destroy);
  app.get('/orderProduct', orderProductController.get);
  app.get('/orderProduct/:id', orderProductController.get);
};
