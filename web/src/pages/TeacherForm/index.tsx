import React, { useState, FormEvent } from "react";
import PageHeader from "../../components/PageHeader";
import "./styles.css";
import Input from "../../components/Input";
import warningIcon from "../../assets/images/icons/warning.svg";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

function TeacherForm() {
  const history = useHistory();
  const [scheduleItens, setScheduleItens] = useState([
    {
      week_day: 0,
      from: "",
      to: "",
    },
  ]);

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  function addScheduleItem() {
    setScheduleItens([
      ...scheduleItens,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post("/classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItens,
      })
      .then(() => {
        alert("Cadastro feito com sucesso!");
        history.push("/");
      })
      .catch((e) => alert("Erro no cadastro.. tente novamente"));
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItens = scheduleItens.map((item, index) => {
      if (index === position) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setScheduleItens(updatedScheduleItens);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher este formulário de inscrição."
      />
      <main>
        <form action="" onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              label="Nome completo"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Avatar"
              name="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              label="Whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <TextArea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              label="Matéria"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Ciências", label: "Ciências" },
                { value: "Matemática", label: "Matemática" },
                { value: "História", label: "História" },
                { value: "Geografia", label: "Geografia" },
                { value: "Inglês", label: "Inglês" },
                { value: "Espanhol", label: "Espanhol" },
                { value: "Português", label: "Português" },
                { value: "Física", label: "Física" },
                { value: "Química", label: "Química" },
                { value: "Programação", label: "Programação" },
                { value: "Design", label: "Design" },
                { value: "Estatística", label: "Estatística" },
              ]}
            />
            <Input
              label="Custo da sua hora por aula"
              name="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addScheduleItem}>
                + Novo Horário
              </button>
            </legend>

            {scheduleItens.map((item, index) => {
              return (
                <div key={item.value} className="schedule-item">
                  <Select
                    label="Dia da semana"
                    name="week_day"
                    value={item.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
                    options={[
                      { value: "0", label: "Domingo" },
                      { value: "1", label: "Segunda-Feira" },
                      { value: "2", label: "Terça-Feira" },
                      { value: "3", label: "Quarta-Feira" },
                      { value: "4", label: "Quinta-Feira" },
                      { value: "5", label: "Sexta-Feira" },
                      { value: "6", label: "Sábado" },
                    ]}
                  />
                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={item.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={item.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados.
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
