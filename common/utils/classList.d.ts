/**
 * The `classList` utility creates a list of class names by joining an object's
 * keys, but only for values which are truthy.
 *
 * @example
 * classList({ foo: true, bar: false, qux: 'qaz' });
 * // "foo qux"
 *
 * @param {Object} classes
 * @return {String}
 */
export default function classList(classes: any): string;
