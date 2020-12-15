// COOKIE CLICKER GAME

//amount of cookies
let cookies=0;
//amount of cookies you get per click
let cookiesPerClick=1;
//amount of cookies you get from the auto clicker (every 5 seconds);
let auto=0;
//interval for auto clicker
let tim1;
//auto clicker starting price
const startPrice=75;
//autoclicker price
let price=startPrice;
//number of perClickUpgrades you can buy for the cookies you have
let maxCookies=cookies/50;
//change float x.xx to x
maxCookies = Math.floor(maxCookies);
//the cost of using the maxUpgrade button
let maxCost=maxCookies*50;
//price of upgrade +1
let priceUpgrade=50;
//price of upgrade 2
let priceUpgradeTwo=priceUpgrade*3;
//price of upgrade 3
let priceUpgradeThree=priceUpgrade*5;
//amount of levles you can upgrade your auto clicke with your cookies;
let maxAuto=0;
//auto clicker price (max)
let maxPrice=startPrice;
let cookiesPaid=0;


// COOKIE AUDIO

//I NEED TO ADD THE AUDIO FILES. WHEN I'LL FIND SOME GOOD ONES ...

let soundOnCookieClick = document.getElementById("cookieclick"); 
let soundPurchaseFail = document.getElementById("fail"); 
let soundSuccessful = document.getElementById("success"); 


// COOKIE CLICKER - CLICK ON COOKIE TO GET COOKIES

$("#addcookies").click(function(){
  //number of cookies goes up by 1*multiplier
  cookies = cookies+1*cookiesPerClick;
  //update for the number of perClickUpgrades you can buy for the cookies you have
  maxCookies=cookies/50;
  //change float x.xx to x
  maxCookies = Math.floor(maxCookies);
  //update the cost of using the maxUpgrade button
  maxCost=maxCookies*50;
  maxAuto-=cookiesPaid;
  maxAuto-=auto*3;
  maxAuto/=startPrice;
  maxPrice=(auto*price+auto*3)-startPrice;
  // pause and restart the old sound in case of click spam.
  soundOnCookieClick.pause();
  soundOnCookieClick.currentTime = 0;
  // play sound every time the cookie is clicked - Sound needs to be added to Sounds folder
  soundOnCookieClick.play();
  if (cookies>999999){
    $('#page-title').text("Cookies: 999999+");
    $('#showcookies').text("Cookies: 999999+");
  }else {
  //update the page title
  $('#page-title').text(`Cookies: ${cookies}`);
  //update the amount of cookies you have (visual)
  $('#showcookies').text("Cookies: "+cookies);
  }
  if (maxCookies>999999){
    $('#upgrade5').text(`Upgrade +999999`);
  }else{
  //update the number of perClickUpgrades you can buy for the cookies you have (visual)
  $('#upgrade5').text(`Upgrade +${maxCookies}`);
  }
  if (maxCost>999999){
    $('#upgradefivecost').text(`Cost: 999999+`);
  }else{
  //update the cost of upgrading using the max button (visual)
  $('#upgradefivecost').text(`Cost: ${maxCost}`);
  }
});


//WHAT HAPPENS WHEN THE AUTOCLICKER IS BOUGHT

