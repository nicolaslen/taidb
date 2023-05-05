import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ButtonGroup variant="contained" aria-label="Language Selector">
      <Button onClick={() => handleLanguageChange("en")}>
        <span role="img" aria-label="United States Flag">
          🇺🇸
        </span>
      </Button>
      <Button onClick={() => handleLanguageChange("es")}>
        <span role="img" aria-label="Spain Flag">
          🇪🇸
        </span>
      </Button>
    </ButtonGroup>
  );
}

export default LanguageSelector;
