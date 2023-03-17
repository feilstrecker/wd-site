const text1 = document.querySelector('.anim-text-1');
const text2 = document.querySelector('.anim-text-2');
const text3 = document.querySelector('.anim-text-3');
const text4 = document.querySelector('.anim-text-4');
const text5 = document.querySelector('.anim-text-5');

const elementsText = {
    text1: "Limpeza de piscinas",
    text2: "Zeladoria e limpeza de jardins",
    text3: "Manutenção em instalações de piscinas",
    text4: "Irrigação",
    text5: "Montagem de jardins"
}

class AnimText {
    constructor() {
        this.contador = 0;
        
    }

    digitacao(element, texto, callback) {
        if(this.contador < texto.lastIndexOf("")){
            setTimeout(() => {
                
                element.textContent += texto.charAt(this.contador);
                this.contador++;
                this.digitacao(element, texto, callback);
    
            }, 40)
        } else {
            if (callback) callback();
        }
    
    }
    
}

t1 = new AnimText();
t2 = new AnimText();
t3 = new AnimText();
t4 = new AnimText();
t5 = new AnimText();

function myPromise(func) {
    return new Promise((resolve, reject) => {
        func();
        resolve();
    })
}

t1.digitacao(text1, elementsText.text1, function(){
    t2.digitacao(text2, elementsText.text2, function(){
        t3.digitacao(text3, elementsText.text3, function(){
            t4.digitacao(text4, elementsText.text4, function(){
                t5.digitacao(text5, elementsText.text5);
            });
        });
    })
});
