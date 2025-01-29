import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Entity, EntityDescription, PointGraphics, Viewer } from "resium";
import "../Map/mapPage.page.css";
import { Cartesian3, createWorldTerrainAsync } from "cesium";

// const terrainProvider = await createWorldTerrainAsync();
const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
const MapPage: React.FC = () => {
  const [terrainProvider, setTerrainProvider] = useState<any>(null);
  useEffect(() => {
    createWorldTerrainAsync().then(setTerrainProvider);
  }, []);

  return (
    <Box display="flex" flexDirection="column" height="dvh" p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Mappa
      </Text>
      <Box
        h="90%"
        position="relative"
        background="tomato"
        border="1px"
        borderRadius="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Viewer full terrainProvider={terrainProvider}>
          <Entity position={position} name="Tokyo">
            <PointGraphics pixelSize={10} />
            <EntityDescription>
              <h1 style={{ color: "red", fontSize: "1.5rem" }}>
                Hello, world.
              </h1>
              <p style={{ color: "blue", fontSize: "1rem" }}>
                JSX is available here!
              </p>
            </EntityDescription>
          </Entity>
        </Viewer>
      </Box>
    </Box>
  );
};

export default MapPage;

// import { Box, Text } from "@chakra-ui/react";
// import { IonResource } from "cesium";
// import React from "react";
// import { Cesium3DTileset, Viewer } from "resium";
// import "../Map/mapPage.page.css";

// let viewer: any; // This will be raw Cesium's Viewer object.

// const handleReady = (tileset: any) => {
//   if (!tileset) return;
//   if (viewer) {
//     viewer.zoomTo(tileset);
//   }
// };

// const MapPage: React.FC = () => {
//   return (
//     <Box display="flex" flexDirection="column" height="dvh" p={4}>
//       <Text fontSize="2xl" fontWeight="bold" mb={4}>
//         Mappa
//       </Text>
//       <Box
//         h="90%"
//         position="relative"
//         background="tomato"
//         border="1px"
//         borderRadius="md"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Viewer
//           full
//           ref={(e) => {
//             viewer = e && e.cesiumElement;
//           }}
//         >
//           <Cesium3DTileset
//             url={IonResource.fromAssetId(5714)}
//             onReady={handleReady}
//           />
//         </Viewer>
//       </Box>
//     </Box>
//   );
// };

// export default MapPage;
