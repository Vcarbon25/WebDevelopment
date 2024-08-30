let contacts={
    name:"Jose da Silva",
    Idade:25,
    endereco:{cidade:"Sao Paulo",
                pais:"Brasil"},
    hobbies:["coding","sports"]
}
//since declaration the object can be acessed in console with object notation name.atrib.atrib

let s=JSON.stringify(contacts) //make JSON object into single string

let obj = JSON.parse(s) //make the opposite process string->Json

//running though JSON List
let usuarios =[{nome:"Antonio", idade:40},{nome:"Julia",idade:30},{nome:"Fernando",idade:32}]
for (var i=0; i<usuarios.length;i++){
    console.log(usuarios[i].nome)
}
//above code can be verified in console - F12
// to get  the json from url/server
// "./" notation serve to nominate a file in the same folder as the html, if need to travel in folder structure insert all path, beggining from html folder
fetch('./JSONDemonstration.json').then(
    response =>{
        return response.json();
    }).then(
        data=> {
            //can work with json in this block
            console.log(data);
            //use the json to uptade front end
            document.getElementById("usuarios").innerHTML = data.nome; }).catch(
                err=>{
                    //error block
                    console.log("can't read the file")
                }
            );
    