import axios from "axios";

/**
 * openWeatherMap에서 온도, 날씨를 받아오는 get요청
 * @param {*} latitude
 * @param {*} longitude
 * @returns
 */
export const getWeatherByCurrentLocation: any = async (
  latitude: any,
  longitude: any
) => {
  try {
    const params = {
      lang: "kr",
      units: "metric",
    };
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=da9897716f54b1cd0575e31e83da8bcb&units=metric`;
    const response = await axios.get(url, { params });

    const data = response.data;

    const tempMin = data.main.temp_min;
    const tempMax = data.main.temp_max;
    const temp = data.main.temp;
    const icon = data.weather[0].icon;
    const condition = data.weather[0].main;
    const title = data.name;
    const rainCondition = data.rain ? data.rain["1h"] : null;

    console.log(response.data);

    console.log("최고기온값:", tempMin);
    console.log("최저기온값:", tempMax);
    console.log("날씨: ", condition);
    console.log("지역: ", title);

    return {
      success: true,
      temp,
      tempMin,
      tempMax,
      condition,
      icon,
      title,
      rainCondition,
    };
  } catch (error) {
    console.error("Error:", error);
  }
};
