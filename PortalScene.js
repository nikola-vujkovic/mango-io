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
  ViroPortal,
  ViroPortalScene,
  Viro360Image,
} from '@viro-community/react-viro';

const PortalScene = () => {
  //   ViroMaterials.createMaterials({
  //     portal: {
  //       lightingModel: 'Phong',
  //       diffuseTexture: require('./resources/obj/DragonJawPortal_Diffuse.jpg'),
  //       specularTexture: require('./resources/obj/DragonJawPortal_Spec.jpg'),
  //       normalTexture: require('./resources/obj/DragonJawPortal_Normal.jpg'),
  //       shininess: 0.5,
  //     },
  //   });

  return (
    <ViroARScene>
      <ViroAmbientLight color="#fff" />
      {/* <ViroARPlane
        onAnchorFound={() => console.log('plane selected')}
        minHeight={0.5}
        minWidth={0.5}
        alignment={'Horizontal'}> */}
      <ViroPortalScene passable={true}>
        <ViroPortal position={[0, 0, -1]} scale={[0.1, 0.1, 0.1]}>
          <Viro3DObject
            //   position={[0, -1, 0]}
            source={require('./resources/ViroPortal/portal_archway.vrx')}
            resources={[
              require('./resources/ViroPortal/portal_archway_diffuse.png'),
              require('./resources/ViroPortal/portal_archway_normal.png'),
              require('./resources/ViroPortal/portal_archway_specular.png'),
              require('./resources/ViroPortal/portal_entry.png'),
            ]}
            //   materials={['portal']}
            //   scale={[0.2, 0.2, 0.2]}
            type="VRX"
          />
        </ViroPortal>

        <Viro360Image source={require('./resources/360_space.jpeg')} />
      </ViroPortalScene>
      {/* </ViroARPlane> */}
    </ViroARScene>
  );
};

export default PortalScene;
