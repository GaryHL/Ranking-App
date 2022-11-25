import React from 'react';
import {ContainerNav, ContainerLogo, ContainerSettings} from './NavBar_styled'


const NavBar = () => {
  return (
    <React.Fragment>
        <ContainerNav>
          <ContainerLogo>
            <span>✔</span>
            <h2>checkapp</h2>
          </ContainerLogo>
          <ContainerSettings>
            <span>🔍</span>
            <span>⚙</span>
            {/* <SearchBar>Buscar</SearchBar>
            <Settings>...</Settings> */}
          </ContainerSettings>
        </ContainerNav>
    </React.Fragment>
  )
}

export default NavBar