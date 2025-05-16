import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, TextInput } from "react-native";
import contacts, { compareNames } from "../contact";
import ContactList from "../ContactList";

export default function HomeScreen() {
  const [showContacts, setShowContacts] = useState(false);
  const [sortedContacts, setSortedContacts] = useState(contacts);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleContacts = () => {
    setShowContacts((prev) => !prev);
  };

  const sort = () => {
    setSortedContacts((prev) => [...prev.sort(compareNames)]);
  };

  const filteredContacts = sortedContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Button title="toggle contacts" onPress={toggleContacts} />
      <Button title="sort" onPress={sort} />
      {showContacts && (
        <>
          <TextInput
            style={styles.searchInput}
            placeholder="Search contacts..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <ContactList contacts={filteredContacts} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 10,
  },
});
