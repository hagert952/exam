var getall;var view;
var menu;
var meal;

 view=document.getElementById('view');
 menu=document.getElementById('menu');
 var Ingredientsid=document.getElementById('Ingredientsid');
 var Ingredients=document.getElementById('Ingredients');
 var idArea=document.getElementById('idArea');
var idingre=document.getElementById('idingre');
var idcateg=document.getElementById('idcateg');
var searchletter=document.getElementById('searchletter');
var detail;
 detail=document.getElementById('details');
 var category=document.getElementById('category');
 var details=document.getElementById('details');
 var categ=document.getElementById('categ');
 var Area=document.getElementById('Area');
 var Areaid=document.getElementById('Areas');
 var searchname=document.getElementById('searchmeal');
var searchbyname=document.getElementById('searchname');
var searchid=document.getElementById('search');
var ids =document.getElementById('ids');
 document.addEventListener('DOMContentLoaded',async function(){
var myviewer=new viewer();
 myviewer.getApiviewer();
getall=await myviewer.viewall();
var img=new allimages(getall);
 img.gets();
 idingre.querySelectorAll('.row').forEach(card=>{
  card.addEventListener('click',async()=>{
var mealId=card.getAttribute('meal-id');
console.log('lll');
    console.log(mealId);
    
  })
 })
 class mealbyid{
  constructor(
id
  ){this.id=id}
   getApi(){
      return `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`;
    
  }
async  getallwithid(){
    var response=await fetch(this. getApi());
    var data=await response.json();
    return data.meals;
  }
}
 view.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', async () => {
    var mealId = card.getAttribute('data-meal-id');
    var mealDetails = new mealbyid(mealId);

    var gg=mealDetails.getApi(mealId);

    var  detailss = await mealDetails.getallwithid();
    console.log('mmmmmm',detailss);
    var views=new viewmealid();


views.getbyid(detailss);
menu.classList.add('d-none');
Ingredientsid.classList.add('d-none');
// Ingredients.classList.add('d-none');
idArea.classList.add('d-none');
idingre.classList.add('d-none');
      view.classList.add('d-none');
      searchbyname.classList.add('d-none');
      // category.classList.add('d-none');
      categ.classList.add('d-none');
      // Areaid.classList.add('d-none');
      Area.classList.add('d-none');
      // contactus.classList.add('d-none');
      submit.classList.add('d-none');
      
      details.classList.remove('d-none');

  });
});

});

var details;
document.addEventListener('click',function(){
 });

  class viewmealid{
constructor(){
  
}
 getbyid(meals) {
  var html = '';

  meals.forEach(meal => {
    html += `
      <div class="col-lg-5 col-md-6 col-sm-8 d-flex flex-column">
        <img src="${meal.strMealThumb}" class="coll" alt="">
        <h1>Corba</h1>
      </div>
      <div class="col-lg-7 col-md-6 col-sm-8 d-flex flex-column">
        <h1>Instructions</h1>
        <p>${meal.strInstructions}</p>
        <h1>Area: ${meal.strArea}</h1>
        <h1>Category: ${meal.strCategory}</h1>
        <h1>Recipes:</h1>
        <ul>
    `;

    for (let i = 1; i <= 20; i++) {
      const measure = meal[`strMeasure${i}`];
      if (measure && measure.trim()) {
        html += `
          <div class="d-flex flex-row">
            <li class="text-decoration-none list-unstyled p-1 m-1 d-flex flex-row" style="background-color: #cff4fc;">${measure}</li>
          </div>`;
      }
    }

    html += `
        </ul>
        <h1>Tags:</h1>
        <div>`;
    if (meal.strTags) {
      meal.strTags.split(',').forEach(tag => {
        html += `<span class="py-2 px-2 border my-5">${tag}</span>`;
      });
    }

    html += `
        </div>
        <div class="d-flex gap-1 my-3">
          <button id="source" class="bg-succes py-2 px-3 source-button" data-source="${meal.strSource}">Source</button>
          <button id="youtube" class="bg-dange py-2 px-3" data-youtube="${meal.strYoutube}">YouTube</button>
        </div>
      </div>
    `;
  });

  document.querySelector('.rows').innerHTML = html;


  document.querySelectorAll('.source-button').forEach(button => {
    button.addEventListener('click', function() {
      const sourceUrl = this.getAttribute('data-source');
      if (sourceUrl) {
        window.location.href = sourceUrl;
      }
    });
  });

  document.querySelectorAll('#youtube').forEach(button => {
    button.addEventListener('click', function() {
      const youtubeUrl = this.getAttribute('data-youtube');
      if (youtubeUrl) {
        window.location.href = youtubeUrl;
      }
    });
  });
}
  }




