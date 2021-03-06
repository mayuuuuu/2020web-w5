const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '外は華氏94度だった。だから:insertx:は散歩に出掛けた。 彼らが:inserty:に着いたとき、:insertz:。体重300ポンドの:insertx:は驚いたが、私は驚かなかった。でも:inserty:だから仕方ないね。';
let insertX = ['まゆ','りと','みゆう'];
let insertY = ['ディズニーランド','USJ','アメリカ'];
let insertZ = ['変なおじさんがいた','台風がやってきた','ナンパされた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('私',name);
  }

  if(document.getElementById("日本").checked) {
    const weight = Math.round(300*0.0714286) + ' キログラム';
    const temperature =  '摂氏'+Math.round((94-32) * 5 / 9) + ' 度';
    newStory = newStory.replace('華氏94度',temperature);
    newStory = newStory.replace('300ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

