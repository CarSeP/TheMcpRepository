import { getCoordinates } from "../utils/coordinates";

describe("coordinates Tests", () => {
  test("should return coordinates for valid city", async () => {
    const data = await getCoordinates("madrid");

    expect(data).toMatchObject({
      isError: false,
      content: {
        latitude: expect.any(Number),
        longitude: expect.any(Number),
      },
    });
  });

  test("should return error for invalid city", async () => {
    const data = await getCoordinates("invalidCityName");

    expect(data).toMatchObject({
      isError: true,
      error: expect.any(String),
    });
  });
});
