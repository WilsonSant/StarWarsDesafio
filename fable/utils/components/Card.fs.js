import { Record } from "../../fable_modules/fable-library.4.2.1/Types.js";
import { bool_type, array_type, float64_type, record_type, string_type } from "../../fable_modules/fable-library.4.2.1/Reflection.js";
import { map } from "../../fable_modules/fable-library.4.2.1/Array.js";
import { translateExpression } from "./Form.fs.js";

export class columns extends Record {
    constructor(title, dataIndex, key) {
        super();
        this.title = title;
        this.dataIndex = dataIndex;
        this.key = key;
    }
}

export function columns_$reflection() {
    return record_type("Utils.Components.Card.columns", [], columns, () => [["title", string_type], ["dataIndex", string_type], ["key", string_type]]);
}

export class received extends Record {
    constructor(portugueseName, englishName, dataIndex) {
        super();
        this.portugueseName = portugueseName;
        this.englishName = englishName;
        this.dataIndex = dataIndex;
    }
}

export function received_$reflection() {
    return record_type("Utils.Components.Card.received", [], received, () => [["portugueseName", string_type], ["englishName", string_type], ["dataIndex", string_type]]);
}

export function createColumns(language, list) {
    return map((object) => (new columns(translateExpression(object.portugueseName, object.englishName, language), object.dataIndex, object.dataIndex)), list);
}

export class objectCard extends Record {
    constructor(title, data, columns, colorCSS, alt, read, set$, logo) {
        super();
        this.title = title;
        this.data = data;
        this.columns = columns;
        this.colorCSS = colorCSS;
        this.alt = alt;
        this.read = read;
        this.set = set$;
        this.logo = logo;
    }
}

export function objectCard_$reflection() {
    return record_type("Utils.Components.Card.objectCard", [], objectCard, () => [["title", string_type], ["data", float64_type], ["columns", array_type(columns_$reflection())], ["colorCSS", string_type], ["alt", string_type], ["read", bool_type], ["set", bool_type], ["logo", string_type]]);
}

export function createObjectCard(title, data, columns_1, className, alt, readState, setState, image) {
    const object = new objectCard(title, data, columns_1, className, alt, readState, setState, image);
    return object;
}

