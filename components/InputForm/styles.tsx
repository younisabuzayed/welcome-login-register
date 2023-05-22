import { StyleSheet } from "react-native";
import { colors, height } from "../../constants";

export default StyleSheet.create({
  formContainer: {
    marginBottom: 12,
  },
  labelInputForm:
  {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 5,
  },
  inputView:
  {
    height: 48,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 8,
    flexDirection: 'row',
    marginVertical: 5,
    alignItems:'center',
  },
  inputForm: {
    width: '100%',
    paddingLeft: 10,
  }
});