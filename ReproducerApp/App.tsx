/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect, useState } from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets
} from 'react-native-safe-area-context';
import { Typography } from './Typography';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const [id, setId] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setId(oldID => oldID + 1);
    }, 20_000);
    return () => clearInterval(interval);
  }, [id]);

  return (
    <View style={styles.container} key={id}>
      <ScrollView style={{paddingBottom: safeAreaInsets.bottom}}>

      <Typography role="heading" style={styles.heading} maxFontSizeMultiplier={2.0} accessibilityLiveRegion="polite">
        Hello, World
      </Typography>
      <Typography role="heading" style={styles.heading} maxFontSizeMultiplier={2.0} accessibilityLiveRegion="polite">
        World, hello
      </Typography>
      <Button
        title={"Increment ID " + id}
        onPress={() => setId(oldID => oldID + 1)}
      />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 90
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    padding: 16,
  },
});

export default App;
