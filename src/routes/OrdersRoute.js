import orderController from '../controllers/orderController';

export default (app) => {
  app.post('/order/persist', orderController.persist);
  app.post('/order/persist/:id', orderController.persist);
  app.post('/order/destroy', orderController.destroy);
  app.get('/order', orderController.get);
  app.get('/order/:id', orderController.get);
};
