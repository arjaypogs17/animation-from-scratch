let imgBx = document.querySelectorAll('.imgBx');
let contentBx = document.querySelectorAll('.contentBx');

for (let i=0; i<imgBx.length; i++){
  imgBx[i].addEventListener('click', function(){
    for(let i=0; i<contentBx.length; i++){
      contentBx[i].className = 'contentBx';
    }
    document.getElementById(this.dataset.id).className = 'contentBx active';

    for (let i=0; i<imgBx.length; i++){
      imgBx[i].className = 'imgBx';
    }
    this.className = 'imgBx active';
  })
}
