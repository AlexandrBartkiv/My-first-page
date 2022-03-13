var arr = [];
document.getElementById("button").onclick = function () {  
    inp = document.getElementById(`input`).value
        if(/[^a-zA-Z0-9=]/.test( inp ) || /[ ]/.test(inp) || inp <= " ") { // input alphanumeric validation
            alert('Enter only Letters, numbers and = , please');                             
            return false;
        }
        p = inp.split(`=`,2)
            arr.unshift(p)
            const html = arr.map(str => {
                return `<p>${str[0]}=${str[1]}</p>`
            }).join('')
            document.getElementById(`output`).innerHTML = html;

    };
document.querySelector(`#srtbyname`).addEventListener(`click`, () => { //sorting by `Name`
	arr.sort(function(a, b) {
	    if (a[0] <b[0]){
            return -1
        }
        if (a[0] > b[0]){
            return 1
        }
        return 0
        
    }); 
    
    const arr2 = arr.map(str => {
        return `<p>${str[0]}=${str[1]}</p>`
    }).join('');
    document.getElementById(`output`).innerHTML = arr2;

});
document.querySelector(`#srtbyvalue`).addEventListener(`click`, () => { //Sorting by `Value`
	arr.sort(function(a, b) {
	    if(a[1] > b[1]){
            return 1
        }
        if(a[1] < b[1]){
            return -1
        }
        return 0
    }); 
    
    const arr2 = arr.map(str => {
        return `<p>${str[0]}=${str[1]}</p>`
    }).join('');
    document.getElementById(`output`).innerHTML = arr2;

});
document.querySelector(`#delete`).addEventListener(`click`, () => { // Deliting data from our main list
    arr=[]
    document.getElementById(`output`).innerHTML = arr;
});
