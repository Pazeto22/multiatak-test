import React from "react";

import "./styles.css";

function HeaderMenu() {
  return (
    <>
      <div className="wrapperHeaderMenu">
        <a href="/">
          <div className="cService">Atendimento</div>
        </a>
        <a href="/">
          <div className="myAccount">Minha Conta</div>
        </a>
      </div>
    </>
  );
}

export default HeaderMenu;
