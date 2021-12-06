import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

interface ITodo {
  id: number;
  value: number;
}

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          margin: 10,
        }}
      >
        Todo app
      </Text>
      <Button
        title="Add todo"
        onPress={() =>
          setTodos([
            ...todos,
            {
              id: todos.length <= 0 ? 1 : todos[todos.length - 1].id + 1,
              value: 0,
            },
          ])
        }
      />
      {todos.length > 0 &&
        todos.map((todo) => (
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              margin: 10,
              width: 150,
            }}
            key={todo.id}
          >
            <Text>{todo.value}</Text>
            <Button
              title="+"
              color="#f0f"
              onPress={() =>
                setTodos([
                  ...todos.map((tod) =>
                    todo.id === tod.id
                      ? { id: tod.id, value: todo.value + 1 }
                      : { id: tod.id, value: tod.value }
                  ),
                ])
              }
            />
            <Button
              title="-"
              color="#333"
              onPress={() =>
                setTodos([
                  ...todos.map((tod) =>
                    todo.id === tod.id
                      ? { id: tod.id, value: todo.value - 1 }
                      : { id: tod.id, value: tod.value }
                  ),
                ])
              }
            />
            <Button
              color="#f00"
              title={"delete"}
              onPress={() =>
                setTodos([...todos.filter((tod) => todo.id !== tod.id)])
              }
            />
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
