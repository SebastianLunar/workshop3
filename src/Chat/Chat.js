import { useState } from "react";
import volver from "../assets/img/Back.png";
import sent from "../assets/img/send1.png";
import { NavBars } from "../Components/NavBars";
import useFormulario from "../Hooks/useFormulario";
import {
  ButtonSend,
  ChatDiv,
  DivConteinter,
  Form,
  Input,
  List,
  Ul,
} from "../styles/chat";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [formulario, handleChange, reset] = useFormulario({
    chat: "",
  });
  const submit = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, formulario]);
    reset();
  };
  return (
    <>
      <DivConteinter>
        <div>
          <img src={volver} alt="volver" onClick={() => navigate(-1)} />
        </div>

        <ChatDiv>
          <Ul>
            {usuarios.map((x) => (
              <List key={x.chat}>{`${x.chat} `}</List>
            ))}
          </Ul>
        </ChatDiv>
        <Form onSubmit={submit}>
          <Input placeholder="Hola" name="chat" onChange={handleChange} />
          <ButtonSend>
            {" "}
            <img src={sent} alt="enviar" />{" "}
          </ButtonSend>
        </Form>
      </DivConteinter>
      <NavBars active={"active"} />
    </>
  );
}
