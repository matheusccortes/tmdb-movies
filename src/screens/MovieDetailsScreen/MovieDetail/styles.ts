import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export const styles = StyleSheet.create({
  container: {},
  label: {
    color: theme.colors.primary[900],
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
  },
  value: {
    color: theme.colors.primary[700],
    fontSize: theme.fontSize.md,
  },
});
