import styled from "styled-components";

import { VariableColor } from "../../variables/Variables";

export const ContainerNav = styled.nav`
   width: 80%;
   height: 3vh;
   padding: 2vh 10%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color:${VariableColor.mainColor};
`;

export const ContainerLogo = styled.div`
   display: flex;
   gap: 1rem;
   align-items: center;
   >h2{
      font-weight: 100;
   }
`;

export const ContainerSettings = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
`;
