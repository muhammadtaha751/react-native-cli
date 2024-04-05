import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import Modal from '../components/ModalComponent';

export default function Vacancy({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleButtonPress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    function home() {
        navigation.navigate('Dashboard')
    }

    return (
        <ScrollView>
            <View>
                <View>
                    <Logo />
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Syed Jawad
                    </Text>
                </View>
                <View style={styles.containerTwo}>
                    <Text style={styles.textTwo}>
                        Available Vacancies
                    </Text>
                    <Text style={styles.textHome} onPress={home}>
                        Home/
                        </Text>
                        <Text style={styles.textThree}> Available Vacancies</Text>
                  
                </View>
                <View style={styles.containerThree}>
                    <View style={styles.containerFour}>
                        <Text style={styles.textFour}>7 Miles</Text>
                        <Text style={styles.textEight}>7.5 Hours PW</Text>
                    </View>
                    <View style={styles.containerFour}>
                        <Text style={styles.textFive}>Cleaner DBS FS&R/KAN</Text>
                        <Text style={styles.textNine}>14 £</Text>
                    </View>
                    <View style={styles.containerFour}>
                        <Text style={styles.textSix}>69 Pall Mall, St James`s, St James`s</Text>
                        <Text style={styles.textTen}>Per Hour</Text>
                    </View>
                    <View style={styles.containerFour}>
                        <Text style={styles.textSeven}>Status:</Text>
                        <Text style={styles.textTwelve}>Open</Text>
                    </View>
                    <View style={styles.containerSix}>
                        <TouchableOpacity style={styles.btnOne} onPress={handleButtonPress}>
                            <Text style={styles.textThirteen}>View Details</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnTwo}>
                            <Text style={styles.textFourteen}>Apply Now</Text>
                        </TouchableOpacity>
                        <Modal visible={modalVisible} onClose={handleCloseModal} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: "white",
        borderColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    text: {
        padding: 15,
        fontSize: 20,
        color: '#6C757d'
    },
    textTwo: {
        marginBottom: 15,
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10,
        color: 'black',
        marginTop: 10
    },
    containerTwo: {
        flexDirection: "row",
        justifyContent: 'space-between',
        borderWidth: 2,
        backgroundColor: "white",
        borderColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    textHome: {
        fontSize: 16,
        fontWeight: '500',
        marginRight: 10,
        color: '#878787',
        marginTop: 10,
        marginLeft:10,
    },
    textThree: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,
    },
    containerThree: {
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'transparent'
    },
    containerFour: {
        marginTop: 20,
        marginLeft: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingRight: 15
    },
    textFour: {
        color: "#28a745",
        paddingBottom: 10
    },
    textFive: {
        color: "black",
        paddingBottom: 10,
        fontSize: 17,
        fontWeight: '600'
    },
    textSix: {
        paddingBottom: 10,
        fontSize: 12,
        fontWeight: "500",
        color: '#878787',
    },
    textSeven: {
        color: "black",
        fontSize: 15,
        fontWeight: "500",
        paddingBottom: 10
    },
    containerFive: {
        alignItems: 'flex-end',
        marginRight: 10
    },
    textEight: {
        fontWeight: '600',
        fontSize: 16,
        paddingBottom: 10,
        color: '#878787'
    },
    textNine: {
        color: "#28a745",
        paddingBottom: 10,
        fontWeight: '600',
        fontSize: 16,
    },
    textTen: {
        paddingBottom: 10,
        fontWeight: '600',
        fontSize: 16,
        color: '#878787',
    },
    textElevan: {
        paddingBottom: 10,
        fontWeight: '600',
        fontSize: 16,
    },
    textTwelve: {
        color: "black",
        paddingBottom: 10,
        fontWeight: '600',
        fontSize: 16,
    },
    containerSix: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-evenly'
    },
    btnOne: {
        width: 185,
        height: 30,
        backgroundColor: '#17A2B8'
    },
    btnTwo: {
        width: 185,
        height: 30,
        backgroundColor: '#28a745'
    },
    textThirteen: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 5
    },
    textFourteen: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 5,
    }
});