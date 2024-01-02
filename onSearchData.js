function search(){
    let inputValue = document.getElementById('search').value.toLowerCase();


    let SearchingData = Details.filter((data) => {
        return Details.Student_Name || Details.Father_Name || Details.Student_id || Details.Field
    })
    
if(SearchingData === inputValue){
    document.querySelector('tbody').innerHTML =""


}}