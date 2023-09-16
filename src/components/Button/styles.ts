import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.secondary[900],
    borderRadius: theme.borderRadius.sm,
  },
  title: {
    color: theme.colors.background,
    fontWeight: 'bold',
  },
});
