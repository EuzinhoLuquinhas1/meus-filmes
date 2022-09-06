import react from "react"; 

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home (){ 
    return(
     <View style={styles.container}>
         <Text style={styles.titulo}>Meus Filmes</Text>
         <Text style={styles.subtitulo}>Olá Lucas, Boa Noite!!</Text>

         <TextInput
              style={styles.campo}
              placeholder="Nome do Filme"
         />
             
        <TouchableOpacity style = {styles.button}>
             <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

     </View>
    );
}

//Criando os Estilos

const styles = StyleSheet.create({
      container:{
      flex: 1,
      backgroundColor: '#30478C',
      paddingVertical: 70,
      paddingHorizontal: 20
      },

      titulo:{
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 10,
          color: '#FFD700',
          marginLeft: 100
      },

      subtitulo:{
          color: '#FFF',
          fontSize: 15,
          marginLeft: 115
      },

      campo:{
          backgroundColor: '#1F1E25',
          color: '#FFF',
          fontSize: 18,
          marginTop: 30,
          borderRadius: 7,
          padding: 15
      },

      greetings:{
          color: '#FFF'
      },

      button:{
          backgroundColor: '#A370F7',
          padding: 15,
          borderRadius: 7,
          alignItems: 'center',
          marginTop: 20
      },

      buttonText: {
          color: '#FFF',
          fontSize: 17,
          fontWeight: 'bold'
      },
});