var geter;

Areaid.addEventListener('click',async function(){
 view.classList.add('d-none');menu.classList.add('d-none');
 searchbyname.classList.add('d-none')
 categ.classList.add('d-none');
 details.classList.add('d-none');
 Area.classList.remove('d-none');
 idcateg.classList.add('d-none');
 idArea.classList.add('d-none');
 Ingredientsid.classList.add('d-none');
 idingre.classList.add('d-none');
 contactus.classList.add('d-none');
 submit.classList.add('d-none');
 searchbyname.classList.add('d-none');

var g=new getArea();
var viewer=await g.viewArea();
var ar=new AreaViewer();
ar.viewerArea(viewer);
})


class getArea{
constructor(){}
getApi(){
  return `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
}
async viewArea(){
var response=await fetch(this.getApi());
var data=await response.json();
// console.log('area',data.meals);
return data.meals;


}
}
class AreaViewer{
  constructor(){}
  viewerArea(meals){
    var html='';
    meals.forEach(meal=>{

     html+= `
       <div class="col">
            <div class="d-flex flex-column justify-content-center align-items-center text-white area all" Areaattr="${meal.strArea}">
              <i class="fa-solid fa-house-laptop fa-4x"></i>
        <div class="">
                 <h1>${meal.strArea}</h1>
          </div>  
                    </div>
                </div>
     `
    })
    Area.querySelector('.row').innerHTML=html;
this.getareaeventlistgners();

  }

getareaeventlistgners(){
  
document.querySelectorAll('.all').forEach(card=>{
card .addEventListener('click',async function(){
  // console.log('click');
var atrr=card.getAttribute('Areaattr');

var get=new getAreaid(atrr);
var get_id=await get.getbyid();
console.log(get_id);

var views=new viewareaid();
views.viewbyid(get_id);
menu.classList.add('d-none');
view.classList.add('d-none');
searchbyname.classList.add('d-none')
details.classList.add('d-none');
Area.classList.add('d-none');
categ.classList.add('d-none');idcateg.classList.add('d-none');
idArea.classList.remove('d-none');
contactus.classList.add('d-none');
submit.classList.add('d-none');menu.classList.add('d-none');
})

})


}

}
class getAreaid{
  constructor(strArea){this.strArea=strArea;}
  getApi(){
return `https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.strArea}`
  }

async getbyid(){

  var response=await fetch(this.getApi());
  var data=await response.json();
  console.log(data.meals);
  return data.meals;

}

}
class viewareaid{
constructor(){

}

viewbyid(meals){
  var html='';
meals.forEach(meals=>{
html+=`

<div class="col">
                  <div class="image-containers nn " lis="${meals.idMeal}">
                    <img src="${meals.strMealThumb}" alt="Chicken" class="img-fluid">
                    <div class="overlay d-flex flex-column justify-content-center align-items-center">
                      <h1>${meals.strMeal}</h1>
                    </div>
                  </div>
                </div>
`
idArea.querySelector('.row').innerHTML=html;
this.EventListenersfrom();
})
}
EventListenersfrom(){
  document.querySelectorAll('.nn').forEach(card=>{
    card.addEventListener('click',async ()=>{
  console.log('click');
  var mealId=card.getAttribute('lis');
      console.log(mealId);
      var meall=new mealbyid(mealId);
var ggg=await meall.getallwithid();
console.log(ggg);
var g=new viewmealid();
g.getbyid(ggg);
menu.classList.add('d-none');
Ingredientsid.classList.add('d-none');
// Ingredients.classList.add('d-none');
// idArea.classList.add('d-none');
idingre.classList.add('d-none');
    view.classList.add('d-none');
    searchbyname.classList.add('d-none');
    // category.classList.add('d-none');
    categ.classList.add('d-none');
    // Areaid.classList.add('d-none');
    Area.classList.add('d-none');
    contactus.classList.add('d-none');
    submit.classList.add('d-none');
    idArea.classList.add('d-none')
    details.classList.remove('d-none');
  //     menu.classList.add('d-none');
  // Ingredientsid.classList.add('d-none');
  // Ingredients.classList.add('d-none');
  // idArea.classList.add('d-none');
  // idingre.classList.add('d-none');
  //       view.classList.add('d-none');
  //       searchbyname.classList.add('d-none');
  //       category.classList.add('d-none');
  //       categ.classList.add('d-none');
  //       Areaid.classList.add('d-none');
  //       Area.classList.add('d-none');
  //       contactus.classList.add('d-none');
  //       submit.classList.add('d-none');
        
  //       details.classList.remove('d-none');
    })
  })
  }

}




Ingredients.addEventListener('click',async function(){
  view.classList.add('d-none');
    searchbyname.classList.add('d-none')
    details.classList.add('d-none');
    Area.classList.add('d-none');idingre.classList.add('d-none');
    categ.classList.add('d-none');idcateg.classList.add('d-none');
    Ingredientsid.classList.remove('d-none');
    idArea.classList.add('d-none');
    contactus.classList.add('d-none');
    submit.classList.add('d-none');menu.classList.add('d-none');
    var getter=new getIngredients();
    var ingetter=await getter.fetchIngredients();
    // console.log(ingetter);
  var v=new viewIngredients();
  v.view(ingetter);


})


class getIngredients{
getApi(){
  return `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
}
async fetchIngredients(){
var response=await fetch(this.getApi())
var data=await response.json();
// console.log(data.meals);  
return data.meals;

}

}
class viewIngredients{
  constructor(){

  }
  view(meals){
    var html='';
    meals.forEach(
      meals=>{
        if(meals.strDescription){
           meal=meals.strIngredient;
        html+=`
        <div class="col">
          <div class="d-flex flex-column justify-content-center align-items-center text-white cl" ingredient="${meals.strIngredient}" meal-id="${meal.idMeal}">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
      <div class="text-center">
               <h1>${meals.strIngredient}
                </h1>
                <p>${meals.strDescription.split(' ').slice(0, 21).join(' ')}</p>

        </div>  
                  </div>
              </div>
        
        `
      }}
    )
  Ingredientsid.querySelector('.row').innerHTML=html;
this.EventListeners()
  }
EventListeners() {
    document.querySelectorAll('.cl').forEach(card => {
      card.addEventListener('click',async function() {
        // console.log('click');
        contactus.classList.add('d-none');menu.classList.add('d-none');
        submit.classList.add('d-none');
        view.classList.add('d-none');
        searchbyname.classList.add('d-none')
        details.classList.add('d-none');
        Area.classList.add('d-none');
        categ.classList.add('d-none');
        Ingredientsid.classList.add('d-none');
        idingre.classList.remove('d-none');
        var Ingredientss = card.getAttribute('ingredient');
        // console.log(Ingredientss);
        var gett=new getIngredientsbyid(Ingredientss);

        // console.log(gett);
    var byid= await gett.getbyid();
var ingredientstr=new viewIngredientswithid();
 var gg= ingredientstr.view(byid);
console.log(gg);


      });

    });
    // idingre.querySelector('.row').innerHTML=html;
    // console.log(idingre.querySelector('.row').innerHTML=html);

  }

}



