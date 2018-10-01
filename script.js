// const pizzaList = [
//   {'name':'Barmalini', 'consist':'томаты, моцарелла, колбаски, бекон, прошутто котто и пармская ветчина', 'calories': '1020 кКал', 'price': '150 грн'},
//   {'name': 'Бомба', 'consist': 'томаты, моцарелла, пикантная салями, маслины, артишоки, прошутто котто, колбаски, баранина, перепелиные яйца', 'calories': '1237 кКал', 'price': '175 грн'},
//   {'name': 'Pizza di еttore', 'consist': 'томаты, помидоры, тигровые креветки, моцарелла, грибы шиитаке', 'calories': '1020 кКал', 'price': '150 грн'},
//   {'name': 'Чёрный жемчуг', 'consist': 'томаты, моцарелла, помидоры, сибас, креветки, икра летучей рыбы', 'calories': '945 кКал', 'price': '180 грн'},
//   {'name': 'Кваттро маре', 'consist': 'томаты, моцарелла, тунец, лосось, креветки, морской коктейль из мидий, осьминогов и кальмара, чеснок', 'calories': '987 кКал', 'price': '140 грн'},
//   {'name': 'Фитнес-пицца', 'consist': 'брезаола, сыр грана падано и руккола', 'calories': '798 кКал', 'price': '110 грн'},
//   {'name': 'Пицца йола', 'consist': 'томаты, моцарелла, помидоры черри, молотые анчоусы', 'calories': '978 кКал', 'price': '110 грн'},
//   {'name': 'Карбонара', 'consist': 'моцарелла, ветчина и бекон с соусом карбонара, петрушка', 'calories': '1079 кКал', 'price': '120 грн'},
//   {'name': 'Мексиканская острая пицца', 'consist': 'томаты, мексиканский соус, моцарелла, бекон, помидоры, табаско, орегано', 'calories': '947 кКал', 'price': '130 грн'},
//   {'name': 'Фунги', 'consist': 'грибы, чеснок, зелень, бекон, томаты и моцарелла', 'calories': '986 кКал', 'price': '95 грн'},
//   {'name': 'Мульти-пульти', 'consist': 'прошутто котто, ананас и соус из рикотты', 'calories': '1011 кКал', 'price': '95 грн'},
//   {'name': 'Пепперони', 'consist': 'томаты, моцарелла и салями «Милано» ', 'calories': '854 кКал', 'price': '105 грн'},
//   {'name': 'Бьянка „белая“ пицца', 'consist': 'бекон, моцарелла амбрози, зелёный лук, яичный желток и трюфельное масло', 'calories': '836 кКал', 'price': '95 грн'},
//   {'name': 'Кваттро формаджи «четыре сыра»', 'consist': 'моцарелла, горгонзола, сыр грана падано, таледжио, томаты', 'calories': '912 кКал', 'price': '95 грн'},
//   {'name': 'Прошутто фунги', 'consist': 'томаты, моцарелла, прошутто котто и шампиньоны', 'calories': '899 кКал', 'price': '95 грн'},
//   {'name': 'Капричеза', 'consist': 'томаты, моцарелла, прошутто котто, шампиньоны, артишоки, маслины', 'calories': '963 кКал', 'price': '110 грн'},
//   {'name': 'Кампанья', 'consist': 'томаты, моцарелла, пармская ветчина, белые грибы и колбаски', 'calories': '921 кКал', 'price': '130 грн'},
//   {'name': 'Кальцоне', 'consist': 'ветчина, грибы, артишоки', 'calories': '915 кКал', 'price': '125 грн'},
//   {'name': 'Кальцоне аперто', 'consist': 'томаты, моцарелла, деревенские яйца, пармская ветчина и руккола', 'calories': '933 кКал', 'price': '145 грн'},
//   {'name': 'Сальчинбока', 'consist': 'коппа/лосось и маскарпоне/тунец, помидоры и красный лук', 'calories': '936 кКал', 'price': '120 грн'},
// ];

