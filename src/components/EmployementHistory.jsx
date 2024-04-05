import { Text, View, Modal, ScrollView, TextInput, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function EmployementHistory({ visible, onClose }) {
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
                            <Text style={styles.text}>Modal 1 Content</Text>
                            <Text style={styles.text}>Close Modal 1</Text>
                            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.text}>Close</Text>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 22, // Adjust as needed
    },
    modalContent: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    text: {
        color: "black"
    }
});