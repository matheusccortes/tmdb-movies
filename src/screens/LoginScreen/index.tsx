import {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {AppScreen} from '../../components/AppScreen';
import {TextInput} from '../../components/TextInput';
import {Button} from '../../components/Button';
import {RootStackScreenProps} from '../../routes/types';
import {styles} from './styles';

const EMAIL = 'johndoe@example.com';
const PASSWORD = 'secret-password';

type LoginScreenProps = RootStackScreenProps<'Login'>;

export function LoginScreen({navigation}: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoginButtonDisabled = email.length === 0 || password.length === 0;

  const onPressLogIn = () => {
    if (email === EMAIL && password === PASSWORD) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Login failed', 'Email or password are invalid');
    }
  };

  return (
    <AppScreen scrollable>
      <View style={styles.container}>
        <>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Login to your account</Text>
          </View>
          <View style={styles.textInputSetContainer}>
            <TextInput
              placeholder="Enter your email"
              label="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Enter your password"
              label="Password"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <Button
            title="Log In"
            onPress={onPressLogIn}
            disabled={isLoginButtonDisabled}
          />
        </>
      </View>
    </AppScreen>
  );
}
