export function memoize(fn) {
    const cache = new Map();
    const wrapper = function dec(...args) {
        const hash = (args.length === 0) ? 0 : JSON.stringify(args);
        if (cache.has(hash)) {
            return cache.get(hash);
        }
        cache.set(hash, fn.apply(this, args));
        return cache.get(hash);
    };
    if (!(typeof fn === 'function')) {
        return null;
    }
    return wrapper;
}

