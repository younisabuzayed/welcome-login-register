import { StyleSheet } from "react-native";
import { colors, height } from "../../../constants";

export default StyleSheet.create({
  container:
  {
    flex: 1,
    marginHorizontal: 22,
  },
  headerContainer:
  {
    marginVertical: 22,
  },
  title:
  {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 12,
    color: colors.black,
  },
  subtitle: {
    fontSize: 16,
    color: colors.black,
  },
  formContainer: {
    marginBottom: 12,
  },
  showEye:
  {
    width: '12%',
  },
  termsConditionsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  termsConditionsText: {
    marginLeft: 5,
  },
  LoginnWithContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineView: {
    flex: 1,
    height: 1,
    backgroundColor: colors.grey,
    marginHorizontal: 5
  },
  SignupWithText: {
    fontSize: 14,
  },
  loginWithButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
    columnGap: 5,
  },
  loginWithBtn:
  {
    flex: 1,
    height: 52,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 10,
  },
  imageIcon: {
    height: 36,
    width: 36,
    marginHorizontal: 5,
  },
  moveOtherPageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 22,
  },
  moveOtherPageTitle: {
    fontSize: 16,
    color: colors.black,
  },
  moveOtherPageText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
    marginHorizontal: 5,
  }
});