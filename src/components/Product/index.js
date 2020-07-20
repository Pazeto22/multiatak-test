import React from "react";

import ProductImg from "../../assets/fotosprodutos/1000x508.jpg";
import "./styles.scss";

function Product() {
  return (
    <div className="productWrapper">
      <div className="productFeat">
        <img src={ProductImg} alt="" />
        <p className="productName">
          Alto falante 6 polegadas 160W RMS Triaxial 4 Ohms Bobina Simples Shutt
          Par Potência 320W Máxima
        </p>
      </div>
      <div>
        <p className="productPrice">R$ 78,90</p>
        <p className="productPayment">
          Em
          <span className="paymentBold"> 1x </span>
          de
          <span className="paymentBold"> R$ 78,90 </span>
          s/ juros
        </p>
      </div>
      <button className="productCartBtn">
        <span className="productCartBtnIcon"></span>
        <span className="productCartBtnText">Comprar</span>
      </button>
    </div>
  );
}

export default Product;
