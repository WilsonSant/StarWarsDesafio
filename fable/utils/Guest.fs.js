import { nonSeeded } from "../fable_modules/fable-library.4.2.1/Random.js";

export function generateRandomNumber() {
    return nonSeeded().Next2(1, 100);
}

