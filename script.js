//전체 내용
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
   
//변경 요소
const mainnImg= document.querySelector("img")
const nameInfo=document.querySelector(".name")
const positionInfo=document.querySelector(".position")
const detailInfo=document.querySelector("span")

// 이동 버튼
const randombtn= document.querySelector(".random")
const prvbtn=document.querySelector("i")
const nextbtn=document.querySelector(".right>i")


//시작하는 인덱스 지정 : 가장 첫 인덱스 지정 
let currentImg=0;

/*✨혼자 진행한 부분 

function showImg(currentImg){
    const randomIndex =randomPlanet[currentImg];
    mainnImg.src=randomIndex.img;
    nameInfo.innerText=randomIndex.name;
    positionInfo.innerText=randomIndex.position;
    detailInfo.innerText=randomIndex.detail;
  console.log(currentImg)} 
//🤔버튼을 누를때 마다  인덱스값이 증가 감소하도록하게해서 바꿔주도록 진행을 해볼까?

 randombtn.addEventListener('click',()=>{currentImg=Math.floor(Math.random()* randomPlanet.length); showImg(currentImg) })
 rightbtn.addEventListener('click',()=>{currentImg++; if(currentImg>randomPlanet.length){currentImg=0}showImg(currentImg) })
 leftbtn.addEventListener('click',()=>{currentImg--; if(currentImg<0){currentImg=0}showImg(currentImg) })*/

 
//✨튜토리얼 참고 하면서 정리
// -load intial item 
//로딩된다면 array상의 가장 첫번째 인덱스를 보여주도록함
//🤔DOMContentLoaded ? : window event로 초기  HTML 문서를 완전히 불러오고 분석했을때 발생

function showPerson(num){
  const item = randomPlanet[num];
    mainnImg.src=item.img;
    nameInfo.innerText=item.name;
    positionInfo.innerText=item.position;
    detailInfo.innerText=item.detail;}

window.addEventListener('DOMContentLoaded',showPerson(currentImg))

//각 버튼 마다 이벤트 실행  
//인덱스 값으로이동: 전체 길이보다 커지면 다시 0으로, 음수가 되는 경우도 0으로 이동하도록 진행 

//1)randombtn
 randombtn.addEventListener('click',()=>{
  currentImg=Math.floor(Math.random()*randomPlanet.length);
  showPerson(currentImg)})
//2)prvbtn
//버튼 클릭시 currentImg의 값이 증가하도록 진행
//🤔문제가되는건 currentImg의 값이 전체 인덱스 길이를 넘어가면 에러가 나오므로 if 통해서 방지
nextbtn.addEventListener('click',()=>{
  currentImg++;
  if(currentImg>randomPlanet.length-1){
    currentImg=0;}
  showPerson(currentImg)})
//✨randomPlanet.length-1을 해주자...잊지말자..^^!!  :  index 의경우 0부터 시작하므로!

prvbtn.addEventListener('click',()=>{
  currentImg--;
  if(currentImg<0){
    currentImg=0;}
  showPerson(currentImg)})