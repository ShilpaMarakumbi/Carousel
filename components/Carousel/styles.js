import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbfbfb',
    marginTop:16,
    marginLeft:16,

  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',

  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 40,
    borderColor: "grey",
    borderWidth: 1,
    margin:16
  }
});

export default styles;