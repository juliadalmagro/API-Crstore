import AdressesRoute from './AdressesRoute';
import CategoriesRoute from './CategoriesRoute';
import CupomsRoute from './CupomsRoute';
import OrdersProductsRoute from './OrdersProductsRoute';
import OrdersRoute from './OrdersRoute';
import PaymentsRoute from './PaymentsRoute';
import ProductsRoute from './ProductsRoute';
import UsersRoute from './UsersRoute';

function Routes(app) {
  UsersRoute(app);
  PaymentsRoute(app);
  CupomsRoute(app);
  CategoriesRoute(app);
  AdressesRoute(app);
  ProductsRoute(app);
  OrdersRoute(app);
  OrdersProductsRoute(app);
}

export default Routes;
