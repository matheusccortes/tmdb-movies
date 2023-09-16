import {StatusBar} from 'react-native';
import {Routes} from './src/routes';
import {theme} from './src/theme';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
      />
      <Routes />
    </>
  );
}
