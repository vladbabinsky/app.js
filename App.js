  import React, { useState } from 'react';
  import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

  export default function App() {
    const [count, setCount] = useState(0);

    const [text, setText] = useState('');

    const [bgColor, setBgColor] = useState('white');
    const colors = ['white', 'grey', 'yellow'];

    const [listText, setListText] = useState('');
    const [items, setItems] = useState([]);

    return (
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        {/* Завдання 1: Лічильник */}
        <Text>Завдання 1: Лічильник</Text>
        <Text style={styles.largeText}>{count}</Text>
        <Button title="+" onPress={() => count < 10 && setCount(count + 1)} />
        <Button title="-" onPress={() => count > 0 && setCount(count - 1)} />

        {/* Завдання 2: Поле вводу */}
        <Text>Завдання 2: Поле вводу</Text>
        <TextInput
          style={styles.input}
          placeholder="Введіть текст"
          onChangeText={(value) => setText(value)}
        />
        <Text>{text || 'Введіть текст'}</Text>

        {/* Завдання 3: Перемикач кольору */}
        <Text>Завдання 3: Перемикач кольору</Text>
        <Button
          title="Змінити фон"
          onPress={() => {
            const nextColor = colors[(colors.indexOf(bgColor) + 1) % colors.length];
            setBgColor(nextColor);
          }}
        />

        {/* Завдання 4: Список */}
        <Text>Завдання 4: Список</Text>
        <TextInput
          style={styles.input}
          placeholder="Введіть текст"
          value={listText}
          onChangeText={(value) => setListText(value)}
        />
        <Button
          title="Додати до списку"
          onPress={() => {
            if (listText) {
              setItems([...items, listText]);
              setListText('');
            }
          }}
        />
        <FlatList
          data={items}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: '90%',
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 10,
      padding: 5,
    },
    largeText: {
      fontSize: 30,
      marginVertical: 10,
    },
  });
