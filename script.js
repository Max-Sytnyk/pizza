const pizzaList = [
  {'name': 'Barmalini', 'consist': 'томаты, моцарелла, колбаски, бекон, прошутто котто и пармская ветчина', 'calories': '1020 кКал', 'price': '150 грн'},
  {'name': 'Бомба', 'consist': 'томаты, моцарелла, пикантная салями, маслины, артишоки, прошутто котто, колбаски, баранина, перепелиные яйца', 'calories': '1237 кКал', 'price': '175 грн'},
  {'name': 'Pizza di еttore', 'consist': 'томаты, помидоры, тигровые креветки, моцарелла, грибы шиитаке', 'calories': '1020 кКал', 'price': '150 грн'},
  {'name': 'Чёрный жемчуг', 'consist': 'томаты, моцарелла, помидоры, сибас, креветки, икра летучей рыбы', 'calories': '945 кКал', 'price': '180 грн'},
  {'name': 'Кваттро маре', 'consist': 'томаты, моцарелла, тунец, лосось, креветки, морской коктейль из мидий, осьминогов и кальмара, чеснок', 'calories': '987 кКал', 'price': '140 грн'},
  {'name': 'Фитнес-пицца', 'consist': 'брезаола, сыр грана падано и руккола', 'calories': '798 кКал', 'price': '110 грн'},
  {'name': 'Пицца йола', 'consist': 'томаты, моцарелла, помидоры черри, молотые анчоусы', 'calories': '978 кКал', 'price': '110 грн'},
  {'name': 'Карбонара', 'consist': 'моцарелла, ветчина и бекон с соусом карбонара, петрушка', 'calories': '1079 кКал', 'price': '120 грн'},
  {'name': 'Мексиканская острая пицца', 'consist': 'томаты, мексиканский соус, моцарелла, бекон, помидоры, табаско, орегано', 'calories': '947 кКал', 'price': '130 грн'},
  {'name': 'Фунги', 'consist': 'грибной микс, чеснок, зелень, бекон, томаты и моцарелла', 'calories': '986 кКал', 'price': '95 грн'},
  {'name': 'Мульти-пульти', 'consist': 'прошутто котто, ананас и соус из рикотты', 'calories': '1011 кКал', 'price': '95 грн'},
  {'name': 'Пепперони', 'consist': 'томаты, моцарелла и салями «Милано» ', 'calories': '854 кКал', 'price': '105 грн'},
  {'name': 'Бьянка „белая“ пицца', 'consist': 'бекон, моцарелла амбрози, зелёный лук, яичный желток и трюфельное масло', 'calories': '836 кКал', 'price': '95 грн'},
  {'name': 'Кваттро формаджи «четыре сыра»', 'consist': 'моцарелла, горгонзола, сыр грана падано, таледжио, томаты', 'calories': '912 кКал', 'price': '95 грн'},
  {'name': 'Прошутто фунги', 'consist': 'томаты, моцарелла, прошутто котто и шампиньоны', 'calories': '899 кКал', 'price': '95 грн'},
  {'name': 'Капричеза', 'consist': 'томаты, моцарелла, прошутто котто, шампиньоны, артишоки, маслины', 'calories': '963 кКал', 'price': '110 грн'},
  {'name': 'Кампанья', 'consist': 'томаты, моцарелла, пармская ветчина, белые грибы и колбаски', 'calories': '921 кКал', 'price': '130 грн'},
  {'name': 'Кальцоне', 'consist': 'ветчина, грибы, артишоки', 'calories': '915 кКал', 'price': '125 грн'},
  {'name': 'Кальцоне аперто', 'consist': 'томаты, моцарелла, деревенские яйца, пармская ветчина и руккола', 'calories': '933 кКал', 'price': '145 грн'},
  {'name': 'Сальчинбока', 'consist': 'коппа/лосось и маскарпоне/тунец, помидоры и красный лук', 'calories': '936 кКал', 'price': '120 грн'},
];

