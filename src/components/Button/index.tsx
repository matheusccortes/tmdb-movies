import {Pressable, PressableProps, Text} from 'react-native';
import {styles} from './styles';

type ButtonProps = PressableProps & {
  title: string;
};

export function Button({title, disabled, ...rest}: ButtonProps) {
  return (
    <Pressable style={[styles.button, {opacity: disabled ? 0.7 : 1}]} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
