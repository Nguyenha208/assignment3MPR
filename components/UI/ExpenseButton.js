import { Pressable, StyleSheet, Text, View } from 'react-native';

function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#8f9495',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  flat: {
    backgroundColor: 'transparent',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'normal'
  },
  flatText: {
    color: '#aea293',
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: '#ebebeb',
    borderRadius: 10,
  },
});