// const pizzaList = [
//   {"name":"Barmalini","calories":"1020 кКал","price":"150 грн","ingredients":[{"томаты":10},{"моцарелла": 25},{"колбаски":25},{"бекон":30},{"прошутто котто":12},{"пармская ветчина":22}]},
//   {"name":"Бомба","calories":"1237 кКал","price":"175 грн","ingredients":[{"томаты":10},{"моцарелла":25},{"пикантная салями":22.5},{"маслины":14},{"артишоки":12},{"прошутто котто":12},{"колбаски":25},{"баранина":30},{"перепелиные яйца":18.5}]},
//   {"name":"Pizza di еttore","calories":"1020 кКал","price":"150 грн","ingredients":[{"томаты":10},{"помидоры":8},{"тигровые креветки":35},{"моцарелла":25},{"грибы шиитаке":22}]},
//   {"name":"Чёрный жемчуг","calories":"945 кКал","price":"180 грн","ingredients":[{"томаты":10},{"моцарелла":25},{"помидоры":8},{"сибас":30},{"креветки":29},{"икра летучей рыбы":26}]},
//   {"name":"Кваттро маре","calories":"987 кКал","price":"140 грн","ingredients":[{"томаты":10},{"моцарелла":25},{"тунец":24},{"лосось":26},{"креветки":29},{"морской коктейль из мидий, осьминогов и кальмара":35},{"чеснок":2}]},
//   {"name":"Фитнес-пицца","calories":"798 кКал","price":"110 грн","ingredients":[{"брезаола":20},{"сыр грана падано":23},{"руккола":22}]},
//   {"name":"Пицца йола","calories":"978 кКал","price":"110 грн","ingredients":[{"томаты":10},{"моцарелла":25},{"помидоры черри":16},{"молотые анчоусы":23}]},
//   {"name":"Карбонара","calories":"1079 кКал","price":"120 грн","ingredients":[{"моцарелла":25},{"ветчина":25},{"бекон с соусом карбонара":31.5},{"петрушка":5}]},
//   {"name":"Мексиканская острая пицца","calories":"947 кКал","price":"130 грн","ingredients":[{"томаты":10},{"мексиканский соус":10},{"моцарелла":25},{"бекон":30},{"помидоры":8},{"табаско":8},{"орегано":12}]},
//   {"name":"Фунги","calories":"986 кКал","price":"95 грн","ingredients":[{"грибы":15},{"чеснок":2},{"зелень":5},{"бекон":30},{"томаты":10},{"моцарелла":25}]},
//   {"name":"Мульти-пульти","calories":"1011 кКал","price":"95 грн","ingredients":[{"прошутто котто":12},{"ананас":16},{"соус из рикотты":26}]},
//   {"name":"Пепперони","calories":"854 кКал","price":"105 грн","ingredients":[{"томаты":10},{"моцарелла":25},{"салями «Милано» ":33}]},
//   {"name":"Бьянка „белая“ пицца","calories":"836 кКал","price":"95 грн","ingredients":[{"бекон":30},{"моцарелла амбрози":27}, {"зелёный лук":9},{"яичный желток":5},{"трюфельное масло":30}]},
//   {"name":"Кваттро формаджи «четыре сыра»","calories":"912 кКал","price":"95 грн","ingredients":[{"моцарелла":25},{"горгонзола":30},{"сыр грана падано":23},{"таледжио":39},{"томаты":10}]},
//   {"name":"Прошутто фунги","calories":"899 кКал","price":"95 грн","ingredients":[{"томаты":10},{"моцарелла":25},{"прошутто котто":12},{"шампиньоны":23}]},
//   {"name":"Капричеза","calories":"963 кКал","price":"110 грн","ingredients":[{"томаты":10},{"моцарелла":25},{"прошутто котто":12},{"шампиньоны":23},{"артишоки":12},{"маслины":14}]},
//   {"name":"Кампанья","calories":"921 кКал","price":"130 грн","ingredients":[{"томаты":10},{"моцарелла":25},{"пармская ветчина":22},{"белые грибы":28},{"колбаски":25}]},
//   {"name":"Кальцоне","calories":"915 кКал","price":"125 грн","ingredients":[{"ветчина":25},{"грибы":15},{"артишоки":12}]},
//   {"name":"Кальцоне аперто","calories":"933 кКал","price":"145 грн","ingredients":[{"томаты":10},{"моцарелла":25},{"деревенские яйца":12},{"пармская ветчина":22},{"руккола":22}]},
//   {"name":"Сальчинбока","calories":"936 кКал","price":"120 грн","ingredients":[{"коппа/лосось":25},{"маскарпоне/тунец":33},{"помидоры":8},{"красный лук":2}]}];

