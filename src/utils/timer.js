function timer(name){
    const start = new Date();
    return {
        stop: () => {
            const time = new Date() - start.getTime();
            console.log('Timer:', name, 'finished in', time, 'ms');
        }
    }
};

module.exports = timer;