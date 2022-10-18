const EMAIL_REGEXP =
    /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,15})$/i;
const LOYALTY_CARD = /^(\d{10,11}|\d{13}|\d{16})$/;

function isForeignPhone(phone) {
    if (typeof phone !== "string") {
        return false;
    }

    return phone.indexOf("+7") !== 0;
}

function email(value, isRequired = false) {
    if (!value && value === "") {
        return "validator.errors.login_incorrect";
    }

    if (value && value !== "") {
        if (!EMAIL_REGEXP.test(value)) {
            return "validator.errors.email_format";
        }
    } else if (isRequired) {
        return "validator.errors.email_required";
    }

    return true;
}

function validateForeignPhone(value) {
    if (value.length < 5 || value.length > 15) {
        return "validator.errors.phone_foreign_format";
    }

    return true;
}

function validateRuPhone(value) {
    if (value.length !== 12) {
        return "validator.errors.phone_format";
    }

    if (![3, 4, 5, 6, 8, 9].includes(Number(value[2]))) {
        return "validator.errors.phone_operator_code";
    }

    return true;
}

function phone(value, isRequired = false) {
    const phoneReg = /[0-9]/g;
    const phoneMatch = value.match(phoneReg);

    if (phoneMatch === null) {
        return isRequired ? "validator.errors.phone_required" : true;
    }

    const incorrectPhoneSymbols = /[^\d\s+()-]/g;

    if (value.match(incorrectPhoneSymbols)) {
        return `validator.errors.${
            isForeignPhone(value) ? "phone_foreign_format" : "phone_format"
        }`;
    }

    return isForeignPhone(value)
        ? validateForeignPhone(value)
        : validateRuPhone(value);
}

function cartStatus(value, isRequired = false) {
    const card = value.replace(/\s/g, "");
    if (!isRequired && !card) return true;

    return LOYALTY_CARD.test(card) || "validator.errors.status_card_incorrect";
}

function code(value, length = 4, isConfirmationByCall) {
    if (!value || value.length < length) {
        return `validator.errors.${
            isConfirmationByCall ? "call_required" : "code_required"
        }`;
    }

    if (!/\d{4}$/.test(value)) {
        return `validator.errors.${
            isConfirmationByCall ? "call_incorrect" : "code_incorrect"
        }`;
    }

    return true;
}

const validators = { phone, email, cartStatus, code };

export default validators;
