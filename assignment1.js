//NAME: MUHAMMAD HASSAN ABBASI
//ROLL NO:PIAIC200622
//BATCH 38

//TASK 1
//Installed node.js and vscode

//TASK 2: Personal Message
let name="Hassan";
console.log(`Hello ${name},would you like to learn some python today?`);  

//TASK 3: Name Cases
name="Super saiyan Goku";
console.log(`Lowercase:${name.toLowerCase()}`);
console.log(`Uppercase:${name.toUpperCase()}`);
function toTitleCase(str){
    return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
console.log(`Titlecase:${toTitleCase(name)}`);

//TASK 4: Famous Quote
console.log('Bruce Lee once said, "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."');

//TASK 5: Famous Quote 2
let quote='"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."',famousPerson="Bruce Lee",
message=`${famousPerson} once said, ${quote}`;
console.log(message);

//TASK 6: Stripping Names
let names="\tMicheal\n\t Jackson";
console.log(names);
names=names.replace(/\t|\n/g,"");
console.log(names);

//TASK 7: Number Eight
let add=6+2, subtract=10-2, multiply=4*2, divide=16/2;
console.log(`Add:${add}\nSubtract:${subtract}\nMultiply:${multiply}\nDivide:${divide}`);

//TASK 8: Number Eight 2
let addition=" 6+2",subtraction="10-2",multiplication=" 4*2",division="16/2";
console.log(`${addition}=${add}\n${subtraction}=${subtract}\n${multiplication}=${multiply}\n${division}=${divide}`); 

//TASK 9: Favorite Number
let favNum=7;
message=`My favorite number is ${favNum}.`;
console.log(message);

//TASK 10: Adding Comments
favNum=7,message=`My favorite number is ${favNum}.`;
console.log(message);
/* Name: Muhammad Hassan Abbasi
   Date: 1st October, 2022
   Purpose of this program: This program stores my favorite number in the block of memory using a variable, then it
   creates a string variable with string interpolation to save my favorite number. Then it displays it.
   */
name="Super saiyan Goku";
console.log(`Lowercase:${name.toLowerCase()}`);
console.log(`Uppercase:${name.toUpperCase()}`);
function toTitleCase(str){
    return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
console.log(`Titlecase:${toTitleCase(name)}`);   
/* Purpose of this program: This program converts normal string to lowercase and uppercase using built in
   functions but then creates a function for titlecase strings. */


//TASK 11: Names
let friends=['Abdul Hadi','Afnan Ali','Daniyal Qazi','Talha Rabbani','Farmaan Hyder'];
for(let i=0;i<friends.length;i++){
  console.log(friends[i]);
}

//TASK 12: Greetings
let greeting="wassuppppp man!";
for(let i=0;i<friends.length;i++){
  console.log(`Hey ${friends[i]},${greeting}`);
}

//TASK 13: Your Own Array
let cars=['Hyundai Sonata','Dodge Challenger','Ford Raptor'],statements=[' is such a beautiful car!', 
' is one of the best examples of american muscle.', ' is one silent monster truck!'];
for(let i=0;i<cars.length;i++){
  console.log(`${cars[i] + statements[i]}`);
}

//TASK 14: Guest List 
let guests=['Elon Musk','Steve Jobs', 'Brad Pitt'];
message="would you care to join me for dinner?";
for(let i=0;i<guests.length;i++){
  console.log(`Hey ${guests[i]},${message}`);
}

//TASK 15: Changing Guest List
console.log(`${guests[0]} can't make it. `);
guests.splice(0,1,"Albert Einstein");
for(let i=0; i<guests.length;i++){
  console.log(`Hey ${guests[i]},${message}`);
}

//TASK 16: More Guests
guests.unshift("Imran Khan");
guests.splice(guests.length/2,0,"Zia Khan");
guests.push("Daniyal Nagori");
for(let i=0; i<guests.length;i++){
  console.log(`Hey ${guests[i]},${message}`);
}

//TASK 17: Shrinking Guest List
console.log("The new dinner table could not arrive in time. Unfortunately, we can only invite two people for dinner");
console.log(guests);
let guest="",x=guests.length;
for(let i=0;i<x;i++){
  if(guests.length>2){  
    guest = guests.pop();
    console.log(`Dear ${guest}, we are extremely sorry to inform you that we cannot invite you to the dinner`);
  }
}
for(let i=0;i<=guests.length;i++){
  guest=guests.pop();
  console.log(`Dear ${guest}, we are waiting to meet you at the dinner party tonight!`);
}
console.log(`Array of guests:${guests}\n.`);

//TASK 18:Seeing The World
let places=["USA","Silicon Valley","France","Saudi Arabia","England"],placevar=places.slice();
console.log(`Original Order:${places}`);
console.log(`Alphabetically ordered array:${placevar.sort()}`);
console.log(`Original Order:${places}`);
console.log(`Array reversed:${places.reverse()}`);
console.log(`Original Order:${places.reverse()}`);
console.log(`Original Array in Alphabetical Order:${places.sort()}`);
console.log(`Reverse Alphatebetical Order:${places.reverse()}`);

//TASK 19:Dinner Guests
/*
Im working with TASK 16.
*/
guests=['Elon Musk','Steve Jobs', 'Brad Pitt'];
guests.unshift("Imran Khan");
guests.splice(guests.length/2,0,"Zia Khan");
guests.push("Daniyal Nagori");
console.log(`NUMBER OF PEOPLE INVITED TO THE DINNER ARE ${guests.length}`);

//TASK 20:
let list = [];
function addElements(...a){
    list.push(a);
    return list;
}
console.log(addElements("Karachi","Islamabad","Lahore","Peshawar"));

//TASK 21:
function createObject (name,height,insta) {
 let obj={
    name:name,
    height:height,
    insta:insta,
 }
 return obj;
}
console.log(createObject("Muhammad Hassan","5'10","ooopssieee"));

//TASK 22:Intentional Error
let nums=[1,4,9];
console.log(100*nums[3]);
nums[3]=5;
console.log(2*nums[3]);

//TASK 23:Conditional Tests
let dreamCar="Lamborghini Veneno",dreamPlace="Jannah",age="50",height="5'10",weight="70",catLover=false,
dogLover=true,motivated=true,energy="low",gym=false;
console.log(`is car=='Lamborghini Veneno'?I predict true.\n${dreamCar=='Lamborghini Veneno'}`);
console.log(`is dreamPlace=='Jannah'? I predict true.\n${dreamPlace=='Jannah'}`);
console.log(`loves dogs? I predict true.\n${dogLover}`);
console.log(`is weight=='70'?I predict true.\n${weight=='70'}`);
console.log(`is motivated? I predict true.\n${motivated}`);
console.log(`is age=='18'?I predict false.\n${age=='18'}`);
console.log(`is height=='6'4'?I predict false.\n${height=="6'4"}`);
console.log(`loves cats? I predict false.\n${catLover}`);
console.log(`high on energy? I predict false.\n${energy=='high'}`);
console.log(`goes to gym? I predict false.\n${gym}`);

//TASK 24:More Conditional Tests
let a='abc',b='bca',c=`abc`,upperCaseA='ABC',number=312,number2="312",lis=["apple","banana","mango"],apple=false,coconut=false;//Strings inequality
console.log(a==c);
console.log(a==b);
console.log(upperCaseA.toLowerCase()==a);//Lowercase
if(upperCaseA==upperCaseA.toLowerCase){
  console.log(true);
}else{
  console.log(false);
}
if(number == number2){//Number inequality
  console.log(true);
}
if(number===number2){
  console.log(true);
}else{
  console.log(false);
}if(number==number2 || a==c){//AND/OR/ operators 
  console.log(true);
}else{false;};
if(number==number2 && a==c){
  console.log(true);
}else{false;};
for(let i=0;i<lis.length;i++){
  if(lis[i]=="apple"){console.log(`${lis[i]} is in the list.`);apple=true}//whether an item is in the array
  if(lis[i]=="coconut"){console.log(`${lis[i]} is in the list`);coconut=true}
}if(!coconut){//test whether an item is not in the array
  console.log(`coconut is not in the list.`);
}if(!apple){
  console.log(`apple is not in the list.`);
}

//TASK 25:Alien Colors #1
let points=0,alienColors=["green","red"];
for(let i=0;i<alienColors.length;i++){
  if(alienColors[i]=="green"){
    points +=5;
  }
}
console.log(`You scored ${points} points! `);

//TASK 26:Alien Colors #2
let alien_Color="red";;
if(alien_Color=="green"){
  points+=5;
  console.log(`You just scored 5 points!`);
}else if(alien_Color=="red"){
  points +=10;
  console.log(`You just scored 10 points!`);
}

//TASK 27:Alien Colors #3
function checkColor(alienColor){
  if(alienColor=="green"){
  points +=5;
  console.log("You just scored 5 points!");
}else if(alienColor=="red"){
  points+=10;
  console.log("You just scored 10 points!");
}else if(alienColor=="yellow"){
  points+=15;
  console.log("You just scored 15 points");
}
}checkColor("green");checkColor("red");checkColor("yellow");

//TASK 28:Stages Of Life
function checkAge(age){
    if(age<2){
      console.log("Person is baby.")
    }else if(age>=2 &&age<4){
      console.log("Person is a toddler.");
    }else if(age>=4&&age<13){
      console.log("Person is a kid;.");
    }else if(age>=13&&age<20){
      console.log("Person is a teenager.")
    }
    else if(age>=20&&age<65){
      console.log("Person is an adult.");
    }else if(age>=65){
      console.log("Person is an elder.");
    }
}checkAge(21);checkAge(19);checkAge(45);

//TASK 29:Favorite Fruit
let favFruits=["bananas","mangoes","apples"],searchFruits=["grapes","bananas","mangoes","peaches","apples"];
for(let i=0;i<favFruits.length;i++){
  for(let search=0;search<searchFruits.length;search++){
    if(favFruits[i]==searchFruits[search]){
      console.log(`You really like ${favFruits[i]}!`);
    }
  }
}

//TASK 30:Hello Admin
let userNames=["admin","maniac","betman","john elia","hassan"];
for(let i=0;i<userNames.length;i++){
  if(userNames[i]=="admin"){
    console.log(`Hello ${userNames[i]}, would you like to see a status report?`);

  }else{
    console.log(`Hello ${userNames[i]}, thank you for logging in again!`);
  }
}

//TASK 31:No Users
userNames=["admin"];
for(let i=0;i<userNames.length;i++){
  if(userNames[i]=="admin"){
    console.log(`Hello ${userNames[i]}, would you like to see a status report?`);
  }else{
    console.log(`Hello ${userNames[i]}, thank you for logging in again!`);
  }if(userNames.length==1&&userNames[0]=="admin"){
    console.log(`We need to find more users!`);
  }
}

//TASK 32:Checking Usernames
let exists=[false,false,false,false,false],currentUsers=["ooopSSieee","maniacnolongerexists","hadiiiooo","pewdiepie","faroqo"],
    newUsers=["iqbalq","maniacnolongerexISTs","ooopssieee","pewdiepie","faroqo21"],used=[],loc=[0,0,0,0,0];
for(let i=0;i<currentUsers.length;i++){
  for(let z=0;z<newUsers.length;z++){
    if(currentUsers[i].toLowerCase()==newUsers[z].toLowerCase()){
      console.log(`${newUsers[z]} already in use.You will need to enter another username.`) ;
      loc[z]=1;
    }
  }
}
for(let i=0;i<newUsers.length;i++){
  if(loc[i]!=1){
    console.log(`${newUsers[i]} is available.`)
  }
}

//TASK 33:Ordinal Numbers
let numberArr=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<numberArr.length;i++){
  if(numberArr[i]==1){
    console.log(`${numberArr[i]}st`);
  }else if(numberArr[i]==2){
    console.log(`${numberArr[i]}nd`);
  }else if(numberArr[i]==3){
    console.log(`${numberArr[i]}rd`);
  }else if(numberArr[i]>=4 &&numberArr[i]<=9){
    console.log(`${numberArr[i]}th`);
  }
}

//TASK 34:Pizzas
let pizzaFlavors=["Creamy Chicken","Afghani Tikka","Magherita"];
for(let i=0;i<pizzaFlavors.length;i++){
  console.log(`I like ${pizzaFlavors[i]} pizza.`);
}
console.log(`I love pizza alot. \nIts secondary to feeling alive.`);

//TASK 35:Animals
let animals=["Lion","Jaguars","Cat"],lionMessage=`Lion is the king of the jungle`,
jaguarMessage=`Jaguars are too fast.`, catMessage=`Cats would make a great pet.`,
messagesArr=[lionMessage,jaguarMessage,catMessage];
for(let i =0;i<animals.length;i++){
  console.log(messagesArr[i]);
}
console.log(`These three animals are mammals and share the same genus; Panthera.`);

//TASK 36:T-Shirt
function make_shirt(size,text){
  console.log(`The size of shirt is ${size}.\nText to be imprinted on it is \n"${text}"`);
}make_shirt('S','Javascript is fun.');

//TASK 37:Large Shirts
function make_shirt2(size='L',text='I love javascript'){
  console.log(`The size of shirt is ${size}.\nText to be imprinted on it is \n"${text}"`);
}
make_shirt2();
make_shirt2('M');
make_shirt2('XL','either bulky or j too fat.');

//TASK 38:Cities
function describe_city(cityName,countryName='Pakistan'){
  console.log(`${cityName} is in ${countryName}`);
}
describe_city('Karachi');
describe_city('Quetta');
describe_city('Islamabad');
describe_city('Istanbul','Turkey');

//TASK 39:City Names
function city_names(cityName,countryName){
  return `"${cityName}, ${countryName}"`;
}
console.log(city_names('Karachi','Pakistan'))

//TASK 40:Album
function make_album(artistName,albumTitle,tracks){
  let obj={
    artist:artist,
    title:title,
    tracks:tracks,
 }
 return obj
}
console.log('Micheal Jackson','Thriller',4)
console.log('Lil Uzi & Travis Scott','The Fate Of The Furious')
console.log('Atif Aslam','Jal')
console.log('Bayaan','Suno')

//TASK 41:Magicians
let magicians=["Jack","Panther","Alooman","Coolie","Checkman"];
function show_magicians(magicianArr){
  for(let i=0;i<magicianArr.length;i++){
    console.log(magicianArr[i]);
  }
}show_magicians(magicians);

//TASK 42:Great Magicians
//this task was commented out to test the other one since it required to intervene with the original state of the array. It
//could not have been possible without commenting this task out, for the approach I intended.
// function make_great(){
//   for(let i=0;i<magicians.length;i++){
//     magicians[i]=`The Great ${magicians[i]}`;
//   }
// }
// make_great();
// show_magicians(magicians);

//TASK 43:Unchanged Magicians 
function make_great(magiciansArr){
  for(let i=0;i<magiciansArr.length;i++){
      magiciansArr[i]=`The Great ${magiciansArr[i]}`;
  }
  return magiciansArr;
}let mag=magicians.slice();
mag=make_great(mag);
console.log(`Original array : ${magicians}`);
console.log(`Changed Array  : ${mag}`);

//TASK 44:Sandwiches
function orderSandwich(...ingredients){
  console.log(`Your sandwich includes:`)
  for(let i=0;i<ingredients.length;i++){
      console.log(`${i+1}: ${ingredients[i]}`);
  }
}
orderSandwich('Chicken','Cheese');
orderSandwich('Beef','Lettuce','Grated Cheese');
orderSandwich('Peanut Butter','Banana','Strawberries','Honey');

//TASK 45:Cars
function carDetails(manufacturer, model,...features){
  let obj={
    manufacturer:manufacturer,
    model:model,
  }
  obj.color=features[0];
  obj.feature=features[1];
  obj.year=features[2];
  return obj;
}
console.log(carDetails('toyota','corolla'));
console.log(carDetails('honda','accord','black','',''));
console.log(carDetails('nissan','patrol','white','heated seats',2010));
console.log(carDetails('hyundai','sonata','black','lane assist',2019));


//    T H E  E N D    \\