class getIngredientsbyid{
  constructor(strIngredient){this.strIngredient=strIngredient}
getApi(){
  return `https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.strIngredient}`
}
async getbyid(){
var response =await fetch(this.getApi());
var data=await response.json();
// console.log(data.meals);
return data.meals;
}

}
class viewIngredientswithid{
  constructor(){}
  view(meals){

  var html='';
 meals.forEach(meal=>

  {
    html+=`
    <div class="col">
                  <div class="image-containers lm" meal-id="${meal.idMeal}">
                    <img src="${meal.strMealThumb}" alt="Chicken" class="img-fluid" >
                    <div class="overlay d-flex flex-column justify-content-center align-items-center">
                      <h1>${meal.strMeal}</h1>
                    </div>
                  </div>
                </div>
    `
  }
 )

idingre.querySelector('.row').innerHTML=html;
this.EventListenersfrom();
  }
  EventListenersfrom(){
    document.querySelectorAll('.lm').forEach(card=>{
      card.addEventListener('click',async ()=>{
    console.log('click');
    var mealId=card.getAttribute('meal-id');
        console.log(mealId);
        var meall=new mealbyid(mealId);
var ggg=await meall.getallwithid();
console.log(ggg);
 var g=new viewmealid();
 g.getbyid(ggg);
 menu.classList.add('d-none');
Ingredientsid.classList.add('d-none');
// Ingredients.classList.add('d-none');
// idArea.classList.add('d-none');
idingre.classList.add('d-none');
      view.classList.add('d-none');
      searchbyname.classList.add('d-none');
      // category.classList.add('d-none');
      categ.classList.add('d-none');
      // Areaid.classList.add('d-none');
      Area.classList.add('d-none');
      contactus.classList.add('d-none');
      submit.classList.add('d-none');
      
      details.classList.remove('d-none');
    //     menu.classList.add('d-none');
    // Ingredientsid.classList.add('d-none');
    // Ingredients.classList.add('d-none');
    // idArea.classList.add('d-none');
    // idingre.classList.add('d-none');
    //       view.classList.add('d-none');
    //       searchbyname.classList.add('d-none');
    //       category.classList.add('d-none');
    //       categ.classList.add('d-none');
    //       Areaid.classList.add('d-none');
    //       Area.classList.add('d-none');
    //       contactus.classList.add('d-none');
    //       submit.classList.add('d-none');
          
    //       details.classList.remove('d-none');
      })
    })
    }
    
}

  category.addEventListener('click',async function(){
    // console.log('hello');
    contactus.classList.add('d-none');
    submit.classList.add('d-none');
    view.classList.add('d-none');
    searchbyname.classList.add('d-none')
    details.classList.add('d-none');
    Area.classList.add('d-none');
    categ.classList.remove('d-none');
    idcateg.classList.add('d-none');
    idingre.classList.add('d-none');menu.classList.add('d-none');
var g=new categories();
 geter=await g.viewallc();
// console.log('gets',geter);
var categview=new viewcategories();
var getter=categview.display(geter);
// console.log(getter);
  })
