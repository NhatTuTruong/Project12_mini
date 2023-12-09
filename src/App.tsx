import './style.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from "./components/Layout/MainLayout"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Category from "./pages/Category"
import Product from "./pages/Product"
import Login from "./pages/Login"
import Customer from "./pages/Customer"
import Error404 from "./pages/error/Error404"

const queryClient = new QueryClient();
function App() {
  return (
    <>
    
       <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home/>} />
              <Route path='blog' element={<Blog />} />
              <Route path='categories' element={<Category />} />
              <Route path='products' element={<Product />} />
              <Route path='login' element={<Login />} />
              <Route path='customer' element={<Customer />} />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}

export default App
