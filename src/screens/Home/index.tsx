import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = [
    "Derickson",
    "Diogo",
    "Giuliano",
    "Mahara",
    "Denis",
    "Maikel",
    "Breno",
    "Gui Brenner",
  ];

  function handleParticipantAdd() {
    console.log("Clique no botão de add");
  }
  function handleParticipantRemove(name: string) {
    console.log(`Você clicou para remover o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Segunda, 31 de Outubro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
