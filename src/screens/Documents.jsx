import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';

export default function Documents({ navigation }) {
    const [image, setImage] = useState('');
    const [proofAddress, setProofAddress] = useState('');
    const [niDocument, setNIDocument] = useState('');
    const [work, setWork] = useState('');
    const [cv, setCV] = useState('');

    const handleImageUpload = () => {
        // Logic to handle image upload
    };

    const handleCVUpload = () => {
        // Logic to handle CV upload
    };

    const handleNIDocumentUpload = () => {
        // Logic to handle NI document upload
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
                        Document
                    </Text>
                    <Text style={styles.textHome} onPress={home}>
                        Home/ 
                    </Text>
                    <Text style={styles.textThree}>Document</Text>

                </View>
                <View style={styles.containerFour}>
                    <View style={styles.personal}>
                        <Text style={styles.textFour}>
                            Mandatory Documents
                        </Text>
                    </View>
                    <View style={styles.containerFive}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Profile Image</Text>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.textFive}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Proof of Address</Text>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.textFive}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>NI Image</Text>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.textFive}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Right To Work</Text>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.textFive}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>CV</Text>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.textFive}>Change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.containerFour}>
                    <View style={styles.personal}>
                        <Text style={styles.textFour}>
                            Optional Documents
                        </Text>
                    </View>
                    <View style={styles.containerFive}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>DBS</Text>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.textFive}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Credit Report</Text>
                            <TouchableOpacity style={styles.upload}>
                                <Text style={styles.textFive}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Share Code</Text>
                            <TouchableOpacity style={styles.upload}>
                                <Text style={styles.textFive}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>DBS Application</Text>
                            <TouchableOpacity style={styles.upload}>
                                <Text style={styles.textFive}>Upload</Text>
                            </TouchableOpacity>
                        </View>
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
    textHome: {
        fontSize: 16,
        fontWeight: '500',
      marginLeft:140,
        color: '#878787',
        marginTop: 10
    },
    textThree: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
       marginTop:10
    },
    textFour: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
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
    personal: {
        backgroundColor: "#f7f7f7",
        width: 330,
        height: 30
    },
    inputContainer: {
        marginBottom: 20,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "#495057"
    },
    input: {
        padding: 10,
        width: 250,
        fontSize: 16,
    },
    containerFour: {
        borderWidth: 6,
        backgroundColor: "white",
        margin: 20,
        borderColor: 'transparent',
        borderTopColor: "#007d9c",
    },
    inputWithButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn: {
        width: 70,
        height: 25,
        backgroundColor: '#007d9c',
    },
    textFive: {
        color: 'white',
        textAlign: "center",
        fontSize: 14,
        fontWeight: "400",
        padding: 2
    },
    upload: {
        width: 70,
        height: 25,
        backgroundColor: '#28a745',
    },
    containerFive: {
        flex: 1,
        justifyContent: "center",
    }
});