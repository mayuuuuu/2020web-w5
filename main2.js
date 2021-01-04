const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '何してんだおめえ…:insertx:なんかじろじろ見て…勉強終わったんか！…え？明日は:inserty:だって？！じゃ いってえ何で… べ 勉強サボって見る:insertx:は楽しい〜？！！と とんでもねえ野郎だな…でも おめえみたいなヤツ見てっと正直オラわっくわくすんだ！もっと聞かせてくれ！';
let insertX = ['youtube','アニメ','サッカー'];
let insertY = ['テスト本番','センター試験','TOEIC本番'];
let insertZ = ['とても寒かった','台風がやってきた','ナンパされた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('おめえ',name);
  }

  if(document.getElementById("us").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('なんか',temperature);
    newStory = newStory.replace('じろじろ',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
