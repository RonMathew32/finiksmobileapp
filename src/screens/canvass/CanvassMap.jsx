import React, {useState, useMemo, useCallback} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../theme/colors';
import {hp, normalize, wp} from '../../theme/dimensions';
import CampaignHeader from '../../components/Headers/CampaignHeader';
import {getRandomColor} from '../../utils/GetRandomColor';
import HouseIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, {Marker} from 'react-native-maps';
import MapSettingModal from '../../components/Modals/MapSettingModal';
import routes from '../../constants/routes';

const CanvassMap = ({navigation}) => {
  const [activeButton, setActiveButton] = useState('List');
  const [isVisibleMapSetting, setIsVisibleMapSetting] = useState(false);

  const aligny = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const renderIcon = useCallback(
    name => <Icon name={name} color={COLORS.primary} size={hp(4)} />,
    [],
  );

  const handleButtonPress = useCallback(buttonName => {
    setActiveButton(buttonName);
  }, []);

  const renderButton = useCallback(
    buttonName => (
      <Pressable
        key={buttonName}
        style={styles.btn(activeButton === buttonName)}
        onPress={() => handleButtonPress(buttonName)}>
        <Text style={styles.txt}>{buttonName}</Text>
      </Pressable>
    ),
    [activeButton, handleButtonPress],
  );

  const buttons = useMemo(() => ['List', 'Map'], []);
  const listData = useMemo(
    () => [
      {
        _id: 1,
        address: '1 Bag End, Hobbiton Westfarthing, The Shire',
        houseNum: 1,
        color: getRandomColor(),
        region: {latitude: 37.78825, longitude: -122.4324},
      },
      {
        _id: 2,
        address: '1 Wending Way, Hobbiton Westfarthing, The Shire',
        houseNum: 2,
        color: getRandomColor(),
        region: {latitude: 37.779384, longitude: -122.426088},
      },
      {
        _id: 3,
        address: '2 Harrow Road, Hobbiton Westfarthing, The Shire',
        houseNum: 3,
        color: getRandomColor(),
        region: {latitude: 37.780376, longitude: -122.443867},
      },
      {
        _id: 4,
        address: '1 Pleasant Street, Hobbiton Westfarthing, The Shire',
        houseNum: 4,
        color: getRandomColor(),
        region: {latitude: 37.7836821, longitude: -122.4462204},
      },
    ],
    [],
  );

  const handleMarkerPress = useCallback(item => {
    console.log(item);
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(routes?.CanvassMapDetails, {item})}
        key={item?._id}
        style={[aligny, styles.hexContainer]}>
        <View style={[aligny, styles.contentContainer]}>
          <Text style={styles.nametxt}>{item?.address}</Text>
          <View style={styles.homeIconContainer}>
            <HouseIcon name="home-roof" size={hp(5)} color={item.color} />
            <View
              style={[styles.numberContainer, {backgroundColor: item.color}]}>
              <Text style={styles.houseNm}>{item?.houseNum}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.sideBar, {backgroundColor: item.color}]} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {isVisibleMapSetting && (
        <MapSettingModal
          visible={isVisibleMapSetting}
          setVisible={setIsVisibleMapSetting}
        />
      )}
      <CampaignHeader enableBackButton={true} />
      <View style={[aligny, styles.alignBtns]}>
        {renderIcon('location-sharp')}
        {buttons.map(renderButton)}
        <TouchableOpacity onPress={() => setIsVisibleMapSetting(true)}>
          {renderIcon('information-circle-outline')}
        </TouchableOpacity>
      </View>
      {activeButton == 'List' ? (
        <FlatList
          data={listData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            {listData?.map(item => {
              return (
                <Marker
                  key={item?._id}
                  coordinate={item?.region}
                  title={item?.address}
                  onPress={() => handleMarkerPress(item)}
                />
              );
            })}
          </MapView>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  houseNm: {color: COLORS.white, fontWeight: 'bold'},
  map: {
    flex: 1,
  },
  homeIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(5),
  },
  numberContainer: {
    width: 20,
    height: 20,
    position: 'absolute',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 23,
    right: 10.5,
  },
  hexContainer: {
    borderBottomWidth: 0.5,
    borderColor: COLORS.lavendarWhite,
  },
  nametxt: {
    color: COLORS.primary,
    fontSize: normalize(16),
    width: wp(60),
    paddingVertical: hp(1),
  },
  contentContainer: {
    paddingHorizontal: wp(7.5),
    paddingVertical: hp(1),
  },
  txt: {
    color: COLORS.primary,
    textAlign: 'center',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  btn: isActive => ({
    width: wp(35),
    paddingVertical: hp(0.8),
    backgroundColor: isActive ? COLORS.background : COLORS.white,
    borderColor: COLORS.lavendarWhite,
    borderWidth: isActive ? 0.5 : 0.3,
    borderRadius: 5,
  }),
  alignBtns: {
    paddingHorizontal: wp(5),
    marginTop: hp(1),
    borderBottomColor: COLORS.background,
    paddingBottom: hp(2),
    borderBottomWidth: 3,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  sideBar: {
    width: 10,
    height: '100%',
    borderRadius: 20,
  },
});

export default CanvassMap;
