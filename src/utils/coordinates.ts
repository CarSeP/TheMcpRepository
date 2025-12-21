export const getCoordinates = async (city: string) => {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    const data = await response.json();

    if (data.error) {
      return {
        isError: true,
        error: data.reason,
      };
    }

    if (!data.results) {
      return {
        isError: true,
        error: "city not found",
      };
    }

    return {
      isError: false,
      content: {
        latitude: data.results[0].latitude,
        longitude: data.results[0].longitude,
      },
    };
  } catch (error) {
    return {
      isError: true,
      error,
    };
  }
};
