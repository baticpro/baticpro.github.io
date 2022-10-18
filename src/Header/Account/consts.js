export const CLIENT_SECRET = "nA2REtuw$a-uZ?R3sw&s5A!UW2veDU3U";

export const CLIENT_ID = "website_client";

export const API_BASE_URL = "https://b.utair.ru";

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

export const errorDescriptions = {
    api_error: "Ошибка регистрации пользователя. Попробуйте повторить позднее.",
    incorrect_code: "Проверьте правильность кода подтверждения",
    social_auth_error:
        "Ошибка входа. Попробуйте позднее или заполните обязательные поля",
    code_expired: "Срок действия кода истёк",
    exceeded_attempts: "Превышено количество попыток. Попробуйте позднее",
    send_code: "Ошибка отправки проверочного кода",
    login_not_found: "Пользователь с\u00A0таким логином не найден. ",
    login_not_found_reg: "Зарегистрироваться?",
    too_many_requests: "Слишком много попыток. Попробуйте позднее",
    user_blocked:
        "Ваша учетная запись заблокирована, обратитесь в\u00A0Службу поддержки",
    social_email_exists: "Пользователь с\u00A0таким Email уже зарегистрирован.",
    social_phone_exists:
        "Пользователь с\u00A0таким телефоном уже зарегистрирован.",
    phone_disabled: "Пользователь отключил авторизацию через SMS",
    phone_incorrect:
        "Невозможно отправить СМС на\u00A0номер в\u00A0вашем профиле",
    send_code_error: "Ошибка отправки кода",
    no_contacts: " не привязана к\u00A0Email или номеру телефона",
};