let pizzaList = [
  {"name":"Barmalini","calories":"1020 кКал","price":"150 грн","ingredients":["томаты","моцарелла","колбаски","бекон","прошутто котто","пармская ветчина"]},
  {"name":"Бомба","calories":"1237 кКал","price":"175 грн","ingredients":["томаты","моцарелла","пикантная салями","маслины","артишоки","прошутто котто","колбаски","баранина","перепелиные яйца"]},
  {"name":"Pizza di еttore","calories":"1020 кКал","price":"150 грн","ingredients":["томаты","помидоры","тигровые креветки","моцарелла","грибы шиитаке"]},
  {"name":"Чёрный жемчуг","calories":"945 кКал","price":"180 грн","ingredients":["томаты","моцарелла","помидоры","сибас","креветки","икра летучей рыбы"]},
  {"name":"Кваттро маре","calories":"987 кКал","price":"140 грн","ingredients":["томаты","моцарелла","тунец","лосось","креветки","морской коктейль из мидий, осьминогов и кальмара","чеснок"]},
  {"name":"Фитнес-пицца","calories":"798 кКал","price":"110 грн","ingredients":["брезаола","сыр грана падано","руккола"]},
  {"name":"Пицца йола","calories":"978 кКал","price":"110 грн","ingredients":["томаты","моцарелла","помидоры черри","молотые анчоусы"]},
  {"name":"Карбонара","calories":"1079 кКал","price":"120 грн","ingredients":["моцарелла","ветчина","бекон с соусом карбонара","петрушка"]},
  {"name":"Мексиканская острая пицца","calories":"947 кКал","price":"130 грн","ingredients":["томаты","мексиканский соус","моцарелла","бекон","помидоры","табаско","орегано"]},
  {"name":"Фунги","calories":"986 кКал","price":"98 грн","ingredients":["грибы","чеснок","зелень","бекон","томаты","моцарелла"]},
  {"name":"Мульти-пульти","calories":"1011 кКал","price":"90 грн","ingredients":["прошутто котто","ананас","соус из рикотты"]},
  {"name":"Пепперони","calories":"854 кКал","price":"105 грн","ingredients":["томаты","моцарелла","салями «Милано» "]},
  {"name":"Бьянка „белая“ пицца","calories":"836 кКал","price":"95 грн","ingredients":["бекон","моцарелла амбрози","зелёный лук","яичный желток","трюфельное масло"]},
  {"name":"Кваттро формаджи «четыре сыра»","calories":"912 кКал","price":"95 грн","ingredients":["моцарелла","горгонзола","сыр грана падано","таледжио","томаты"]},
  {"name":"Прошутто фунги","calories":"899 кКал","price":"95 грн","ingredients":["томаты","моцарелла","прошутто котто","шампиньоны"]},
  {"name":"Капричеза","calories":"963 кКал","price":"110 грн","ingredients":["томаты","моцарелла","прошутто котто","шампиньоны","артишоки","маслины"]},
  {"name":"Кампанья","calories":"921 кКал","price":"130 грн","ingredients":["томаты","моцарелла","пармская ветчина","белые грибы","колбаски"]},
  {"name":"Кальцоне","calories":"915 кКал","price":"125 грн","ingredients":["ветчина","грибы","артишоки"]},
  {"name":"Кальцоне аперто","calories":"933 кКал","price":"145 грн","ingredients":["томаты","моцарелла","деревенские яйца","пармская ветчина","руккола"]},
  {"name":"Сальчинбока","calories":"936 кКал","price":"120 грн","ingredients":["коппа/лосось","маскарпоне/тунец","помидоры","красный лук"]}];

