import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewInnerContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});