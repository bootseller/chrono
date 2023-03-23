/**
 * Chrono components for English support (*parsers*, *refiners*, and *configuration*)
 *
 * @module
 */

import { Component, ParsedResult, ParsingOption, ParsingReference } from "../../parsing";
import { Chrono } from "../../chrono";

import ENDefaultConfiguration from "./configuration";

export { Component, ParsedResult, ParsingOption, ParsingReference };

const enConfig = new ENDefaultConfiguration();

/**
 * Chrono object configured for parsing *casual* English
 */
export const casual = new Chrono(enConfig.createCasualConfiguration(false));

/**
 * Chrono object configured for parsing *strict* English
 */
export const strict = new Chrono(enConfig.createConfiguration(true, false));

/**
 * Chrono object configured for parsing *UK-style* English
 */
export const GB = new Chrono(enConfig.createConfiguration(false, true));

/**
 * A shortcut for en.casual.parse()
 */
export function parse(text: string, ref?: Date, option?: ParsingOption): ParsedResult[] {
    return casual.parse(text, ref, option);
}

/**
 * A shortcut for en.casual.parseDate()
 */
export function parseDate(text: string, ref?: Date, option?: ParsingOption): Date {
    return casual.parseDate(text, ref, option);
}
