import { translateExpression } from "./Form.fs.js";

export function guestFields(language, number) {
    return language;
}

export function helloPortuguese(name) {
    return `Olá, ${name}`;
}

export function helloEnglish(name) {
    return `Hello, ${name}`;
}

export function getHelloMessage(isGuest, language, name, number) {
    const callGuestPT = helloPortuguese(`Visitante${number}`);
    const callGuestEnglish = helloEnglish(`Guest${number}`);
    if (isGuest) {
        return translateExpression(callGuestPT, callGuestEnglish, language);
    }
    else {
        return translateExpression(`Olá, ${name}`, `Hello, ${name}`, language);
    }
}

