import React, { useState } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import DataTable from "./DataTable";
import { Container, Typography, Box } from "@mui/material";
import LanguageSelector from "./LanguageSelector";
import data from "./data.json";

function App() {
  const { t } = useTranslation();

  const [tableData] = useState(data);

  const columns = React.useMemo(
    () => [
      {
        Header: t("list.name"),
        accessor: "name",
      },
      {
        Header: t("list.description"),
        accessor: "description",
      },
      {
        Header: t("list.model"),
        accessor: "model",
      },
      {
        Header: t("list.freelimitations"),
        accessor: "freelimitations",
      },
      {
        Header: t("list.website"),
        accessor: "website",
        Cell: ({ value }) => (
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ),
      },
    ],
    [t]
  );

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          mb: 4,
        }}
      >
        <Typography variant="h3" component="h1">
          AI Tools
        </Typography>
        <LanguageSelector />
      </Box>
      <DataTable data={tableData} columns={columns} />
    </Container>
  );
}

export default App;
