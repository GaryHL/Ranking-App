import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Filter from '../views/filter/Filter'
import Home from "../views/home/Home";

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/filter" element={<Filter/>} />
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
