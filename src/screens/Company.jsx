import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';

export default function Company() {
    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <Image
                        source={require('../assets/rating.png')} // Path to your image
                        style={styles.image}
                    />
                    <View style={styles.containerTwo}>
                        <Text style={styles.text}>Syed Jawad</Text>
                        <Text style={styles.textTwo}>SIN ID#2579</Text>
                        <Text style={styles.textTwo}>Commercial Cleaning</Text>
                        <Text style={styles.textTwo}>Contact:447773029841</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        margin: 20,
        alignItems: "center",
        backgroundColor: "white",
        borderColor: 'transparent',
        borderRadius: 15
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 20
    },
    containerTwo: {
        borderWidth: 2,
        margin: 20,
        alignItems: "center",
        borderColor: "transparent",
        borderRadius: 25
    },
    text: {
        fontSize: 22,
        fontWeight: '600',
        color: 'black'
    },
    textTwo: {
        paddingTop: 10,
        fontSize: 18,
        fontWeight: '300',
        color: 'black'
    }
});