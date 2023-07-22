import { useState, useEffect } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const modeloPersona= {
    idPersona: 0,
    nombre: "",
    descripcion: "",
    isCompleted: ""
}

const ModalPersona = ({ mostrarPersona, setMostrarPersona, guardarPersona, editar, setEditar, editarPersona }) => {

    const [persona, setPersona] = useState(modeloPersona);

    const actualizaDato = (e) => {
        console.log(e.target.name + ":" + e.target.value)
        setPersona({
            ...persona,
            [e.target.name]: e.target.value
        })

    }

    const enviarDatos = () => {
        if (persona.idPersona == 0) {
            guardarPersona(persona)
        } else {
            editarPersona(persona)
        }
    }

    useEffect(() => {
        if (editar != null) {
            setPersona(editar)
        } else {
            setPersona(modeloPersona)
        }
    }, [editar])

    const cerrarPersona = () => {
        setMostrarPersona(!mostrarPersona)
        setEditar(null)
    }

    return (
        <Modal isOpen={mostrarPersona}>
            <ModalHeader>
                {persona.idPersona == 0 ? "Nueva Persona" : "Editar Persona"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizaDato(e)} value={persona.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Descripcion</Label>
                        <Input name="descripcion" onChange={(e) => actualizaDato(e)} value={persona.descripcion} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Esta completo</Label>
                        <Input name="isCompleted" onChange={(e) => actualizaDato(e)} value={persona.isCompleted} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarPersona}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}
export default ModalPersona