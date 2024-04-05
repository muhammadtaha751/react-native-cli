import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';

export default function Agreement() {
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
                        Agreements
                    </Text>
                    <Text style={styles.textHome}>
                        Home/<Text style={styles.textThree}> Agreements</Text>
                    </Text>
                </View>
                <View style={styles.containerThree}>
                    <Image
                        source={require('../assets/correct.png')} // Path to your image
                        style={styles.image}
                    />
                    <Text style={styles.textFour}>
                        You have Signed The Agreement
                    </Text>
                </View>

                <View style={styles.containerFour}>
                    <View style={styles.containerFive}>
                        <Text style={styles.textFive}>CODES OF CONDUCT</Text>
                    </View>
                    <View style={styles.containerSix}>
                        <Text style={styles.textSix}>Check All</Text>
                    </View>
                    <View style={styles.containerSeven}>
                        <Text style={styles.textSeven}>Book on Procedure</Text>
                        <Text style={styles.textEight}>Make sure to book on with the company. If you miss the book on message, please ring on the number 02035001905 option 1 to inform the control about your presence. If you don’t reply the pre-check message and book on message your 30 mins wages will be deductde.</Text>
                    </View>
                    <View style={styles.containerSeven}>
                        <Text style={styles.textSeven}>
                            Dress Code
                        </Text>
                        <Text style={styles.textEight}>
                            Our Company's standard uniform Smart Black Trouser, Smart Black Shoes (No Trainers), Black Tie, Black Jumper/blazer and a white shirt is very important.2 hours wages will be deducted if your uniform doesn’t meet the required standards.
                        </Text>
                    </View>
                    <View style={styles.containerSeven}>
                        <Text style={styles.textSeven}>Cellphone Usage</Text>
                        <Text style={styles.textEight}>We allow&nbsp"https://resources.workable.com/cell-phone-company-policy"use of cell phones at work. But, we also want to ensure that your devices won’t distract you from your work. We ask you to follow a three simple rules:</Text>
                        <Text style={styles.textEight}>Avoid playing games on your phone or texting excessively.</Text>
                        <Text style={styles.textEight}>Avoid personal Calling</Text>
                        <Text style={styles.textEight}>Use phone only in Emergency</Text>
                    </View>
                    <View style={styles.containerSeven}>
                        <Text style={styles.textSeven}>
                            Working Hour Rules
                        </Text>
                        <Text style={styles.textEight}>
                            Always sign in upon commencement and the end of your duties. If you are late more than 30 minutes without any proof able excuse, your 2 hours wages will be deducted and if you are late more than 3 times in your employment, we will offsite you.
                        </Text>
                        <Text style={styles.textEight}>
                            If you are failed to turn up on site without a notice of more than 6 hours, you will lose your last shift wages and disciplinary action will be taken against you. If you leave the site before finish time, you will lose your last shift wages and disciplinary action will be taken against you.
                        </Text>
                        <Text style={styles.textEight}>
                            Candidates are not allowed to engage in direct employment with the client or client’s client in any circumstances otherwise you will lose all your pay with us and you will not be able to work with client either as they are bound with our terms not to employ anyone directly.
                        </Text>
                        <Text style={styles.textEight}>
                            If you have Medical Emergency and can’t attend the site, then you must produce relevant NHS documents.
                        </Text>
                        <Text style={styles.textEight}>
                            Every self-employed/Employed person should be aware of the evacuation procedure and position of the fire points of the venue.
                        </Text>
                    </View>
                    <View style={styles.containerSeven}>
                        <Text style={styles.textSeven}>
                            Working Culture
                        </Text>
                        <Text style={styles.textEight}>
                            Always greet all visitors to the unit in a friendly and courteous manner. You should give assistance to any person on the premises who is injured or distressed. Use moderate language when dealing with members of the public and other members of staff employed at the Client’s establishment. Act fairly and not unlawfully, do not discriminate against any person on the grounds of colour, race, religion, sex or disability.
                        </Text>
                        <Text style={styles.textEight}>
                            Don’t chew gum or eat any food on duty. Smoke during breaks in designated areas instructed by the Clients representative. No alcohol drinking, or under the influence of alcohol or any illegal substance, when reporting for duty.
                        </Text>
                        <Text style={styles.textEight}>
                            Never ask for or accept any bribes or other considerations from any person, nor fail to explain for any money or property received during the course of an assignment. You should give due consideration concerning the admission of persons suspected of being underage or under the influence of drink or drugs. The final decision will always lie with the licensees or his deputy.
                        </Text>
                    </View>
                    <View style={styles.containerSeven}>
                        <Text style={styles.textSeven}>
                            Vetting & Screening Clause
                        </Text>
                        <Text style={styles.textEight}>
                            According to BS7858 we need all your documents such as Passport Copy, right to work copy, 2 X proof of Address, NI Letter and last 5 year employment or Educational history. If you failed to provide any information your file will be forwarded to our outsourced Vetting and Screening company and £50/ will be deducted from your next wages.
                        </Text>
                        <Text style={styles.textEight}>
                            Failure to comply with any of the above Codes may result in dismissal or disciplinary proceedings
                        </Text>
                        <Text style={styles.textEight}>Before proceeding with this application</Text>
                        <Text style={styles.textEight}>Candidate Name</Text>
                        <Text style={styles.textEight}>Syed Jawad</Text>
                        <Text>Date 26-March-2024</Text>
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
    image: {
        width: 40,
        height: 40,
        marginBottom: 20,
        marginTop: 10
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
        marginRight: 10,
        color: '#878787',
        marginTop: 10
    },
    textThree: {
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
    containerThree: {
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: "white",
        borderColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        height: 100,
        marginBottom: 10
    },
    textFour: {
        fontSize: 20,
        fontWeight: "300",
        color: '#28a745'
    },
    containerFour: {
        borderWidth: 2,
        backgroundColor: "white",
        borderColor: 'transparent',
        margin: 20
    },
    containerFive: {
        paddingTop: 50,
        paddingBottom: 50,
        alignItems: 'center'
    },
    textFive: {
        color: 'red',
        fontSize: 18,
        fontWeight: "500",
        textDecorationLine: 'underline',
    },
    containerSix: {
        paddingLeft: 30,
        paddingBottom: 30
    },
    textSix: {
        color: "black"
    },
    containerSeven: {
        justifyContent: "center",
        paddingLeft: 30,
        paddingRight: 20
    },
    textSeven: {
        textDecorationLine: 'underline',
        color: 'black',
        paddingBottom: 15
    },
    textEight: {
        paddingBottom: 15,
        color: '#878787'
    }
});