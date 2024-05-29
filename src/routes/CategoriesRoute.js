import categoryController from '../controllers/categoryController';

export default (app) => {
  app.post('/category/persist', categoryController.persist);
  app.post('/category/persist/:id', categoryController.persist);
  app.post('/category/destroy', categoryController.destroy);
  app.get('/category', categoryController.get);
  app.get('/category/:id', categoryController.get);
};
