import { Record } from "../../fable_modules/fable-library.4.2.1/Types.js";
import { record_type, string_type, bool_type } from "../../fable_modules/fable-library.4.2.1/Reflection.js";

export function translateExpression(portugueseName, englishName, language) {
    if (language === "pt-br") {
        return portugueseName;
    }
    else {
        return englishName;
    }
}

export function translateMessageExpression(language, field) {
    return translateExpression(`Por favor, insira ${field}`, `Please, enter ${field}`, language);
}

export class requiredFields extends Record {
    constructor(required, message) {
        super();
        this.required = required;
        this.message = message;
    }
}

export function requiredFields_$reflection() {
    return record_type("Utils.Components.FormUtils.requiredFields", [], requiredFields, () => [["required", bool_type], ["message", string_type]]);
}

export function createRulesRequired(language, field) {
    const rules = [new requiredFields(true, translateMessageExpression(language, field))];
    return rules;
}

