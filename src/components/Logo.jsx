import React, { useState } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity,Modal } from 'react-native';

export default function Logo({ navigation }) {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);


  

  const handleEmailPress = () => {
    setShowEmailModal(true);
  };

  const closeModal = () => {
    setShowEmailModal(false);
  };

  const handleNotificationPress = () =>{
    setShowNotificationModal(true);
  }

  const closeNotificationModal = () =>{
    setShowNotificationModal(false);
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <TouchableOpacity>
          <Image
            source={require('../assets/questionmark.png')} // Path to your image
            style={styles.imageOne}
          />
          </TouchableOpacity>
       <TouchableOpacity>
       <Image
            source={require('../assets/search.png')} // Path to your image
            style={styles.imageOne}
          />
       </TouchableOpacity>
       <TouchableOpacity onPress={handleNotificationPress}>
       <Image
            source={require('../assets/notification.png')} // Path to your image
            style={styles.imageOne}
          />
        </TouchableOpacity>
        <Modal
        visible={showNotificationModal}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.messageText}>You have no Notification</Text>
            <TouchableOpacity onPress={closeNotificationModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        <TouchableOpacity onPress={handleEmailPress}>
        <Image
            source={require('../assets/email.png')} // Path to your image
            style={styles.imageOne}
          />
        </TouchableOpacity>
        <Modal
        visible={showEmailModal}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.messageText}>You have no email</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
       
      <TouchableOpacity>
      <Image
            source={require('../assets/rating.png')} // Path to your image
            style={styles.image}
          />
      </TouchableOpacity>
       
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: 'white'
  },
  image: {
    width: 40,
    height: 35,
    borderRadius: 25,
    marginLeft: 25
  },
  imageOne: {
    width: 25,
    height: 25,
    marginLeft: 25
  },
  containerTwo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  messageText: {
    fontSize: 18,
    marginBottom: 10,
    color:'black'
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
    marginTop: 10,
    color:'black'
  },
})