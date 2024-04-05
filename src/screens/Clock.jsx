import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';

export default function Clock({navigation}) {

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
                        Clock-IN
                    </Text>
                    <Text style={styles.textHome} onPress={home}>
                        Home/
                        </Text>
                        <Text style={styles.textThree}>Clock-IN</Text>
                   
                </View>
                <View style={styles.containerThree}>
                    <Text style={styles.textFour}>
                        No Shift Available Today
                    </Text>
                </View>

                <View style={styles.containerFour}>
                    <View style={styles.containerFive}>
                        <Text style={styles.textFive}>Place Clock in</Text>
                        <Text style={styles.textSix}>Today Shift</Text>
                    </View>
                    <View style={styles.containerSeven}>
                        <View style={styles.containerSix}>
                            <Text style={styles.textSeven}>Location:</Text>
                            <Text style={styles.textEight}></Text>
                        </View>
                        <View style={styles.containerSix}>
                            <Text style={styles.textSeven}>Current Status:</Text>
                            <Text style={styles.textEight}></Text>
                        </View>
                        <View style={styles.containerSix}>
                            <Text style={styles.textSeven}>Current Time:</Text>
                            <Text style={styles.textEight}></Text>
                        </View>
                        <View style={styles.containerSix}>
                            <Text style={styles.textSeven}>Pay Rate:</Text>
                            <Text style={styles.textEight}></Text>
                        </View>
                        <View style={styles.containerSix}>
                            <Text style={styles.textSeven}>Date:</Text>
                            <Text style={styles.textEight}></Text>
                        </View>
                        <View style={styles.containerSix}>
                            <Text style={styles.textSeven}>Shift:</Text>
                            <Text style={styles.textEight}></Text>
                        </View>
                        <View style={styles.containerSix}>
                            <Text style={styles.textSeven}>Total Hours:</Text>
                            <Text style={styles.textEight}></Text>
                        </View>
                        <View style={styles.containerSix}>
                            <Text style={styles.textSeven}>Hours Covered:</Text>
                            <Text style={styles.textEight}></Text>
                        </View>
                        <View style={styles.containerSix}>
                            <Text style={styles.textSeven}>Your Distance:</Text>
                            <Text style={styles.textEight}></Text>
                        </View>
                        <Text style={styles.textNine}>Pre Check will be available 90 mins before the shift start</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.textTen}>Pre Check</Text>
                        </TouchableOpacity>
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
        marginRight: 10,
        color: '#878787',
        marginTop: 10,
        marginLeft:170,
    },
    textThree: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,
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
        height: 80,
        marginBottom: 10
    },
    textFour: {
        fontSize: 20,
        fontWeight: "500",
        padding: 20,
        color: "black"
    },
    containerFour: {
        borderWidth: 2,
        backgroundColor: "white",
        borderColor: 'transparent',
        margin: 20
    },
    containerFive: {
        alignItems: "center",
    },
    textFive: {
        color: '#28a745',
        paddingTop: 10,
        paddingBottom: 20
    },
    textSix: {
        paddingBottom: 20,
        color: "#6C757D"
    },
    containerSix: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 20,
    },
    textSeven: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black'
    },
    textEight: {
        paddingLeft: 40,
        fontSize: 17,
        fontWeight: '400',
        color: 'black'
    },
    textNine: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        color: '#878787'
    },
    btn: {
        backgroundColor: '#68c2d1',
        padding: 10,
        margin: 10,
        alignItems: 'center'
    },
    textTen: {
        color: 'white'
    },
    containerSeven: {
        flex: 1,
        justifyContent: 'center'
    }

});