$("#autoclicker").click(function(){
  // IF YOU HAVE ENAUGH COOKIES: YOU LOSE SOME COOKIES -the price-,
  //YOU GET 1 MORE COOKIE EVERY TIME AUTO CLICKER IS ACTIVATED,
  //THE PRICE OF ANOTHER AUTO CLICKER GOES UP BY ${PRICEGROWTH},
  //THE OLD TIMER STOPS AND A NEW ONE STARTS.
  if(cookies >= price){
    cookies-=price;
    auto++;
    cookiesPaid+=price;
    maxAuto-=cookiesPaid;
    maxAuto-=auto*3;
    maxAuto/=startPrice;
    price+=3;
    clearInterval(tim1);
    tim1 = setInterval(aClicker1, 5000);
    maxPrice=(auto*price+auto*3)-price;
  // pause and restart the old sound in case of click spam.
    soundSuccessful.pause();
    soundSuccessful.currentTime = 0;
    soundSuccessful.play();
    //update the number of perClickUpgrades you can buy for the cookies you have (visual)
  }
  else{
    // SEND ALERT IF YOU DON'T HAVE ENAUGH COOKIES, PLAY THE PURCHASE FAILURE SOUND.
    swal("FAILED", "You don't have enaugh cookies!");
    // pause and restart the old sound in case of click spam.
    soundPurchaseFail.pause();
    soundPurchaseFail.currentTime = 0;
    soundPurchaseFail.play(); 
  }
  if (cookies>999999){
    $('#page-title').text("Cookies: 999999+");
    $('#showcookies').text("Cookies: 999999+");
  }else {
  $('#page-title').text("Cookies: "+cookies);
  //update the amount of cookies you have (visual)
  $('#showcookies').text("Cookies: "+cookies);
  }
  if (auto>999999){
    $('#acinfo').text(`Level: 999999+`);
  }else {
  //update the level of the auto clicker (visual)
  $('#acinfo').text(`Level: ${auto}`);
  }
  if (price>999999){
    $('#acinfo2').text(`Upgrade Cost: 999999+`);
  }
  //update the price of the next level of auto clicker (visual)
  $('#acinfo2').text(`Upgrade Cost: ${price}`);
  maxCookies=cookies/50;
  //change float x.xx to x
  maxCookies = Math.floor(maxCookies);
  //update the cost of using the maxUpgrade button
  maxCost=maxCookies*50;
  if (maxCookies>999999){
    $('#upgrade5').text(`Upgrade +999999`);
  }else{
  //update the number of perClickUpgrades you can buy for the cookies you have (visual)
  $('#upgrade5').text(`Upgrade +${maxCookies}`);
  }
  if (maxCost>999999){
    $('#upgradefivecost').text(`Cost: 999999+`);
  }else{
  //update the cost of upgrading using the max button (visual)
  $('#upgradefivecost').text(`Cost: ${maxCost}`);
  }
  if (maxPrice>999999){
    $('#acinfotwo2').text(`Upgrade Cost: 999999+`);
  }else {
    $('#acinfotwo2').text(`Upgrade Cost: ${maxPrice}`);
  }
  if (maxAuto>999999){
    $('#acinfotwo3').text(`Upgrade: +999999`);
  }else {
    $('#acinfotwo3').text(`Upgrade: +${maxAuto}`);
  }
});

//WHAT THE AUTO CLICKER DOES

function aClicker1(){
  //THE NUMBER OF COOKES GO UP BY THE NUMBER OF THE AUTO CLICKER LEVEL
  cookies+=auto;
  if (cookies>999999){
    $('#page-title').text("Cookies: 999999+");
    $('#showcookies').text("Cookies: 999999+");
  }else {
  $('#page-title').text("Cookies: "+cookies);
  //update the amount of cookies you have (visual)
  $('#showcookies').text("Cookies: "+cookies);
  }
  if (auto>999999){
    $('#acinfo').text(`Level: 999999+`);
  }else {
  //update the level of the auto clicker (visual)
  $('#acinfo').text(`Level: ${auto}`);
  }
  if (price>999999){
    $('#acinfo2').text(`Upgrade Cost: 999999+`);
  }
  //update the price of the next level of auto clicker (visual)
  $('#acinfo2').text(`Upgrade Cost: ${price}`);
  maxCookies=cookies/50;
  //change float x.xx to x
  maxCookies = Math.floor(maxCookies);
  //update the cost of using the maxUpgrade button
  maxCost=maxCookies*50;
  if (maxCookies>999999){
    $('#upgrade5').text(`Upgrade +999999`);
  }else{
  //update the number of perClickUpgrades you can buy for the cookies you have (visual)
  $('#upgrade5').text(`Upgrade +${maxCookies}`);
  }
  if (maxCost>999999){
    $('#upgradefivecost').text(`Cost: 999999+`);
  }else{
  //update the cost of upgrading using the max button (visual)
  $('#upgradefivecost').text(`Cost: ${maxCost}`);
  }
}







