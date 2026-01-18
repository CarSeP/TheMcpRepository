import { getCurrency, getCurrencyDifference } from "../utils/currency";

describe("currency Tests", () => {
  test("should return currency data", async () => {
    const data = await getCurrency();

    expect(data.content).toBeDefined();
    expect(data.content).not.toBeNull();
  });

  test("should return currency difference for usd", async () => {
    const data = await getCurrencyDifference("usd");

    expect(data.content).toBeDefined();
    expect(data.content).not.toBeNull();
  });

  test("should handle invalid currency code", async () => {
    const data = await getCurrencyDifference("invalid");

    expect(data.isError).toBe(true);
  });
});
