/**
 * 중복확인 시 이메일 유효성검사
 * @param id
 * @returns
 */
export const validateSignupEmail = (
  email: string
): { isValid: boolean; message: string } => {
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regKr: RegExp = /[\u3131-\uD79D]/; // 한글을 포함하는 유효성 검사

  if (regKr.test(email)) {
    return { isValid: false, message: "이메일에는 한글이 입력될 수 없습니다." };
  }

  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: "이메일 형식에 맞게 입력해주세요",
    };
  }

  return { isValid: true, message: "" };
};

/**
 * 비밀번호, 유저 네임 유효성검사
 * @param userEmail
 * @param userPwd
 * @param confirmPassword
 * @param userName
 * @returns
 */
export const validateSignupCompare = (
  userEmail: any,
  userName: any,
  userPwd: any,
  confirmPassword: any
): { isValid: boolean; message: string } => {
  const regex: RegExp = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/; // 숫자와 문자가 들어가있는지 검사하는 유효성 검사
  const regKr: RegExp = /[\u3131-\uD79D]/; // 한글을 포함하는 유효성 검사
  const nameRegex = /^[a-zA-Z가-힣]+$/; // 영문자와 한글 (int못오게)

  if (!nameRegex.test(userName)) {
    return {
      isValid: false,
      message: "이름에는 숫자나 특수문자가 들어갈 수 없습니다.",
    };
  }

  if (userPwd === userEmail) {
    return {
      isValid: false,
      message: "비밀번호는 아이디와 다르게 입력해주세요",
    };
  }

  if (userPwd !== confirmPassword) {
    return { isValid: false, message: "비밀번호가 일치하지 않습니다." };
  }

  if (!regex.test(userPwd)) {
    return {
      isValid: false,
      message: "비밀번호에는 영문자와 숫자가 포함되어야 합니다.",
    };
  }

  if (regKr.test(userPwd)) {
    return {
      isValid: false,
      message: "비밀번호에는 한글이 들어갈 수 없습니다.",
    };
  }

  return { isValid: true, message: "" };
};
