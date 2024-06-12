import api from "../api/Instance";
import dfs_xy_conv from "../math/grid";

/**
 * 기상청 api를 활용하기 위한 gridX, gridY변환값 post axios
 * @param {*} latitude
 * @param {*} longitude
 * @returns success
 */
const mappingLocation = async (latitude: any, longitude: any) => {
  try {
    let rs = dfs_xy_conv("toXY", latitude, longitude);
    const x = rs.x;
    const y = rs.y;
    const response = await api.post("/location", {
      currentLocationX: x,
      currentLocationY: y,
    });
    console.log(`gridX: ${x}, gridY: ${y}`);
    if (response.status === 200) {
      return { success: true, x, y };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

/**
 * 길찾기 결과값을 보여주기 위한 get요청
 * @param locationTransport
 * @param locationDirection
 * @returns
 */
const locationResultResponse = async () => {
  try {
    const response = await api.get("/location/result");
    const direction = response.data.locationDirection;
    console.log(direction.locationTransport, direction.locationTime);
    return { success: true, direction };
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "요청 실패" };
  }
};

export { mappingLocation, locationResultResponse };
