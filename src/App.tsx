import { useCallback, useMemo, useState } from "react";
import "./App.css";
import { ThemeVariantsProps, theme } from "./theme";
import { ThemeProvider, Typography } from "@mui/material";
import { Button, Switch } from "./components";

function App() {
  const [mode, setMode] = useState<ThemeVariantsProps>(
    ThemeVariantsProps.light
  );
  const activeTheme = useMemo(() => theme(mode), [mode]);

  const handleOnChange = useCallback(
    () =>
      setMode(
        mode === ThemeVariantsProps.light
          ? ThemeVariantsProps.dark
          : ThemeVariantsProps.light
      ),
    [mode]
  );

  return (
    <ThemeProvider theme={activeTheme}>
      <Button>
        <Typography>Primary</Typography>
      </Button>
      <Button variant="secondary">
        <Typography>Secondary</Typography>
      </Button>
      <Switch onChange={handleOnChange} />
    </ThemeProvider>
  );
}
export default App;
