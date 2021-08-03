
const randombtn= document.querySelector(".random")
const leftbtn=document.querySelector("i")
const rightbtn=document.querySelector(".right>i")
const mainnImg= document.querySelector("img")
const nameInfo=document.querySelector(".name")
const positionInfo=document.querySelector(".position")
const detailInfo=document.querySelector("span")
//시작하는 인덱스 지정 
let currentImg=0;

const randomPlanet=[
 { id:1,
    name:"earth",
   position:"Galaxy",
   img:"img/01.png",
   detail:"Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics."
 },
 {id:2,
     name:"Mars",
  position:"Galaxy",
  img:"img/02.png",
  detail:"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".[16][17] The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.[18] Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth."
},
{   id:3,
    name:"moon",
    position:"Galaxy",
    img:"img/03.png",
    detail:"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".[16][17] The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.[18] Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth."},
  { id:4,
    name:"jupiter",
    position:"Galaxy",
    img:"img/04.png",
    detail:"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".[16][17] The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.[18] Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth."
  }]


  function showImg(currentImg){
    const randomIndex =randomPlanet[currentImg];
    mainnImg.src=randomIndex.img;
    nameInfo.innerText=randomIndex.name;
    positionInfo.innerText=randomIndex.position;
    detailInfo.innerText=randomIndex.detail;
  console.log(currentImg)} 


 randombtn.addEventListener('click',()=>{currentImg=Math.floor(Math.random()* randomPlanet.length); showImg(currentImg) })
 rightbtn.addEventListener('click',()=>{currentImg++; if(currentImg>randomPlanet.length){currentImg=0}showImg(currentImg) })
 leftbtn.addEventListener('click',()=>{currentImg--; if(currentImg<0){currentImg=0}showImg(currentImg) })

 //🤔버튼을 누를때 마다  인덱스값이 증가 감소하도록하게해서 바꿔주도록 진행을 해볼까?
//문제? 문제가 아마 내문제겟지? 아마도 
