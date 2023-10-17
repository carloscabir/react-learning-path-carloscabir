import React from 'react';
import "@testing-library/jest-dom/extend-expect" 
import { fireEvent ,render } from "@testing-library/react"
import Note from "./Note"
import { prettyDOM  } from '@testing-library/react';

test("renders content", () => { 
  const note = {
    content: "this is a test",
    important: true
  }

  const component = render(<Note note={note} />);

  // const el = component.getByText("this is a test")
  // Si tiene el texto
  component.getByText("this is a test")
  // component.getByText("make not important")
  

  // Revisar si es que el componente tiene el texto
  // expect(component.container).toHaveTextContent(note.content) 
  
  // Debugear y mandar a la consola lo que se debugea xd
  // component.debug() 
  
  // Comprobar el contenedor padre
  // component.container.querySelector("div")
  
  // Mandar a la consola de una forma "bonita" el arbol del componente
  // const div = component.container.querySelector("div")
  // console.log(prettyDOM(div))
})

test("clicking the button calls event handler once", () => { 
    const note = {
    content: "this is a test",
    important: true
  }

  const mockHandler = jest.fn();

  const component = render(<Note note={note} toggleImportance={mockHandler} />);
  
  const button = component.getByText("make not important");
  fireEvent.click(button)

  // Comprobacion del llamado del evento
  // expect(mockHandler.mock.calls).toHaveLength(1);
 
  // Mejor legibilidad al llamado
  expect(mockHandler).toHaveBeenCalledTimes(1);

})