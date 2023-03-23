const menu = document.querySelector('.nav-content');
const menuButton = document.querySelector('.menu-button');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

class buttonMenu {
    constructor() {
        this.closed = true;
        menuButton.addEventListener('click', ()=>{
            this.changeButton();
    
            if (this.closed === false) {
                this.closed = true;
            } else {
                this.closed = false;
            }
        })
    }

    changeButton() {
        if (this.closed === true) {
            menu.style.display = 'flex';
            menu.style.width = "50%";
            menuButton.style.right = "52%";
            bar1.style.top = "1rem";
            bar3.style.top = "1rem";
            bar1.style.right = "52%";
            bar3.style.right = "52%";
            bar3.style.rotate = "45deg";
            bar1.style.rotate = "-45deg";
            bar2.style.display = "none";
        }
        else {
            menu.style.width = "0";
            menuButton.style.right = "0.3rem";
            bar1.style.top = "0.4rem";
            bar3.style.top = "1.6rem";
            bar1.style.right = "0.5rem";
            bar3.style.right = "0.5rem";
            bar3.style.rotate = "0deg";
            bar1.style.rotate = "0deg";
            bar2.style.display = "flex";
    
        }
    
    }




    
}

const p1 = new buttonMenu()