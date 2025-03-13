import BoasVindas from "./components/BoasVindas";
import { CardButton } from "./components/CardButton";
import { CardDefault } from "./components/Card";
import { CardTwoButtons } from "./components/CardTwoButtons";
import { Aluno, Turma } from "./components/Classe";

const App = () => {
  return (
    <>
      <BoasVindas
        nome="Marcos"
        turma="FS22"
      />
      <BoasVindas
        nome="Nagila"
        turma="FS22"
      />
      <BoasVindas
        nome="Matheus"
        turma="FS31"
      />
      <Turma nome={"FS22"}>
        <Aluno nome={"Well"} />
        <Aluno nome={"Eduardo"} />
        <Aluno nome={"Leo"} />
        <Aluno nome={"Marcos"} />
      </Turma>
      <Turma nome={"FS31"}>
        <Aluno nome={"Matheus"} />
        <Aluno nome={"Adriana"} />
        <Aluno nome={"Isaac"} />
        <Aluno nome={"Magnum"} />
      </Turma>

      <CardDefault 
        urlImagem={"https://cdn.motor1.com/images/mgl/KPK4R/s3/bmw-320i-m-sport-2021-teste-br.jpg"}
        titulo={"Meu titulo"}
        descricao={"lorem ipsum dolor"}
      />

      <CardButton
        urlImagem={"https://th.bing.com/th/id/OIP.slGOk9OzPWtpW52UikR2PgHaEf?rs=1&pid=ImgDetMain"}
        titulo={"Meu titulo"}
        descricao={"lorem ipsum dolor"}
      />

      <CardTwoButtons
       urlImagem={"https://th.bing.com/th/id/OIP.3j-YPVb-yH6hVzRFyDpGvQHaE7?rs=1&pid=ImgDetMain"}
       titulo={"Meu titulo"}
       descricao={"lorem ipsum dolor"}
      />
    </>
  );
}

export default App;