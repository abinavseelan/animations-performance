onmessage = function(event) {
    const array = new Array(50000);

    for (let i = 0; i < array.length; i++) {
        const subArray = new Array(i);
        subArray.reverse();
    }
}