// function changeIngredients (arr) {
//   arr.forEach((item)=>{
//     item.ingredients = item.consist.split(/,\s|\sи\s/);
//     delete item.consist
//   });
//   return JSON.stringify(arr);
// }

// console.log(changeIngredients(pizzaList));

// const ingredientsList = ["ананас", "артишоки", "баранина", "бекон", "бекон с соусом карбонара", "белые грибы", "брезаола", "ветчина", "горгонзола", "грибы", "грибы шиитаке", "деревенские яйца", "зелень", "зелёный лук", "икра летучей рыбы", "колбаски", "коппа/лосось", "красный лук", "креветки", "лосось", "маскарпоне/тунец", "маслины", "мексиканский соус", "молотые анчоусы", "морской коктейль из мидий, осьминогов и кальмара", "моцарелла", "моцарелла амбрози", "орегано",  "пармская ветчина", "перепелиные яйца", "петрушка", "пикантная салями", "помидоры", "помидоры черри", "прошутто котто", "руккола", "салями «Милано» ", "сибас", "соус из рикотты", "сыр грана падано", "табаско", "таледжио", "тигровые креветки", "томаты", "трюфельное масло", "тунец", "чеснок", "шампиньоны", "яичный желток"];
const ingredientsList = [{"ingredient":"ананас","price":"16","calories":"112"},{"ingredient":"артишоки","price":"12","calories":"84"},{"ingredient":"баранина","price":"30","calories":"210"},{"ingredient":"бекон","price":"30","calories":"210"},{"ingredient":"бекон с соусом карбонара","price":"31.5","calories":"220.5"},{"ingredient":"белые грибы","price":"28","calories":"196"},{"ingredient":"брезаола","price":"20","calories":"140"},{"ingredient":"ветчина","price":"25","calories":"175"},{"ingredient":"горгонзола","price":"30","calories":"210"},{"ingredient":"грибы","price":"15","calories":"105"},{"ingredient":"грибы шиитаке","price":"22","calories":"154"},{"ingredient":"деревенские яйца","price":"12","calories":"84"},{"ingredient":"зелень","price":"5","calories":"35"},{"ingredient":"зелёный лук","price":"9","calories":"63"},{"ingredient":"икра летучей рыбы","price":"26","calories":"182"},{"ingredient":"колбаски","price":"25","calories":"175"},{"ingredient":"коппа/лосось","price":"25","calories":"175"},{"ingredient":"красный лук","price":"2","calories":"14"},{"ingredient":"креветки","price":"29","calories":"203"},{"ingredient":"лосось","price":"26","calories":"182"},{"ingredient":"маскарпоне/тунец","price":"33","calories":"231"},{"ingredient":"маслины","price":"14","calories":"98"},{"ingredient":"мексиканский соус","price":"10","calories":"70"},{"ingredient":"молотые анчоусы","price":"23","calories":"161"},{"ingredient":"морской коктейль из мидий, осьминогов и кальмара","price":"35","calories":"245"},{"ingredient":"моцарелла","price":"25","calories":"175"},{"ingredient":"моцарелла амбрози","price":"27","calories":"189"},{"ingredient":"орегано","price":"12","calories":"84"},{"ingredient":"пармская ветчина","price":"22","calories":"154"},{"ingredient":"перепелиные яйца","price":"18.5","calories":"129.5"},{"ingredient":"петрушка","price":"5","calories":"35"},{"ingredient":"пикантная салями","price":"22.5","calories":"157.5"},{"ingredient":"помидоры","price":"8","calories":"56"},{"ingredient":"помидоры черри","price":"16","calories":"112"},{"ingredient":"прошутто котто","price":"12","calories":"84"},{"ingredient":"руккола","price":"22","calories":"154"},{"ingredient":"салями «Милано» ","price":"33","calories":"231"},{"ingredient":"сибас","price":"30","calories":"210"},{"ingredient":"соус из рикотты","price":"26","calories":"182"},{"ingredient":"сыр грана падано","price":"23","calories":"161"},{"ingredient":"табаско","price":"8","calories":"56"},{"ingredient":"таледжио","price":"39","calories":"273"},{"ingredient":"тигровые креветки","price":"35","calories":"245"},{"ingredient":"томаты","price":"10","calories":"70"},{"ingredient":"трюфельное масло","price":"30","calories":"210"},{"ingredient":"тунец","price":"24","calories":"168"},{"ingredient":"чеснок","price":"2","calories":"14"},{"ingredient":"шампиньоны","price":"23","calories":"161"},{"ingredient":"яичный желток","price":"5","calories":"35"}]


