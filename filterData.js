function LoopingDetails(){
    for(let i = 0; i < Details.length; i++){
        document.querySelector('tbody').innerHTML += 
        `
        <tr>
            <td>${Details[i].Student_Name}</td>
            <td>${Details[i].Father_Name}</td>
            <td>${Details[i].Gender}</td>
            <td>${Details[i].Student_id}</td>
            <td>${Details[i].Field}</td>
        </tr>
        `
    }
}
LoopingDetails()


function forFields(fieldVal){

let GenderVal = document.querySelector('#Gender').value;

if(fieldVal === "all" && GenderVal === "all"){
    document.querySelector('tbody').innerHTML ="";
    LoopingDetails();
}


else{

    
    document.querySelector('tbody').innerHTML ="";


    // <= fieldValuesComeHere //

                    // forFiltering
    let ForFiltering = Details.filter((d) => {

    return(
        (d.Gender === GenderVal || GenderVal === 'all') && (d.Field === fieldVal || fieldVal  === 'all')  
        ); // <= return square Bracket //        
        }); // <= filtering Brackets //

        for(let i = 0; i < ForFiltering.length; i= i+1){
        document.querySelector('tbody').innerHTML +=
        `
        <tr>
        <td>${ForFiltering[i].Student_Name}</td>
        <td>${ForFiltering[i].Father_Name}</td>
        <td>${ForFiltering[i].Gender}</td>
        <td>${ForFiltering[i].Student_id}</td>
        <td>${ForFiltering[i].Field}</td>
        </tr>
        `
        
    }  // <= else Curly Bracket //
}

}



function forGenders(genderVAl){


    let FieldVal = document.querySelector('#Field').value;

    if(FieldVal === "all" && genderVAl === "all"){
        document.querySelector('tbody').innerHTML ="";
        LoopingDetails();
    }
    
    
    else{
    
        
        document.querySelector('tbody').innerHTML ="";
    
    
        // <= fieldValuesComeHere //
    
                        // forFiltering
        let ForFiltering = Details.filter((d) => {
    
        return(
            (d.Gender === genderVAl || genderVAl === 'all') && (d.Field === FieldVal || FieldVal  === 'all')  
            ); // <= return square Bracket //        
            }); // <= filtering Brackets //
    
            for(let i = 0; i < ForFiltering.length; i= i+1){
            document.querySelector('tbody').innerHTML +=
            `
            <tr>
            <td>${ForFiltering[i].Student_Name}</td>
            <td>${ForFiltering[i].Father_Name}</td>
            <td>${ForFiltering[i].Gender}</td>
            <td>${ForFiltering[i].Student_id}</td>
            <td>${ForFiltering[i].Field}</td>
            </tr>
            `
            
        }  // <= else Curly Bracket //
    }


}



