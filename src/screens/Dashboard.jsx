import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';

export default function Dashboard({ navigation }) {

  function openVacancy(){
    navigation.navigate('Vacancy')
  }

  function openSchedule(){
    navigation.navigate('Schedule')
  }

  function openProfile(){
    navigation.navigate('Profile')
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
            Home
          </Text>
          <Text style={styles.textHome}>Home/<Text style={styles.textThree}>Dashboard</Text>
          </Text>
        </View>
        <View>
          <View style={styles.containerThree}>
            <TouchableOpacity onPress={openVacancy}>
            <Image
              source={require('../assets/portfolio.png')} // Path to your image
              style={styles.image}
            />
            <Text style={styles.textFour}>
              0
            </Text>
            <Text style={styles.textFive}>
              Vacancies
            </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={openSchedule}>
            <Image
              source={require('../assets/schedule.png')} // Path to your image
              style={styles.image}
            />
            <Text style={styles.textFour}>
              0
            </Text>
            <Text style={styles.textFive}>
              Schedules
            </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Image
              source={require('../assets/rating.png')} // Path to your image
              style={styles.imageBorder}
            />
            <Text style={styles.textEight}>
              Your Rating
            </Text>
            <Image
              source={require('../assets/star.jpg')} // Path to your image
              style={styles.imageTwo}
            />
          </View>
          <View style={styles.containerFour}>
<TouchableOpacity onPress={openProfile}>
            <Text style={styles.textSix}>
              0% Profile Complete!
            </Text>
            <Text style={styles.textSeven}>
              Completing your profile makes you much more likely to be accepted for any job applications you submit.
            </Text>
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
  image: {
    width: 90,
    height: 90,
    marginTop: 20,
    marginBottom: 15,
  },
  imageBorder: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 15,
    borderRadius: 200
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
  imageTwo: {
    width: 110,
    height: 70,
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
  textFour: {
    fontSize: 20,
    color: "black",
    marginLeft:40
  },
  textEight:{
    fontSize: 20,
    color: "black",
  },
  containerThree: {
    borderWidth: 2,
    backgroundColor: "white",
    margin: 20,
    borderColor: "transparent",
    alignItems: 'center',
    borderRadius: 15
  },
  textFive: {
    padding: 15,
    color: '#878787'
  },
  containerFour: {
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "transparent",
    alignItems: 'center',
    borderRadius: 15,
    width: 370,
    height: 200,
    margin: 20
  },
  textSix: {
    fontSize: 22,
    padding: 30,
    color: '#878787'
  },
  textSeven: {
    textAlign: 'center',
    padding: 15,
    color: '#878787'
  }
});