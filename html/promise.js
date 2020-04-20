var satiko = function(power, cost) {
    return new Promise(function(resolve, reject) {
        if (power >= cost) {
            resolve(power - cost);
        } else {
            reject('パワーが足りません');
        }
    });
}

satiko(1000, 300).then(function(remainingPower){
    console.log('残りのパワーは' + remainingPower + 'Pです');
    return satiko(remainingPower, 300);
}).then(function(remainingPower){
    console.log('残りのパワーは' + remainingPower + 'Pです');
    return satiko(remainingPower, 300);
}).then(function(remainingPower){
    console.log('残りのパワーは' + remainingPower + 'Pです');
    return satiko(remainingPower, 300);
}).then(function(remainingPower){
    console.log('残りのパワーは' + remainingPower + 'Pです');
    return satiko(remainingPower, 300);
}).then(function(remainingPower){
    console.log('残りのパワーは' + remainingPower + 'Pです');
    return satiko(remainingPower, 300);
}).catch(function(outOfPower){
    console.log('もう終わりど' + outOfPower);
});