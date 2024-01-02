function search(){

    let inputVal = document.querySelector('#search').value.toLowerCase();
    // console.log(inputVal);
    let tr = document.getElementsByTagName('tr');

    for(let i = 0; i < tr.length; i++){
    let td = tr[i].getElementsByTagName('td')[0];
    // console.log(td);
    
    if(td){

    let allTdContent = td.innerHTML || td.textContent;
    // console.log(allTdContent);

    if(allTdContent.toLowerCase().indexOf(inputVal) > -1){
            tr[i].style.display = "";
    } else{
            tr[i].style.display = "none";
    }

    }
}

}
