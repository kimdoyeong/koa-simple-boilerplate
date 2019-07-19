export const code = {
  NOT_FOUND: "NOT_FOUND",
  SERVER_ERROR: "SERVER_ERROR"
};

const error = {
  NOT_FOUND: {
    statusCode: 404,
    message: "페이지를 찾을 수 없습니다."
  },
  SERVER_ERROR: {
    statusCode: 500,
    message: "서버에서 오류가 발생했습니다. 다시 시도해주세요"
  }
};

export function throwError(errorCode) {
  return [
    error[errorCode].statusCode,
    error[errorCode].message,
    {
      errorCode
    }
  ];
}

export function getError(errorCode) {
  const { message, statusCode } = error[errorCode];
  return {
    errorCode,
    message,
    statusCode
  };
}