// const fullIngredientList = ingredientsList.map((item)=> {
//   let data;
//   pizzaList.forEach((a)=> {
//     a.ingredients.forEach((b)=> {
//       if (typeof b[item] != "undefined") data = b[item];
//     })
//   })
//   return {"ingredient": `${item}`, "price": `${data}`,"calories": `${data*7}` }
// })
// console.log(JSON.stringify(fullIngredientList));

// function checkIngredients (arr) {
//   const ingredientsList = arr.map((obj)=>obj.consist.split(/,\s|\sи\s/));
//   const obj = {};
//   ingredientsList.forEach((item)=>{
//     item.forEach((product)=>obj[product] = true)
//   });
//   const array = Object.keys(obj);

//   return array.sort();
// }
// console.log(checkIngredients(pizzaList));


function addHeader () {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = 'Итальянская пицца <br> Попробуй кусочек Италии';
  document.body.appendChild(header);

}

addHeader();

function addChangeInput ( ) {
  const label = document.createElement('label');
  label.innerHTML = 'Нажмите, чтобы изменить отображение';
  label.htmlFor = 'input';
  // const span = document.createElement('span');
  // span.innerHTML = 'Нажмите, чтобы изменить отображение';
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.className = 'input';
  input.id = 'input';
  document.body.appendChild(input);
  document.body.appendChild(label);
}

addChangeInput();

function createIngredientsList (arr) {
  let span = '';
  for (let i = 0; i < arr.length-1; ++i) {
    span += `<span class="info-span-ingredients">${arr[i]}</span>, `;
  }
  span = span.slice(0, span.length-2) + ` и <span class="info-span-ingredients">${arr[arr.length-1]}</span>` ;
  return span
}

function addPizzaGrid (arr) {
  // console.log(arr);
  // const container = document.querySelector('.container-pizza-grid');
  // if (container) {
  //   container.remove();
  // }

  // проверка есть ли уже контейнер?
  const containerPizzaGrid = document.createElement('div');
  containerPizzaGrid.className = 'container-pizza-grid';
  if (!arr.length) {
    // containerPizzaGrid.innerHTML = 'По данному фильтру готовая пицца не найдена =( <br> Давайте ...';
    containerPizzaGrid.innerHTML = 'Из данных ингредиентов в нашем меню нет пиццы =( <br> Давайте вместе создадим пиццу по Вашему вкусу в <br><span class="constructor-pizza"><a href="\" target="_blank">Конструкторе пиццы</a></span>';
    // придумать что-то интересное
  }
  for (let obj of arr) {
    const pizza = document.createElement('div');
    pizza.className = 'pizza-grid';
    pizza.innerHTML = `<img src='pizza-1.jpg' class='pizza-photo-grid' width='250' height='250' alt='tasty pizza'>`;
    const pizzaInfo = document.createElement('div');
    pizzaInfo.className = 'pizza-info';
    pizzaInfo.innerHTML = `<p class='name'><span class='info left'>Название</span><span class='info right'>${obj.name}</span></p>
    <p class='consist'><span class='info left'>Состав</span><span class='info right'>${createIngredientsList(obj.ingredients)}</span></p>
    <p class='calories'><span class='info left'>Калории</span><span class='info right'>${obj.calories}</span></p>
    <p class='price'><span class='info left'>Цена</span><span class='info right'>${obj.price}</span></p>`;
    pizza.appendChild(pizzaInfo);
    containerPizzaGrid.appendChild(pizza);
  }

  document.body.appendChild(containerPizzaGrid);

}

addPizzaGrid(pizzaList);

