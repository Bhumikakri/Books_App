let background = document.querySelector(".container");
let nav = document.querySelector("nav");
let signnbtn = document.querySelector(".signup");
let main = document.querySelector("main .main_container");
let signpage = document.querySelector(".sign_part");
let Books_List = document.querySelector(".upperMenu ");
let detaillist = document.getElementById("popup");
let home = document.querySelector("#all");
let logo = document.querySelector(".logo a");


home.addEventListener("click", ()=>{
    window.location.reload();
})


// console.log(Books_List);
Books_List.addEventListener("click",(e)=>{
    if(e.target.classList.contains("Liist")){
        datafetch(e.target.innerText);
    }
})

// ---------------------adding events for sign buttons----------------------//
signnbtn.addEventListener("click", ()=>{
        main.style.display = "none";
        signpage.style.display = "flex";
        background.style.background="blue";
        signfun();
})
// -----------------------for sign in page------------------//
function signfun(){
    signpage.innerHTML = `<div class ="forms">
        <div class = "form_contens">
        <button class = "cross"><i class="fa-solid fa-xmark"></i></button>
        <input type = "text" id = "Name" placeholder = " NAME">
        <input type = "email" id = "Email" placeholder = " EMAIL">
        <input type = "password" id = "Password" placeholder = " PASSWORD">
        <button class = "signclick">SIGN UP</button>
        </div>
        <div class = "changeformbtn">
        <button class = "signUP_btn">SIGN UP<button>
        <button class = "signIN_btn"> SIGN IN<button>
        </div>
        </div>
        `
        let crossbtn = document.querySelector(".cross")
        crossbtn.addEventListener("click", ()=>{
            main.style.display = "flex";
            signpage.style.display = "none";
            background.style.backgroundColor=" rgb(226, 231, 236)";
            // background.classList.add("updatecontainer");
        })

        // let signin_btn = document.querySelector(".signIN_btn");
        // signin_btn.addEventListener
       
}

    

let viewDetails = ()=>{
    popup.showModal();
}

// ----------------------fetch the data---------------------------------------------------//
let books_contens = document.querySelector(".books_contens");


async function listnameonly(){
    let fetchdataa = await fetch("https://books-backend.p.goit.global/books/top-books");
    let nameonly =await fetchdataa.json();
    // console.log(nameonly);

    nameonly.forEach((element)=>{

        let plate = document.createElement("div");
        plate.classList.add("plate");

        let h2 = document.createElement("h2");
        h2.innerText = element.list_name;
        plate.appendChild(h2);
        let booksdtl = element.books;


        let imgBands = document.createElement("div");
        imgBands.classList.add("imgBands");
        booksdtl.forEach((element)=>{

            let title = element.title;
            let authName = element.author;
            let imgparts = document.createElement("div");
            imgparts.classList.add("imgparts");

            imgparts.innerHTML=`<div class="forview"><img src=${element.book_image}>
            <p class = "view animate__animated animate__slideInUp">Quiq View</p>
            </div>
            <h5>${title}</h5>
            <p class = "auth">${authName}</p>
            `

            imgparts.addEventListener("click",()=>{
                let descrip = element.description;
                console.log(element);
                if (descrip === "") {
                    descrip = "There is no description of this book.";
                }
                detaillist.innerHTML =`<div class="book-info">
                <button class = "crossnew"><i class="fa-solid fa-xmark"></i></button>
                <img src="${element.book_image}" alt="" >
                <div class="info">
                    <p class="title">${element.title}</p>
                    <span class="author">${element.author}</span>
                    <p class="description">${descrip}</p>
                    <div class="icons">
                        <a href="${element.buy_links[0].url}">Amazon</a>
                        <a href="${element.buy_links[1].url}">Apple Book</a>
                        <a href="${element.buy_links[4].url}">Bookshop</a>
                    </div>
                </div>
            </div>
            <button class="cart">Add to Shopping Cart</button>`
            viewDetails();

            let btn = document.querySelector(".crossnew");
            btn.addEventListener("click", ()=>{
                popup.close();
            })

            })
            imgBands.appendChild(imgparts);
            // console.log(imgurl, title, authName);

            // popupfuntion(element,element.book_image);




        })
        // console.log(imgBands);
        plate.appendChild(imgBands);
        books_contens.appendChild(plate);



    })
}
listnameonly();

// -----------------------------------for making all divs and imgs----------------------------------------//

// let allbooks = document.querySelector(".allbooks");

async function datafetch(val){
    books_contens.textContent = "";
    let Fetching = await fetch(`https://books-backend.p.goit.global/books/category?category=${val}`);
    let change =await Fetching.json();


    let h1 = document.createElement("h1");
    let allbooks = document.createElement("div");  
    allbooks.classList.add("allbooks");
        books_contens.append(allbooks);

       change.forEach((element) => {
        // console.log(element.title);
        h1.innerText = element.list_name;
        books_contens.appendChild(h1);

        let imgbook = element.book_image;
        let img = document.createElement("img");
        img.src = imgbook;

        
        let onebooks = document.createElement("div");
        onebooks.classList.add("onebooks");
        
        
        onebooks.appendChild(img);
        allbooks.appendChild(onebooks);
    });
    books_contens.append(allbooks);
}



// -----------------------------------------making toggle----------------------//


let moodbtn = document.querySelector("#mobtn");
moodbtn.addEventListener('click', ()=>{
    // console.log("new")
    if(moodbtn.style.left == "2px"){
        moodbtn.style.left = "30px";
        moodbtn.style.background ="black"
        background.style.backgroundColor = "rgba(0, 0, 0, 0.952)"
        background.style.color = "white";
        nav.style.backgroundColor = "black";
        nav.style.color = "white"
        nav.style.border = "1px solid white"
        logo.style.color = "white";

    }else{
        moodbtn.style.left = "2px";
        moodbtn.style.background ="white"
        background.style.backgroundColor = "rgb(226, 231, 236)"
        background.style.color = "black";
        nav.style.backgroundColor = "white";
        nav.style.color = "black";
        logo.style.color = "black";
    }
})