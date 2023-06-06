import { useState } from "react";
import "./App.css";
import { ThemeVariantsProps, theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import { Button, Switch } from "./components";

function App() {
  const [activeScheme, setActiveScheme] = useState<ThemeVariantsProps>(
    ThemeVariantsProps.light
  );
  const activeTheme = theme(activeScheme);

  return (
    <ThemeProvider theme={activeTheme}>
      <Button>primary</Button>
      <Button variant="secondary">secondary</Button>
      <Switch
        onChange={() =>
          setActiveScheme(
            activeScheme === ThemeVariantsProps.light
              ? ThemeVariantsProps.dark
              : ThemeVariantsProps.light
          )
        }
      />
    </ThemeProvider>
  );
}
export default App;