function addPizzaList (arr) {
  
  const containerPizzaList = document.createElement('div');
  containerPizzaList.className = 'container-pizza-list';
  const parentUl = document.createElement('ul');
  parentUl.className = 'ul-pizza-list';
  parentUl.innerHTML = 'Вашему вниманию список пицц:';
  for (let obj of arr) {
    const childLiPizza = document.createElement('li');
    childLiPizza.className = 'li-pizza-item';
    childLiPizza.innerHTML = `<img src='pizza-1.jpg' class='pizza-photo-list' width='20' height='20' alt='tasty pizza'>${obj.name}, ${createIngredientsList(obj.ingredients)}, ${obj.calories}, ${obj.price}`;
    parentUl.appendChild(childLiPizza);
  }
  containerPizzaList.appendChild(parentUl);
  document.body.appendChild(containerPizzaList);
}

addPizzaList(pizzaList);

function sortArrayOfPizza (event) {
  const target = event.target;
  let sortingCriterion;
  if (target.classList.contains('btn-sort-by-price')) {
    sortingCriterion = 'price';
  } else if (target.classList.contains('btn-sort-by-calories')) {
    sortingCriterion = 'calories';
  }
  return pizzaList.sort((a,b)=> { 
    if (target.classList.contains('up')) {
      return a[sortingCriterion].match(/\d+/) - b[sortingCriterion].match(/\d+/)
    } else if (target.classList.contains('down')) {
      return b[sortingCriterion].match(/\d+/) - a[sortingCriterion].match(/\d+/)
    }
  });
}


// ИЗМЕНИТЬ НИЖЕ !! СДЕЛАТЬ НОРМАЛЬНЫЙ ОБРАБОТЧИК СОБЫТИЯ
document.querySelector('.container-sort-button').addEventListener('click', function (event) {
  const containerPizzaGrid = document.getElementsByClassName('container-pizza-grid')[0];
  containerPizzaGrid.parentElement.removeChild(containerPizzaGrid);
  const containerPizzaList = document.getElementsByClassName('container-pizza-list')[0];
  containerPizzaList.parentElement.removeChild(containerPizzaList);
  
  addPizzaGrid(sortArrayOfPizza(event));
  addPizzaList(sortArrayOfPizza(event));
});

function createFiltrationAside (arr) {
  // массив здесь не нужен в параметре??
  const aside = document.createElement('aside');
  aside.className = 'aside filter';
  aside.innerHTML = 'Фильтрация по ингредиентам<br>';
  const inputSearchIngredient = document.createElement('input');
  inputSearchIngredient.className = 'input-search-ingredient';
  inputSearchIngredient.placeholder = 'Введите имя ингредиента';
  const ulfilteredIngredients = document.createElement('ul');
  ulfilteredIngredients.className = 'ul-filtered-ingredients hidden';
  ulfilteredIngredients.innerHTML = 'Отфильтровано по:';
  const ulIngredientsList = document.createElement('ul');
  ulIngredientsList.className = 'ul-ingredients-list';
  aside.appendChild(ulfilteredIngredients);
  aside.appendChild(inputSearchIngredient);
  aside.appendChild(ulIngredientsList);
  document.body.insertBefore(aside, document.getElementsByClassName('container-pizza-grid')[0]);
}

createFiltrationAside();

function searchIngredients (event) {
  // console.log('enter');
  const input = event.target;
  const inputText = input.value;
  if (!inputText) return false;
  const result = [];
  const liFilteredIngredientsList = Array.from(document.getElementsByClassName('li-filtered-ingredients')); 
  const filteredIngredientsArray = liFilteredIngredientsList.map((item)=>item.innerHTML);
// console.log(filteredIngredientsArray, 'filteredIngredientsArray');
// console.log(liFilteredIngredientsList, 'liFilteredIngredientsList');
// console.log(filteredIngredientsArray, 'filteredIngredientsArray');
  const arrayIncludesValue = ingredientsList.forEach((item)=>{
    if (item.ingredient.includes(inputText) && !filteredIngredientsArray.includes(item.ingredient)) {
      result.push(item.ingredient)
    } 
  });
  console.log(result);
  return result
};

