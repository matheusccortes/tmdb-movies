import {
  View,
  Text,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {styles} from './styles';

type TextInputProps = RNTextInputProps & {
  label: string;
};

export function TextInput({label, ...rest}: TextInputProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput style={styles.textInput} {...rest} />
    </View>
  );
}
