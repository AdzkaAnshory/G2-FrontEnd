const add = document.querySelector('#addButton');
    const save = document.querySelector('#saveButton');

    add.addEventListener('click', function (e) {
    const table = document.querySelector('table > tbody');
            table.innerHTML = `<form action="javascript:void(0);" method="POST" onsubmit="app.Add()"> 
            <tr>
                <td><input type="text" id="add-name" placeholder="Nama"></td>
                <td><input type="text" id="posisi" placeholder="Position"></td>
                <td><input type="text" id="office" placeholder="Office"></td>
                <td><input type="text" id="age" placeholder="Age"></td>
                <td><input type="text" id="start" placeholder="YYYY/MM/DD"></td>
                <td><input type="text" id="salary" placeholder="Salary"></td>
                <td><input type="submit" value="Add"></td>
            </tr>
        </form>`+table.innerHTML;
    });

const app = new function() {
    this.el = document.getElementById('user');
    this.user = [ {nama:"Tiger Nixon", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Tiger Nixon", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Garrett Winters", posisi:"Accountant", office:"Tokyo",age:63,start:"2011/07/25",salary:"$170,750"},
    {nama:"Garrett Winters", posisi:"Accountant", office:"Tokyo",age:63,start:"2011/07/25",salary:"$170,750"},
    {nama:"Ashton Cox", posisi:"Junior Technical Author", office:"San Francisco",age:66,start:"2009/01/12",salary:"$86,000"},
    {nama:"Ashton Cox", posisi:"Junior Technical Author", office:"San Francisco",age:66,start:"2009/01/12",salary:"$86,000"},
    {nama:"Cedric Kelly", posisi:"Senior Javascript Developer", office:"Edinburgh",age:22,start:"2012/03/29",salary:"$433,060"},
    {nama:"Cedric Kelly", posisi:"Senior Javascript Developer", office:"Edinburgh",age:22,start:"2012/03/29",salary:"$433,060"},
    {nama:"Anton", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Anton", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Airi Satou", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Airi Satou", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Brielle Williamson", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Rhona Davidson", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Herrod Chandler", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Rhona Davidson", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Brielle Williamson", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Herrod Chandler", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Colleen Hurst", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Sonya Frost", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Jena Gaines", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Sonya Frost", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Quinn Flynn", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Jena Gaines", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Quinn Flynn", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Colleen Hurst", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Tiger Nixon", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Tiger Nixon", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Tiger Nixon", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Tiger Nixon", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Tiger Nixon", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Tiger Nixon", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Garrett Winters", posisi:"Accountant", office:"Tokyo",age:63,start:"2011/07/25",salary:"$170,750"},
    {nama:"Garrett Winters", posisi:"Accountant", office:"Tokyo",age:63,start:"2011/07/25",salary:"$170,750"},
    {nama:"Ashton Cox", posisi:"Junior Technical Author", office:"San Francisco",age:66,start:"2009/01/12",salary:"$86,000"},
    {nama:"Ashton Cox", posisi:"Junior Technical Author", office:"San Francisco",age:66,start:"2009/01/12",salary:"$86,000"},
    {nama:"Cedric Kelly", posisi:"Senior Javascript Developer", office:"Edinburgh",age:22,start:"2012/03/29",salary:"$433,060"},
    {nama:"Cedric Kelly", posisi:"Senior Javascript Developer", office:"Edinburgh",age:22,start:"2012/03/29",salary:"$433,060"},
    {nama:"Anton", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Anton", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Airi Satou", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Airi Satou", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Brielle Williamson", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Rhona Davidson", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Herrod Chandler", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Rhona Davidson", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Brielle Williamson", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Herrod Chandler", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Colleen Hurst", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Sonya Frost", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Jena Gaines", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Sonya Frost", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Quinn Flynn", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Jena Gaines", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Quinn Flynn", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Colleen Hurst", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Tiger Nixon", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Tiger Nixon", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Tiger Nixon", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"},
    {nama:"Tiger Nixon", posisi:"System Architect", office:"Edinburgh",age:61,start:"2011/04/25",salary:"$320,800"}];

    this.Count = function(data) {
    const el = document.getElementById('counter');
    let name = 'user';
    if (data) {
        if (data > 1) {
            name = '<b>user</b>';
        }
        el.innerHTML = data + ' ' + name ;
        } else {
        el.innerHTML = 'No ' + name;
        }
    };
        
    this.FetchAll = function() {
        let data = "";
        if (this.user.length > 0) {
            for (i = 0; i < this.user.length; i++) {
                data += '<tr>';
                data += '<td>' + this.user[i].nama + '</td>';
                data += '<td>' + this.user[i].posisi + '</td>';
                data += '<td>' + this.user[i].office + '</td>';
                data += '<td>' + this.user[i].age + '</td>';
                data += '<td>' + this.user[i].start + '</td>';
                data += '<td>' + this.user[i].salary + '</td>';
                data += '<td><button class="btn btn-info" onclick="app.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button class="btn btn-danger" onclick="app.Delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }
        this.Count(this.user.length);
        return this.el.innerHTML = data;
    };
    // const newtable = add.addEventListener('click', function (e) {
    //     console.log("e:", e);
    //     table1.innerHTML += `
    //         <tr>
    //           <td><input type="text" id="nama" name="nama" value="Name"/></td>
    //           <td><input type="text" id="posisi" name="posisi" value="Posisi"/></td>
    //           <td><input type="text" id="office" name="office" value="Office"/></td>
    //           <td><input type="text" id="age" name="age" value="Age"/></td>
    //           <td><input type="text" id="start" name="start" value="YYYY/MM/DD"/></td>
    //           <td><input type="text" id="salary" name="salary" value="$Salary"/></td>
    //         </tr>
    //     `
    //     return table1
    // })
    
    this.Add = function () {
        el1 = document.getElementById('add-name');
        el2 = document.getElementById('posisi');
        el3 = document.getElementById('office');
        el4 = document.getElementById('age');
        el5 = document.getElementById('start');
        el6 = document.getElementById('salary');
        // Get the value
        const name = el1.value;
        const posisi = el2.value;
        const office = el3.value;
        const age = el4.value;
        const start = el5.value;
        const salary = el6.value;
        if (name && posisi && office && age && start && salary) {
            const obj = {nama: ""+name+"", posisi:""+posisi+"", office:""+office+"",age:age,start:""+start+"",salary:"$"+salary+""};
            // Add the new value
            this.user.push(obj.trim());
            // Reset input value
            el.value = "";
            // Dislay the new list
            this.FetchAll();
        }
    };
        
    this.Edit = function (item) {
        const el = document.getElementById('edit-name');
        // Display value in the field
        el.value = this.user[item];
        // Display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function() {
            // Get value
            let country = el.value;
            if (country) {
                // Edit value
                self.user.splice(item, 1, country.trim());
                // Display the new list
                self.FetchAll();
                // Hide fields
                CloseInput();
            }
        }
    };
        
    this.Delete = function (item) {
        // Delete the current row
        this.user.splice(item, 1);
        // Display the new list
        this.FetchAll();
    };
    
}
app.FetchAll();

function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}