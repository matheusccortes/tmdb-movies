import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  label: {
    color: theme.colors.primary[700],
    marginBottom: theme.spacing.sm,
  },
  textInput: {
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.primary[200],
    padding: theme.spacing.lg,
    color: theme.colors.primary[700],
    fontWeight: 'bold',
  },
});
