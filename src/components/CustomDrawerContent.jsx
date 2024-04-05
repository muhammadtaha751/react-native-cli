import { View, Text, StyleSheet } from 'react-native';

const CustomDrawerContent = () => {
    return (
      <View style={styles.drawerContent}>
        <Text>Drawer Content</Text>
      </View>
    );
  };

  
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      justifyContent: 'center',
      padding: 10,
      backgroundColor: 'white', // Adjust background color if needed
    },
  });
  