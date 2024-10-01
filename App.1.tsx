import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import { styles } from './App';


export default function App() {
  return (
    <View style={styles.container}>


      <Text>Digite seu nome</Text>
      <TextInput placeholder='Nome' style={styles.textinp} />
      <StatusBar style="auto" />

      <Text>Digite seu email</Text>
      <TextInput placeholder='Email' style={styles.textinp} />
      <StatusBar style="auto" />

      <Text>Digite sua idade</Text>
      <TextInput placeholder='Senha' style={styles.textinp} />
      <StatusBar style="auto" />

      <Text>Digite sua idade</Text>
      <TextInput placeholder='Idade' style={styles.textinp} />
      <TouchableOpasity activeOpasity={0.7} style={styles.button}></TouchableOpasity>
      <StatusBar style="auto" />

    </View>
  );
}
