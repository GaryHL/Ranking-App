import React from "react";
import Router from "../src/router/Router";
import GlobalSyle from "./assets/globalStyles/globalStyles";

function App() {
   return (
      <React.Fragment>
        <GlobalSyle/>
         <div className="App">
            <Router />
         </div>
      </React.Fragment>
   );
}

export default App;
