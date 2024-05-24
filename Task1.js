function getSum(par1){
    let int = 0
    for (let i = 0; i < par1; i++) {
    int += i;
    }
    return int
    }
    console.log(getSum(101))