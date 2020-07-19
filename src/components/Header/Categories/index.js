import React, { useState } from "react";

import "./styles.scss";

function Categories() {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line
  const toggleMenu = () => setIsOpen((isOpen = !isOpen));

  return (
    <div className="categoriesWrapper">
      <div onClick={toggleMenu} className="categoriesMenu">
        <div className="categoriesBtn">
          <span className="categoriesHamburguer"></span>
          <span>
            <p>Todos os</p>
            Departamentos
          </span>
        </div>
        <div className="trianguloCat" />
      </div>
      {isOpen && (
        <div className="categoriesMore">
          <ul>
            <li>Exemplo de Categoria</li>
            <li>Exemplo de Categoria 2</li>
            <li>Exemplo de Categoria 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Categories;
