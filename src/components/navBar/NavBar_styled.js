import styled from "styled-components";

import { brandColours , huesMain } from "../../variables/Variables";

export const ContainerNav = styled.nav`
   width: calc(80% - 4px);
   height: 3vh;
   padding: 2vh 10%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color:${huesMain.hues02};
   border:2px solid black;
`;

export const ContainerLogo = styled.div`
   display: flex;
   gap: 1rem;
   align-items: center;
   >h2{
      font-weight: 100;
      color:${brandColours.blackColor};
   }
`;

export const ContainerSettings = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
`;