// const pizzaList = [{"name":"Barmalini","calories":"1020 кКал","price":"150 грн","ingredients":["томаты","моцарелла","колбаски","бекон","прошутто котто","пармская ветчина"]},{"name":"Бомба","calories":"1237 кКал","price":"175 грн","ingredients":["томаты","моцарелла","пикантная салями","маслины","артишоки","прошутто котто","колбаски","баранина","перепелиные яйца"]},{"name":"Pizza di еttore","calories":"1020 кКал","price":"150 грн","ingredients":["томаты","помидоры","тигровые креветки","моцарелла","грибы шиитаке"]},{"name":"Чёрный жемчуг","calories":"945 кКал","price":"180 грн","ingredients":["томаты","моцарелла","помидоры","сибас","креветки","икра летучей рыбы"]},{"name":"Кваттро маре","calories":"987 кКал","price":"140 грн","ingredients":["томаты","моцарелла","тунец","лосось","креветки","морской коктейль из мидий, осьминогов и кальмара","чеснок"]},{"name":"Фитнес-пицца","calories":"798 кКал","price":"110 грн","ingredients":["брезаола","сыр грана падано","руккола"]},{"name":"Пицца йола","calories":"978 кКал","price":"110 грн","ingredients":["томаты","моцарелла","помидоры черри","молотые анчоусы"]},{"name":"Карбонара","calories":"1079 кКал","price":"120 грн","ingredients":["моцарелла","ветчина","бекон с соусом карбонара","петрушка"]},{"name":"Мексиканская острая пицца","calories":"947 кКал","price":"130 грн","ingredients":["томаты","мексиканский соус","моцарелла","бекон","помидоры","табаско","орегано"]},{"name":"Фунги","calories":"986 кКал","price":"95 грн","ingredients":["грибной микс","чеснок","зелень","бекон","томаты","моцарелла"]},{"name":"Мульти-пульти","calories":"1011 кКал","price":"95 грн","ingredients":["прошутто котто","ананас","соус из рикотты"]},{"name":"Пепперони","calories":"854 кКал","price":"105 грн","ingredients":["томаты","моцарелла","салями «Милано» "]},{"name":"Бьянка „белая“ пицца","calories":"836 кКал","price":"95 грн","ingredients":["бекон","моцарелла амбрози","зелёный лук","яичный желток","трюфельное масло"]},{"name":"Кваттро формаджи «четыре сыра»","calories":"912 кКал","price":"95 грн","ingredients":["моцарелла","горгонзола","сыр грана падано","таледжио","томаты"]},{"name":"Прошутто фунги","calories":"899 кКал","price":"95 грн","ingredients":["томаты","моцарелла","прошутто котто","шампиньоны"]},{"name":"Капричеза","calories":"963 кКал","price":"110 грн","ingredients":["томаты","моцарелла","прошутто котто","шампиньоны","артишоки","маслины"]},{"name":"Кампанья","calories":"921 кКал","price":"130 грн","ingredients":["томаты","моцарелла","пармская ветчина","белые грибы","колбаски"]},{"name":"Кальцоне","calories":"915 кКал","price":"125 грн","ingredients":["ветчина","грибы","артишоки"]},{"name":"Кальцоне аперто","calories":"933 кКал","price":"145 грн","ingredients":["томаты","моцарелла","деревенские яйца","пармская ветчина","руккола"]},{"name":"Сальчинбока","calories":"936 кКал","price":"120 грн","ingredients":["коппа/лосось","маскарпоне/тунец","помидоры","красный лук"]}];

// function changeIngredients (arr) {
//   arr.forEach((item)=>{
//     item.ingredients = item.consist.split(/,\s|\sи\s/);
//     delete item.consist
//   });
//   return JSON.stringify(arr);
// }

// console.log(changeIngredients(pizzaList));

const ingredientsList = ["ананас", "артишоки", "баранина", "бекон", "бекон с соусом карбонара", "белые грибы", "брезаола", "ветчина", "горгонзола", "грибной микс", "грибы", "грибы шиитаке", "деревенские яйца", "зелень", "зелёный лук", "икра летучей рыбы", "колбаски", "коппа/лосось", "красный лук", "креветки", "лосось", "маскарпоне/тунец", "маслины", "мексиканский соус", "молотые анчоусы", "морской коктейль из мидий, осьминогов и кальмара", "моцарелла", "моцарелла амбрози", "орегано",  "пармская ветчина", "перепелиные яйца", "петрушка", "пикантная салями", "помидоры", "помидоры черри", "прошутто котто", "руккола", "салями «Милано» ", "сибас", "соус из рикотты", "сыр грана падано", "табаско", "таледжио", "тигровые креветки", "томаты", "трюфельное масло", "тунец", "чеснок", "шампиньоны", "яичный желток"];

function checkIngredients (arr) {
  const ingredientsList = arr.map((obj)=>obj.consist.split(/,\s|\sи\s/));
  const obj = {};
  ingredientsList.forEach((item)=>{
    item.forEach((product)=>obj[product] = true)
  });
  const array = Object.keys(obj);
//   const res = ingredientsList.reduce((prev, arr)=>{
// return [...prev,...arr]
//   }, new Set());
  // const ingredientsList = arr.reduce((prev, obj)=> {
  //  return prev + obj.consist.split(/,|\sи\s/)
  // }, '' );
  return array.sort();
}
console.log(checkIngredients(pizzaList));


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

function addPizzaGrid (arr) {
  const containerPizzaGrid = document.createElement('div');
  containerPizzaGrid.className = 'container-pizza-grid';
  for (let obj of arr) {
    const pizza = document.createElement('div');
    pizza.className = 'pizza-grid';
    pizza.innerHTML = `<img src='pizza-1.jpg' class='pizza-photo-grid' width='250' height='250' alt='tasty pizza'>`;
    const pizzaInfo = document.createElement('div');
    pizzaInfo.className = 'pizza-info';
    pizzaInfo.innerHTML = `<p class='name'><span class='info left'>Название</span><span class='info right'>${obj.name}</span></p>
    <p class='consist'><span class='info left'>Состав</span><span class='info right'>${obj.consist}</span></p>
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
    childLiPizza.innerHTML = `<img src='pizza-1.jpg' class='pizza-photo-list' width='20' height='20' alt='tasty pizza'>${obj.name}, ${obj.consist}, ${obj.calories}, ${obj.price}`;
    parentUl.appendChild(childLiPizza);
  }
  containerPizzaList.appendChild(parentUl);
  document.body.appendChild(containerPizzaList);
}

addPizzaList(pizzaList);

