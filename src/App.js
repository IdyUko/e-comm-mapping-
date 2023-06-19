import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/header"
import Home from "./Components/Home/home"
import Shop from "./Components/Shop/shop"
import Products from "./Components/Products/products"
import Blog from "./Components/Blog/blog"
import Contact from "./Components/Contact/contact"



const App= () => {
  return (
        <BrowserRouter>
                <Header/>
                        <Routes>
                                <Route path="/" element= {<Home/>}/>
                                <Route path ="/shop"  element= {<Shop/>}/>
                                <Route path ="/products"  element= {<Products/>}/>
                                <Route path ="/blog"  element= {<Blog/>}/>
                                <Route path ="/contact"  element= {<Contact/>}/>
                        </Routes>
               
        </BrowserRouter>

  )
};

export default App;


