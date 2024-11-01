/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 scene.gltf -t -o apple-watch.tsx 
Author: alboxer2000_ (https://sketchfab.com/alboxer2000_)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-watch-ultra-orange-4656191de2e94767a8c16003fca1f268
Title: Apple Watch Ultra - Orange
*/

import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useWatchContext } from "../context/WatchContext";

type GLTFResult = GLTF & {
  nodes: {
    khaHlXdxjItYhNs: THREE.Mesh;
    vWfihlqoNhaJTLj: THREE.Mesh;
    qfqlcqjRdzzVekA: THREE.Mesh;
    DpLeqowIFgYtGjG: THREE.Mesh;
    lTuqHocPHeeYuLO: THREE.Mesh;
    wMgdGPGcmgrPUeE: THREE.Mesh;
    yPaUlGyzZhvStMM: THREE.Mesh;
    KZLnjqsQgoygPoi: THREE.Mesh;
    XYTcEkWJWbbjayl: THREE.Mesh;
    yXwlQnMKInchVwb: THREE.Mesh;
    BDhXHhWQPzbsApC: THREE.Mesh;
    ARsYRDtRfaqRvjc: THREE.Mesh;
    dEgYDFMHfbkpmEF: THREE.Mesh;
    sYBCdasHzmkyDRS: THREE.Mesh;
    slfmzSCVEebgEnx: THREE.Mesh;
    cUdLcKThVrgrQtG: THREE.Mesh;
    uwsZHcLJnpKqEWY: THREE.Mesh;
    dDmAxNyjhIDOSOh: THREE.Mesh;
    dApvNLhuSmTYFHU: THREE.Mesh;
    usBhaSMGegdgFZD: THREE.Mesh;
    TgXjmfNiJNmBEaf: THREE.Mesh;
    oNBZPqvuuOZaMJD: THREE.Mesh;
    ukHQvPcopDbGAeP: THREE.Mesh;
    wlIPQLVNyFEOcyR: THREE.Mesh;
    IXiSHYGuoMgcNgF: THREE.Mesh;
    dutMHxWYxKkWoIl: THREE.Mesh;
    KsxIrenucRYdQlx: THREE.Mesh;
    PTPnChoGCzenuOx: THREE.Mesh;
    vaRMlNGtRRowtqF: THREE.Mesh;
    fCkJQDPNwsNBzWm: THREE.Mesh;
    YbfvuZWRqXlvTkW: THREE.Mesh;
    scpcAfQFCzMwocy: THREE.Mesh;
    wmnqxNpNCdRfDfA: THREE.Mesh;
    SAesXTqirPZWRXc: THREE.Mesh;
    uFzdsQxnXjPAlfo: THREE.Mesh;
    vdoUifIjrUGtLiS: THREE.Mesh;
    DPJxFEyTsdtZHfm: THREE.Mesh;
    DmhCzDQXADCcXPt: THREE.Mesh;
    cYPgdqcCkfmEnrF: THREE.Mesh;
    yFPJxjHCZaMTTSP: THREE.Mesh;
    hFurRdLJljkLFkB: THREE.Mesh;
    PPhvAUHUGzJYMhL: THREE.Mesh;
    LWVGlhvktNPWDmu: THREE.Mesh;
    eXUJdTIAeUGmQLZ: THREE.Mesh;
  };
  materials: {
    JhVSDiADFtJHFLa: THREE.MeshStandardMaterial;
    initialShadingGroup: THREE.MeshStandardMaterial;
    YWfwokrwvbztRbo: THREE.MeshStandardMaterial;
    lokMFBOdPtkNVUL: THREE.MeshStandardMaterial;
    cEvUsXxsuGocZLw: THREE.MeshStandardMaterial;
    DpfyoSSiSSiguqV: THREE.MeshStandardMaterial;
    WqlRgaclVpXEtLR: THREE.MeshStandardMaterial;
    OraiDWpYBKrUaVi: THREE.MeshStandardMaterial;
    RLtPucjBYpWldMw: THREE.MeshStandardMaterial;
    vAAmUmRloGrqeoZ: THREE.MeshStandardMaterial;
    hgluOErnmhtiUYN: THREE.MeshStandardMaterial;
    WNpOSdXcedsiIxb: THREE.MeshStandardMaterial;
    FWVZLUbBnucfoaf: THREE.MeshStandardMaterial;
    WTIUJKaXCMoeXRu: THREE.MeshStandardMaterial;
    ZaRnLYKTtVDoxDv: THREE.MeshStandardMaterial;
    kCssvzrClyGUQkQ: THREE.MeshStandardMaterial;
    XrFeyJHNdKUjpKu: THREE.MeshStandardMaterial;
    ytyYsmKHSFPTRzX: THREE.MeshStandardMaterial;
    FNPDFKuVXKOlvzh: THREE.MeshStandardMaterial;
    PZbVgVTNgRssNlb: THREE.MeshStandardMaterial;
    CpdaRQhrDwkjJvt: THREE.MeshStandardMaterial;
    XPzMameFUCFBvNY: THREE.MeshStandardMaterial;
    nwKRBiBrdJBKTDX: THREE.MeshStandardMaterial;
    UlFjqascpPnJnyb: THREE.MeshStandardMaterial;
    LMNEMIqLLSofXax: THREE.MeshStandardMaterial;
    RZAUBIkSLvyIlJf: THREE.MeshStandardMaterial;
    ObrQaHSLRyNZejZ: THREE.MeshStandardMaterial;
    PwlvrZKCtsfdXgk: THREE.MeshStandardMaterial;
    zWSbkmvYqArUSOM: THREE.MeshStandardMaterial;
    hlaWqbXPxAbQzbJ: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};

export function AppleWatch(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/apple-watch/scene.gltf") as GLTFResult;

  const { watchState } = useWatchContext();

  const bandInsideTextureProps = useTexture({
    normalMap: "/apple-watch/textures/PwlvrZKCtsfdXgk_normal.png",
    roughnessMap: "/apple-watch/textures/PwlvrZKCtsfdXgk_metallicRoughness.png",
    emissiveMap: "/apple-watch/textures/PwlvrZKCtsfdXgk_emissive.jpeg",
  });

  const bandOutsideTextureProps = useTexture({
    normalMap: "/apple-watch/textures/zWSbkmvYqArUSOM_normal.png",
    roughnessMap: "/apple-watch/textures/zWSbkmvYqArUSOM_metallicRoughness.png",
    emissiveMap: "/apple-watch/textures/zWSbkmvYqArUSOM_emissive.jpeg",
  });

  const leatherBandTextureProps = useTexture({
    normalMap: "/apple-watch/textures/leather/Leather037_2K-JPG_NormalGL.jpg",
    roughnessMap:
      "/apple-watch/textures/leather/Leather037_2K-JPG_Roughness.jpg",
    displacementMap:
      "/apple-watch/textures/leather/Leather037_2K-JPG_Displacement.jpg",
  });

  const matteMetalFinish = useTexture({
    normalMap:
      "/apple-watch/textures/matte/Poliigon_MetalPaintedMatte_7037_Normal.png",
    roughnessMap:
      "/apple-watch/textures/matte/Poliigon_MetalPaintedMatte_7037_Roughness.jpg",
    displacementMap:
      "/apple-watch/textures/matte/Poliigon_MetalPaintedMatte_7037_Displacement.jpg",
  });

  const watchFaceTexture = useTexture({
    map: "/apple-watch/textures/watch-face.webp",
    emmisiveMap: "/apple-watch/textures/UlFjqascpPnJnyb_emissive.jpeg"
  })

  leatherBandTextureProps.normalMap.repeat.set(5, 5);
  leatherBandTextureProps.displacementMap.repeat.set(5, 5);

  leatherBandTextureProps.normalMap.wrapS =
    leatherBandTextureProps.normalMap.wrapT = THREE.MirroredRepeatWrapping;
  leatherBandTextureProps.roughnessMap.wrapS =
    leatherBandTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  leatherBandTextureProps.displacementMap.wrapS =
    leatherBandTextureProps.displacementMap.wrapT = THREE.RepeatWrapping;

  matteMetalFinish.displacementMap.repeat.set(5, 5);


  return (
    <group {...props} dispose={null}>
      <group scale={1}>
        <mesh
          geometry={nodes.PPhvAUHUGzJYMhL.geometry}
          material={materials.DpfyoSSiSSiguqV}
        />
        <mesh
          geometry={nodes.LWVGlhvktNPWDmu.geometry}
          material={materials.hlaWqbXPxAbQzbJ}
        />
        <mesh
          geometry={nodes.eXUJdTIAeUGmQLZ.geometry}
          material={materials.YWfwokrwvbztRbo}
        />
        <mesh
          geometry={nodes.khaHlXdxjItYhNs.geometry}
          material={materials.JhVSDiADFtJHFLa}
        />
        <mesh
          geometry={nodes.vWfihlqoNhaJTLj.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          geometry={nodes.qfqlcqjRdzzVekA.geometry}
          material={materials.YWfwokrwvbztRbo}
        />
        <mesh
          geometry={nodes.DpLeqowIFgYtGjG.geometry}
          material={materials.lokMFBOdPtkNVUL}
        />
        <mesh
          geometry={nodes.lTuqHocPHeeYuLO.geometry}
          material={materials.cEvUsXxsuGocZLw}
        />

        {/* Main body */}
        <mesh
          geometry={nodes.wMgdGPGcmgrPUeE.geometry}
        >
          <meshStandardMaterial
            {...(watchState["main-body"].texture === "normal"
              ? materials.DpfyoSSiSSiguqV
              : matteMetalFinish)}
            displacementScale={0.05}
            color={
              watchState["main-body"].texture === "normal"
                ? "gray"
                : watchState["main-body"].color
            }
          />
        </mesh>

        <mesh
          geometry={nodes.yPaUlGyzZhvStMM.geometry}
          material={materials.DpfyoSSiSSiguqV}
        />
        <mesh
          geometry={nodes.KZLnjqsQgoygPoi.geometry}
          material={materials.WqlRgaclVpXEtLR}
        />
        <mesh
          geometry={nodes.XYTcEkWJWbbjayl.geometry}
          material={materials.DpfyoSSiSSiguqV}
        />
        <mesh
          geometry={nodes.yXwlQnMKInchVwb.geometry}
          material={materials.WqlRgaclVpXEtLR}
        />
        <mesh
          geometry={nodes.BDhXHhWQPzbsApC.geometry}
          material={materials.OraiDWpYBKrUaVi}
        />

        {/* Action button */}
        <mesh
          geometry={nodes.ARsYRDtRfaqRvjc.geometry}
          // material={{...materials.RLtPucjBYpWldMw}}
        >
          <meshStandardMaterial
            {...materials.RLtPucjBYpWldMw}
            color={watchState["action-button"].color}
          />
        </mesh>

        <mesh
          geometry={nodes.dEgYDFMHfbkpmEF.geometry}
          material={materials.vAAmUmRloGrqeoZ}
        />

        {/* Side button */}
        <mesh
          geometry={nodes.sYBCdasHzmkyDRS.geometry}
          material={materials.DpfyoSSiSSiguqV}
        />

        <mesh
          geometry={nodes.slfmzSCVEebgEnx.geometry}
          material={materials.vAAmUmRloGrqeoZ}
        />

        {/* Digital crown */}
        <mesh geometry={nodes.cUdLcKThVrgrQtG.geometry}>
          <meshStandardMaterial
            {...materials.hgluOErnmhtiUYN}
            color={watchState["digital-crown"].color}
          />
        </mesh>

        <mesh
          geometry={nodes.uwsZHcLJnpKqEWY.geometry}
          material={materials.WNpOSdXcedsiIxb}
        />
        <mesh
          geometry={nodes.dDmAxNyjhIDOSOh.geometry}
          material={materials.FWVZLUbBnucfoaf}
        />
        <mesh
          geometry={nodes.dApvNLhuSmTYFHU.geometry}
          material={materials.cEvUsXxsuGocZLw}
        />
        <mesh
          geometry={nodes.usBhaSMGegdgFZD.geometry}
          material={materials.DpfyoSSiSSiguqV}
        />
        <mesh
          geometry={nodes.TgXjmfNiJNmBEaf.geometry}
          material={materials.WTIUJKaXCMoeXRu}
        />
        <mesh
          geometry={nodes.oNBZPqvuuOZaMJD.geometry}
          material={materials.ZaRnLYKTtVDoxDv}
        />
        <mesh
          geometry={nodes.ukHQvPcopDbGAeP.geometry}
          material={materials.kCssvzrClyGUQkQ}
        />
        <mesh
          geometry={nodes.wlIPQLVNyFEOcyR.geometry}
          material={materials.kCssvzrClyGUQkQ}
        />
        <mesh
          geometry={nodes.IXiSHYGuoMgcNgF.geometry}
          material={materials.XrFeyJHNdKUjpKu}
        />
        <mesh
          geometry={nodes.dutMHxWYxKkWoIl.geometry}
          material={materials.ytyYsmKHSFPTRzX}
        />
        <mesh
          geometry={nodes.KsxIrenucRYdQlx.geometry}
          material={materials.FNPDFKuVXKOlvzh}
        />
        <mesh
          geometry={nodes.PTPnChoGCzenuOx.geometry}
          material={materials.PZbVgVTNgRssNlb}
        />
        <mesh
          geometry={nodes.vaRMlNGtRRowtqF.geometry}
          material={materials.CpdaRQhrDwkjJvt}
        />
        <mesh
          geometry={nodes.fCkJQDPNwsNBzWm.geometry}
          material={materials.XPzMameFUCFBvNY}
        />
        <mesh
          geometry={nodes.YbfvuZWRqXlvTkW.geometry}
          material={materials.YWfwokrwvbztRbo}
        />
        <mesh
          geometry={nodes.scpcAfQFCzMwocy.geometry}
          material={materials.nwKRBiBrdJBKTDX}
        />

        {/* Watch face */}
        <mesh
          geometry={nodes.wmnqxNpNCdRfDfA.geometry}
          // material={materials.UlFjqascpPnJnyb}
        >
          <meshStandardMaterial  {...watchFaceTexture}  />
        </mesh>
        <mesh
          geometry={nodes.SAesXTqirPZWRXc.geometry}
          material={materials.LMNEMIqLLSofXax}
        />

        {/* Band holder */}
        <mesh
          geometry={nodes.uFzdsQxnXjPAlfo.geometry}
          material={materials.DpfyoSSiSSiguqV}
        />

        {/* Band holders up and down */}
        <mesh
          geometry={nodes.vdoUifIjrUGtLiS.geometry}
          material={materials.DpfyoSSiSSiguqV}
        >
          <meshStandardMaterial
            {...(watchState["main-body"].texture === "normal"
              ? materials.DpfyoSSiSSiguqV
              : matteMetalFinish)}
            displacementScale={0.05}
            color={
              watchState["main-body"].texture === "normal"
                ? "gray"
                : watchState["main-body"].color
            }
          />
        </mesh>
        <mesh
          geometry={nodes.DPJxFEyTsdtZHfm.geometry}
        >
          <meshStandardMaterial
            {...(watchState["main-body"].texture === "normal"
              ? materials.DpfyoSSiSSiguqV
              : matteMetalFinish)}
            displacementScale={0.05}
            color={
              watchState["main-body"].texture === "normal"
                ? "gray"
                : watchState["main-body"].color
            }
          />
        </mesh>

        <mesh
          geometry={nodes.DmhCzDQXADCcXPt.geometry}
          material={materials.RZAUBIkSLvyIlJf}
        />
        <mesh
          geometry={nodes.cYPgdqcCkfmEnrF.geometry}
          material={materials.ObrQaHSLRyNZejZ}
        />

        {/* Band inside */}
        {watchState["band-outside"].texture === "normal" ? (
          <mesh geometry={nodes.yFPJxjHCZaMTTSP.geometry}>
            <meshStandardMaterial
              {...bandInsideTextureProps}
              color={watchState?.["band-inside"].color}
            />
          </mesh>
        ) : null}

        {/* Band outside */}
        <mesh geometry={nodes.hFurRdLJljkLFkB.geometry}>
          <meshStandardMaterial
            {...(watchState["band-outside"].texture === "normal"
              ? bandOutsideTextureProps
              : leatherBandTextureProps)}
            displacementScale={0.06}
            color={watchState["band-outside"].color}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/apple-watch/scene.gltf");
