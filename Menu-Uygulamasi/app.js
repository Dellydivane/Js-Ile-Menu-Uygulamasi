const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Tavuklu Pilav",
    category: "Turk",
    price: 7.99,
    img:
      "https://i.nefisyemektarifleri.com/2019/03/08/tavuklu-pilav.jpg",
    desc: `Pirinç, bulgur gibi taneli bitkilerin suda pişirilmesiyle yapılan bir yemektir.`,
  },
  {
    id: 11,
    title: "Adana Kebap",
    category: "Turk",
    price: 13.99,
    img:
      "https://i.nefisyemektarifleri.com/2021/03/15/adana-kebap.jpg",
    desc: `Adana'ya özgü,satıra benzer bir bıçak ile elde kıyılan parça etten yapılan Türk mutfağında bir kebap veya şiş köfte çeşidi.`,
  },

];
const kapsamdugme = document.querySelector(".btn-container");
const menuList = document.querySelector(".section-center");

//All Butonunu Oluşturma
function allButon () {
    
    let allButon = document.createElement("button");
    allButon.id ='all'
    allButon.innerHTML="All";
    allButon.classList.add("btn-item");
    kapsamdugme.appendChild(allButon);
}

// Diğer Butonları Oluşturma
function otherButon () {
  let btnItem = menu.map(item =>(item.category) )

let countedName=btnItem.reduce((allNames,isim)=> {
if(isim in allNames){
    allNames[isim]++
  }
  else{
    allNames[isim]=1;
  }
  return allNames
}, {})



let buton =Object.keys(countedName)
buton.forEach(createButton)
function createButton (ulke) {
  let dugme = document.createElement("button");
  dugme.id = ulke;
  let t = document.createTextNode(ulke)
    
  kapsamdugme.appendChild(dugme)
  dugme.classList.add("btn-item")
  dugme.appendChild(t);

}

}

// Oluşturulan Butonları Çağırma
const butonOlustur = () => {
  allButon();
  otherButon();
}
butonOlustur()



// Yemek Bölümünü Oluşturma
const createFoods = (food) => {
  let menuDOM = `
    <div class="menu-items col-lg-6 col-sm-12">
      <img class="photo" src="${food.img}" alt="${food.title}">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${food.title}</h4>
          <h4 class="price">${food.price} <i class="fa-solid fa-dollar-sign"></i></h4>
        </div>
        <div class="menu-text">${food.desc}</div>
      </div>
    </div>  
  `;
  return menuDOM
};

//Tüm Yemekleri Listeleme
const listAllFoods = () => {
  menuList.innerHTML = '' ;
  menu.forEach((item) => {
    let yemekler = createFoods(item);
    menuList.innerHTML += yemekler;

  })
}

listAllFoods()

// Türk Yemekleri Listeleme

const turkYemekList = () => {
  menuList.innerHTML = '' ;
  menu.forEach((item) =>{
    if(item.category == 'Turk'){
      let yemekler = createFoods(item);
      menuList.innerHTML += yemekler;
    }
  })
}

// Çin Yemekleri Listeleme

const chineseYemekList = () => {
  menuList.innerHTML = '' ;
  menu.forEach((item) =>{
    if(item.category == 'China'){
      let yemekler = createFoods(item);
      menuList.innerHTML += yemekler;
    }
  })
}

// Japon Yemekleri Listeleme

const japonYemekList = () => {
  menuList.innerHTML = '' ;
  menu.forEach((item) =>{
    if(item.category == 'Japan'){
      let yemekler = createFoods(item);
      menuList.innerHTML += yemekler;
    }
  })
}

//Kore Yemekleri Listeleme
const koreYemekList = () => {
  menuList.innerHTML = '' ;
  menu.forEach((item) =>{
    if(item.category == 'Korea'){
      let yemekler = createFoods(item);
      menuList.innerHTML += yemekler;
    }
  })
}

//Butonlara Erişim
const tumButonlar = document.querySelector('#all')
const turkYemekBtn = document.querySelector('#Turk')
const koreYemekBtn = document.querySelector('#Korea')
const japonYemekBtn = document.querySelector('#Japan')
const cinYemekBtn = document.querySelector('#China')


//Butonlara Olay Ekleme
tumButonlar.addEventListener("click",listAllFoods)
turkYemekBtn.addEventListener("click",turkYemekList)
koreYemekBtn.addEventListener("click",koreYemekList)
japonYemekBtn.addEventListener("click",japonYemekList)
cinYemekBtn.addEventListener("click",chineseYemekList)
