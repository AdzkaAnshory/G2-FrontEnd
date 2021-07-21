    this.el = document.getElementById('tbodyhere');
    let arrNewdata = [{namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952" },
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952"},
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952" },
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952"},
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952" },
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952"},
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952" },
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952"},
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952" },
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952"},
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952" },
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952"},
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952" },
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952"},
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952" },
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952"},
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952" },
    {namePhoto : "accusamus beatae ad facilis cum similique qui sunt", nameAlbum : "quidem molestiae enim", user : "Leanne Graham", urlPhoto : "https://via.placeholder.com/600/92c952", urlThumb : "https://via.placeholder.com/150/92c952"}];
    // let arrNewdata = [];
    let arrUsersss = [];
    let arrAlbums = [];
    let arrPhotos = [];

    const getUsers = () => {
        // promise
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(response => response.json())
            .then(json => {
                users = json.map(user => {
                    return {
                        userId: user.id,
                        name: user.name
                    }
                })
                arrUsersss.push(users);
                console.log("User :", arrUsersss);
            })
    }
    
    const getAlbums = () => {
        // promise
        fetch("https://jsonplaceholder.typicode.com/albums/")
            .then(response => response.json())
            .then(json => {
                albums = json.map(album => {
                    return {
                        userId: album.userId,
                        albumId: album.id,
                        albumTitle: album.title
                    }

                })
                arrAlbums.push(albums);
                console.log("album :", arrAlbums);
            })
    }
    
    const getPhotos = () => {
        // promise
        fetch("https://jsonplaceholder.typicode.com/photos/")
            .then(response => response.json())
            .then(json => {
                photos = json.map(photo => {
                    return {
                        albumId: photo.albumId,
                        photoId: photo.id,
                        photoTitle: photo.title,
                        url: photo.url,
                        thumbnailUrl: photo.thumbnailUrl
                    }
                })
                arrPhotos.push(photos);
                console.log("Photo :", arrPhotos);
            })

    }
    
    const dataFilter = (arrUsersss, arrAlbums, arrPhotos) => {
        for (let i=0;i<arrPhotos;i++){ 
            const filterPhoto = arrPhotos[i];
            const filterAlbums = arrAlbums.filter(function (currentElement) { 
                return currentElement.albumId ===filterPhoto.albumId; 
            });
            const filterUsers = arrUsersss.filter(function (currentElement) { 
                return currentElement.userId === filterAlbums[0].userId;
            });
            arrNewdata.push({
                namePhoto: filterPhoto.photoTitle,
                nameAlbum: filterAlbums[0].albumTitle,
                user: filterUsers[0].userName,
                urlPhoto: filterPhoto.url,
                urlThumb: filterPhoto.thumbnailUrl
            })
        }
          
           
    }

    this.Count = function(data = arrNewdata) {
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
        
    this.FetchAll = (data = arrNewdata) => {
            console.time("generate")
            let rows = "";
            for (let index = 0; index < data.length; index++) {
                const userss = data[index];
        
                rows += `
                    <tr>
                        <td>${userss.namePhoto}</td>
                        <td>${userss.nameAlbum}</td>
                        <td>${userss.user}</td>
                        <td><a target="_blank" href="${userss.urlPhoto}">
                            <img src="${userss.urlThumb}" width="50px" height="50px">
                            </a>
                        </td>
                        <td>
                            <button class="btn btn-info" onclick="Edit(${index})">Edit</button>
                            <button class="btn btn-danger" onclick="Delete(${index})">Delete</button>
                        </td>
                    </tr>
                `
            }
            return el.innerHTML = rows;
    };

    const add = document.querySelector('#addButton');
    const save = document.querySelector('#saveButton');

    add.addEventListener('click', e => {
    const table = document.getElementById('tbodyhere');
            table.innerHTML = `
            <tr>
                <td><input type="text" id="namePhoto" placeholder="Photo Name" value="Photo Name"></td>
                <td><input type="text" id="nameAlbum" placeholder="Album Name" value="Album Name"></td>
                <td><input type="text" id="user" placeholder="User" value="User"></td>
                <td><input type="text" id="url" placeholder="Url Photo" value="Url Photo"></td>
                <td><input type="text" id="urlthumb" placeholder="Url Thumbnail" value="Url Thumbnail"></td>
                <td><button class="w3-button w3-green rad" id="saveButton" onclick="this.Add()">Save</button></td>
            </tr>`+table.innerHTML;
    });
    
    // save.addEventListener('click', this.Add);
        
        this.Add = () => {
        el1 = document.getElementById('namePhoto');
        el2 = document.getElementById('nameAlbum');
        el3 = document.getElementById('user');
        el4 = document.getElementById('url');
        el5 = document.getElementById('urlthumb');

        // Get the value
        const photo = el1.value;
        const album = el2.value;
        const user = el3.value;
        const url = el4.value;
        const urlthumb = el5.value;
        const obj = {namePhoto: ""+photo+"", nameAlbum:""+album+"", user:""+user+"",urlPhoto:url, urlThumb:""+urlthumb+""};
        if (photo && album && user && url && urlthumb) {
            // Add the new value
            this.arrNewdata.push(obj);
            // Reset input value
            el.value = "";
            // Dislay the new list
            this.FetchAll();
        }
    };
        
    this.Edit = item => {
        el1 = document.getElementById('namePhoto');
        el2 = document.getElementById('nameAlbum');
        el3 = document.getElementById('user');
        el4 = document.getElementById('url');
        el5 = document.getElementById('urlthumb');
        // Display value in the field
        el1.value = arrNewdata[item].namePhoto;
        el2.value = arrNewdata[item].nameAlbum;
        el3.value = arrNewdata[item].user;
        el4.value = arrNewdata[item].urlPhoto;
        el5.value = arrNewdata[item].urlThumb;
        // Display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = () => {
            // Get value
            const photo = el1.value;
        const album = el2.value;
        const user = el3.value;
        const url = el4.value;
        const urlthumb = el5.value;
        const obj = {namePhoto: ""+photo+"", nameAlbum:""+album+"", user:""+user+"",urlPhoto:url, urlThumb:""+urlthumb+""};
        if (photo && album && user && url && urlthumb) {
                // Edit value
                self.user.splice(item, 1, obj);
                // Display the new list
                self.FetchAll();
                // Hide fields
                CloseInput();
            }
        }
    };
        
    this.Delete = item => {
        // Delete the current row
        arrNewdata.splice(item, 1);
        // Display the new list
        FetchAll();
    };

init = () =>{
    FetchAll();
    getUsers();
    getAlbums();
    getPhotos();
    dataFilter(arrUsersss, arrAlbums, arrPhotos);   
    console.log("User1 :",arrUsersss);
    console.log("Album1 :", arrAlbums);
    console.log("Photo1 :",arrPhotos);
    console.log("New Data :", arrNewdata);
}

init();
CloseInput = () => {
    document.getElementById('spoiler').style.display = 'none';
}

