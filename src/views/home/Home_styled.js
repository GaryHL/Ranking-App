import styled from "styled-components";

import { VariableColor } from "../../variables/Variables";

export const Header = styled.div`
   width: 80%;
   padding: 0 10%;
   height: 30vh;
   display: flex;
   align-items: center;
   > h1 {
      font-weight: 400;
      font-family: "Bangers", cursive;
      font-size: 3rem;
   }
`;

export const ContainerSearchBar = styled.div`
   display: grid;
   margin:2vh 0vh;
   padding:0 10%;
   margin-top:-3vh;
   border:solid 2px black;
   width: calc(80% - 4px);
   align-items: center;
   height: 30vh;
   background-color: ${VariableColor.mainColor};
`;
