import React from "react";
import "./style.css";

export const Home = () => {
    return (
        <div className="home">
            <div className="div">
                <div className="overlap-group">
                    <div className="text-wrapper">Escaneie o QR Code</div>
                    <div className="overlap">
                        <img className="q-rcode" alt="Q rcode" src="q-rcode.png" />
                        <img className="chevron-left" alt="Chevron left" src="chevron-left.svg" />
                        <img className="img" alt="Chevron left" src="chevron-left-2.svg" />
                        <img className="chevron-left-2" alt="Chevron left" src="chevron-left-3.svg" />
                        <img className="chevron-left-3" alt="Chevron left" src="image.svg" />
                    </div>
                    <div className="text-wrapper-2">DD/MM/AAAA - 00h00</div>
                    <p className="p">Rua XXXX, Bairro - Cidade</p>
                </div>
                <img className="align-justify" alt="Align justify" src="align-justify.svg" />
            </div>
        </div>
    );
};