// UPGRADE 1

$("#upgradeone").click(function(){
  // IF YOU HAVE ENAUGH COOKIES: YOU LOSE SOME COOKIES -the price-,
  // THE MULTIPLIER FOR COOKIES PER CLICK GOES UP BY 1,
  // A SUCCESFUL PURCHASE SOUND PLAYS
  if(cookies >= 50){
    cookiesPerClick += 1;
    cookies-=50;
    // pause and restart the old sound in case of click spam.
    soundSuccessful.pause();
    soundSuccessful.currentTime = 0;
    soundSuccessful.play(); 
  }else{
    // SEND ALERT IF YOU DON'T HAVE ENAUGH COOKIES, PLAY THE PURCHASE FAILURE SOUND.
    swal("FAILED", "You don't have enaugh cookies!");
    soundPurchaseFail.pause();
    soundPurchaseFail.currentTime = 0;
    soundPurchaseFail.play(); 
  }
  if (cookies>999999){
    $('#showcookies').text("Cookies: 999999+");
    $('#page-title').text("Cookies: 999999+");
  }else {
  //update the amount of cookies you have (visual)
  $('#showcookies').text("Cookies: "+cookies);
  //update the page title
  $('#page-title').text("Cookies: "+cookies);
  }
  if (cookiesPerClick>999){
    $('.perclick').text(`You get 999+ cookies per click`);
  }else if(cookiesPerClick==1){
  //update the amount of cookies you get per click (visual)
  $('.perclick').text(`You get ${cookiesPerClick} cookie per click`);
  }else{
  $('.perclick').text(`You get ${cookiesPerClick} cookies per click`);
  }
  //update for the number of perClickUpgrades you can buy for the cookies you have
  maxCookies=cookies/50;
  //change float x.xx to x
  maxCookies = Math.floor(maxCookies);
  //update the cost of using the maxUpgrade button
  maxCost=maxCookies*50;
  if (maxCookies>999999){
    $('#upgrade5').text(`Upgrade +999999`);
  }else {
  //update the number of perClickUpgrades you can buy for the cookies you have (visual)
  $('#upgrade5').text(`Upgrade +${maxCookies}`);
  }
  if (maxCost>999999) {
    $('#upgradefivecost').text(`Cost: 999999+`);
  }else {
  //update the cost of upgrading using the max button (visual)
  $('#upgradefivecost').text(`Cost: ${maxCost}`);
  }
});







// UPGRADE 2

