import React from 'react';
import { Image } from 'react-native';
import { MotiView } from 'moti'

import pokeball from '../../../assets/pokeball.png';

import { Container } from './styles';

const Intro: React.FC = () => {
  return (
    <MotiView
        // from={{ bottom: 0 }} 
        // animate={{ bottom: 1000 }} 
        // transition={{
        //     type:'timing',
        //     duration: 3500
        // }}
        style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'blue', bottom: '100%' }}
    >
        <Image
            source={pokeball}
            style={{ width: 300, height: 300 }}
        />
    </MotiView>
  );
}

export default Intro;