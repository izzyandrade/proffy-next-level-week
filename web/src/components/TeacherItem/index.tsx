import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/33944736?s=460&u=812470f1e48cbaaee87ce6821cb165ce38afca3d&v=4"
          alt="Israel Andrade"
        />
        <div>
          <strong>Israel Andrade</strong>
          <span>Desenvolvimento</span>
        </div>
      </header>
      <p>
        Apaixonado por desenvolvimento.
        <br />
        <br />
        Todos os dias acorda, trabalha, e estuda programação com o sonho de um
        dia poder ter um futuro incrível com os frutos do seu trabalho. Não é
        fácil, mas é isso ai, vamos pra cima.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 40,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entrar em contato" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
