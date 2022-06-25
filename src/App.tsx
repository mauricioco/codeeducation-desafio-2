import { CssBaseline, ThemeProvider } from '@mui/material';
import { PostList } from './components/PostList';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <PostList />
    </ThemeProvider>
  );
}

export default App;
