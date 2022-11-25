import React from "react";

import { Header, ContainerSearchBar } from "./Home_styled";

import FilterForStars from "../../components/filterForStars/FilterForStars";
import NavBar from "../../components/navBar/NavBar";
import SearchBar from "../../components/searchBar/SearchBar";
import ContainerCategories from "../../components/containerCategories/ContainerCategories";

const Home = () => {
   return (
      <div>
         <NavBar />
         <Header>
            <h1>
               The best
               <br /> and worst
               <br /> Apps on the web
            </h1>
         </Header>
         <FilterForStars />
         <ContainerSearchBar>
            <SearchBar inBody={true} />
         </ContainerSearchBar>
         <ContainerCategories></ContainerCategories>
         
      </div>
   );
};

export default Home;
