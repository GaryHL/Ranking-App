import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../views/home/Home";

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/home" element={<h1>Home</h1>} />
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
