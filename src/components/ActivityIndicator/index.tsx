import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {theme} from '../../theme';

export function ActivityIndicator({
  color = theme.colors.secondary[900],
  ...rest
}: ActivityIndicatorProps) {
  return <RNActivityIndicator color={color} {...rest} />;
}
