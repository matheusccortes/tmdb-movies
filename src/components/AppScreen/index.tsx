import {ReactNode} from 'react';
import {View, ScrollView} from 'react-native';
import {AppScreenHeader} from './AppScreenHeader';
import {styles} from './styles';

interface AppScreenProps {
  children: ReactNode;
  scrollable?: boolean;
  headerTitle?: string;
}

export function AppScreen({
  children,
  scrollable = false,
  headerTitle = '',
}: AppScreenProps) {
  return (
    <View style={styles.container}>
      {scrollable ? (
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {headerTitle.length > 0 && <AppScreenHeader title={headerTitle} />}
          {children}
        </ScrollView>
      ) : (
        <>
          {headerTitle.length > 0 && <AppScreenHeader title={headerTitle} />}
          {children}
        </>
      )}
    </View>
  );
}
