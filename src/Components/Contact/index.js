import React, { useState} from 'react';
import { validateEmail } from '../../utils/helpers'
import Form from 'react-bootstrap/Form'

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  //const [errorData, setErrorData] = useState({ name: false, email: false, message: false })

  function handleChange(e) {
    console.log("hello")
      if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            console.log('Your email is invalid.');
            setErrorMessage('Your email is invalid.');
          } 
      }
      else {
          if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
      }
      if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
      }
  }

  function handleSubmit(e) {
      e.preventDefault();
      if(!errorMessage) {
        console.log(formState);
      }
     
  }
 
  return (
      <section>
        <h2>Contact me</h2>
        <Form onSubmit={handleSubmit}>
         
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" onBlur={handleChange} defaultValue={name} placeholder="First Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" onChange={handleChange} defaultValue={email} placeholder="name@email.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Ask your questions here!</Form.Label>
              <Form.Control as="textarea" onChange={handleChange} defaultValue={message}rows={5} />
            </Form.Group>

            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
         </Form>
         
        

      </section>
    )
}

export default Contact;