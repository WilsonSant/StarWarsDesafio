import { createRulesRequired, translateExpression } from "./Form.fs.js";

export function userFields(language) {
    return translateExpression("Usuário", "Username", language);
}

export function getUserFields(language) {
    return createRulesRequired(language, userFields(language));
}

export function passwordFields(language) {
    return translateExpression("Senha", "Password", language);
}

export function getPasswordFields(language) {
    return createRulesRequired(language, passwordFields(language));
}

export function guestButtonFields(language) {
    return translateExpression("Entrar como visitante", "Enter as Guest", language);
}

export function commonButtonField(language) {
    return translateExpression("Entrar", "Enter", language);
}

export function getFooterButtonsField(guest, language) {
    if (guest) {
        return guestButtonFields(language);
    }
    else {
        return commonButtonField(language);
    }
}

