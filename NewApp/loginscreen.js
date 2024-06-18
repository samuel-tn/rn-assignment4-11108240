import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function loginscreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        navigation.navigate('Homepage');
    };
    return(
        <View style={styleS.container}>
            <Text style={styles.title}> Login</Text>
            <TextInput 
            style={styles.input} 
            placeholder='Name' 
            value={name} 
            onChangeText={setName} 
            placeholderTextColor="#000"/>
            <TextInput 
            style={styles.input} 
            placeholder='Email' 
            value={email} 
            onChangeText={setEmail} 
            placeholderTextColor="#000"/>
            <Button title='Login' onPress={handleLogin} />     
        </View>
    );
    
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'flex-start'
},
title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center'
},
input: {
    height: 40,
    borderColor: '#ccc',
    borderwidth: 1,
    marginBottom: 12,
    paddinghorizontal: 8,
},
});

