import React from "react";
import useModal from "../hooks/useModal";
import { ContactForm } from "./ContactForm";
import { Modal } from "./Modal";
import { ModalPortal } from "./ModalPortal";

export const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenModalPortal, openModalPortal, closeModalPortal] =
    useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Esto es una ventana modal 1</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
          corrupti aspernatur esse doloribus magnam possimus asperiores,
          voluptatibus voluptas alias necessitatibus qui amet! Minima explicabo
          incidunt provident, voluptatibus esse adipisci ab.
        </p>
        <img src="https://placeimg.com/200/200/nature" alt="hola" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Esto es una ventana modal 2</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
          corrupti aspernatur esse doloribus magnam possimus asperiores,
          voluptatibus voluptas alias necessitatibus qui amet! Minima explicabo
          incidunt provident, voluptatibus esse adipisci ab.
        </p>
        <img src="https://placeimg.com/200/200/tech" alt="hola" />
      </Modal>
      <button onClick={openModal3}>Modal Contacto</button>
      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
        <ContactForm />
      </Modal>
      <button onClick={openModalPortal}>Modal en Portal</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h2>esta es una modal gracias a los portales de react</h2>
      </ModalPortal>
    </div>
  );
};
