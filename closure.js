function outer(){
    var count = 0;
    function inner(){
        count = count + 1
        return count
    }
    return inner
}

var t = outer()