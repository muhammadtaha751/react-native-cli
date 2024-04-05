import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

const Collapse = ({ title, children, isOpen, onPress }) => {
    
    return (
        <View>
            <TouchableOpacity onPress={onPress} >
                <Text style={styles.text} >{title}</Text>
            </TouchableOpacity>
            {isOpen && children}
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    text: {
        color: "black",
        paddingTop: 15
    },
    modalView: {
        width: '97%', // 95% width of the screen
        height: '100%', // 95% height of the screen
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default Collapse;
