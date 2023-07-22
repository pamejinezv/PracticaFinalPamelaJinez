import { Table, Button } from "reactstrap"
const TablaPersona = ({ data, setEditar, mostrarPersona, setMostrarPersona, eliminarPersona}) => {
    const enviarDatos = (persona) => {
        setEditar(persona)
        setMostrarPersona(!mostrarPersona)
    }
    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>IsCompleted</th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colspan="4">Sin registros </td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.idPersona}>
                                <td>{item.nombre}</td>
                                <td>{item.descripcion}</td>
                                <td>{item.isCompleted}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Editar</Button>
                                    <Button color="danger" size="sm" onClick={() => eliminarPersona(item.idPersona)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )

                }
            </tbody>
        </Table>
    )
}
export default TablaPersona