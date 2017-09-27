(() => {
	//Revertendo uma lista usando o lodash.
    let listRevert = (lists, new_list = []) => {
        if(lists[0] != 0 && !lists[0]) return new_list;
        return listRevert(_.tail(lists), [_.head(lists)].concat(new_list))
    }

    console.log(listRevert([0,1,2,3]));

})()