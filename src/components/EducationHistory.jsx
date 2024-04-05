import { Text, View, Modal, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function EducationHistory({ visible, onClose }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <View style={styles.containerEducation}>
                                <Text style={styles.textOne}>Education History</Text>
                            </View>
                            <View>
                                <TextInput
                                    placeholder="School Name"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                                <TextInput
                                    placeholder="Town/City"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                                <TextInput
                                    placeholder="mm/dd/yyyy"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                                <TextInput
                                    placeholder="mm/dd/yyyy"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                                <TextInput
                                    placeholder="Course Details"
                                    placeholderTextColor="#878787"
                                    style={styles.input}
                                />
                            </View>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.textSix}>
                                    Save
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
            </ScrollView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 22,
    },
    modalContent: {
        backgroundColor: 'white',
        width: 390,
        height: 450,
        borderRadius: 10,
        elevation: 5,
    },
    containerEducation: {
        backgroundColor: '#007d9c',
        height: 60,
    },
    textOne: {
        color: "white",
        fontSize: 22,
        fontWeight: '700',
        paddingLeft: 22,
        paddingTop: 15
    },
    text: {
        color: "black",

    },
    btn: {
        width: 100,
        height: 40,
        backgroundColor: "#17a2b8",
        marginRight: 20
    },
    textSix: {
        color: 'white',
        padding: 10,
        fontSize: 15,
        fontWeight: '500'
    },
});