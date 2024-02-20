import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Pressable,
} from 'react-native';
import { COLORS } from '../../theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { hp, normalize, wp } from '../../theme/dimensions';
import stylee from '../../constants/stylee';

const Accordion = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  useMemo(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const toggleExpand = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);

  return (
    <View>
      <Pressable style={[stylee.alignJSR, styles.row]} onPress={toggleExpand}>
        <Text style={styles.title}>{title}</Text>
        <Icon
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={30}
          color={COLORS.darkGray}
        />
      </Pressable>
      <View style={styles.parentHr} />
      {expanded && <View style={styles.child}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  row: {
    height: hp(10),
    paddingHorizontal: wp(5),
    backgroundColor: COLORS.background,
  },
  parentHr: {
    height: 1,
    color: COLORS.lavendarWhiteDark,
    width: '100%',
  },
  child: {
    backgroundColor: COLORS.background,
    paddingVertical: hp(2),
    paddingHorizontal: wp(5),
    top: -1,
  },
});

export default Accordion;
