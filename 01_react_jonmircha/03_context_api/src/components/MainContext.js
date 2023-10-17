import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

export const MainContext = ({ auth }) => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    <div>
      <main className={theme}>
        <p>{texts.mainWelcome}</p>
        {auth ? <p>{texts.mainHello}</p> : <p>{texts.maiWelcome}</p>}

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          quaerat placeat minima. Inventore atque, blanditiis corporis alias
          consequatur vero eaque consectetur perspiciatis facilis doloribus
          dicta. Dolorem quasi quibusdam explicabo atque.
        </p>
      </main>
    </div>
  );
};
