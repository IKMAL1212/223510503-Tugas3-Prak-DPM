import { StyleSheet, Text, TouchableOpacity, View } from "react-native"; 
import { Feather } from "@expo/vector-icons";

const ProfileNavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.text}>My Profile</Text>
      <TouchableOpacity style={styles.iconButton}>
        <Feather name="menu" size={24} color="black" /> 
      </TouchableOpacity>
    </View>
  );
};

export default ProfileNavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#f9f9f9',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconButton: {
    padding: 8,
  },
});
