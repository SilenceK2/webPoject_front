import api from "../api/Instance";
import dfs_xy_conv from "../apimodule/math/grid";

/**
 * 기상청 api를 활용하기 위한 gridX, gridY변환값 post axios
 * @param {*} latitude
 * @param {*} longitude
 * @returns success
 */
const mappingLocation = async (latitude, longitude) => {
  try {
    let rs = dfs_xy_conv("toXY", latitude, longitude);
    const x = rs.x;
    const y = rs.y;
    const response = await api.post("/location", {
      x,
      y,
    });
    console.log(`gridX: ${x}, gridY: ${y}`);
    if (response.data.success) {
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

// function searchPubTransPathAJAX() {
//   var xhr = new XMLHttpRequest();
//   var url =
//     "https://api.odsay.com/v1/api/searchPubTransPathT?SX=126.9027279&SY=37.5349277&EX=126.9145430&EY=37.5499421&OPT=1&apiKey={YOUR_API_KEY}";
//   xhr.open("GET", url, true);
//   xhr.send();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       console.log(xhr.responseText);
//     }
//   };
// }

export { mappingLocation, locationResultResponse };
