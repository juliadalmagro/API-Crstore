import productController from '../controllers/productController';

export default (app) => {
  app.post('/product/persist', productController.persist);
  app.post('/product/persist/:id', productController.persist);
  app.post('/product/destroy', productController.destroy);
  app.get('/product', productController.get);
  app.get('/product/:id', productController.get);
};
