
// 常规方法
const compose = function(...args) {
    args.reverse();
    const length = args.length;
    let index = length;
    while (index--) {
        if (typeof args[index] !== 'function') {
            throw new TypeError('须传入数组');
        }
    }
    return function(...args1) {
        let index = 0;
        let result = length ? args[index].apply(this, args1) : args1[0];
        while (++index < length) {
            result = args[index].call(this, result);
        }
        return result;
    }
}

// 1-2行代码完成
// const _pipe = (f, g) => (...arg) => g.call(null, f.apply(null, arg));
// const compose = (...args) => args.reverse().reduce(_pipe, args.shift());

const add1 = (x) => x + 1;
const mul3 = (x) => x * 3;
const div2 = (x) => x / 2;

compose(div2, mul3, add1, add1)(0);
