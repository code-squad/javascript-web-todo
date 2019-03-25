const getType = target => toString.call(target).slice(8, -1);

export default {
    isArray: target => getType(target) === 'Array',
    isObject: target => getType(target) === 'Object',
    isNumber: target => getType(target) === 'Number',
    isString: target => getType(target) === 'String',
    isBool: target => getType(target) === 'Boolean',
}