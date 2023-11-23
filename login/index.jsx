import React from "react";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="div">
        <p className="esqueceu-sua-senha">
          <span className="text-wrapper">Esqueceu sua senha?</span>
          <span className="span">&nbsp;</span>
          <span className="text-wrapper-2">Clique aqui.</span>
        </p>
        <div className="entrar">
          <div className="overlap-group">
            <div className="text-wrapper-3">Entrar</div>
          </div>
        </div>
        <div className="imput-usurio">
          <div className="overlap">
            <div className="text-wrapper-4">Usuário</div>
            <img className="vector" alt="Vector" src="https://c.animaapp.com/cyikGcWT/img/vector.svg" />
            <img className="img" alt="Vector" src="https://c.animaapp.com/cyikGcWT/img/vector-5.svg" />
          </div>
        </div>
        <div className="imput-senha">
          <div className="overlap">
            <div className="text-wrapper-4">Senha</div>
            <div className="overlap-group-2">
              <img className="vector-2" alt="Vector" src="https://c.animaapp.com/cyikGcWT/img/vector-4.svg" />
              <img className="vector-3" alt="Vector" src="https://c.animaapp.com/cyikGcWT/img/vector-3.svg" />
            </div>
          </div>
        </div>
        <img className="logo" alt="Logo" src="https://c.animaapp.com/cyikGcWT/img/logo@2x.png" />
        <div className="imput-ID">
          <div className="overlap">
            <div className="text-wrapper-4">ID Empresa</div>
            <div className="overlap-group-3">
              <img className="vector-4" alt="Vector" src="https://c.animaapp.com/cyikGcWT/img/vector-2.svg" />
              <img className="vector-5" alt="Vector" src="https://c.animaapp.com/cyikGcWT/img/vector-1.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
