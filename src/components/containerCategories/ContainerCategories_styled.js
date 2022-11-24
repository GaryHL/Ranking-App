import styled from "styled-components";

export const ContainerCategoryStyled = styled.div`
   width: 80%;
   padding:0% 10%;
   height: auto;
   display:grid;
   grid-template-columns: auto auto auto;
   grid-gap:1rem;
   > button {
      font-family: inherit;
      border:none;
      height: 100%;
      background-color: white;
      border: 1px solid black;
      padding: 0.5rem 1rem;
      /* box-shadow: 0.1rem 0.1rem; */
      transition: 0.2s;

      &:hover {
         transform: translate(-0.05em, -0.05em);
         box-shadow: 0.15em 0.15em black;
         transition: 0.2s;
         border:1px solid black;
      }
      &:active {
         background-color: #eeeeee;
         transform: translate(0.05em, 0.05em);
         box-shadow: 0.05em 0.05em;
         transition: 0.2s;
      }
   }
`;
