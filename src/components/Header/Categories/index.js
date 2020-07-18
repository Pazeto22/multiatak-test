import React from "react";

import "./styles.scss";

function Categories() {
  return (
    <div className="categoriesWrapper">
      <div className="categoriesMenu">
        <div className="categoriesBtn">
          <span className="categoriesHamburguer"></span>
          <span>
            <p>Todos os</p>
            Departamentos
          </span>
        </div>
        <div className="trianguloCat" />
      </div>
      <div className="categoriesMore">
        <ul>
          <li>Exemplo de Categoria</li>
          <li>Exemplo de Categoria 2</li>
          <li>Exemplo de Categoria 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
