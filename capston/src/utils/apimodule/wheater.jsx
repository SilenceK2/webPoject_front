import axios from "axios";

/**
 * openWeatherMap에서 현재 시간 기준으로 오늘 하루의 날씨 정보를 가져오는 get요청
 * @param {*} latitude
 * @param {*} longitude
 * @returns
 */
export const getWeatherByCurrentLocation = async (latitude, longitude) => {
  try {
    // API 요청
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=da9897716f54b1cd0575e31e83da8bcb&units=metric`;
    const response = await axios.get(url);

    const data = response.data;
    const weatherDataList = data.list;

    const weatherDataById = {};

    weatherDataList.forEach((weatherData) => {
      const id = weatherData.weather[0].id;
      if (!weatherDataById[id]) {
        weatherDataById[id] = [];
      }
      weatherDataById[id].push(weatherData);
    });

    const selectedWeatherData = {};
    for (const id in weatherDataById) {
      selectedWeatherData[id] = weatherDataById[id].slice(0, 6);
    }
    console.log(selectedWeatherData);
    return {
      success: true,
      weatherData: selectedWeatherData,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};
