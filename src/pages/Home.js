import react from "react"; 

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home (){ 
    return(
     <View>
         <Text>Meus Filmes</Text>
         <Text>Olá Lucas, Boa Noite!!</Text>

         <TouchableOpacity>
             <Text>Adicionar</Text>
         </TouchableOpacity>
         
     </View>
    );
}

//Criando os Estilos

const styles = StyleSheet.create({
    
});