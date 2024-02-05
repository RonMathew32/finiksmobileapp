import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { COLORS } from '../../theme/colors';
import { hp, normalize, wp } from '../../theme/dimensions';
import AppButton from '../AppButton';
import useReduxStore from '../../hooks/useReduxStore';
import { toCamelCase } from '../../utils/FilterArray';
import Icon from 'react-native-vector-icons/Entypo';

const DoNotCallModal = ({ isVisible, onClose, onSave, selected }) => {
  const { listId, currentVoter } = useReduxStore();
  const [recordInteraction, setRecordInteraction] = useState('Connected');
  const [selectInteraction, setSelectInteraction] = useState(
    recordInteraction === 'Connected' ? 'Do Not Call' : 'None'
  );

  const interactionOptions = useMemo(
    () => ['None', 'Sent Text', 'Left Voicemail', 'Sent Email', 'Hung up'],
    []
  );

  const onPressNextVoter = useCallback(() => {
    onSave(toCamelCase(selectInteraction));
  }, [listId, currentVoter, selectInteraction]);

  useEffect(() => {
    if (recordInteraction === 'Connected')
      setSelectInteraction(selected == 'donot' ? 'Do Not Call' : 'Contact Later');
    if (recordInteraction === 'No Answer') setSelectInteraction('None');
  }, [recordInteraction]);

  const RadioButton = ({ title, index }) => (
    <TouchableOpacity
      key={index}
      onPress={() => setSelectInteraction(title)}
      style={styles.radioButton}
    >
      <View style={styles.radioCircle}>
        {title === selectInteraction && <View style={styles.selectedRadioCircle} />}
      </View>
      <Text style={[styles.btnTxtStyle(COLORS.darkGray)]}>{title}</Text>
    </TouchableOpacity>
  );

  const renderRadioButtons = useMemo(() => {
    if (recordInteraction === 'Connected') {
      return selected == 'next' ? null : (
        <RadioButton title={selected == 'donot' ? 'Do Not Call' : 'Contact Later'} />
      );
    } else {
      return interactionOptions.map((item, index) => (
        <RadioButton key={index} title={item} index={index} />
      ));
    }
  }, [recordInteraction, interactionOptions, selectInteraction]);

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text></Text>
            <Text style={styles.title}>Record Interaction</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="cross" color={COLORS.white} size={hp(3)} />
            </TouchableOpacity>
          </View>

          <View style={styles.checkContent}>
            <Text style={styles.heading}>Are You Finished Calling This Voter?</Text>
            <View style={styles.alignBtn}>
              <AppButton style={styles.btnStyle(COLORS.orange)} title="Yes" />
              <AppButton
                style={styles.btnStyle(COLORS.white)}
                textStyle={styles.btnTxtStyle(COLORS.darkGray)}
                onPress={onClose}
                title="No"
              />
            </View>
            <Text style={[styles.heading, styles.subHeading]}>
              Please Record Your Interaction
            </Text>
            <View style={styles.alignBtn}>
              <AppButton
                style={styles.btnStyle(
                  recordInteraction === 'Connected' ? COLORS.orange : COLORS.white
                )}
                textStyle={styles.btnRecTxtStyle(
                  recordInteraction === 'Connected' ? COLORS.white : COLORS.darkGray
                )}
                title="Called, Connected"
                onPress={() => setRecordInteraction('Connected')}
              />
              <AppButton
                style={styles.btnStyle(
                  recordInteraction === 'No Answer' ? COLORS.orange : COLORS.white
                )}
                textStyle={[
                  styles.btnTxtStyle(
                    recordInteraction === 'No Answer' ? COLORS.white : COLORS.darkGray
                  ),
                  styles.btnRecTxtStyle,
                  { fontSize: normalize(10) },
                ]}
                title="Called, No Answer"
                onPress={() => setRecordInteraction('No Answer')}
              />
            </View>
            <View style={styles.doNotCallContainer}>
              <View style={{ alignItems: 'center', marginLeft: wp(10) }}>
                {renderRadioButtons}
              </View>

              <AppButton
                style={[styles.btnStyle(COLORS.orange), styles.nextVoterBtn]}
                textStyle={styles.btnRecTxtStyle}
                title="Next Voter"
                onPress={onPressNextVoter}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: COLORS.orange,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  doNotCallContainer: { alignItems: 'center', marginVertical: hp(3) },
  nextVoterBtn: {
    width: wp(60),
  },
  selectedRadioCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.powderblue,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(40),
    marginBottom: hp(1),
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.powderblue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(3),
  },
  btnRecTxtStyle: (color) => ({
    fontSize: normalize(10),
    color: color,
  }),
  subHeading: {
    marginTop: hp(5),
  },
  btnTxtStyle: (color) => ({
    color: color,
    fontSize: normalize(16),
    fontWeight: '500',
  }),
  btnStyle: (color) => ({
    backgroundColor: color,
    width: wp(35),
    height: hp(5),
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 5,
  }),
  alignBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    color: COLORS.orangeReddish,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  checkContent: {
    padding: 20,
    width: wp(85),
  },
  title: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: wp(5),
  },
});

export default React.memo(DoNotCallModal);
