import React from "react";

import "./styles.scss";

function CategoriesList() {
  return (
    <nav className="cListWrapper">
      <ul>
        <li>
          <span className="cListIcons cLSomVideo"></span>
          <span>
            Som e<p>Video</p>
          </span>
        </li>
        <li>
          <span className="cListIcons cLFLI"></span>
          <span>
            Faróis, Lanternas
            <p>e Iluminação</p>
          </span>
        </li>
        <li>
          <span className="cListIcons cLAcessoriosI"></span>
          <span>
            Acessórios
            <p>internos</p>
          </span>
        </li>
        <li>
          <span className="cListIcons cLAcessoriosE"></span>
          <span>
            Acessórios
            <p>externos</p>
          </span>
        </li>
        <li>
          <span className="cListIcons cLVestuario"></span>
          <span>Vestuário</span>
        </li>
        <li>
          <span className="cListIcons cLInfantil"></span>
          <p>Infantil</p>
        </li>
      </ul>
    </nav>
  );
}

export default CategoriesList;
