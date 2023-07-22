import { useEffect, useState } from "react"
import TablaPersonas from "./components/TablaPersona"
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import ModalPersona from "./components/ModalPersona"


const App = () => {
    const [personas, setPersonas] = useState([])
    const [mostrarPersona, setMostrarPersona] = useState(false)
    const [editar, setEditar] = useState(null)
    const [setPersona] = useState([])

    const mostrarPersonas = async () => {
        const response = await fetch("api/persona/Lista");
        if (response.ok) {
            const data = await response.json();
            setPersonas(data)
        } else {
            console.log("Error en los datos de la lista")
        }
    }
    useEffect(() => {
        mostrarPersonas()
    }, [])


    const guardarPersona = async (persona) => {
        const response = await fetch("api/persona/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset= utf-8'

            },
            body: JSON.stringify(persona)
        })
        if (response.ok) {
            setMostrarPersona(!mostrarPersona);
            mostrarPersonas();
        }
    }

    const editarPersona = async (persona) => {
        const response = await fetch("api/persona/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset= utf-8'

            },
            body: JSON.stringify(persona)
        })
        if (response.ok) {
            setMostrarPersona(!mostrarPersona);
            mostrarPersonas();
        }
    }
    const eliminarPersona = async (id) => {
        var respuesta = window.confirm("Desea eliminar a la persona?")
        if (!respuesta) {
            return;
        }
        const response = await fetch("api/persona/Eliminar/" + id, {
            method: 'DELETE'
        })
        if (response.ok) {
            mostrarPersonas();
        }
    }

    return (

        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista personas</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={() => setMostrarPersona(!mostrarPersona)}>Nueva Persona</Button>
                            <hr></hr>
                            <TablaPersonas data={personas}
                                setEditar={setEditar}
                                mostrarPersona={mostrarPersona}
                                setMostrarPersona={setMostrarPersona}
                                eliminarPersona={eliminarPersona}

                            />
                        </CardBody>

                    </Card>
                </Col>
            </Row>
            <ModalPersona

                mostrarPersona={mostrarPersona}
                setMostrarPersona={setMostrarPersona}
                guardarPersona={guardarPersona}
                editar={editar}
                setEditar={setEditar}
                editarPersona={editarPersona}
            />

        </Container>
    )
}
export default App;