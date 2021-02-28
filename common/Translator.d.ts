/**
 * Translator with the same API as Symfony's.
 *
 * Derived from https://github.com/willdurand/BazingaJsTranslationBundle
 * which is available under the MIT License.
 * Copyright (c) William Durand <william.durand1@gmail.com>
 */
export default class Translator {
    /**
     * A map of translation keys to their translated values.
     *
     * @type {Object}
     * @public
     */
    public translations: any;
    locale: any;
    addTranslations(translations: any): void;
    trans(id: any, parameters: any): any;
    transChoice(id: any, number: any, parameters: any): any;
    apply(translation: any, input: any): any[];
    pluralize(translation: any, number: any): any;
    convertNumber(number: any): number;
    pluralPosition(number: any, locale: any): 1 | 0 | 2 | 3 | 4 | 5;
}
