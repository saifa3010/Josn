function print(){

    
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let mobile=document.getElementById("mobile").value

    let PrintData={
        name:name,
        email:email,
        mobile:mobile

    }
    let data = document.createElement('div')
    data.className="data"
    let LineData = `
    <p style ="background-color:green; display:inline"  >${PrintData.name}</p>
    <p style ="background-color:red; display:inline" >${PrintData.email}</p>
    <p style ="background-color:yellow; display:inline">${PrintData.mobile}</p>
    `
    data.innerHTML=LineData
    document.body.appendChild(data)

   




    let table = document.querySelector('table');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    td1.innerHTML = name;
    td2.innerHTML = email;
    td3.innerHTML = mobile;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(tr);



    
    

}