class categories{
  constructor(){}
 getApi(){return `https://www.themealdb.com/api/json/v1/1/categories.php`}
async viewallc(){
  var response=await fetch(this.getApi());
  var data=await response.json();
 
//  console.log(data.categories);
return data.categories;

}



}
class viewcategories{
  constructor(){}
  display(categories){
var html='';
categories.forEach(category=>{
html+=`

 <div class="col">
            <div class="image-container cat" categoryattr="${category.strCategory}">
                  <img src="${category. strCategoryThumb}" alt="Chicken" class="img-fluid">
        <div class="overlay">
                 <h1>${category.strCategory}</h1>
                     <p>${category.strCategoryDescription}</p>
          </div>  
                    </div>
                </div>
`
categ.querySelector('.row').innerHTML=html;
this.EventListeners();
}) 
// strCategory

  }
  EventListeners() {
    document.querySelectorAll('.cat').forEach(card => {
      card.addEventListener('click',async function() {
// console.log('click');
var attr=card.getAttribute('categoryattr');
// console.log(attr);
var getcatid=new getcategoryid(attr);
var gettt=await getcatid.getdata();
    //  console.log(gettt);
    var gets=new viewcatid();
    gets.view(gettt);
    // console.log(gets.view(gettt))
    view.classList.add('d-none');
    searchbyname.classList.add('d-none')
    details.classList.add('d-none');
    Area.classList.add('d-none');
    categ.classList.add('d-none');
    idcateg.classList.remove("d-none");
     contactus.classList.add('d-none');
submit.classList.add('d-none');
    })})
  // this.gete()
  
  }



  
}
class getcategoryid{
constructor(strCategory){
this.strCategory=strCategory;

}
getApi(){
  return `http://www.themealdb.com/api/json/v1/1/filter.php?c=${this.strCategory}`;
}
 async getdata(){
  var response  =await fetch(this.getApi());
  var data =await response.json();
  // console.log(data.meals);
 
 
  return data.meals;
  
 
}
}
class viewcatid{
  constructor(){

  }
  view(meals){
    var html='';
    meals.forEach(meals=>{
      html+=`
       <div class="col">
                  <div class="image-containers mmm" cardid="${meals.idMeal}">
                    <img src="${meals.strMealThumb}" alt="Chicken" class="img-fluid " >
                    <div class="overlay d-flex flex-column justify-content-center align-items-center">
                      <h1>${meals.strMeal}</h1>
                    </div>
                  </div>
                </div>
      `
    })

    idcateg.querySelector('.row').innerHTML=html;
    this.gete();
  }
  gete(){
    // console.log(document.querySelectorAll('.row .mmm'));
    document.querySelectorAll('.mmm').forEach(card=>{
      card.addEventListener('click',async ()=>{
        console.log('click');
        var ll=card.getAttribute('cardid')
        console.log(ll);
var meall=new mealbyid(ll);
var ggg=await meall.getallwithid();
console.log(ggg);
 var g=new viewmealid();
 g.getbyid(ggg);
 menu.classList.add('d-none');
Ingredientsid.classList.add('d-none');
// Ingredients.classList.add('d-none');
// idArea.classList.add('d-none');
idingre.classList.add('d-none');
      view.classList.add('d-none');
      searchbyname.classList.add('d-none');
      // category.classList.add('d-none');
      categ.classList.add('d-none');
      // Areaid.classList.add('d-none');
      Area.classList.add('d-none');
      contactus.classList.add('d-none');
      submit.classList.add('d-none');
      idcateg.classList.add('d-none');
      details.classList.remove('d-none');
        // var mealDetails = new mealbyid(ll);

        // var gg=mealDetails.getApi(ll);
    
        // var  detailss = await mealDetails.getallwithid();
        // console.log('mmmmmm',detailss);
        // var views=new viewmealid();
        
      })
    })
    }
}
class mealbyid{
  constructor(
id
  ){this.id=id}
   getApi(){
      return `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`;
    
  }
async  getallwithid(){
    var response=await fetch(this. getApi());
    var data=await response.json();
    return data.meals;
  }
}
class viewer{
  constructor(){}
  getApiviewer(){
    return `https://www.themealdb.com/api/json/v1/1/search.php?s`
  }
async viewall(){
  var response=await fetch(this.getApiviewer());
  var data =await response.json();
  
  // console.log(data.meals);
  return data.meals;
  // var data
}
}



