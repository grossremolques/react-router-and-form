import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { useForm } from "react-hook-form";
export default function Home() {
    const {register, handleSubmit} = useForm();
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })
  return (
    <div className="container mt-5">
      <h1 className="text-center">Formulario con Ract Hook Form</h1>
      <Form style={{ maxWidth: "500px", margin: "auto" }} onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" {...register('name', {
            required: true
          })}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordConfirm">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="born-date">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="pais">
          <Form.Label>País</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Seleccione un país</option>
            <option value="1">Argentina</option>
            <option value="2">Venezuela</option>
            <option value="3">Chile</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="profile-picture">
          <Form.Label>Foto</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Check // prettier-ignore
          type="checkbox"
          id="terms"
          label="Terminos y condiciones"
        />
        <Button className="mt-3 w-100" variant="light" type="submit">Enviar</Button>
      </Form>

    </div>
  );
}
