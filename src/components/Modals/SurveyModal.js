import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import ReactNativeModal from 'react-native-modal';
import {hp, normalize, wp} from '../../theme/dimensions';
import {COLORS} from '../../theme/colors';
import {
  MontserratExtraBold,
  MontserratMedium,
  MontserratSemiBold,
} from '../../theme/fonts';

const SurveyModal = ({
  visible,
  setVisible,
  survey,
  onPressAnswer,
  selectedAnswer,
  setSelectedAnswer,
}) => {

  useEffect(() => {
    setSelectedAnswer(survey?.voterAnswer?.answer);
  }, [survey]);

  const onPressSelectAnswer = (val) => {
    if(val == selectedAnswer){
      setSelectedAnswer('')
    } else {
      setSelectedAnswer(val)
    }
  };
  

  return (
    <ReactNativeModal
      isVisible={visible}
      onBackdropPress={() => setVisible(false)}
      onBackButtonPress={() => setVisible(false)}
      style={{margin: 0, padding: 0}}>
      <View style={styles.modalbox}>
        <Text style={styles.heading}>{survey?.surveyName}</Text>
        <Text style={styles.surveyquestion}>{survey?.surveyQuestion}?</Text>
        <View style={styles.line} />
        <ScrollView>
          {survey?.surveyAnswers?.map((item, index) => (
            <TouchableOpacity
              onPress={()=>onPressSelectAnswer(item)}
              key={index}
              style={styles.answerbox(selectedAnswer, item)}>
              <Text style={styles.answertxt(selectedAnswer, item)}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            onPressAnswer(selectedAnswer, survey?.surveyId), setVisible(false);
          }}
          style={styles.btnbox}>
          <Text style={styles.btntxt}>Save Answer</Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  );
};

export default SurveyModal;

const styles = StyleSheet.create({
  modalbox: {
    backgroundColor: COLORS.white,
    paddingVertical: hp(2),
  },
  heading: {
    fontFamily: MontserratMedium,
    fontSize: normalize(18),
    textAlign: 'center',
  },
  surveyquestion: {
    fontFamily: MontserratExtraBold,
    fontSize: normalize(20),
    color: COLORS.orangeReddish,
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#A6A6A630',
    marginVertical: hp(3),
  },
  answerbox: (voterAnswer, answer) => {
    return {
      marginVertical: hp(1),
      width: '60%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:
        voterAnswer === answer
          ? COLORS.orange
          : COLORS.white,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,

      elevation: 3,
      borderRadius: wp(1),
    };
  },
  answertxt: (voterAnswer, item) => {
    return {
      fontFamily: MontserratSemiBold,
      fontSize: normalize(18),
      color: voterAnswer == item ? COLORS.white : COLORS.darkGray,
      marginVertical: hp(1),
    };
  },
  btnbox: {
    marginTop: hp(4),
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.orangeReddish,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 3,
    borderRadius: wp(1),
  },
  btntxt: {
    fontFamily: MontserratExtraBold,
    fontSize: normalize(18),
    color: COLORS.white,
    marginVertical: hp(1),
  },
});
