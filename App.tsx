import React  from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

export default function App(){
  return ( //o fragment e os parênteses são necessários por causa da regrinha que o reat-native não pode deixar elementos soltos. por isso há esse envolucro.
    <>
  <StatusBar barStyle="light-content" />
  <Home />
  </>
  )
}