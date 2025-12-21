export const getWeatherData = async (latitude: number, longitude: number) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`
    );

    const data = await response.json();
    if (data.error) {
      return {
        isError: true,
        error: data.reason,
      };
    }

    return {
      isError: false,
      content: {
        latitude: data?.latitude,
        longitude: data?.longitude,
        timezone: data?.timezone,
        time: {
          unit: data?.current_units?.time,
          value: data?.current?.time,
        },
        temperature: {
          unit: data?.current_units?.temperature_2m,
          value: data?.current?.temperature_2m,
        },
        windSpeed: {
          unit: data?.current_units?.wind_speed_10m,
          value: data?.current?.wind_speed_10m,
        },
        relativeHumidity: {
          unit: data?.current_units?.relative_humidity_2m,
          value: data?.current?.relative_humidity_2m,
        },
      },
    };
  } catch (error) {
    return {
      isError: true,
      error,
    };
  }
};
