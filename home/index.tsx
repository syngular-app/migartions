import React from "react";
import "./style.css";

export const Home = (): JSX.Element => {
  return (
    <div className="home">
      <div className="div">
        <div className="overlap-group">
          <div className="text-wrapper">Escaneie o QR Code</div>
          <div className="overlap">
            <img className="q-rcode" alt="Q rcode" src="q-rcode.png" />
            <img className="chevron-left" alt="Chevron left" src="chevron-left.png" />
            <img className="img" alt="Chevron left" src="chevron-left-2.png" />
            <img className="chevron-left-2" alt="Chevron left" src="chevron-left-3.png" />
            <img className="chevron-left-3" alt="Chevron left" src="image.png" />
          </div>
          <div className="text-wrapper-2">24/11/2023 - 19h00</div>
          <p className="p">Rua Borges Figueiredo, Mooca - SP</p>
        </div>
        <img className="align-justify" alt="Align justify" src="align-justify.png" />
      </div>
    </div>
  );
};
