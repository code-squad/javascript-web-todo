const getType = target => Object.prototype.toString.call(target).slice(8, -1);

export default {
    isArray: target => getType(target) === 'array',
    isObject: target => getType(target) === 'object',
    isNumber: target => getType(target) === 'number',
    isString: target => getType(target) === 'string',
    isBool: target => getType(target) === 'boolean',
}