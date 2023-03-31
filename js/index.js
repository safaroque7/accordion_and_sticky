const headers = document.getElementsByClassName('header');
contents = document.getElementsByClassName('content');
plusSign = document.getElementsByClassName('plus-sign');
minusSign = document.getElementsByClassName('minus-sign');
titleSign = document.getElementsByClassName('title_sign');

// accordion code
for(let i = 0; i < headers.length; i++ ){
  headers[i].addEventListener('click', () => {
    for( let j = 0; j < contents.length; j++ ){
      if( i == j ){
        contents[j].classList.toggle('display-block');
        minusSign[j].classList.toggle('display-block');
        plusSign[j].classList.toggle('display-none');
        titleSign[j].classList.toggle('red-class');
      } else {
        contents[j].classList.remove('display-block');
        minusSign[j].classList.remove('display-block');
        plusSign[j].classList.toggle('display-block');
        titleSign[j].classList.remove('red-class');
      }
    }
  });
}

// sticky code
const accordion = document.getElementById('accordion');
window.addEventListener('scroll', function(){
  if(window.pageYOffset > accordion.offsetTop ){
    accordion.classList.add('stickyClass');
  } else {
    accordion.classList.remove('stickyClass');
  }
});