$("#upgradetwo").click(function(){
  // IF YOU HAVE ENAUGH COOKIES: YOU LOSE SOME COOKIES -the price-,
  // THE MULTIPLIER FOR COOKIES PER CLICK GOES UP BY 3,
  // A SUCCESFUL PURCHASE SOUND PLAYS
  if(cookies >= 150){
    cookiesPerClick += 3;
    cookies-=150;
    // pause and restart the old sound in case of click spam.
    soundSuccessful.pause();
    soundSuccessful.currentTime = 0;
    soundSuccessful.play(); 
  }else{
    // SEND ALERT IF YOU DON'T HAVE ENAUGH COOKIES, PLAY THE PURCHASE FAILURE SOUND.
    swal("FAILED", "You don't have enaugh cookies!");
    soundPurchaseFail.pause();
    soundPurchaseFail.currentTime = 0;
    soundPurchaseFail.play(); 
  }
  if (cookies>999999){
    $('#showcookies').text("Cookies: 999999+");
    $('#page-title').text("Cookies: 999999+");
  }else {
  //update the amount of cookies you have (visual)
  $('#showcookies').text("Cookies: "+cookies);
  //update the page title
  $('#page-title').text("Cookies: "+cookies);
  }
  if (cookiesPerClick>999){
    $('.perclick').text(`You get 999+ cookies per click`);
  }else if(cookiesPerClick==1){
  //update the amount of cookies you get per click (visual)
  $('.perclick').text(`You get ${cookiesPerClick} cookie per click`);
  }else{
  $('.perclick').text(`You get ${cookiesPerClick} cookies per click`);
  }
  //update for the number of perClickUpgrades you can buy for the cookies you have
  maxCookies=cookies/50;
  //change float x.xx to x
  maxCookies = Math.floor(maxCookies);
  //update the cost of using the maxUpgrade button
  maxCost=maxCookies*50;
  if (maxCookies>999999){
    $('#upgrade5').text(`Upgrade +999999`);
  }else {
  //update the number of perClickUpgrades you can buy for the cookies you have (visual)
  $('#upgrade5').text(`Upgrade +${maxCookies}`);
  }
  if (maxCost>999999) {
    $('#upgradefivecost').text(`Cost: 999999+`);
  }else {
  //update the cost of upgrading using the max button (visual)
  $('#upgradefivecost').text(`Cost: ${maxCost}`);
  }
});






// UPGRADE 3

$("#upgradethree").click(function(){
  // IF YOU HAVE ENAUGH COOKIES: YOU LOSE SOME COOKIES -the price-,
  // THE MULTIPLIER FOR COOKIES PER CLICK GOES UP BY 5,
  // A SUCCESFUL PURCHASE SOUND PLAYS
  if(cookies >= 250){
    cookiesPerClick += 5;
    cookies-=250;
    // pause and restart the old sound in case of click spam.
    soundSuccessful.pause();
    soundSuccessful.currentTime = 0;
    soundSuccessful.play(); 
  }else{
    // SEND ALERT IF YOU DON'T HAVE ENAUGH COOKIES, PLAY THE PURCHASE FAILURE SOUND.
    swal("FAILED", "You don't have enaugh cookies!");
    soundPurchaseFail.pause();
    soundPurchaseFail.currentTime = 0;
    soundPurchaseFail.play(); 
  }
  if (cookies>999999){
    $('#showcookies').text("Cookies: 999999+");
    $('#page-title').text("Cookies: 999999+");
  }else {
  //update the amount of cookies you have (visual)
  $('#showcookies').text("Cookies: "+cookies);
  //update the page title
  $('#page-title').text("Cookies: "+cookies);
  }
  if (cookiesPerClick>999){
    $('.perclick').text(`You get 999+ cookies per click`);
  }else if(cookiesPerClick==1){
  //update the amount of cookies you get per click (visual)
  $('.perclick').text(`You get ${cookiesPerClick} cookie per click`);
  }else{
  $('.perclick').text(`You get ${cookiesPerClick} cookies per click`);
  }
  //update for the number of perClickUpgrades you can buy for the cookies you have
  maxCookies=cookies/50;
  //change float x.xx to x
  maxCookies = Math.floor(maxCookies);
  //update the cost of using the maxUpgrade button
  maxCost=maxCookies*50;
  if (maxCookies>999999){
    $('#upgrade5').text(`Upgrade +999999`);
  }else {
  //update the number of perClickUpgrades you can buy for the cookies you have (visual)
  $('#upgrade5').text(`Upgrade +${maxCookies}`);
  }
  if (maxCost>999999) {
    $('#upgradefivecost').text(`Cost: 999999+`);
  }else {
  //update the cost of upgrading using the max button (visual)
  $('#upgradefivecost').text(`Cost: ${maxCost}`);
  }
});







// UPGRADE MAX

