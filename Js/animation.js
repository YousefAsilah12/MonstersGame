const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


class sprite{
    constructor(){
        this.position
    }
}

function animate() {
    window.requestAnimationFrame(animate){
        c.fillReact(0,0, canvas.width, canvas.hight)
        player.update()
        enemy.update()
    }
    
}



window.addEventListener('keydown' ,(event) =>{
  switch (event.key) {
    case d:
        player.velocity.x= 1
        
        break;
  
    default:
        break;
  }
})
