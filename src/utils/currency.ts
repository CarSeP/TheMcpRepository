export const getCurrency = async () => {
  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json`,
    );

    const data = await response.json();

    return {
      isError: false,
      content: data,
    };
  } catch (error) {
    return {
      isError: true,
      error,
    };
  }
};

export const getCurrencyDifference = async (currencyCode: string) => {
  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode}.json`,
    );

    if (!response.ok) {
      return {
        isError: true,
        error: `error: ${await response.text()}, status: ${response.status}`,
      };
    }

    const data = await response.json();

    return {
      isError: false,
      content: data,
    };
  } catch (error) {
    return {
      isError: true,
      error,
    };
  }
};
