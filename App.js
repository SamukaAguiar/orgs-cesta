import { StatusBar, SafeAreaView, View } from 'react-native';

import Cesta from './src/forms/Cesta';
import CestaMock from './src/mocks/CestaMock';

import {
  useFonts, 
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';


export default function App() {

  const [loadFont] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!loadFont){
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={{flex: 1}}>

      <StatusBar />

      <Cesta {...CestaMock}/>

    </SafeAreaView>
  );
}
