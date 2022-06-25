import { CssBaseline, ThemeProvider } from '@mui/material';
import { Navbar } from './components/Navbar';
import { PostList } from './components/PostList';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar />
      <PostList />
    </ThemeProvider>
  );
}

export default App;
