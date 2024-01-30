import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../../../theme/dimensions';
import {
  MontserratExtraBold,
  MontserratMedium,
  MontserratSemiBold,
} from '../../../theme/fonts';
import {partyCodes} from '../../../constants/partyCodes';

const VoterInfo = ({currentVoter, canvass = false}) => {
  const {FIRSTNAME, LASTNAME, ADDRESS, SEX, AGE, PARTY_CODE} = currentVoter;
  const name = FIRSTNAME ? `${FIRSTNAME} ${LASTNAME}` : '';

  return (
    <View style={styles.container}>
      <View>
        {canvass ? null : renderInfo('Name', name, canvass)}
        {renderInfo('Address', ADDRESS, canvass)}
        {renderInfo(
          'Demographics',
          getDemographics(SEX, AGE, PARTY_CODE),
          canvass,
        )}
      </View>
      {canvass ? null : (
        <View style={styles.imageBack}>
          <Text style={styles.nameText}>{getInitials(name)}</Text>
        </View>
      )}
    </View>
  );
};

const renderInfo = (heading, value, canvass) => (
  <>
    {canvass ? null : <Text style={styles.heading}>{heading}</Text>}
    <Text style={styles.subheading}>{value ?? ''}</Text>
  </>
);

const getDemographics = (sex, age, partyCode) => {
  const gender = sex === 'F' ? 'Female' : sex === 'M' ? 'Male' : '';
  return `${gender}     | ${age ?? ''} Years Old     | ${
    partyCodes[partyCode] ?? ''
  }`;
};

const getInitials = name =>
  `${name ? name.trim()[0] : ''} ${
    name ? name.trim().split(' ').pop()[0] : ''
  }`;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(2.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBack: {
    width: wp(18),
    height: wp(18),
    backgroundColor: '#FF914D',
    borderRadius: wp(18) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontFamily: MontserratExtraBold,
    fontSize: normalize(21),
    color: 'white',
  },
  heading: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(12),
    color: '#D12E2F',
    marginTop: hp(0.7),
  },
  subheading: {
    fontFamily: MontserratMedium,
    fontSize: normalize(12),
    color: '#545454',
    marginLeft: wp(4),
    marginTop: hp(0.7),
  },
});

export default React.memo(VoterInfo);
