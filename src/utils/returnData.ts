export const returnData = (text = "", isError = false) => {
  return {
    isError,
    content: [
      {
        type: "text" as const,
        text,
      },
    ],
  };
};

export const returnResource = (text = "", uri: URL, isError = false) => {
  return {
    isError,
    contents: [
      {
        uri: uri.href,
        text,
      },
    ],
  };
};
