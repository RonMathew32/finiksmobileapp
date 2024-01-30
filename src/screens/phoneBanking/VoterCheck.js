import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import VoterHeader from '../../components/PhoneBanking/VoterCheck/VoterHeader';
import VoterActions from '../../components/PhoneBanking/VoterCheck/VoterActions';
import VoterSurvey from '../../components/PhoneBanking/VoterCheck/VoterSurvey';
import useVoterCheck from '../../hooks/useVoterCheck';
import {
  ToastMessageDark,
  ToastMessageLight,
} from '../../components/GlobalComponent/DisplayMessage';
import LoadingScreen from '../../components/GlobalComponent/LoadingScreen';
import useReduxStore from '../../hooks/useReduxStore';
import VoterTags from '../../components/PhoneBanking/VoterCheck/VoterTags';
import VoterInfo from '../../components/PhoneBanking/VoterCheck/VoterInfo';
import VoterDescription from '../../components/PhoneBanking/VoterCheck/VoterDescription';
import SelectionButton from '../../components/PhoneBanking/VoterCheck/SelectionButton';
import WrongNumberModal from '../../components/Modals/WrongNumber';
import DoNotCallModal from '../../components/Modals/DoNotCallModal';
import {COLORS} from '../../theme/colors';
import {formattedDate} from '../../utils/FormatedDate';
import {hp, normalize, wp} from '../../theme/dimensions';
import {MontserratBold} from '../../theme/fonts';
import {
  getSaveInteraction,
  getSurveyToTake,
  getWrongNumber,
} from '../../redux/actions/phonebank.actions';
import {
  extractTagIdAndName,
  filteredSurveyAnswerByVoter,
  filteredSurveyIds,
} from '../../utils/FilterArray';
import {setCurrentVoter} from '../../redux/actions/voters.actions';

