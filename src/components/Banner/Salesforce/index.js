import React from "react";

import "./styles.scss";

function Salesforce() {
  return (
    <div className="salesforceWrapper">
      <div className="salesforceCard">
        <span className="salesforceContent sfEntrega">
          Entregamos para todo o país
        </span>
      </div>
      <div className="salesforceCard">
        <span className="salesforceContent sfPagamento">
          Parcelamos no cartão
        </span>
      </div>
      <div className="salesforceCard">
        <span className="salesforceContent sfSeguranca">
          Site seguro e confiável
        </span>
      </div>
      <div className="salesforceCard">
        <span className="salesforceContent sfTroca">Primeira troca grátis</span>
      </div>
    </div>
  );
}

export default Salesforce;
