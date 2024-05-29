import cupomController from '../controllers/cupomController';

export default (app) => {
  app.post('/cupom/persist', cupomController.persist);
  app.post('/cupom/persist/:id', cupomController.persist);
  app.post('/cupom/destroy', cupomController.destroy);
  app.get('/cupom', cupomController.get);
  app.get('/cupom/:id', cupomController.get);
};
