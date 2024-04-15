// import axios from "axios";

// const getWeatherByCurrentLocation = async (latitude, longitude) => {
//   try {
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=da9897716f54b1cd0575e31e83da8bcb&units=metric`;
//     let response = await axios.get(url);
//     let data = response.data;

//     const temp = data.main.temp;
//     const condition = data.weather[0].main;
//     const icon = data.weather[0].icon;

//     console.log("Temperature:", temp);
//     console.log("Condition:", condition);
//     return { success: true, temp, condition, icon };
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// export default getWeatherByCurrentLocation;
