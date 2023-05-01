import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, Button, SafeAreaView} from 'react-native';
import { ThemeContext } from './context/ThemeContext';
import MyKey from './key';
// import Button from './buttons';

export default function App() {
const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#000'}]}>
      <Text>SV Calulator</Text>
      <StatusBar style="auto" />
      <Switch
        value={theme === 'light'}
        onValueChange={()=> setTheme(theme === 'light' ? 'dark': 'light')}
      />
    <MyKey></MyKey>
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});




