import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Logo from '../components/Logo';


export default function Profile({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');
    const [maritualStatus, setMaritualStatus] = useState('');
    const [identity, setIdentity] = useState('');
    const [nationality, setNationality] = useState('');
    const [degree, setDegree] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [visa, setVisa] = useState('');
    const [certificate, setCertificate] = useState('');
    const [experience, setExperience] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postCode, setPostCode] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [image, setImage] = useState('');
    const [proofAddress, setProofAddress] = useState('');
    const [niDocument, setNIDocument] = useState('');
    const [work, setWork] = useState('');
    const [cv, setCV] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [textInputValue, setTextInputValue] = useState('');

    const handleGenderChange = (itemValue) => {
        setSelectedGender(itemValue);
        setTextInputValue(itemValue); // Update TextInput value when gender is selected
    };



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
                        Profile
                    </Text>
                    <Text onPress={home} style={styles.textHome}>
                        Home/
                    </Text>
                    <Text style={styles.textThree}>Profile</Text>

                </View>

                <View style={styles.containerThree}>
                    <View style={styles.personal}>
                        <Text style={styles.textFour}>
                            Personal Details
                        </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your first name"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Last Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your last name"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Date of Birth</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Date of Birth"
                            placeholderTextColor="#878787"
                        />

                    </View>

                    <Text style={styles.genderText}>Gender</Text>
                    <View style={styles.genderContainer}>

                        <View>
                            <Picker
                                style={styles.picker}
                                selectedValue={selectedGender}
                                onValueChange={handleGenderChange}
                            >
                                <Picker.Item label="Male" value="male" />
                                <Picker.Item label="Female" value="female" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Maritual Status</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Single"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Identity</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="1311445574"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nationality</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Pakistani"
                            placeholderTextColor="#878787"
                        />
                    </View>
                </View>

                <View style={styles.containerThree}>
                    <View style={styles.personal}>
                        <Text style={styles.textFour}>
                            Official Details
                        </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Last Degree</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="bachelors"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Speciality</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Commercial Cleaning"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Visa Status</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="work/permit"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>DBS Certificate</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Yes"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Expereince</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="less than 1 year"
                            placeholderTextColor="#878787"
                        />
                    </View>
                </View>

                <View style={styles.containerThree}>
                    <View style={styles.personal}>
                        <Text style={styles.textFour}>
                            Address
                        </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="New York,USA"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>City</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="NewYork"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Country</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="USA"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>PostCode</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="01110"
                            placeholderTextColor="#878787"
                        />
                    </View>
                </View>

                <View style={styles.containerThree}>
                    <View style={styles.personal}>
                        <Text style={styles.textFour}>
                            Contact Details
                        </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email address"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Phone number"
                            placeholderTextColor="#878787"
                        />
                    </View>

                </View>

                <View style={styles.containerThree}>
                    <View style={styles.personal}>
                        <Text style={styles.textFour}>
                            Next Of Kin
                        </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your name"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your number"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your Address"
                            placeholderTextColor="#878787"
                        />
                    </View>

                </View>
                <View style={styles.containerThree}>
                    <View style={styles.personal}>
                        <Text style={styles.textFour}>
                            Bank Details
                        </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Account Title</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="NA"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Sort Code</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="NA"
                            placeholderTextColor="#878787"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Account Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="NA"
                            placeholderTextColor="#878787"
                        />
                    </View>
                </View>
                <View style={styles.containerFour}>
                    <View style={styles.personal}>
                        <Text style={styles.textFour}>
                            Mandatory Documents
                        </Text>
                    </View>
                    <View style={styles.containerFive}>
                        <View style={styles.inputContainerTwo}>
                            <Text style={styles.label}>Profile Image</Text>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.textFive}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainerTwo}>
                            <Text style={styles.label}>Proof of Address</Text>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.textFive}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainerTwo}>
                            <Text style={styles.label}>NI Image</Text>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.textFive}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainerTwo}>
                            <Text style={styles.label}>Right To Work</Text>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.textFive}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainerTwo}>
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
                        <View style={styles.inputContainerTwo}>
                            <Text style={styles.label}>DBS</Text>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.textFive}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainerTwo}>
                            <Text style={styles.label}>Credit Report</Text>
                            <TouchableOpacity style={styles.upload}>
                                <Text style={styles.textFive}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainerTwo}>
                            <Text style={styles.label}>Share Code</Text>
                            <TouchableOpacity style={styles.upload}>
                                <Text style={styles.textFive}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainerTwo}>
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
    textThree: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,
        marginRight: 20
    },
    textHome: {
        fontSize: 16,
        fontWeight: '500',
        marginRight: 10,
        color: '#878787',
        marginTop: 10,
        marginLeft: 200,
    },
    containerThree: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 6,
        backgroundColor: "white",
        margin: 20,
        borderColor: 'transparent',
        borderTopColor: "#007d9c",
    },
    personal: {
        backgroundColor: "#f7f7f7",
        width: 330,
        height: 30
    },
    textFour: {
        color: 'black'
    },
    inputContainer: {
        marginBottom: 20,
        marginTop: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "#495057"
    },
    input: {
        padding: 10,
        width: 330,
        fontSize: 16,
        color: '#878787',
        borderWidth: 1,
        borderColor: '#dee2e6',

    },
    containerFour: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 6,
        backgroundColor: "white",
        margin: 20,
        borderColor: 'transparent',
        borderTopColor: "#007d9c",
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
    },
    upload: {
        width: 70,
        height: 25,
        backgroundColor: '#28a745',
    },
    inputContainerTwo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 20,
        marginTop: 10,
    },
    containerFive: {
        flex: 1,
        justifyContent: "center",
    },
    genderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        borderColor: '#dee2e6',
    },
    picker: {
        width: 330,
        height: 40,
        color: 'black',
        fontSize: 16,
        color: '#878787',
        borderWidth: 1,
    },
    genderText: {
        fontSize: 16,
        marginBottom: 5,
        color: "#495057",
        marginRight: 280
    }
});