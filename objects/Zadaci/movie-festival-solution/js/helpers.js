Array.prototype.hasElement = function (arrElement) {
    let str1 = JSON.stringify(arrElement);

    for (let i = 0; i < this.length; i++) {
        let element = this[i];
        let str2 = JSON.stringify(element);
        if (str1 === str2) {
            return true;
        }
    }

    return false;
}
