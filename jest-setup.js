import 'react-native-gesture-handler/jestSetup';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
const mockedNavigate = jest.fn();
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// As of react-native@0.64.X file has moved
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
    useRoute: () => ({
      route: mockedNavigate,
    }),
    useRef: () => ({}),
  };
});
