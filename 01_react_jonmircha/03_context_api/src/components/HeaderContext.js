import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import LoginContext from "../context/LoginContext";
import ThemeContext from "../context/ThemeContext";

export const HeaderContext = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(LoginContext);

  return (
    <div>
      <header className={theme}>
        <h2>{texts.headerTitle}</h2>
        <h2>{texts.headerSubtitle}</h2>
        <select name="language" onChange={handleLanguage}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <input
          type="radio"
          name="theme"
          id="light-context"
          value="light"
          onClick={handleTheme}
        />
        <label htmlFor="light-context">{texts.headerLight}</label>
        <input
          type="radio"
          name="theme"
          id="dark-context"
          value="dark"
          onClick={handleTheme}
        />
        <label htmlFor="dark-context">{texts.headerDark}</label>
        <button onClick={handleAuth}>
          {auth ? texts.buttonLogout : texts.buttonLogin}
        </button>
      </header>
    </div>
  );
};
