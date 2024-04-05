import React, { useState } from 'react';
import { View, Modal, Button, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Collapse from './Collapse';

const ModalComponent = ({ visible, onClose }) => {
  const [openSection, setOpenSection] = useState(0);

  const handleOpenSection = (index) => {
    setOpenSection(index);
  };
  const handleCloseSection = () => {
    setOpenSection(null);
  };

  return (

    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.sectionsContainer}>
              <Collapse
                title="Vacancy Details"
                isOpen={openSection === 0}
                onPress={() => handleOpenSection(0)}
                style={styles.vacant}>
              </Collapse>
              <Collapse
                title="Payment Terms"
                isOpen={openSection === 1}
                onPress={() => handleOpenSection(1)}>
              </Collapse>
              <Collapse
                title="Mandatory Compliance"
                isOpen={openSection === 2}
                onPress={() => handleOpenSection(2)}>
              </Collapse>
              <Collapse
                title="Dress Code"
                isOpen={openSection === 3}
                onPress={() => handleOpenSection(3)}>
              </Collapse>
              <Collapse
                title="Site Instructions"
                isOpen={openSection === 4}
                onPress={() => handleOpenSection(4)}>
              </Collapse>
            </View>
            <View style={styles.sectionContent}>
              {openSection === 0 && (
                <View style={styles.containerOne}>
                  <Text style={styles.textOne}>Vacancy Details</Text>
                  <Text style={styles.textTwo} >Business unit:</Text>
                  <Text style={styles.text} >1101 - 69 Pall Mall - HSBC</Text>
                  <Text style={styles.textTwo} >Job Role:</Text>
                  <Text style={styles.text} >Cleaner DBS FS&R/KAN</Text>
                  <Text style={styles.textTwo} >Reason for Vacancy:</Text>
                  <Text style={styles.text} >Additional Capacity</Text>
                  <Text style={styles.textTwo} >Address of Vacancy:</Text>
                  <Text style={styles.text} >69 Pall Mall, St James`s, St James`s</Text>
                  <Text style={styles.textTwo} >Reference Number:</Text>
                  <Text style={styles.text} >DH 2201101 69 Pall Mall</Text>
                  <Text style={styles.textTwo} >Notes:</Text>
                  <Text style={styles.text} >Hours Required: Mon 1.5hrs 17.30-19.00 Tue 1.5hrs 17.30-19.00 Wed 1.5hrs 17.30-19.00 Thu 1.5hrs 17.30-19.00 Fri 1.5hrs 17.30-19.00 Sat no work Sun no work Total 7.5hrs PW This is a temp to perm position Start Date TBC</Text>
                  <Text style={styles.textTwo} >Total Hours:</Text>
                  <Text style={styles.text} >7.5 Per Week</Text>
                  <View style={styles.rate}>
                    <Text style={styles.rateText} >Rate Card</Text>
                    <View style={styles.containerTwo}>
                      <Text style={styles.textRate} >Rate</Text>
                      <Text style={styles.textRate} >14$</Text>
                    </View>
                  </View>
                  <Text style={styles.textSwift} >Shifts</Text>

                  <View style={styles.container}>
                    <View style={styles.row}>
                      <View style={styles.cell}>
                        <Text style={styles.cellText}>Select</Text>
                      </View>
                      <View style={styles.cell}>
                        <Text style={styles.cellText}>Start Date and Time</Text>
                      </View>
                      <View style={styles.cell}>
                        <Text style={styles.cellText}>End Date and Time </Text>
                      </View>
                      <View style={styles.cell}>
                        <Text style={styles.cellText}>Notes</Text>
                      </View>
                    </View>
                    <View style={styles.row}>
                      <View style={styles.cell}>
                        <Text style={styles.cellTextTwo}>select</Text>
                      </View>
                      <View style={styles.cell}>
                        <Text style={styles.cellTextTwo}>2024-02-22</Text>
                      </View>
                      <View style={styles.cell}>
                        <Text style={styles.cellTextTwo}>2024-02-22</Text>
                      </View>
                      <View style={styles.cell}>
                        <Text style={styles.cellTextTwo}></Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}

              {openSection === 1 &&
                <View style={styles.containerOne}>
                  <Text style={styles.textTwo}>IR35 Determination (In/Out)</Text>
                  <Text style={styles.text}>The following supply types can be used for bookings proposed to this vacancy</Text>
                  <Text style={styles.text}>Pay as you earn (PAYE) - Inside IR35</Text>
                  <Text style={styles.textTwo}>Acknowledgement</Text>
                  <Text style={styles.text}>Please acknowledge receipt of the IR35 determination for this booking - documents available to download. I acknowledge receipt of Xtreme Professional Cleaning's determination that this booking falls INSIDE HMRC's IR35 legislation, and as such tax and statutory costs will be deducted from candidate pay. I commit to communicating this determination to the candidate.</Text>
                </View>}
              {openSection === 2 &&
                <View style={styles.containerOne}>
                  <Text style={styles.textTwo}>Mandatory Compliance Requirements</Text>
                  <Text style={styles.textBasic}>Basic DBS – Certificate evidence</Text>
                  <Text style={styles.text}>Proof of Address – Bank Statement, Utility Bill, Council Tax (dated within 3 months)</Text>
                  <Text style={styles.text}>Proof of National Insurance – NI Card, Payslip, letter about Tax/Pension or Benefits</Text>
                  <Text style={styles.text}>Credit Report – Experian, Equifax etc. We need to see evidence regarding CCJ’s, cannot accept more than £1000 - except Santander</Text>
                  <Text style={styles.text}>Right to Work – Passport, Birth Certificate</Text>
                  <Text style={styles.text}>Sharecode</Text>
                  <Text style={styles.text}>DBS Application in Progress Evidence</Text>
                  <Text style={styles.text}>CV (Updated)</Text>
                  <View style={styles.containerFour}>
                    <Text style={styles.textDoc}>Compliance Documents Report</Text>
                    <View style={styles.containerThree}>
                      <View style={styles.compliance}>
                        <Text style={styles.textTwo}>Required Compliance</Text>
                        <Text style={styles.textBasic}>DBS</Text>
                        <Text style={styles.text}>Proof Of Address</Text>
                        <Text style={styles.text}>Ni Image</Text>
                        <Text style={styles.text}>Credit Report</Text>
                        <Text style={styles.text}>Right To Work</Text>
                        <Text style={styles.text}>Share Code</Text>
                        <Text style={styles.text}>DBS Application</Text>
                        <Text style={styles.text}>CV</Text>
                      </View>
                      <View style={styles.compliance}>
                        <Text style={styles.textTwo}>Your Compliance</Text>
                        <Image
                          source={require('../assets/wrong.jpg')} // Path to your image
                          style={styles.imageTwo}
                        />
                        <Image
                          source={require('../assets/right.png')} // Path to your image
                          style={styles.imageOne}
                        />
                        <Image
                          source={require('../assets/wrong.jpg')} // Path to your image
                          style={styles.imageOne}
                        />
                        <Image
                          source={require('../assets/wrong.jpg')} // Path to your image
                          style={styles.imageOne}
                        />
                        <Image
                          source={require('../assets/right.png')} // Path to your image
                          style={styles.imageOne}
                        />
                        <Image
                          source={require('../assets/wrong.jpg')} // Path to your image
                          style={styles.imageOne}
                        />
                        <Image
                          source={require('../assets/wrong.jpg')} // Path to your image
                          style={styles.imageOne}
                        />
                        <Image
                          source={require('../assets/right.png')} // Path to your image
                          style={styles.imageOne}
                        />
                      </View>
                    </View>
                  </View>
                </View>}
              {openSection === 3 && <View style={styles.containerOne}>
                <Text style={styles.textTwo}>Dress Code</Text>
                <Text style={styles.text}>Cleaning Operatives must wear non-branded footwear & clothing (can wear adidas branded)</Text>
                <Text style={styles.text}>Cleaning Operatives must have suitable experience and demonstrate this when on site</Text>
                <Text style={styles.text}>Cleaning Operatives not to use their mobile phones when on site this includes ear pods & other devices.</Text>
                <Text style={styles.text}>Cleaning operatives must use telephone Time & Attendance to clock in & out of every shift using employee number provided , failure to do this will result in timesheets not being approved & unpaid. (Must use the phone provided in store, any issues with clocking must be reported on the day to myself) do not use mobile phones only the phone provided in store.</Text>
                <Text style={styles.text}>Cleaning operatives must sign in on Adidas book & out at the end of their shift & complete bag checks ( this is not proof of attendance this is adidas sign in sheet for H&S)</Text>
                <Text style={styles.text}>candidates are not entitled to a break (unless working over 6 hours a day)</Text>
                <Text style={styles.text}>Contacts are - James Burgess 07850606888 mobile supervisor & Chris Burgess sector manager 07703468999</Text>
              </View>}
              {openSection === 4 && <Text style={styles.text}></Text>}
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
 
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '95%', 
    height: '95%', 
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#dc3545"
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: "600"
  },
  applyButton: {
    backgroundColor: "#28a745",
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    marginRight: 5
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "600"
  },
  sectionsContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#dee2e6',
    backgroundColor: "white",
    width: 350,
    height: 200,
    paddingLeft: 20
  },
  containerOne: {
    borderWidth: 1,
    borderColor: '#dee2e6',
    width: 350,
    paddingTop: 30,
    paddingLeft: 20

  },
  text: {
    color: '#878787',
    marginBottom: 15
  },
  textBasic: {
    color: '#878787',
    marginTop: 15,
    marginBottom: 15
  },
  textOne: {
    color: 'black',
    paddingBottom: 20,
    fontSize: 16,
    fontWeight: '600'
  },
  textTwo: {
    color: "black",
  },
  containerTwo: {
    borderWidth: 1,
    borderColor: '#dee2e6',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-evenly",
    marginRight: 20
  },
  rate: {
    marginBottom: 30,
  },
  rateText: {
    marginBottom: 30,
    color: "black"
  },
  textSwift: {
    color: 'black',
    marginBottom: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#dee2e6'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cell: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  cellText: {
    fontWeight: 'bold',
    color: 'black'
  },
  cellTextTwo: {
    color: '#878787'
  },
  textRate: {
    color: '#878787'
  },
  btnContainer: {
    flexDirection: "row",
    marginLeft: 190,
    marginBottom:30
  },
  containerThree: {
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  imageOne: {
    width: 20,
    height: 20,
    marginBottom: 13
  },
  imageTwo: {
    marginTop: 15,
    marginBottom: 15,
    width: 25,
    height: 20,
  },
  containerFour: {
    borderWidth: 1,
    borderColor: '#dee2e6',
    paddingTop: 30,
    marginBottom: 30,
    marginRight: 20
  },
  textDoc: {
    textAlign: "center",
    color: "black",
    fontWeight: '500',
    marginBottom: 30
  },
  compliance: {
    alignItems: 'center'
  },

});

export default ModalComponent;