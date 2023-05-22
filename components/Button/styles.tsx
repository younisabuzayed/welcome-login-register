import { StyleSheet } from "react-native";
import { colors, height } from "../../constants";

export default StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 18,
  }
});