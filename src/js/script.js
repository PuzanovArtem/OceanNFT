const burger = document.querySelector('.burger');
const content = document.querySelector('.header__content');
const navLink = document.querySelectorAll('.nav-link');


function openMenu(){
    const activeBurger =  burger.classList.toggle('active');
    const activeContent = content.classList.toggle('active');
    if(activeBurger){
        document.body.style.overflow = 'hidden';
    }if(!activeBurger){
        document.body.style.overflow = 'auto';
    }
}

burger.addEventListener('click', openMenu)

function closeMenu(){
    burger.classList.remove('active');
    content.classList.remove('active');
    document.body.style.overflow = 'scroll';
}

navLink.forEach(n => n.addEventListener('click', closeMenu));

// header

const header = document.querySelector('.header-header');
const main = document.getElementById('main');
let headerHeight = header.offsetHeight;
const mainHeight = main.offsetHeight;
window.addEventListener('scroll', ()=>{
  let scrollDistance = window.scrollY;

  if(scrollDistance >= 80){
    header.classList.add('header-fixed');
  }else{
    header.classList.remove('header-fixed');
  }
})




// табы !!!!!!!!!

// const btnTab = document.querySelectorAll('.button-tab');
// const tabsItem = document.querySelectorAll('.buttin__right-img');


// btnTab.forEach(function(item){
//   item.addEventListener('click', function(){
//     let currentBTN = item;
//     let tabId = currentBTN.getAttribute('data-tab');
//     let cuurentTab = document.querySelector(tabId);
//     btnTab.forEach(function(item){
//       item.classList.remove('active')
//   })
//   tabsItem.forEach(function(item){
//     item.classList.remove('active')
// })


//     currentBTN.classList.add('active');
//     cuurentTab.classList.add('active');
//   })
  
// });

/*tabs*/

document.querySelectorAll('.tabs-header__item').forEach((item) =>
  item.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');

      document.querySelectorAll('.tabs-header__item').forEach(
          (child) => child.classList.remove('tabs-header__item_active')
      );

      document.querySelectorAll('.tabs-body__block').forEach(
          (child) => child.classList.remove('tabs-body__block_active')
      );

      item.classList.add('tabs-header__item_active');
      document.getElementById(id).classList.add('tabs-body__block_active'); 
  })
);

document.querySelector('.tabs-header__item').click();

//sellers

 function addClickHeight() {
    let addHeight = document.querySelector('.sellers-body__overflow-hidden');
    addHeight.classList.toggle('sellers-body_active');
 };



let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}