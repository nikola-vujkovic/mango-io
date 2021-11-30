import React, {useState} from 'react';
import {
  ViroARScene,
  Viro3DObject,
  ViroAmbientLight,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroText,
} from '@viro-community/react-viro';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

var ding = new Sound('wand_ping.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // when loaded successfully
  console.log(
    'duration in seconds: ' +
      ding.getDuration() +
      'number of channels: ' +
      ding.getNumberOfChannels(),
  );
});

ding.setVolume(1);

const MagijaScene = () => {
  const onAnchor = () => {
    console.log('NASLO JE');

    ding.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  };

  ViroARTrackingTargets.createTargets({
    cardOne: {
      source: require('./resources/deck/ace.jpg'),
      orientation: 'Up',
      physicalWidth: 0.05, // real world width in meters
    },
  });

  return (
    <ViroARScene>
      <ViroARImageMarker target="cardOne" onAnchorFound={() => onAnchor()}>
        <ViroAmbientLight color="#ffffff" />

        <Viro3DObject
          source={require('./resources/obj/Apricot_02_hi_poly_obj.obj')}
          resources={[
            require('./resources/obj/Apricot_02_hi_poly.mtl'),
            require('./resources/obj/Apricot_02_diffuse.png'),
            require('./resources/obj/Apricot_02_specular.png'),
            require('./resources/obj/Apricot_02_normal.png'),
            require('./resources/obj/Apricot_02_glossiness.png'),
          ]}
          scale={[0.02, 0.02, 0.02]}
          type="OBJ"
          position={[0, 0, 0]}
        />

        {/* <ViroText
          text={'Hello World'}
          scale={[0.2, 0.2, 0.2]}
          position={[0, 0.1, 0]}
          rotation={[-90, 0, 0]}
          style={{
            fontFamily: 'Arial',
            fontSize: 30,
            color: '#ffffff',
            textAlignVertical: 'center',
            textAlign: 'center',
          }}
        /> */}
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default MagijaScene;
