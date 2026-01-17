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
