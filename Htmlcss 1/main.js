const tabItem = document.querySelectorAll('.tab-item');
const tabKonten = document.querySelectorAll('.tab-content-item');



function selectItem(e){
  hapusTab();
  hapusKonten();
  const jembut = document.querySelector(`#${this.id}-content`);
  jembut.classList.add('show');
  this.classList.add('tab-border');
}
function hapusKonten(){
  tabKonten.forEach(item=>item.classList.remove('show'));
}

function hapusTab(){
  tabItem.forEach(item=>item.classList.remove('tab-border'));
}

tabItem.forEach(item=>item.addEventListener('click',selectItem)); 