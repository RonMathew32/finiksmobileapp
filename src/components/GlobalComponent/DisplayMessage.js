import Toast from 'react-native-root-toast';

export const ToastMessageLight = msg => {
  Toast.show(msg, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    backgroundColor: 'white',
    textColor: 'black',
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
};

export const ToastMessageDark = msg => {
  Toast.show(msg, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    backgroundColor: 'black',
    textColor: 'white',
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
};
