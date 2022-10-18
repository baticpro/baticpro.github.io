// import captchaManager from "../../utils/captcha-manager";
// import { API_BASE_URL } from "./consts";
// import fetch, { parseBody } from "../../utils/fetch";
// import { utairHttpManager as request } from "../../managers/utair";

export const errorCodes = {
    40101: "login_not_found",
    40104: "phone_disabled",
    40301: "too_many_requests",
    40302: "user_blocked",
    40303: "user_blocked",
    40030: "phone_incorrect",
    40031: "send_code_error",
    40004: "no_contacts",
};

export const ERROR_TYPES = {
    INTERNAL_APP_ERROR: "internal_app_error",
    CONNECTION_REFUSED: "connection_refused",
    BAD_REQUEST: "bad_request",
    UNAUTHORIZED: "unauthorized",
    FORBIDDEN: "forbidden",
    NOT_FOUND: "not_found",
    CONFLICT: "conflict",
    INTERNAL_SERVER_ERROR: "internal_server_error",
    UNKNOWN: "unknown",
};

export function authLogin(login) {
    return Promise.resolve();
    // return captchaManager
    //     .getCaptchaToken()
    //     .then((captchaToken) =>
    //         fetch(`${API_BASE_URL}/api/v1/login/`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "g-recaptcha-response": captchaToken,
    //             },
    //             body: JSON.stringify({ login, confirmation_type: "standard" }),
    //         })
    //     )
    //     .then(parseBody);
}

export const signUpUser = (type, login, confirmationGDPRDate) => {
    // const params = { [type]: login, confirmationGDPRDate };
    return Promise.resolve();
    // return request.post(`${API_BASE_URL}/api/v1/profile/`, params);
};
