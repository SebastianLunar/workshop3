
import { useState } from 'react'
import volver from '../assets/img/Back.png'
import sent from '../assets/img/send1.png'
import useFormulario from '../hooks/useFormulario'
import { ButtonSend, ChatDiv, DivConteinter, Form, Input, List, Ul } from '../styles/chat'

export default function Chat() {
        const [usuarios, setUsuarios] = useState([])
        const [formulario, handleChange, reset] = useFormulario({
          chat: '',
        })
        const submit = e => {
          e.preventDefault()
          setUsuarios([
            ...usuarios,
            formulario,
          ])
          reset()
        }
  return (
    <DivConteinter>

    
    <div>
        <img src={volver} alt='volver' />
    </div>

    <ChatDiv>
    <Ul>
        {usuarios.map(x => 
        <List key={x.chat}>{`${x.chat} `}</List>
        )}
    </Ul>
    </ChatDiv>
    <Form onSubmit={submit} >
        <Input placeholder='Hola' name='chat' onChange={handleChange} />
        <ButtonSend> <img src={sent} alt='enviar' /> </ButtonSend>

    </Form>
   
    
    </DivConteinter>
  )
}
