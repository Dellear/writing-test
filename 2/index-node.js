
// 模拟驾驶，会按时间先后打印出人名
function drive(arr) {
    console.log(arr);
}

(async () => {
    const MissLi = (callback) => {
        setTimeout(() => {
            callback('MissLi');
        }, 10); //上车时间不一定
    }

    const MrWang = (callback) => {
        setTimeout(() => {
            callback('MrWang');
        }, 3); //上车时间不一定
    }

    /**
     * driveCustomers  
     * 传入函数返回promise来处理内部settimeout的异步问题
     * 
     */
    function driveCustomers() {
        const tempArr = [];
        let num = 0;

        // promise
        return new Promise((resolve) => {
            for (let i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] !== 'function') {
                    console.error('传入参数有误，须传入函数！');
                    return;
                }

                arguments[i]((name) => {
                    tempArr.push(name);
                    num++;
                    if (num === arguments.length) {
                        resolve(tempArr);
                    }
                })
            }
        })
    }

    return (drive(await driveCustomers(MissLi, MrWang)));
})();