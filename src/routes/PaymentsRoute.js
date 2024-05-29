import paymentController from '../controllers/paymentController';

export default (app) => {
  app.post('/payment/persist', paymentController.persist);
  app.post('/payment/persist/:id', paymentController.persist);
  app.post('/payment/destroy', paymentController.destroy);
  app.get('/payment', paymentController.get);
  app.get('/payment/:id', paymentController.get);
};
