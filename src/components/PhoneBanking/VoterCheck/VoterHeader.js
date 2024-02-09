import React, { useMemo, useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { chevronleft, homeicon } from '../../../theme/images';
import { hp, normalize, wp } from '../../../theme/dimensions';
import { MontserratMedium, MontserratSemiBold } from '../../../theme/fonts';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../theme/colors';

const VoterHeader = ({
  leftTitle,
  onPressLeft,
  title,
  rightTitle,
  onPressRight,
  paddingBottom,
  enableBack= false
}) => {
  const navigation = useNavigation();

  const onPressLeftHandle = useCallback(() => {
    if (onPressLeft || leftTitle) {
      onPressLeft && enableBack==false? onPressLeft() : navigation.canGoBack() && navigation.goBack();
    }
  }, [onPressLeft, leftTitle, navigation, enableBack]);

  const onPressRightHandle = useCallback(() => {
    onPressRight ? onPressRight() : console.log('Right');
  }, [onPressRight]);

  const leftComponent = useMemo(() => {
    if (leftTitle) {
      return <Text style={styles.leftTitle}>{leftTitle}</Text>;
    } else {
      return (
        <Image
          source={chevronleft}
          style={styles.icon('L')}
          resizeMode="contain"
        />
      );
    }
  }, [leftTitle]);

  const rightComponent = useMemo(() => {
    if (rightTitle) {
      return <Text style={styles.savetxt}>{rightTitle}</Text>;
    } else {
      return (
        <Image
          source={homeicon}
          style={styles.icon('R')}
          resizeMode="contain"
        />
      );
    }
  }, [rightTitle]);

  return (
    <View style={{ overflow: 'hidden', paddingBottom: paddingBottom ?? 4}}>
      <View style={styles.container}>
        <TouchableOpacity
          disabled={leftTitle || onPressLeft ? false : true}
          style={styles.savebox}
          onPress={onPressLeftHandle}>
          {leftComponent}
        </TouchableOpacity>

        <Text style={styles.nametxt}>{title}</Text>
        
        <TouchableOpacity
          disabled={rightTitle || onPressRight ? false : true}
          style={styles.savebox}
          onPress={onPressRightHandle}>
          {rightComponent}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(VoterHeader);

const styles = StyleSheet.create({
  leftTitle: {
    fontFamily: MontserratMedium,
    fontSize: normalize(15),
    width: wp(18),
    // backgroundColor: 'yellow',
    color: COLORS.primary,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    height: hp(6),
    backgroundColor: COLORS.background,
    shadowColor: COLORS.darkGray,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  icon: (val) => {
    return {
      width: wp(10),
      height: wp(6),
      tintColor: COLORS.primary,
      // backgroundColor: 'green',
      // left: val == 'L' ? wp(0) : wp(6),
    };
  },
  nametxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(16),
    color: COLORS.darkGray,
    width: wp(60),
    // backgroundColor: 'blue',
    textAlign: 'center',
  },
  savebox: {
    width: wp(12),
    alignItems: 'flex-start',
  },
  savetxt: {
    fontFamily: MontserratMedium,
    fontSize: normalize(15),
    width: wp(20),
    // backgroundColor: 'green',
    color: COLORS.primary,
  },
});
