/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


// * Define Global Variables
const nav_div=document.createElement('header');
const nav_id=document.createAttribute('id');
nav_div.value='Nav_Id';
const sections=document.querySelectorAll('section');
const navigation_menu=document.createElement('nav');
const unordered_list=document.createElement('ul');
// build the nav
function build_nav(){
    document.body.appendChild(nav_div);
    nav_div.appendChild(navigation_menu);//name of the header
    navigation_menu.appendChild(unordered_list);
    unordered_list.style.listStyleType='none';

//building the list
    //Home li
    const li=document.createElement('li');
    li.innerHTML='<a href="index.html">HOME</a>';
    unordered_list.appendChild(li);
    //sections li
    for(let i=1;i<=sections.length;i++){
        const li=document.createElement('li');
        li.innerHTML='<a href="#section'+i+'" id="'+i+'">SECTION '+i+'</a>';
        unordered_list.appendChild(li);
    }
 // adding attribute class to the navigation
    const page_header=document.createAttribute('class');
    page_header.value='page__header';
    nav_div.setAttributeNode(page_header);
    const nav_class_main=document.createAttribute('class');
    nav_class_main.value='navbar__menu';
    navigation_menu.setAttributeNode(nav_class_main);
}
build_nav();//Function which builds the menu bar
// adding click event//
    navigation_menu.addEventListener('click',function(evt){
        if(evt.target.tagName==='A'){
            const req_elem=evt.target;
            const req_link=evt.target.getAttribute('href');
            remove_active_class();
            add_active_class(req_link);
            const high_lighted_link=evt.target.parentNode;
            remove_active_class_link();
            high_lighted_link.classList.add('active');
        }
    });
  //Helper Functions to add or remove the active class from the selected section
function add_active_class(sec_id){
    const req_section=document.querySelector(sec_id);
    req_section.classList.add('your-active-class');
}//end od function add_active_class()
function remove_active_class(){
    const clicked_section=document.querySelector('.your-active-class');
        if(clicked_section==null){
        }else{
            clicked_section.classList.remove('your-active-class');
        }
}
// for adding active class to selected link
function remove_active_class_link(){
    const clicked_link=document.querySelector('.active');
    if(clicked_link==null){
    }else{
        clicked_link.classList.remove('active');
    }
}
// event listener to show the navigation or hide it
document.addEventListener('mouseover',function (evt){
    if(evt.target.tagName==='A'){
        nav_div.style.display='block';
    }else{
        nav_div.style.display='block';
        setTimeout(function (){
            nav_div.style.display='none';
        },10000);
    }

})
// Adding event listener to smooth scroll the selected section into the view
// targeting the required links except the Home link
const ALLlinks = document.querySelectorAll("ul a");
const links = [].slice.call(ALLlinks, 1);// copying from nodelist to an array and removing first value
for (const link of links) {
    link.addEventListener("click", scroller);
}
function scroller(evt) {
    evt.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    console.log(offsetTop);

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

