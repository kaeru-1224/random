//🤔최종목표: 사진-이름- 멘트(?)를 하나의 쌍으로 슬라이드를 만드는것 
//✨1차 목표: 사진을 우선 랜덤으로 나오게 해주기 

/*const randombtn= document.querySelector(".random");
console.log(randombtn)
const img=["01.png","02.png","03.png","04.png"];

const profile= document.querySelector(".profile")

function randomImg (){
   let newImg= img[Math.floor(Math.random()*img.length)]
document.querySelector("img").src="img/"+newImg} 

randombtn.addEventListener('click',randomImg)*/

//🤔그러면 어떤식으로하면 하나의 묶음으로해서 랜덤으로 구할수있을까?
//든생각: 아마도 객체?를 이용해주면,하나의 묶음으로 넣어줄 수있지 않을까?
//ㅇㅋ 그러니까 이제 랜덤버튼을 누를시에 랜덤이 진행되도록 해주었음!
const randombtn= document.querySelector(".random")
const right=document.querySelector(".right")
const left=document.querySelector(".left")

const mainnImg= document.querySelector("img")
const nameInfo=document.querySelector(".name")
const positionInfo=document.querySelector(".position")
const detailInfo=document.querySelector("span")
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

window.addEventListener('DOMContentLoaded',()=>{showImg(newImg) })

  let newImg=Math.floor(Math.random()* randomPlanet.length);
  function randomImg (){
    let randomIndex=randomPlanet[newImg];
    mainnImg.src=randomIndex.img;
    nameInfo.innerText=randomIndex.name;
    positionInfo.innerText=randomIndex.position;
    detailInfo.innerText=randomIndex.detail;} 



 randombtn.addEventListener('click',randomImg)

 //🤔버튼을 누를때 마다  인덱스값이 증가 감소하도록하게해서 바꿔주도록 진행을 해볼까?


function showImg(newImg){
  const currentItem= randomPlanet[newImg];
  mainnImg.src=currentItem.img;
  nameInfo.innerText=currentItem.name;
  positionInfo.innerText=currentItem.position;
  detailInfo.innerText=currentItem.detail;

}


right.addEventListener('click',()=>{newImg+=1; showImg(newImg)})
left.addEventListener('click',()=>{newImg-=1; showImg(newImg)})