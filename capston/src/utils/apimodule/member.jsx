import api from "../api/Instance";

/**
 * 유저 로그인 axios
 * @param {*} email
 * @param {*} pwd
 * @returns
 */
export const loginUser = async (email, pwd) => {
  try {
    const response = await api.post("/member/login", {
      memberEmail: email,
      memberPassword: pwd,
    });
    if (response.data.success) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "요청 실패" };
  }
};
/**
 * 유저 회원가입 axios
 * @param {*} signupEmail
 * @param {*} signupPwd
 * @returns success
 */
export const signupUser = async (signupEmail, signupPwd) => {
  try {
    const response = await api.post("/member/save", {
      memberEmail: signupEmail,
      memberPassword: signupPwd,
    });

    if (response.data.success) {
      return { success: true, message: "회원가입 성공" };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "요청 실패" };
  }
};
