import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import Home from '../components/Home';
import PersonalityTest from '../components/PersonalityTest';
import Options from '../components/Options';
import AmIReady from '../components/AmIReady';
import Breed from '../components/Breed';
import FureverHomes from '../components/FureverHomes';

export const Root = StackNavigator ({
  Home:{
    screen: Home
  },
  PersonalityTest:{
    screen: PersonalityTest
  },
  AmIReady:{
    screen: AmIReady
  },
  Options:{
    screen: Options
  },
  Breed: {
    screen: Breed
  },
  FureverHomes: {
    screen: FureverHomes
  }
});
