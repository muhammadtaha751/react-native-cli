import { Text, View, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';

export default function Statement({ navigation }) {

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
                        Statement
                    </Text>
                    <View style={styles.containerThree}>
                        <Text style={styles.textHome} onPress={home}>
                            Home/
                        </Text>
                        <Text style={styles.textThree}> Statement</Text>
                    </View>
                </View>
                <View style={styles.containerFour}>
                    <View style={styles.containerFive}>
                        <Text style={styles.textRequest}>My Request List</Text>
                    </View>
                    <View style={styles.containerSix}>
                        <Text style={styles.textYear}>This Year</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="01/01/2024"
                            placeholderTextColor="#878787"
                        />
                        <View style={styles.line}>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="12/31/2024"
                            placeholderTextColor="#878787"
                        />
                        <View style={styles.line}>
                        </View>
                    </View>
                    <View style={styles.containerSeven}>
                        <Text style={styles.textSearch}>Search:</Text>
                        <TextInput
                            style={styles.input}

                        />
                        <View style={styles.line}>
                        </View>
                    </View>
                    <View style={styles.containerEight}>
                        <Text style={styles.textData}>No data available in table</Text>
                    </View>
                    <View style={styles.containerNine}>
                        <Text style={styles.textYear}>Showing 0 to 0 of 0 entries</Text>
                        <Text style={styles.textYear}>Show</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="10"
                            placeholderTextColor="#878787"
                        />
                        <View style={styles.line}>
                        </View>
                        <Text style={styles.textYear}>Entries</Text>
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
    },
    textThree: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        paddingRight: 10
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
        flexDirection: "row",
        alignItems: "center"
    },
    containerFour: {
        borderWidth: 2,
        margin: 20,
        height: 550,
        borderTopWidth: 10,
        backgroundColor: 'white',
        borderTopColor: '#007d9c',
        borderRightColor: 'transparent',
        borderLeftColor: "transparent",
        borderBottomColor: 'transparent'
    },
    containerFive: {
        backgroundColor: '#f7f7f7'
    },
    textRequest: {
        color: 'black',
        padding: 10,
        fontWeight: '500'
    },
    textYear: {
        color: 'black'
    },
    line: {
        height: 1,
        backgroundColor: 'black',
        marginRight: 260
    },
    containerSix: {
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 30
    },
    containerSeven: {
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 30
    },
    textSearch: {
        color: 'black'
    },
    containerEight: {
        borderWidth: 2,
        height: 50,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#f2f2f2',
        borderColor: 'transparent',
        marginBottom: 25
    },
    textData: {
        textAlign: "center",
        color: 'black',
        paddingTop: 10
    },
    containerNine: {
        marginLeft: 30
    },
    input: {
        color: 'black'
    }
});