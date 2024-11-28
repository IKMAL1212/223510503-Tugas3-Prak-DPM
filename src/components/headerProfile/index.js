import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { buttonStyles } from "../../style/buttonStyles";

const ProfileHeader = () => {
  const handleProfileClick = () => {
    // Logika ketika profil di klik
    console.log("Profile clicked!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleProfileClick} style={styles.profileContainer}>
        <Image 
          source={require('../headerProfile/foto/2.jpg')}
          style={styles.profileImage} 
        />
        <Text style={styles.nameText}>MR.Kemal</Text>
      </TouchableOpacity>
      <View style={styles.counterContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.labelText}>Posts</Text>
        </View>
        <TouchableOpacity style={styles.editButtonContainer}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.additionalText}>WAJAR MANUSIA BUKAN NABI BOYYY.☠️</Text>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#f9f9f9",
  },
  profileContainer: {
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#d3d3d3",
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemContainer: {
    alignItems: "center",
    marginHorizontal: 15,
    padding: 10, 
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
  },
  labelText: {
    color: "gray",
    fontSize: 13,
    fontWeight: "bold",
  },
  editButtonContainer: {
    marginLeft: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  editButtonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
  additionalText: {
    marginTop: 15,
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
});
