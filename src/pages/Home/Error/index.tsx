import React from 'react';
import { StyleSheet } from 'react-native';

import closeWhite from '../../../assets/closeWhite.png';
import rocket from '../../../assets/rocket.png';

import { Modal, Container, Icon, Title, RocketImage, Description, BackButton } from './styles';

interface IProps { 
  onPress: () => void;
  isVisible: boolean;
}

const Error: React.FC<IProps> = ({ isVisible, onPress }) => {
  return (
    <Modal
      isVisible={isVisible}
      overlayStyle={styles.overlayContainer}
      fullScreen
      animationType='slide'
    >
      <>
        <Icon
          source={closeWhite}
          onPress={onPress}
        />
        <Container>
          <Title>Prepare for troube.</Title>
          <Title>Make it double!</Title>
          <RocketImage
            source={rocket}
          />
          <Title>Surrender now or prepare to fight!</Title>
          <Description>Oops! Rocket team stole this pokemon,</Description>
          <Description>try again with another search term.</Description>
        </Container>
        <BackButton
          title='Back to Home'
          titleStyle={{ fontFamily: 'Gilroy-Light' }}
          buttonStyle={styles.buttonContainer}
          onPress={onPress}
        />
      </>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlayContainer: {
    backgroundColor: '#333333',
    padding: 20
  },
  buttonContainer: {
    backgroundColor: '#333333',
    borderWidth: 1,
    borderColor: '#FFF',
  },
})

export default Error;