const VoterCheck = ({route, navigation}) => {
  const item = route.params?.item ?? null;
  const {
    votersTag,
    survey,
    currentVoter,
    currentRecord,
    currentCampaign,
    campaignTags,
    customTags,
    dispatch,
    token,
    user,
    listId,
    unDoneVoters,
  } = useReduxStore();

  const {loading} = useVoterCheck(item);
  const [selected, setSelected] = useState('');
  const [isVisibleWrongModal, setIsVisibleWrongModal] = useState(false);
  const [isVisibleDoNotCallModal, setIsVisibleDoNotCallModal] = useState(false);
  const [nextVoterloader, setNextVoterloader] = useState(false);

  const headerTitle = useMemo(
    () =>
      currentVoter?.FIRSTNAME
        ? `${currentVoter?.FIRSTNAME} ${currentVoter?.LASTNAME}`
        : '',
    [currentVoter],
  );

  const commonPayloadData = {
    listId: listId,
    voterId: currentVoter?._id,
  };

  const commonAPIData = {
    token,
    role: user?.role,
    ToastMessageLight,
  };

  const onPressNextVoter = useCallback(() => {
    if (!currentVoter?._id) {
      ToastMessageDark('List Finished');
    } else {
      if (filteredSurveyIds(survey)?.length) {
        const payload = {
          campaignId: currentCampaign?.campaignId,
          campaignName: currentCampaign?.campaignName,
          voterId: currentVoter?._id,
          voterName: currentVoter?.FIRSTNAME,
          surveyData: filteredSurveyIds(survey),
          voterAnswers: filteredSurveyAnswerByVoter(survey),
          recordType: 'phonebanking',
          geoLocation: '',
          date: new Date(),
          time: new Date(),
          subUserId: user?.id,
          subUserName: user?.username,
          actions: {
            votersInfluenced: true,
            doorsKnocked: false,
            votersSurveyed: true,
            votersMessaged: false,
            phonesCalled: true,
          },
          contactedWay: 'Phone Call',
          tags: extractTagIdAndName(votersTag),
          list: currentRecord?.list,
          recordId: currentRecord?._id,
          totalNumbers: currentRecord?.totalNumbers,
          interaction: 'surveyTaken',
        };
        dispatch(
          getSurveyToTake({
            ...commonAPIData,
            payload,
            setLoading: setNextVoterloader,
            onSuccess: navigation.goBack(),
          }),
        );
      } else {
        setSelected('next')
      }
    }
  }, [currentVoter, votersTag, currentRecord, user, survey, dispatch]);

  const onSaveWhichNumIsWrong = useCallback(
    data => {
      const filteredData = Object.fromEntries(
        Object.entries(data).filter(([key, value]) => value !== ''),
      );
      const isFilteredDataEmpty = Object.keys(filteredData).length === 0;

      if (isFilteredDataEmpty) {
        ToastMessageLight('Not Selected');
      } else {
        const keysArray = Object.keys(filteredData);
        const payload = {
          ...commonPayloadData,
          wrongNumbers: keysArray,
        };

        dispatch(
          getWrongNumber({
            ...commonAPIData,
            payload,
          }),
        );
        closeWrongNumberModal();
      }
    },
    [commonPayloadData, commonAPIData, dispatch],
  );

  const onSaveRecordInteraction = useCallback(
    val => {
      const payload = {
        ...commonPayloadData,
        interaction: val,
      };

      dispatch(
        getSaveInteraction({
          ...commonAPIData,
          payload,
          onSuccess: closeDoNotCallModal,
        }),
      );
      if(selected == 'next'){
        onPressYesToNextVoter()
      }
    },
    [commonPayloadData, commonAPIData, dispatch],
  );

  const onPressYesToNextVoter = useCallback(() => {
    const currentIndex = unDoneVoters.findIndex(
      item => item._id === currentVoter._id,
    );
    const nextIndex = (currentIndex + 1) % unDoneVoters?.length;
    const isLastItem = currentIndex === unDoneVoters.length - 1;

    if (isLastItem) {
      ToastMessageLight('This was the last voter');
      navigation.goBack()
    } else {
      dispatch(setCurrentVoter(unDoneVoters[nextIndex]));
    }
    setIsVisibleDoNotCallModal(false)
  }, [unDoneVoters, currentVoter, dispatch, ToastMessageLight]);

  const closeDoNotCallModal = () => {
    setIsVisibleDoNotCallModal(false);
    setSelected('');
  };

  const closeWrongNumberModal = () => {
    setIsVisibleWrongModal(false);
    setSelected('');
  };

  useEffect(() => {
    if (selected === 'wrong') {
      setIsVisibleWrongModal(true);
    } else if (selected === 'donot' || 'contact' || 'next') {
      setIsVisibleDoNotCallModal(true);
    }
  }, [selected]);

  return !currentVoter?._id || loading ? (
    <LoadingScreen />
  ) : (
    <SafeAreaView style={styles.container}>
      <VoterHeader title={headerTitle} leftTitle="Done" />
      <VoterActions currentVoter={currentVoter} navigation={navigation} />
      {selected === 'survey' ? (
        <VoterSurvey tags={votersTag} data={survey} />
      ) : (
        <>
          <View style={styles.voterinfo}>
            <Text style={styles.lastcontact}>
              Last Contacted {formattedDate(currentVoter)}
            </Text>
            <VoterTags
              campaignTags={campaignTags}
              customTags={customTags}
              voterTags={votersTag}
            />
            <VoterInfo currentVoter={currentVoter} />
          </View>
          <VoterDescription />
        </>
      )}

      <View style={styles.voterinfo}>
        <SelectionButton
          onNextPress={onPressNextVoter}
          selected={selected}
          setSelected={setSelected}
          nextVoterLoader={nextVoterloader}
        />
        {selected === 'wrong' && (
          <WrongNumberModal
            isVisible={isVisibleWrongModal}
            onClose={closeWrongNumberModal}
            onSave={onSaveWhichNumIsWrong}
            voter={currentVoter}
            selected={selected}
          />
        )}
        {(selected === 'donot' || 'contact' || 'next') && (
          <DoNotCallModal
            isVisible={isVisibleDoNotCallModal}
            onClose={closeDoNotCallModal}
            onSave={onSaveRecordInteraction}
            selected={selected}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default VoterCheck;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  voterinfo: {
    marginHorizontal: wp(4),
  },
  lastcontact: {
    fontFamily: MontserratBold,
    fontSize: normalize(12),
    color: COLORS.darkGray,
    marginTop: hp(2),
  },
});
