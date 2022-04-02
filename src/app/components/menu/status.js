function online() {
  console.log('online')
}

function offline() {
  var status = false;
  alert('offline')
}

if (window.navigator.onLine){
  online();
} else {
  offline();
}

window.addEventListener("online" , online);
window.addEventListener("offline" , offline);

