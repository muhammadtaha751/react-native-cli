import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../components/Logo';
import { RadioButton } from 'react-native-paper';
import ModalComponent from '../components/ModalComponent';
import EmployementHistory from '../components/EmployementHistory';
import EducationHistory from '../components/EducationHistory';

export default function Vetting({navigation}) {
    const [value, setValue] = useState('yes');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleTwo, setModalVisibleTwo] = useState(false);

    const handleButtonPress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleButtonPressTwo = () => {
        setModalVisibleTwo(true);
    };

    const handleCloseModalTwo = () => {
        setModalVisibleTwo(false);
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
                        P-File
                    </Text>
                    <Text style={styles.textHome} onPress={home}>
                        Home/<Text style={styles.textTwo}> P-File </Text>
                    </Text>
                </View>
                <View>
                    <Text style={styles.textThree}>
                        Application{"\n"}Form
                    </Text>
                </View>
                <View style={styles.containerTwo}>
                    <View style={styles.containerThree}>
                        <Text style={styles.textFour}>
                            PERSONAL INFORMATION:
                        </Text>

                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Your First Name"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Your Surname"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Mobile No Exp. 0"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Telephone Exp. 0"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Your Email Address"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Marital Status"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Current Postcode"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Your Current Address"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Your Previous Address"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Current Driving License"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Car Owner"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Officer Role"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="National Insurance"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Place OF Birth"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Height(CM)"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Weight(KG)"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Colour OF Eyes"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Social Media Link"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textFive}>
                                BANK DETAIL:
                            </Text>
                        </View>

                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Bank Account Number"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Sort Code"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Name of Bank"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="NA"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textFive}>
                                PERSON/NEXT OF KIN TO BE CONTACTED IN ANY {"/n"} EMERGENCY :
                            </Text>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="NAME"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="RELATIONSHIP"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Address"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Telephone Number"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textFive}>
                                HAVE YOU EVER APPEARED BEFORE A COURT CHARGED WITH A CRIMINAL, CIVIL OR MILITARY OFFENCE AND BEEN CONVICTED INCLUDING ANY MOTORING OFFENCES HAVE YOU ANY ALLEGED OFFENCES OUTSTANDING ? :
                            </Text>
                            <View style={styles.containerRadio}>
                                <View style={styles.radioContainer}>
                                    <RadioButton
                                        value="yes"
                                        status={value === 'yes' ? 'checked' : 'unchecked'}
                                        onPress={() => setValue('yes')}
                                        color="blue"
                                    />
                                    <Text style={styles.radioText}>Yes</Text>
                                </View>
                                <View style={styles.radioContainer}>
                                    <RadioButton
                                        value="no"
                                        status={value === 'no' ? 'checked' : 'unchecked'}
                                        onPress={() => setValue('no')}
                                        color="blue"
                                    />
                                    <Text style={styles.radioText}>No</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Give Details If Yes"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textFive}>
                                PERSONAL REFEREES :
                            </Text>
                            <Text style={styles.textFive}>
                                PLEASE GIVE DETAILS OF TWO PEOPLE, OTHER THAN FAMILY WHO KNOWN YOU FOR AT LEAST 2 YEARS OUT OF THE LAST 5 YEARS WHO WE CAN APPROACH FOR A REFERENCE :
                            </Text>
                            <Text style={styles.textFive}>
                                REF 1:
                            </Text>
                        </View>

                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Name"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Address"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Period Known"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Tel No."
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textFive}>
                                REF 2:
                            </Text>
                        </View>

                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Name"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Address"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Period Known"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={styles.containerFour}>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Tel No."
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textFive}>
                                HAVE YOU BEEN MADE BANKRUPT?
                            </Text>
                            <View style={styles.containerRadio}>
                                <View style={styles.radioContainer}>
                                    <RadioButton
                                        value="yes"
                                        status={value === 'yes' ? 'checked' : 'unchecked'}
                                        onPress={() => setValue('yes')}
                                        color="blue"
                                    />
                                    <Text style={styles.radioText}>Yes</Text>
                                </View>
                                <View style={styles.radioContainer}>
                                    <RadioButton
                                        value="no"
                                        status={value === 'no' ? 'checked' : 'unchecked'}
                                        onPress={() => setValue('no')}
                                        color="blue"
                                    />
                                    <Text style={styles.radioText}>No</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textFive}>
                                DO YOU HAVE ANY COUNTY COURT JUDGEMENTS ? :
                            </Text>
                            <View style={styles.containerRadio}>
                                <View style={styles.radioContainer}>
                                    <RadioButton
                                        value="yes"
                                        status={value === 'yes' ? 'checked' : 'unchecked'}
                                        onPress={() => setValue('yes')}
                                        color="blue"
                                    />
                                    <Text style={styles.radioText}>Yes</Text>
                                </View>
                                <View style={styles.radioContainer}>
                                    <RadioButton
                                        value="no"
                                        status={value === 'no' ? 'checked' : 'unchecked'}
                                        onPress={() => setValue('no')}
                                        color="blue"
                                    />
                                    <Text style={styles.radioText}>No</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textFive}>
                                DO YOU HAVE OBJECT TO THE COMPANY CONTACTING A CREDIT AGENCY WITH REFERENCE TO YOURSELF ? :
                            </Text>
                            <View style={styles.containerRadio}>
                                <View style={styles.radioContainer}>
                                    <RadioButton
                                        value="yes"
                                        status={value === 'yes' ? 'checked' : 'unchecked'}
                                        onPress={() => setValue('yes')}
                                        color="blue"
                                    />
                                    <Text style={styles.radioText}>Yes</Text>
                                </View>
                                <View style={styles.radioContainer}>
                                    <RadioButton
                                        value="no"
                                        status={value === 'no' ? 'checked' : 'unchecked'}
                                        onPress={() => setValue('no')}
                                        color="blue"
                                    />
                                    <Text style={styles.radioText}>No</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.textFive}>
                                EMPLOYMENT HISTORY (Last 5 years):
                            </Text>
                        </View>
   
                        <View style={styles.containerSix}>
                            <TouchableOpacity style={styles.btn} onPress={handleButtonPress}>
                                <Text style={styles.textSix}>
                                    + <Text style={styles.textSeven}>Add New</Text>
                                </Text>
                            </TouchableOpacity>
                            <EmployementHistory  visible={modalVisible} onClose={handleCloseModal}/>
                         
                          
                        </View>
                        <View style={styles.containerSeven}>
                            <Text style={styles.textEight}>
                                No Data Found
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.textFive}>
                                DETAILS OF WHEN YOU LEFT SCHOOL & IF YOU ATTENDED COLLEGE IN THE LAST 5 YEARS (starting from Latest):
                            </Text>
                        </View>
                        <View style={styles.containerSix}>
                            <TouchableOpacity style={styles.btn} onPress={handleButtonPressTwo}>
                                <Text style={styles.textSix}>
                                    + <Text style={styles.textSeven}>Add New</Text>
                                </Text>
                            </TouchableOpacity>
                            <EducationHistory visible={modalVisibleTwo} onClose={handleCloseModalTwo}/>
                           
                        </View>
                
                        <View style={styles.containerSeven}>
                            <Text style={styles.textEight}>
                                No Data Found
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.textFive}>
                                Employee Document
                            </Text>
                        </View>
                        <View style={styles.containerEight}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.textNine}>Birth Certificate</Text>
                            </View>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                        </View>
                        <View style={styles.containerEight}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.textNine}>UK Passport</Text>
                            </View>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                        </View>
                        <View style={styles.containerEight}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.textNine}>Non-UK Passport/European ID</Text>
                            </View>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                        </View>
                        <View style={styles.containerEight}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.textNine}>Upload Right to Work/Visa(Non-British Passport)</Text>
                            </View>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                        </View>
                        <View style={styles.containerEight}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.textNine}>Any Proof of Address(Utility Bil,Pay Slips,p60,HMRC Letter etc)</Text>
                            </View>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                        </View>
                        <View style={styles.containerEight}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.textNine}>Bank Statement</Text>
                            </View>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                        </View>
                        <View style={styles.containerEight}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.textNine}>Driving Licence(if held)</Text>
                            </View>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                        </View>
                        <View style={styles.containerEight}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.textNine}>Passport Size Photograph</Text>
                            </View>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                        </View>
                        <View style={styles.containerEight}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.textNine}>P45/P60 if you have one</Text>
                            </View>
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                            <Icon name="user" size={30} color="black" style={styles.icon} />
                        </View>
                        <View style={styles.containerNine}>
                            <Text style={styles.textTen}>
                                READ THIS SECTION CAREFULLY BEFORE YOU SIGN THE STATEMENT
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.textEleven}>
                                1. IF OFFERED EMPLOYMENT IT WILL BE INITIALLY FOR A PROBATIONARY PERIOD OF 16 WEEKS.
                            </Text>
                            <Text style={styles.textEleven}>
                                2. DURING THE PROBATIONARY PERIOD YOUR CONTRACT OF EMPLOYMENT MAY BE TERMINABLE BY THE "COMPANY" BY NO LESS THAN 24 HOURS NOTICE IN WRITING. THIS APPLIES TO SCREENING PERIOD ALSO.
                            </Text>
                            <Text style={styles.textEleven}>
                                3. CONTINUED EMPLOYMENT IS CONDITIONAL UPON SATISFACTORY SCREENING,
                            </Text>
                            <Text style={styles.textEleven}>
                                4. WE COMPLETE SOCIAL MEDIA AND INTERNET SEARCHES ON ALL APPLICANTS TO INTENTIFY ILLEGAL ACTIVITY INCLUDING BUT NOT EXCLUSIVLY HATE CRIME
                            </Text>
                        </View>
                        <View style={styles.containerTen}>
                            <Text style={styles.textTwelve}>STATEMENT TO BE SIGNED BY APPLICANT
                            </Text>
                            <Text style={styles.textThirteen}>
                                I Jawad CERTIFY THAT TO THE BEST OF MY KNOWLEDGE, THE INFORMATION I HAVE GIVEN IS COMPLETE AND CORRECT, AN I UNDERSTAND THAT MISREPRESENTATION OF FACTS IS GROUNDS FOR IMMEDIATE DISMISSAL AND RENDERS ME LIABLE FOR PROSECUTION.
                                I AUTHORISE THE COMPANY TO APPROACH ANY GOVERNMENT AGENCIES, FORMER EMPLOYERS, CREDIT AGENCIES AND PERSONAL REFEREES TO VERIFY THE INFORMATION GIVEN AND WILL SUPPLY A STATUTORY DECLARATION IF REQUIRED (I GIVE PERMISSION FOR MY PRESENT EMPLOYER TO BE APPROACHED). I CONFIRM IF SUCCESSFUL
                            </Text>
                            <Text style={styles.textFourteen}>Opt Out Agreement</Text>
                            <Text style={styles.textThirteen}>a). THE 48 HOUR WEEKLY WORKING TIME LIMIT UNDER THE WORKING TIME REGULATIONS DOES NOT APPLY TO ME.</Text>
                            <Text style={styles.textThirteen}>b). THIS AGREEMENT APPLIES FOR AN INDEFINITE PERIOD.</Text>
                            <Text style={styles.textThirteen}>c). THIS AGREEMENT IS TERMINABLE BY ME GIVING THREE MONTHS NOTICE IN WRITING TO XPC,</Text>
                            <View>
                                <Text style={styles.textFifteen}>
                                    Digital Signature:
                                </Text>
                            </View>
                            <Text style={styles.textFifteen}>Put Signature Below</Text>
                            <TextInput style={styles.inp} />
                            <View style={styles.containerEleven} >
                                <TouchableOpacity style={styles.btnTwo}>
                                    <Text style={styles.textSixteen}>
                                        Save Signature
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.containerTwelve}>
                            <Text style={styles.textSeventeen}>69533</Text>
                            <TextInput placeholder='Please Enter Code'
                                placeholderTextColor="#878787"

                            />
                        </View>
                        <Text style={styles.textNineteen}>
                            I accepted <Text style={styles.textTwenty}>Terms & Conditions</Text>  </Text>
                        <View style={styles.containerThirteen}>
                            <TouchableOpacity style={styles.btnThree}>
                                <Text style={styles.textEighteen}>
                                    Continue
                                </Text>
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
        flexDirection: "row",
        justifyContent: 'space-between',
        borderWidth: 2,
        backgroundColor: "white",
        borderColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    text: {
        marginBottom: 15,
        fontSize: 16,
        marginLeft: 10,
        color: 'black',
        marginTop: 10
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
        marginRight: 10,
        color: '#878787',
        marginTop: 10
    },
    textThree: {
        fontSize: 42,
        fontWeight: '700',
        textAlign: "center",
        color: "black"
    },
    containerTwo: {
        borderWidth: 2,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 50,
        backgroundColor: "#eeeff4",
        borderColor: 'transparent'
    },
    containerThree: {
        borderWidth: 2,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: "#f7f8f8",
        borderColor: 'transparent'
    },
    containerFour: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderWidth: 3,
        marginBottom: 20,
        backgroundColor: "white",
        borderColor: "transparent"
    },
    inputContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        borderRadius: 5,
        padding: 10,
        color: '#878787'
    },
    textFour: {
        paddingTop: 70,
        paddingLeft: 20,
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: "500",
        color: '#677294'
    },
    textFive: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: "500",
        color: '#677294'
    },
    textNo: {
        paddingLeft: 20,
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: "500",
        color: '#677294'
    },
    btn: {
        width: 100,
        height: 40,
        backgroundColor: "#17a2b8",
        marginRight: 20
    },
    containerSix: {
        alignItems: "flex-end",
        marginTop: 30,
    },
    textSix: {
        color: 'white',
        padding: 10,
        fontSize: 15,
        fontWeight: '500'
    },
    textSeven: {
        color: 'white',
        padding: 10
    },
    containerSeven: {
        borderWidth: 2,
        height: 70,
        marginTop: 30,
        backgroundColor: "#f2f2f2",
        borderColor: "transparent",
        marginLeft: 10,
        marginRight: 10
    },
    textEight: {
        textAlign: "center",
        padding: 20
    },
    containerEight: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderWidth: 3,
        marginBottom: 20,
        backgroundColor: "white",
        borderColor: "transparent"
    },
    textNine: {
        color: "black"
    },
    containerNine: {
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 50
    },
    textTen: {
        fontSize: 22,
        fontWeight: '700',
        color: "black",
        textDecorationLine: "underline"
    },
    textEleven: {
        color: '#677294',
        marginBottom: 15,
        fontSize: 17
    },
    containerTen: {
        borderWidth: 2
    },
    textTwelve: {
        textAlign: "center",
        textDecorationLine: "underline",
        color: '#677294',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 30
    },
    textThirteen: {
        color: '#677294',
        paddingBottom: 10
    },
    textFourteen: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 18,
        fontWeight: '500',
        marginTop: 30
    },
    textFifteen: {
        paddingLeft: 20,
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: "500",
        color: 'black'
    },
    inp: {
        borderWidth: 2
    },
    btnTwo: {
        width: 130,
        height: 40,
        backgroundColor: '#f99a0b',
        borderRadius: 7
    },
    textSixteen: {
        color: 'white',
        textAlign: 'center',
        padding: 5,
        fontSize: 17,
        fontWeight: '600'
    }
    , containerEleven: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    containerTwelve: {
        flexDirection: 'row',
        borderWidth: 2,
        marginTop: 20,
        borderColor: "transparent",
        marginBottom: 30,
        borderRadius: 10
    },
    textSeventeen: {
        backgroundColor: '#007d9c',
        color: 'white',
        width: 70,
        height: 50,
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 18
    },
    containerThirteen: {
        marginTop: 20,
        marginBottom: 30
    },
    btnThree: {
        backgroundColor: "#007d9c",
        width: 140,
        height: 60,
        borderRadius: 5
    },
    textEighteen: {
        textAlign: 'center',
        color: "white",
        padding: 15,
        fontSize: 19,
        fontWeight: '500'
    },
    textNineteen: {
        marginBottom: 10,
        color: 'black'
    },
    textTwenty: {
        color: '#007d9c'
    },
    containerRadio: {
        flex: 1,
        marginLeft: 15,
        marginBottom: 5

    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioText: {
        color: '#677294'
    },
    ContainerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 22, // Adjust as needed
    },
    modalContent: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 10,
        padding: 20,
        elevation: 5, // For shadow on Android
    },
})