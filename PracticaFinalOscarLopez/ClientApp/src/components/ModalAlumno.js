﻿import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"


//variables
const ModeloAlumno = {
    idAlumno: 0,
    nombre: "",
    materia: "",
    asignacion: ""
}


const ModalAlumno = ({ mostrarModal, setMostrarModal, guardarAlumno, editar, setEditar, editarAlumno }) => {

    const [alumno, setAlumno] = useState(ModeloAlumno);
    const actualizaDato = (e) => {
        console.log(e.target.name + ":" + e.target.value)
        setAlumno(
            {
                ...alumno, [e.target.name]: e.target.value
            }
        )
    }
    const enviarDatos = () => {
        if (alumno.idAlumno == 0) {
            guardarAlumno(alumno)
        } else {
            editarAlumno(alumno)
        }
    }

    useEffect(() => {
        if (editar != null) {
            setAlumno(editar)
        } else {
            setAlumno(ModeloAlumno)
        }

    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null) //el null evitara que se guarden los datos al cerra sin guardar
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {alumno.idAlumno == 0 ? " Nuevo Registro" : "Editar Registro"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizaDato(e)} value={alumno.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Materia</Label>
                        <Input name="materia" onChange={(e) => actualizaDato(e)} value={alumno.materia} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Asignacion / Tarea</Label>
                        <Input name="asignacion" onChange={(e) => actualizaDato(e)} value={alumno.asignacion} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>

    )
}
export default ModalAlumno;