class allimages{
constructor(meals){
  this.meals=meals;

}
 gets(){

//   var allimage=[...this.strMealThumb]
//  console.log(allimage);
//   return allimage;
let html='';
this.meals.forEach(meal => {
  html +=`
  <div class="col">
      <div class="card card " data-meal-id="${meal.idMeal}">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <h1 class="hover-title">${meal.strMeal}</h1>
      </div>
    </div>
  `
});
view.querySelector('.row').innerHTML=html;
this.gete()
}

gete(){
  // console.log(document.querySelectorAll('.row .mmm'));
  document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click',async ()=>{
      console.log('click');
      var ll=card.getAttribute('data-meal-id')
      console.log(ll);
var meall=new mealbyid(ll);
var ggg=await meall.getallwithid();
console.log(ggg);
var g=new viewmealid();
g.getbyid(ggg);
menu.classList.add('d-none');
Ingredientsid.classList.add('d-none');
// Ingredients.classList.add('d-none');
// idArea.classList.add('d-none');
idingre.classList.add('d-none');
    view.classList.add('d-none');
    searchbyname.classList.add('d-none');
    // category.classList.add('d-none');
    categ.classList.add('d-none');
    // Areaid.classList.add('d-none');
    Area.classList.add('d-none');
    contactus.classList.add('d-none');
    submit.classList.add('d-none');
    idcateg.classList.add('d-none');
    details.classList.remove('d-none');
      // var mealDetails = new mealbyid(ll);

      // var gg=mealDetails.getApi(ll);
  
      // var  detailss = await mealDetails.getallwithid();
      // console.log('mmmmmm',detailss);
      // var views=new viewmealid();
      
    })
  })
  }
}




