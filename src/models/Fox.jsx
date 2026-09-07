import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from "../assets/3d/fox.glb";

const Fox = ({ currentAnimation, ...props }) => {
  const group = useRef();

  const { nodes, materials, animations } = useGLTF(scene);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
  const action = actions[currentAnimation];

  if (!action) return;

  action.reset();

  if (currentAnimation === "hit") {
    action.setLoop(THREE.LoopOnce);
    action.clampWhenFinished = true;
    action.fadeIn(0.1).play();
  } else {
    action.setLoop(THREE.LoopRepeat);
    action.fadeIn(0.2).play();
  }

  return () => {
    action.fadeOut(0.1);
  };
}, [actions, currentAnimation]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">

        <primitive object={nodes.GLTF_created_0_rootJoint} />

        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />

        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />

        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />

        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />

        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />

      </group>
    </group>
  );
};

export default Fox;