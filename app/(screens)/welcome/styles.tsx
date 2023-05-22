import { StyleSheet } from "react-native";
import { colors, height } from "../../../constants";

export default StyleSheet.create({
  imageAbsolute: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: 'absolute',
  },
  contentContainer: {
    position: 'absolute',
    top: height * 0.55,
    paddingHorizontal: 20,
    width: '100%'
  },
  titleContent: {
    fontSize: 50,
    fontWeight: "800",
    color: colors.white,
  },
  textContentContainer: {
    marginVertical: 22,
  },
  textContent: {
    fontSize: 16,
    color: colors.white,
    marginVertical: 5,
  },
  haveAcountText: {
    marginVertical: 5,
    fontSize: 15,
    color: colors.white
  },
  haveAcountTextTitle:
  {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  }
});