class getwithfullname{
constructor(){
// this.searchname=allsearchesname[0].strMealThumb;

}
async getmealfullname(meals){
  let html='';
meals.forEach(meal=>{
  html+=`
  
    <div class="col">
      <div class="card "data-meal-id="${meal.idMeal}">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <h1 class="hover-title">${meal.strMeal}</h1>
      </div>
    </div>
  `
})
menu.querySelector('.row').innerHTML=html;
this.gete();
}
gete(){
  // console.log(document.querySelectorAll('.row .mmm'));
  document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click',async ()=>{
      console.log('click');
      var ll=card.getAttribute('data-meal-id')
      console.log(ll);
var meall=new mealbyid(ll);
var ggg=await meall.getallwithid();
console.log(ggg);
var g=new viewmealid();
g.getbyid(ggg);
menu.classList.add('d-none');
Ingredientsid.classList.add('d-none');
// Ingredients.classList.add('d-none');
// idArea.classList.add('d-none');
idingre.classList.add('d-none');
    view.classList.add('d-none');
    searchbyname.classList.add('d-none');
    // category.classList.add('d-none');
    categ.classList.add('d-none');
    // Areaid.classList.add('d-none');
    Area.classList.add('d-none');
    contactus.classList.add('d-none');
    submit.classList.add('d-none');
    idcateg.classList.add('d-none');
    details.classList.remove('d-none');
      // var mealDetails = new mealbyid(ll);

      // var gg=mealDetails.getApi(ll);
  
      // var  detailss = await mealDetails.getallwithid();
      // console.log('mmmmmm',detailss);
      // var views=new viewmealid();
      
    })
  })
  }
}
var allsearchesname;

searchid.addEventListener('click', function(){
 view.classList.add('d-none');  Area.classList.add('d-none');
 searchbyname.classList.remove('d-none')
 details.classList.add('d-none');categ.classList.add('d-none');
 Ingredientsid.classList.add('d-none');
 idingre.classList.add('d-none');
 idcateg.classList.add('d-none');
 idArea.classList.add('d-none');
 contactus.classList.add('d-none');
submit.classList.add('d-none');
})
searchname.addEventListener('input',async function(){
  // console.log('click');
  var meal=searchname.value;
  // console.log(meal);
  var search=new Quiz(meal);
// console.log(search);
var g= search.getApi();
// console.log(g);
 allsearchesname=await search.getallquestions();
 menu.classList.remove('d-none');
// console.log(allsearchesname);
let allname=new getwithfullname();
allname.getmealfullname(allsearchesname);
})

