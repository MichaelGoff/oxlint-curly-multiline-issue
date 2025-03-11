type IgnoreRule = string | RegExp | ((fieldName: string) => boolean);

function makeArray(value: IgnoreRule | Iterable<IgnoreRule>): Array<IgnoreRule> {
    if (value === null || value === undefined) {
        return [];
    }

    const isIterable = (obj: any) : obj is Iterable<IgnoreRule> => {
        if (obj === null) return false;
        else if (typeof obj === 'string') return false;
        else return typeof value[Symbol.iterator] === 'function';
    };

    if (isIterable(value)) {
        return [...value];
    }

    return [value].flat();
}

console.log(makeArray('some value'));

