import { translateExpression } from "./Form.fs.js";

export function movieFields(language) {
    return translateExpression("Filmes", "Movies", language);
}

export function dateFormat(language) {
    return translateExpression("dd/MM/yyyy", "MM/dd/yyyy", language);
}

