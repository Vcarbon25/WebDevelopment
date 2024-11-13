//document.log("Chamou JS")
function Download(){
    //convert the table in an array
    let data=[];
    for (let tr of document.querySelectorAll("#content tr")){
        let row=[];
        for (let td of tr.querySelectorAll("td")){
            row.push(td.innerHTML);
        }
        data.push(row);
    }
    console.log(data)
    //Convert the data array to  BLOB (Binary Large OBject)
    let blob = new Blob([CSV.serialize(data)],{type:"text/csv"});
    //DOwnload the CSV file
    let url = window.URL.createObjectURL(blob);
    a = document.createElement("a");
    a.href = url; a.download = "demo.csv";
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url)
}