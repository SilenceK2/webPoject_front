const getWeatherByCurrentLocation = async (latitude, longitude) => {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=da9897716f54b1cd0575e31e83da8bcb&units=metric`;
    let response = await fetch(url);
    let data = await response.json();

    const temp = data.main.temp;
    const condition = data.weather[0].main;

    console.log("Temperature:", temp);
    console.log("Condition:", condition);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default getWeatherByCurrentLocation;
