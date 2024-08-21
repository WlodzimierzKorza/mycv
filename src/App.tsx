import { Container, Paper, ThemeProvider } from "@mui/material";
import Header from "./sections/Header";
import Summary from "./sections/Summary";
import { theme } from "./theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Paper elevation={5} sx={{ p: 4 }}>
          <Header />
          <Summary />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
