import React, { useState, FormEvent } from "react";
import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

function TeacherList() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeekday] = useState("");
  const [time, setTime] = useState("");
  const [teachers, setTeachers] = useState([]);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();
    const response = await api.get("/classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis.">
        <form id="search-teacher" onSubmit={searchTeachers}>
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
          <Select
            label="Dia da semana"
            name="week_day"
            value={week_day}
            onChange={(e) => setWeekday(e.target.value)}
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
            label="Hora"
            name="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
