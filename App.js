import { StatusBar } from 'expo-status-bar';
import { Alert, Image, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  function mensaje(){
    Alert.alert('Advertencia', 'Usuario incorrecto')
    console.log('Advertencia', 'Usuario incorrecto')
  }



  return (
    <View style={styles.container}>

      <Image style={styles.img}
      source={require('./assets/paint.png')} />
      <Text style= {styles.txt1} >Happy • Holi</Text>
      <Text style= {styles.txt2}>E-mail</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input1}
      placeholder='Ingrese su e-mail'
      keyboardType="email-address"
      />

       <Text style= {styles.txt2}>Contraseña</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input1}
      placeholder='Ingrese la contraseña'
      />

      <Text style= {styles.txt2}>Celular</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input2}
      placeholder='Ingrese celular'
      keyboardType="numeric"
      />

      <TouchableOpacity style={styles.btn1}
      onPress={mensaje}>   
      <Text style={{fontSize:20, fontWeight: 'bold'}}>Login</Text>
      </TouchableOpacity>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt1:{
    fontSize: 30,
    fontFamily: "Futura", 
    fontWeight: 'bold',
    color: '#ece113',
    textAlign: 'center',
    marginTop: 20
  },

  txt2:{
    marginTop: 20,
    fontSize: 20,
    color: '#00ff80',
    alignSelf: 'flex-start',
    paddingHorizontal: 20
  },

  input1:{
    backgroundColor: 'white',
    paddingHorizontal: 25,
    width:'90%',
    height: '5%',
    borderRadius: 30
  },

  input2:{
    backgroundColor: 'white',
    paddingHorizontal: 25,
    width:'90%',
    height: '5%',
    borderRadius: 30
  },

  btn1:{
    backgroundColor: '#ff80c0' ,
    top: 40,
    paddingHorizontal: 47,
    width:'40%',
    height: '5%',
    borderRadius: 30,
    justifyContent: 'center'
  },

  img:{
    width:150,
    height:150
  },

  img2:{
    width:40,
    height:40,
  }

});

