import { translateExpression } from "./Form.fs.js";

export function configFields(language) {
    return translateExpression("Ajustes", "Settings", language);
}

export function powerFields(language) {
    return translateExpression("Desconectar", "Log out", language);
}

