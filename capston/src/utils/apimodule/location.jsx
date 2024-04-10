import api from "../api/Instance";

const mappingLocation = async (longitude, latitude) => {
  try {
    const response = await api.post("/location", {
      longitude,
      latitude,
    });

    if (response.data.success) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

const locationResultResponse = async () => {
  try {
    const response = await api.get("/location/result");
    const direction = response.data.locationDirection;
    console.log(direction);
    return { success: true, direction };
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "요청 실패" };
  }
};

export { mappingLocation, locationResultResponse };
