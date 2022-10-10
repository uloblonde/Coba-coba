const sadge = document.querySelectorAll('.tab-item');
const lmao = document.querySelectorAll('.tab-content-item');


function selectItem(e){
    navigasiRemove();
    homeRemove();
    const home = document.querySelector(`#${this.id}-content`);
    home.classList.add('show');
    this.classList.add('tab-clicked');

}

function homeRemove(){
    lmao.forEach(item =>item.classList.remove('show'));
}

function navigasiRemove(){
    sadge.forEach(item=>item.classList.remove('tab-clicked'));
  }

sadge.forEach(item=>item.addEventListener('click', selectItem));