function addSearchedIngredients (arr) {
const ulIngredientsList = document.getElementsByClassName('ul-ingredients-list')[0];
ulIngredientsList.innerHTML = '';
if (!arr) return false;
for (let ingredient of arr) {
  ulIngredientsList.innerHTML += `<li class="li-searched-ingredient"><label class="label-searched-ingredient"><input type="checkbox" class="input-checkbox-searched-ingredient" name="searched-ingredients-list">${ingredient}</label></li>`
}
}

function addSearchedIngredientsList (event) {
  addSearchedIngredients(searchIngredients(event));
}

document.getElementsByClassName('input-search-ingredient')[0].addEventListener('input', addSearchedIngredientsList);
// СРАЗУ ВЫЗОВ В ОБРАБОТЧИКЕ СОБЫТИЙ?

function addFilteredIngredient (event) {
  const input = event.target;
  // if (input.checked != true) return false;
  const ulfilteredIngredients = document.getElementsByClassName('ul-filtered-ingredients')[0];
  // ulfilteredIngredients.innerHTML = 'Отфильтровано по:';
  showFilteredIngredientsList();
  console.log(ulfilteredIngredients.innerHTML, 'ulfilteredIngredients.innerHTML');
  console.log(input.closest('.label-searched-ingredient').textContent, 'input.closest(.label-searched-ingredient).textContent');
  if (~ulfilteredIngredients.innerHTML.search(`>${input.closest('.label-searched-ingredient').textContent}<`)) {
    return false;
  }
  const liFilteredIngredients = document.createElement('li');
  liFilteredIngredients.className = 'li-filtered-ingredients';
  liFilteredIngredients.innerHTML = input.closest('.label-searched-ingredient').textContent;
  ulfilteredIngredients.appendChild(liFilteredIngredients);
  const inputSearchIngredient =  document.getElementsByClassName('input-search-ingredient')[0];
  inputSearchIngredient.value = '';
  inputSearchIngredient.focus();

  // console.log(filterArrayOfPizza());
}

function deleteFilteredIngredient (event) {
  const liFilteredIngredients = event.target;
  // if (!liFilteredIngredients.classList.contains('li-filtered-ingredients')) return false;
  liFilteredIngredients.parentElement.removeChild(liFilteredIngredients);
    hideFilteredIngredientsList()
};

function showFilteredIngredientsList () {
  const ulfilteredIngredients = document.getElementsByClassName('ul-filtered-ingredients')[0];
  ulfilteredIngredients.classList.remove('hidden');
}

function hideFilteredIngredientsList () {
  const ulfilteredIngredients = document.getElementsByClassName('ul-filtered-ingredients')[0];
  if (!ulfilteredIngredients.querySelectorAll('li').length) {
    ulfilteredIngredients.classList.add('hidden');
  }
}

function filterArrayOfPizza () {
  const liFilteredIngredientsList = Array.from(document.getElementsByClassName('li-filtered-ingredients'));
  const filteredArrayOfPizza = pizzaList.filter((obj)=>{
   return liFilteredIngredientsList.every((item)=>{
   return obj.ingredients.includes(item.innerHTML)
   })
  })
return filteredArrayOfPizza
}

function showFilteredPizzaGrid (event) {
  if (event.target.checked == true) {
    addFilteredIngredient(event);
  } else if (event.target.classList.contains('li-filtered-ingredients')) {
    deleteFilteredIngredient(event);
  } else return false

  
  
  // вариант первый: в обработчике событий будет функция добавления li, удаления li
  // а также перестроение сетки
  // тогда решить где должны быть проверки на событие
  // возможно проверки вынести в общую функцию удалив в небольших функциях
  // if (event.target.checked != true && !liFilteredIngredients.classList.contains('li-filtered-ingredients')) return false;
  const containerPizzaGrid = document.getElementsByClassName('container-pizza-grid')[0];
  containerPizzaGrid.parentElement.removeChild(containerPizzaGrid);
  addPizzaGrid(filterArrayOfPizza())
}

document.getElementsByClassName('aside')[0].addEventListener('click', showFilteredPizzaGrid );



// document.getElementsByClassName('ul-filtered-ingredients')[0].addEventListener('click', deleteFilteredIngredient);