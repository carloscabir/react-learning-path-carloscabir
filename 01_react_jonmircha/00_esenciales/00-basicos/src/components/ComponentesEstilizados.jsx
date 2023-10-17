import React from "react";
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

// Esta es otra forma de inyectar css a react.
// Obviamente con styled-components
// Y recuerda, cada que vayas a hacer tu componente, con CamelCase!!!
export default function ComponentesEstilizados() {
  // Variables CSS
  let mainColor = "#d8bfd8",
    mainAlpgaColor80 = "#d8bfd880",
    fontWhite = "#ddd";

  // Callback CSS
  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  // Animaciones CSS
  const fadein = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;

  }
  `;

  // styled-component (SASS compatible)
  const Styledh3 = styled.h3`
    ${({ isAnimation }) =>
      isAnimation &&
      css`
        @keyframes si {
          0% {
            transform: scale(1.2);
          }

          100% {
            transform: scale(1);
          }
        }

        animation: si 2s infinite alternate both;
      `}

    padding: 2rem;
    text-align: center;
    background-color: ${mainColor};
    color: ${fontWhite};
    color: black;
    transition: ${setTransitionTime(".5s")};
    /* para pasar props solo lo hacemos con formato de callback  */
    color: ${(props) => props.color};
    /* destructuracion de props */
    color: ${({ color }) => color};
    /* condicional */
    color: ${({ color }) => (color ? color : fontWhite)};

    /*
     renderizado condicional como boton (props)
      - Tienes que tener en cuenta de que haras uso de la propiedad css de styled-components (esto servira para hacer uso de styled-components dentro de styled-components)
     */
    ${({ isButton }) =>
      isButton &&
      css`
        margin: 2rem auto;
        border-radius: 0.5rem;
        color: ${({ color }) => (color ? color : "black")};
        cursor: pointer;
        max-width: 50%;
        background-color: black;
        border: medium white solid;
      `}

    &:hover {
      background-color: ${mainAlpgaColor80};
    }
  `;

  // Keyframes (styled-component)
  const StyledP = styled.p`
    background-color: rebeccapurple;
    padding: 1rem;
    color: black;
    max-width: 50%;
    text-align: center;
    margin: 1rem auto;

    ${({ isAnimation }) =>
      isAnimation &&
      css`
        animation: ${fadein} 2s ease-in-out infinite alternate both;
      `}
  `;

  // Theme Provider (styled-component)
  // - Este solo va a ser un container de variables o componentes (como le quieras decir)
  const light = {
    color: "#222",
    bgColor: "#DDD",
  };

  const dark = {
    bgColor: "#222",
    color: "#DDD",
  };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  // Herencia de Hermanos ya renderizados (redeondeo) (styled-component)
  const BoxRounded = styled(Box)`
    border-radius: 1rem;
    max-width: 50%;
    margin: auto;
  `;

  // createGlobalStyle
  // Nos permite crear estilos globales que aplicaran para toda la aplicacion
  const GlobalStyle = createGlobalStyle`
  h2{
    padding: 2rem;
    background-color: #333;
    color: #61dafb;
    max-width: 50%;
    margin: auto;
    border-radius: 1rem;    
  }
  `;
  // Vamos a ver toda la App.
  // Estos usualmente se deberian aplicar en App.js, pero por cuestiones didacticas...

  // Render habitual
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <h2>Styled - Components</h2>
      <Styledh3 isAnimation>
        Hola Soy un h3 estilizado con styled-components
      </Styledh3>
      <Styledh3 color="black">
        Hola soy un h3 estilizado con styled-components y props
      </Styledh3>
      <Styledh3 isButton color="skyblue">
        Soy un h3 estilizado como un boton
      </Styledh3>
      <Styledh3 isAnimation>
        Soy un h3 estilizado con keyframes de styled-components
      </Styledh3>
      <StyledP>hola soy p estilizado sin animacion con props</StyledP>
      <StyledP isAnimation>
        hola soy p estilizado con animacion con props
      </StyledP>
      <ThemeProvider theme={light}>
        <Box>Soy una caja Light</Box>
        <BoxRounded>Soy una caja redondeada Light</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja Dark</Box>
        <BoxRounded>Soy una caja redondeada Dark</BoxRounded>
      </ThemeProvider>
    </>
  );
}
