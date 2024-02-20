import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import VoterHeader from '../../components/Headers/VoterHeader';
import VoterActions from '../../components/VoterActions';
import VoterSurvey from '../../components/VoterSurvey';
import useVoterCheck from '../../hooks/useVoterCheck';
import {
  ToastMessageDark,
  ToastMessageLight,
} from '../../utils/DisplayMessage';
import LoadingScreen from '../../components/GlobalComponent/LoadingScreen';
import useReduxStore from '../../hooks/useReduxStore';
import VoterTags from '../../components/VoterTags';
import VoterInfo from '../../components/VoterInfo';
import VoterDescription from '../../components/VoterDescription';
import SelectionButton from '../../components/SelectionButton';
import WrongNumberModal from '../../components/Modals/WrongNumberModal';
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
import {
  setCurrentVoter,
  setSurveyList,
  setVotersTag,
} from '../../redux/actions/voters.actions';
import stylee from '../../constants/stylee';
import { voterCheckbuttons } from '../../constants/dummy';

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
    script,
  } = useReduxStore();

  const {loading, GetUsersData} = useVoterCheck(item);
  const [selected, setSelected] = useState('');
  const [nextVoterloader, setNextVoterloader] = useState(false);
  const [isVisibleWrongModal, setIsVisibleWrongModal] = useState(false);
  const [isVisibleDoNotCallModal, setIsVisibleDoNotCallModal] = useState(false);

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
      setSelected('next');
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
          onSuccess: onSuccessSaveInteraction
        }),
      );
    },
    [commonPayloadData, commonAPIData, dispatch],
  );

  const onSuccessSaveInteraction = useCallback(() => {
    console.log('onSuccessSaveInteraction');
    closeDoNotCallModal();
      filteredSurveyIds(survey)?.length
        ? onPressYesToNextVoter()
        : changeVoter();
  },[survey])

  const changeVoter = useCallback(() => {
    console.log('Change Voter:', currentVoter?.FIRSTNAME);
    const currentIndex = unDoneVoters?.findIndex(
      item => item._id === currentVoter?._id);
    const nextIndex = (currentIndex + 1) % unDoneVoters?.length;
    const isLastItem = currentIndex === unDoneVoters?.length - 1;

    if (isLastItem) {
      GetUsersData()
    } else {
      dispatch(setCurrentVoter(unDoneVoters[nextIndex]));
      dispatch(setVotersTag(unDoneVoters[nextIndex]?.voterTags));
      const updatedSurvey = survey?.map(item => {
        const {voterAnswer, ...rest} = item;
        return rest;
      });
      dispatch(
        setSurveyList({
          survey: {
            surveyQuestions: updatedSurvey,
          },
        }),
      );
    }
    setIsVisibleDoNotCallModal(false);
  }, [unDoneVoters, currentVoter, ToastMessageLight, navigation, survey]);

  const onPressYesToNextVoter = useCallback(() => {
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
          onSuccess: changeVoter,
        }),
      );
    }
  }, [
    user,
    votersTag,
    currentRecord,
    currentVoter,
    dispatch,
    survey,
    currentCampaign,
  ]);

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
    } else if (
      selected === 'donot' ||
      selected === 'contact' ||
      selected === 'next'
    ) {
      setIsVisibleDoNotCallModal(true);
    }
  }, [selected]);

  const handleButtonPress = type => {
    setSelected(prev => (prev === type ? null : type));
  };

  return !currentVoter?._id || loading ? (
    <LoadingScreen />
  ) : (
    <SafeAreaView style={stylee.container}>
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
          <VoterDescription script={script?.script} />
        </>
      )}

      <View style={styles.voterinfo}>
        <SelectionButton
          buttons={voterCheckbuttons}
          onNextPress={onPressNextVoter}
          selected={selected}
          handleButtonPress={handleButtonPress}
          nextVoterLoader={nextVoterloader}
          mainBtnTxt='Next Voter'
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
        {(selected === 'donot' ||
          selected === 'contact' ||
          selected === 'next') && (
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
