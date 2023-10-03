
export function validateLanguage(responsePortuguese, responseEnglish, current) {
    if (current === "pt-br") {
        return responseEnglish;
    }
    else {
        return responsePortuguese;
    }
}

export function changeLanguage(current) {
    return validateLanguage("pt-br", "en-us", current);
}

export function changeIcon(current) {
    return validateLanguage("/united-states-flag-icon.svg", "/brazil-flag-icon.svg", current);
}

