import React from "react";

import "./styles.scss";

function HeaderMenu() {
  return (
    <div className="wrapperHeaderMenu">
      <a className="cService" href="/">
        <span>Atendimento</span>
      </a>
      <a className="myAccount" href="/">
        <span>Minha Conta</span>
      </a>
    </div>
  );
}

export default HeaderMenu;