$("#upgradefour").click(function(){
    // IF YOU HAVE ENAUGH COOKIES: YOU LOSE MOST COOKIES -the price-,
    // THE MULTIPLIER FOR COOKIES PER CLICK GOES UP BY THE MAX AMOUNT YOU HAVE COOKIES TO PAY FOR,
    // A SUCCESFUL PURCHASE SOUND PLAYS
    if(cookies < priceUpgrade){
      // SEND ALERT THAT THERE IS NOT ENAUGH COOKIES FOR ANY UPGRADES, PLAY THE PURCHASE FAILURE SOUND.
      swal("FAILED", "You don't have enaugh cookies to purchase any upgrades.");
      soundPurchaseFail.pause();
      soundPurchaseFail.currentTime = 0;
      soundPurchaseFail.play(); 
    }else if(cookies >= maxCost){
      cookiesPerClick += maxCookies;
      cookies-=maxCost;
      // pause and restart the old sound in case of click spam.
      soundSuccessful.pause();
      soundSuccessful.currentTime = 0;
      soundSuccessful.play(); 
    }else{
      // SEND ALERT IF YOU DON'T HAVE ENAUGH COOKIES, PLAY THE PURCHASE FAILURE SOUND.
      swal("FAILED", "Something went wrong!", "error");
      soundPurchaseFail.pause();
      soundPurchaseFail.currentTime = 0;
      soundPurchaseFail.play(); 
    }
    if (cookies>999999){
      $('#showcookies').text("Cookies: 999999+");
      $('#page-title').text("Cookies: 999999+");
    }else {
    //update the amount of cookies you have (visual)
    $('#showcookies').text("Cookies: "+cookies);
    //update the page title
    $('#page-title').text("Cookies: "+cookies);
    }
    if (cookiesPerClick>999){
      $('.perclick').text(`You get 999+ cookies per click`);
    }else if(cookiesPerClick==1){
  //update the amount of cookies you get per click (visual)
  $('.perclick').text(`You get ${cookiesPerClick} cookie per click`);
  }else{
  $('.perclick').text(`You get ${cookiesPerClick} cookies per click`);
  }

    //update for the number of perClickUpgrades you can buy for the cookies you have
    maxCookies=cookies/50;
    //change float x.xx to x
    maxCookies = Math.floor(maxCookies);
    //update the cost of using the maxUpgrade button
    maxCost=maxCookies*50;
    if (maxCookies>999999){
      $('#upgrade5').text(`Upgrade +999999`);
    }else {
    //update the number of perClickUpgrades you can buy for the cookies you have (visual)
    $('#upgrade5').text(`Upgrade +${maxCookies}`);
    }
    if (maxCost>999999) {
      $('#upgradefivecost').text(`Cost: 999999+`);
    }else {
    //update the cost of upgrading using the max button (visual)
    $('#upgradefivecost').text(`Cost: ${maxCost}`);
    }
  });






//update the amount of cookies you have (visual)
$('#showcookies').text("Cookies: "+cookies);
//update the amount of cookies you get per click (visual)
$('.perclick').text(`You get ${cookiesPerClick} cookie per click`);

//update the number of perClickUpgrades you can buy for the cookies you have (visual)
$('#upgrade5').text(`Upgrade +${maxCookies}`);
//update the cost of upgrading using the max button (visual)
$('#upgradefivecost').text(`Cost: ${maxCost}`);

//update the level of the auto clicker (visual)
$('#acinfo').text(`Level: ${auto}`);
//update the price of the next level of auto clicker (visual)
$('#acinfo2').text(`Upgrade Cost: ${price}`);

$('#acinfotwo').text(`Level: ${auto}`);
$('#acinfotwo2').text(`Upgrade Cost: ${maxPrice}`);
$('#acinfotwo3').text(``);

//update the price of upgrade one
$('#price1').text(`COST: ${priceUpgrade} Cookies`);
//update the price of upgrade two
$('#price2').text(`COST: ${priceUpgradeTwo} Cookies`);
//update the price of upgrade three
$('#price3').text(`COST: ${priceUpgradeThree} Cookies`);