class Quiz{
  constructor(searchname){

      this.searchname =searchname;
 
  }
  getApi(){
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchname}`;  
  }
async   getallquestions(){
  var response= await  fetch(this.getApi());
  // console.log(response);
  var data=await response.json();
  // console.log(data);
  return data.meals;
  }

}

var oneletter;
// www.themealdb.com/api/json/v1/1/search.php?f=a
searchletter.addEventListener('input',async function(){
  // console.log('hello');
 var test= searchletter.value;
  // let searchlet=new search_letter();
  var firstlet=new search_letter(test);
  // console.log(firstlet);
  menu.classList.remove('d-none');
 oneletter=await firstlet.getbyfirstletter();
//  console.log(get)
var viewlett=new firstlitterview();
viewlett.viewlet(oneletter);
}) 

class search_letter{
  
  constructor(firstletter){
    this.firstletter=firstletter;

  }
  getapi(){
return `https://www.themealdb.com/api/json/v1/1/search.php?f=${this.firstletter}` 

  }
  async getbyfirstletter(){
    var response=await fetch(this.getapi());
  var data=await response.json();
  // console.log(data.meals);
  return data.meals;

  }
}
class firstlitterview{
  constructor(){
 

  }
 async viewlet(meals){
    var html='';
    meals.forEach(meal=>{
html+=`
    <div class="col">
      <div class="card " data-meal-id="${meal.idMeal}">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <h1 class="hover-title">${meal.strMeal}</h1>
      </div>
    </div>
`

    })
    menu.querySelector('.row').innerHTML=html;
    this.gete()
  }
  gete(){
    // console.log(document.querySelectorAll('.row .mmm'));
    document.querySelectorAll('.card').forEach(card=>{
      card.addEventListener('click',async ()=>{
        console.log('click');
        var ll=card.getAttribute('data-meal-id')
        console.log(ll);
  var meall=new mealbyid(ll);
  var ggg=await meall.getallwithid();
  console.log(ggg);
  var g=new viewmealid();
  g.getbyid(ggg);
  menu.classList.add('d-none');
  Ingredientsid.classList.add('d-none');
  // Ingredients.classList.add('d-none');
  // idArea.classList.add('d-none');
  idingre.classList.add('d-none');
      view.classList.add('d-none');
      searchbyname.classList.add('d-none');
      // category.classList.add('d-none');
      categ.classList.add('d-none');
      // Areaid.classList.add('d-none');
      Area.classList.add('d-none');
      contactus.classList.add('d-none');
      submit.classList.add('d-none');
      idcateg.classList.add('d-none');
      details.classList.remove('d-none');
        // var mealDetails = new mealbyid(ll);
  
        // var gg=mealDetails.getApi(ll);
    
        // var  detailss = await mealDetails.getallwithid();
        // console.log('mmmmmm',detailss);
        // var views=new viewmealid();
        
      })
    })
    } 
}
$(".button").on('click', function() {
    $(".slider").css("width", "250px");
    // $(".button").css("transform", "translateX(250px)"); 
    $(".b-ground").css("transform", "translateX(250px)"); 
    $('.button').css("display","none")  
    $('.button-i').css("display","flex")
  
});
  
  $(".button-i").on('click', function() {
    $(".slider").css("width", "0");
    $(".b-ground").css("transform", "translateX(0px)"); 

    $('.button').css("display","flex")  
    $('.button-i').css("display","none")
});
var f_n = document.getElementById('f_n');
var empty1 = document.getElementById('empty1');
var empty2 = document.getElementById('empty2');
var emailform = document.getElementById('emailform');
var phoneform = document.getElementById('phoneform');
var empty3 = document.getElementById('empty3');
var empty4 = document.getElementById('empty4');
var ageform = document.getElementById('ageform');
var empty5 = document.getElementById('empty5');
var empty6 = document.getElementById('empty6');
var passwordform = document.getElementById('passwordform');
var confirmpasswordform = document.getElementById('confirmpasswordform');
var submitButton = document.querySelector('button[type="submit"]');

