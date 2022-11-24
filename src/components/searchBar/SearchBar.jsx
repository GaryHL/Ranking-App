import React from "react";
import { ContainerFilter, ContainerFilterInBody } from "./SearchBar_styled";

const searchBar = (props) => {
   return (
      <React.Fragment>
         {props.inBody == true ? (
            <ContainerFilterInBody>
               <form action="">
                  <input
                     type="text"
                     placeholder="Search App or cathegory"
                     id="searchInput"
                  />
                  <button>Buscar</button>
               </form>
            </ContainerFilterInBody>
         ) : (
            <ContainerFilter>🔍</ContainerFilter>
         )}
      </React.Fragment>
   );
};

export default searchBar;
