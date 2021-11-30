import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  BackHandler,
  Modal,
} from 'react-native';
import {ViroARSceneNavigator} from '@viro-community/react-viro';
import ObjectScene from './ObjectScene.js';
import PortalScene from './PortalScene.js';
import MagijaScene from './MagijaScene.js';

export default () => {
  const [scene, setScene] = useState(false);
  const [initialScene, setInitialScene] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const resetAll = () => setScene(false);

  const buttonClick = selectedSceneString => {
    setInitialScene(selectedSceneString);
    setScene(true);
  };

  const backAction = () => {
    // using this trick do use real current state
    setScene(freshState => {
      if (freshState) {
        resetAll();
      } else {
        BackHandler.exitApp();
      }
      return freshState;
    });

    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      {scene != false ? (
        <ViroARSceneNavigator
          autofocus={true}
          initialScene={{
            scene:
              initialScene === '3D'
                ? ObjectScene
                : initialScene === 'PORTAL'
                ? PortalScene
                : initialScene === 'MAGIJA'
                ? MagijaScene
                : 2,
          }}
          style={styles.f1}
        />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: 'peachpuff',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18}}>Odaberi svoj mango</Text>

          <TouchableOpacity
            onPress={() => buttonClick('3D')}
            activeOpacity={0.3}
            style={{
              // minWidth: 50,
              // maxWidth: 100,
              width: '60%',
              padding: 30,
              borderRadius: 100,
              backgroundColor: 'sandybrown',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>3D</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => buttonClick('PORTAL')}
            activeOpacity={0.3}
            style={{
              // minWidth: 50,
              // maxWidth: 100,
              width: '60%',
              padding: 30,
              borderRadius: 100,
              backgroundColor: 'sandybrown',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Portal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => buttonClick('MAGIJA')}
            activeOpacity={0.3}
            style={{
              // minWidth: 50,
              // maxWidth: 100,
              width: '60%',
              padding: 30,
              borderRadius: 100,
              backgroundColor: 'sandybrown',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Magija</Text>
          </TouchableOpacity>
        </View>
      )}

      {scene && (
        <TouchableOpacity
          onPress={() => resetAll()}
          activeOpacity={0.3}
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            // minWidth: 50,
            // maxWidth: 100,
            width: '15%',
            aspectRatio: 1,
            borderRadius: 100,
            backgroundColor: 'navajowhite',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>👈</Text>
        </TouchableOpacity>
      )}

      {!scene && (
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          activeOpacity={0.3}
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            // minWidth: 50,
            // maxWidth: 100,
            width: '15%',
            aspectRatio: 1,
            borderRadius: 100,
            backgroundColor: 'blanchedalmond',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>🍑</Text>
        </TouchableOpacity>
      )}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            flex: 1,
            backgroundColor: '#fff4',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              width: '75%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              paddingHorizontal: 20,
              paddingVertical: 30,
              borderRadius: 25,
            }}>
            <Text
              style={{
                marginBottom: 20,
                fontWeight: '500',
                fontSize: 16,
                textAlign: 'center',
              }}>
              Logo ove aplikacije je{' '}
              <Text style={{color: '#FF7F50'}}>breskva</Text>, a model koji se
              prikazuje je <Text style={{color: '#ec944e'}}>kajsija</Text>.
              {'\n'}
              Nemam pojma zasto sam nazvao aplikaciju{' '}
              <Text style={{color: '#ffcc22'}}>mango</Text>.
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#8ff867',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 100,
              }}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{}}>ok wow</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
});