function validateInputs(element) {
    var regex = {
        fullname: /^[A-Za-z]+$/,
        email: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
        phone: /^\+?(\d{1,3})?[-. ]?(\(?\d{1,4}?\)?)?[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/,
        age: /^(?:1[01][0-9]|120|[1-9]?[0-9])$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    };

    var id = element.id;
    var value = element.value;

    if (regex[id].test(value) && value !== '') {
        handleMatch(id);
    } else {
        handleNotMatch(id);
    }

    if (id === 'confirmPassword') {
        validateConfirmPassword();
    } else {
        checkAllValid();
    }
}

function handleMatch(id) {
    switch (id) {
        case 'fullname':
            f_n.classList.add('d-none');
            empty1.classList.add('d-none');
            empty2.classList.add('d-none');
            break;
        case 'email':
            emailform.classList.add('d-none');
            empty1.classList.add('d-none');
            empty2.classList.add('d-none');
            break;
        case 'phone':
            phoneform.classList.add('d-none');
            empty3.classList.add('d-none');
            empty4.classList.add('d-none');
            break;
        case 'age':
            ageform.classList.add('d-none');
            empty3.classList.add('d-none');
            empty4.classList.add('d-none');
            break;
        case 'password':
            passwordform.classList.add('d-none');
            empty5.classList.add('d-none');
            empty6.classList.add('d-none');
            break;
    }
    console.log('match');
}

function handleNotMatch(id) {
    switch (id) {
        case 'fullname':
            f_n.classList.remove('d-none');
            empty1.classList.remove('d-none');
            empty2.classList.add('d-none');
            break;
        case 'email':
            emailform.classList.remove('d-none');
            empty1.classList.add('d-none');
            empty2.classList.remove('d-none');
            break;
        case 'phone':
            phoneform.classList.remove('d-none');
            empty3.classList.add('d-none');
            empty4.classList.remove('d-none');
            break;
        case 'age':
            ageform.classList.remove('d-none');
            empty3.classList.remove('d-none');
            empty4.classList.add('d-none');
            break;
        case 'password':
            passwordform.classList.remove('d-none');
            empty5.classList.add('d-flex');
            empty6.classList.remove('d-flex');
            break;
    }
    console.log('not match');
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword && password !== '' && confirmPassword !== '') {
        confirmpasswordform.classList.add('d-none');
        empty5.classList.add('d-none');
        empty6.classList.add('d-none');
        console.log('match');
    } else {
        confirmpasswordform.classList.remove('d-none');
        empty5.classList.remove('d-none');
        empty6.classList.remove('d-none');
        console.log('not match');
    }
    checkAllValid();
}

function checkAllValid() {
    if (
        document.getElementById('fullname').value !== '' &&
        document.getElementById('email').value !== '' &&
        document.getElementById('phone').value !== '' &&
        document.getElementById('age').value !== '' &&
        document.getElementById('password').value !== '' &&
        document.getElementById('confirmPassword').value !== '' &&
        f_n.classList.contains('d-none') &&
        emailform.classList.contains('d-none') &&
        phoneform.classList.contains('d-none') &&
        ageform.classList.contains('d-none') &&
        passwordform.classList.contains('d-none') &&
        confirmpasswordform.classList.contains('d-none')
    ) {
        submitButton.classList.remove('b-c');
        submitButton.style.pointerEvents = 'auto';
    } else {
        submitButton.classList.add('b-c');
        submitButton.style.pointerEvents = 'none';
    }
}

document.getElementById('fullname').addEventListener('input', function () {
    validateInputs(this);
});
document.getElementById('email').addEventListener('input', function () {
    validateInputs(this);
});
document.getElementById('phone').addEventListener('input', function () {
    validateInputs(this);
});
document.getElementById('age').addEventListener('input', function () {
    validateInputs(this);
});
document.getElementById('password').addEventListener('input', function () {
    validateInputs(this);
});
document.getElementById('confirmPassword').addEventListener('input', function () {
    validateInputs(this);
});

var contactus=document.getElementById('contactus');
var contact_us=document.getElementById('contact_us');
var submit=document.getElementById('submit');
contact_us.addEventListener('click',
function(){
  view.classList.add('d-none');  Area.classList.add('d-none');
  searchbyname.classList.add('d-none')
  details.classList.add('d-none');categ.classList.add('d-none');
  Ingredientsid.classList.add('d-none');
  idingre.classList.add('d-none');
  idcateg.classList.add('d-none');
  idArea.classList.add('d-none')
contactus.classList.remove('d-none');
submit.classList.remove('d-none')
menu.classList.add('d-none');

})
