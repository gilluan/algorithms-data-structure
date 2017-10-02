(() => {

    let reverter = ([head, ...tail], result = []) => {
        if(head != 0 && !head) return result;
        return reverter(tail, [...[head], ...result]);
    }
    console.log(reverter([0,1,2,3,4,5,6])); //6,5,4,3,2,1
})()
