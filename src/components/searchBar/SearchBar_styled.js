import styled from "styled-components";

import { VariableColor } from "../../variables/Variables";

export const ContainerFilter = styled.div`
   width: 100%;
`;

export const ContainerFilterInBody = styled.div`
   width: auto;
   height: 2.5rem;
   display: flex;
   justify-content: flex-end;
   padding: 0;

   > form {
      width:100%;
      display:flex;
      > input {
         width: 100%;
         outline: none;
         box-shadow: 0.1rem 0.1rem;
         border: none;
         padding: 0 1rem;
         transition: 0.5s;
         border: 1px solid black;
         &:focus {
            background-color: #f5f5f5;
            transition: 0.5s;
            &::placeholder {
               color: transparent;
               transition: 0.3s;
            }
         }
         &:active {
            box-shadow: 0.15em 0.15em;
            transition: 0.2s;
         }
         &::placeholder {
            color: black;
            transition: 0.3s;
         }
      }
      > button {
         font-family: inherit;
         border: none;
         font-weight: 900;
         height: 100%;
         background-color: white;
         border: 1px solid black;
         padding: 0 1rem;
         box-shadow: 0.1rem 0.1rem;
         transition: 0.2s;

         &:hover {
            transform: translate(-0.05em, -0.05em);
            box-shadow: 0.15em 0.15em;
            transition: 0.2s;
         }
         &:active {
            background-color: #cecece;
            transform: translate(0.05em, 0.05em);
            box-shadow: 0.05em 0.05em;
            transition: 0.2s;
         }
      }
   }
`;
