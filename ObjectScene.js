import React, {useState} from 'react';
import {
  ViroARScene,
  ViroConstants,
  Viro3DObject,
  ViroText,
  ViroAmbientLight,
  ViroARPlane,
  ViroSpotLight,
  ViroMaterials,
  ViroQuad,
} from '@viro-community/react-viro';

const ObjectScene = () => {
  // const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      // setText('Hello World!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  ViroMaterials.createMaterials({
    mango: {
      lightingModel: 'Phong',
      diffuseTexture: require('./resources/obj/Apricot_02_diffuse.png'),
      specularTexture: require('./resources/obj/Apricot_02_specular.png'),
      normalTexture: require('./resources/obj/Apricot_02_normal.png'),
      shininess: 0.5,
    },
  });

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroARPlane minHeight={0.5} minWidth={0.5} alignment={'Horizontal'}>
        {/* <ViroAmbientLight color="#ffffff" /> */}

        <ViroSpotLight
          innerAngle={5}
          outerAngle={25}
          direction={[0, -1, -0.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true}
          shadowMapSize={2048}
          shadowNearZ={2}
          shadowFarZ={5}
          shadowOpacity={0.3}
        />

        <Viro3DObject
          source={require('./resources/obj/Apricot_02_hi_poly_obj.obj')}
          resources={[
            require('./resources/obj/Apricot_02_hi_poly.mtl'),
            require('./resources/obj/Apricot_02_diffuse.png'),
            require('./resources/obj/Apricot_02_specular.png'),
            require('./resources/obj/Apricot_02_normal.png'),
            require('./resources/obj/Apricot_02_glossiness.png'),
          ]}
          // materials={['mango']}
          scale={[0.1, 0.1, 0.1]}
          type="OBJ"
        />

        <ViroQuad
          position={[0, 0, 0]}
          rotation={[-90, 0, 0]}
          width={4}
          height={4}
          arShadowReceiver={true}
        />
      </ViroARPlane>
    </ViroARScene>
  );
};

export default ObjectScene;
