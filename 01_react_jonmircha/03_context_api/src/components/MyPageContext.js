import { LanguageProvider } from "../context/LanguageContext";
import { LoginProvider } from "../context/LoginContext";
import { ThemeProvider } from "../context/ThemeProvider";
import { FooterContext } from "./FooterContext";
import { HeaderContext } from "./HeaderContext";
import { MainContext } from "./MainContext";

export const MyPageContext = () => {
  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <LoginProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </LoginProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};
