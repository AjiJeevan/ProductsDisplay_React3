import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductsListing from './pages/productsListing.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <ProductsListing />,
      },
      {
        path: "/productdetails/:productId",
        element: <ProductDetails />,
      },
    ]}
])

createRoot(document.getElementById('root')).render(
  <>
    {/* <ProductsListing /> */}
    <RouterProvider router={router} />
  </>
)
