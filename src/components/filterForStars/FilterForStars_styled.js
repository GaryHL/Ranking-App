import styled, { keyframes } from "styled-components";

const tabActive = keyframes`
from{
    width:0%;
}
to{
    width:100%;
}
`;

export const ContainerFilter = styled.div`
   width: 100%;
   height: 7vh;
   display: grid;
   grid-template-columns: auto auto auto;
`;

export const TabFilter = styled.div`
   width: auto;
   
   transition: 0.3s;
   background-color: #aeaeae;
   color: #00000054;
   ${(props) => (props.isActive ? "background-color:#9e9e9eff;color:#000000;" : null)}
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   transition: 0.3s;
   &:hover {
      cursor: pointer;
      transition: 0.3s;
      color: #000000;
   }
   &::after {
      ${(props) =>
         props.isActive
            ? `content:"";
    position:absolute;;
    width:100%;
    height:3px;
    background-color:black;    
    bottom:0;`
            : null}
      animation: ${tabActive} 0.3s;
      transition: 0.3s;
   }
`;
