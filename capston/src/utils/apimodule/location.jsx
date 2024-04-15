// import api from "../api/Instance";
// import dfs_xy_conv from "../apimodule/math/grid";


// const mappingLocation = async (latitude, longitude) => {
//   try {
//     let rs = dfs_xy_conv("toXY", latitude, longitude);
//     const x = rs.x;
//     const y = rs.y;
//     const response = await api.post("/location", {
//       x,
//       y,
//     });
//     console.log(`gridX: ${x}, gridY: ${y}`);
//     if (response.data.success) {
//       return { success: true };
//     } else {
//       return { success: false };
//     }
//   } catch (error) {
//     console.error("error:", error);
//     return { success: false, error: "error" };
//   }
// };

// const locationResultResponse = async () => {
//   try {
//     const response = await api.get("/location/result");
//     const direction = response.data.locationDirection;
//     console.log(direction.locationTransport, direction.locationTime);
//     return { success: true, direction };
//   } catch (error) {
//     console.error("error:", error);
//     return { success: false, error: "요청 실패" };
//   }
// };

// export { mappingLocation, locationResultResponse };
