import React from "react";

export const Footer = ({ theme, texts }) => {
  return (
    <div>
      <footer className={theme}>
        <h4>{texts.footerTitle}</h4>
      </footer>
    </div>
  );
};
