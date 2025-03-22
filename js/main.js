
//-----------после небольшой проверки стилей запускается замедленный скроль-----------
window.addEventListener('load', () => {
    const header = document.querySelector('header');
    if (header) {
        header.scrollIntoView({ behavior: 'smooth' });  
    }
});
let forDocumentStyoles = document.readyState === 'loading' ? true : false;
//Кастомная плавная прокрутка колесом мыши
if (window.innerWidth > 700) {
    if (forDocumentStyoles) {
        let scrollSpeed = 0;
        let isScrolling = false;
        window.addEventListener("wheel", function (event) {
            event.preventDefault(); 
            scrollSpeed += event.deltaY * 0.09;
            if (!isScrolling) {
                isScrolling = true;
                requestAnimationFrame(smoothScroll);
            };
        }, { passive: false });
        function smoothScroll() {
            scrollSpeed *= 0.87; 
            window.scrollBy(0, scrollSpeed);
            if (Math.abs(scrollSpeed) > 0.5) {
                requestAnimationFrame(smoothScroll);
            } else {
                isScrolling = false;
            };
        };
    };
}else{
    if (forDocumentStyoles) {
        let scrollSpeed = 0;
        let isScrolling = false;
        window.addEventListener("wheel", function (event) {
            event.preventDefault(); 
            scrollSpeed += event.deltaY * 0.12;
            if (!isScrolling) {
                isScrolling = true;
                requestAnimationFrame(smoothScroll);
            };
        }, { passive: false });
        function smoothScroll() {
            scrollSpeed *= 0.87; 
            window.scrollBy(0, scrollSpeed);
            if (Math.abs(scrollSpeed) > 0.5) {
                requestAnimationFrame(smoothScroll);
            } else {
                isScrolling = false;
            };
        };
    };
};
//----------------проверим загрузку стилей---------------------------
(function() {
    var type = document.querySelectorAll('link[rel="stylesheet"]');
    var tLoad = (type.length > 0 && typeof window !== 'undefined') ? document.addEventListener('DOMContentLoaded', ()=> {setTimeout(function() {
        document.body.classList.add('loaded');
        setTimeout(()=> {
            document.querySelector('.section-left').style.display = 'none';
            document.querySelector('.section-right').style.display = 'none';
            document.querySelector('.writer').style.display = 'none';
        },1900);
        setTimeout(()=> {
            document.getElementById('typewriter').style.display = 'none';
            document.querySelector('.container-fluid').style.display = 'none';
            document.querySelector('.messageLoad').style.display = 'none';
            document.querySelector('.cloader').style.display = 'none';
            main();
        },1300);
    }, 3900); }) : console.error('link[rel = "stylesheet"], ошибка загрузки стилей');
})();
//-------------------------------------------------------------------

function main() {
    //----------------эффект при наведении на меню--------------------
    !function() {
        const t = [...Array(8)].map((_, i) => document.querySelectorAll(`.li${i + 1}`));
        t.forEach(ElementList => {
            ElementList.forEach(Element => {
                Element.addEventListener('mouseover', () => {
                    anime({
                        targets: Element,
                        scale: 1.1,
                        duration: 300,
                        easing: 'easeInOutQuad'
                    });
                });
                Element.addEventListener('mouseleave', () => {
                    anime({
                        targets: Element,
                        scale: 1,
                        duration: 300,
                        easing: 'easeInOutQuad'
                    });
                });
            });
        });
    }();
    //----------------------------------------------------------------------

    //------------------------анимация при загрузке-------------------------
    !function() {
        const t = [...Array(8)].map((_, i) => document.querySelectorAll(`.li${i + 1}`));
        t.forEach(ElementList => {
            ScrollReveal().reveal(ElementList, {
                origin: 'top',
                distance: '50px',
                opacity:0,
                duration:600,
                easing:'ease-in-out',
            });
        });
        ScrollReveal().reveal('.alarab', {scale:1.1, easing:'ease-in-out'});
    }();
    //----------------------------------------------------------------------

    //------------------анимации при скролле--------------------------------

    //Этот объект содержит предустановленные параметры для анимации
    var determiningParameters = {
        certainDistance1: '100px',
        certainDistance2: '80px',
        certainDistance3: '70px',
        certainDistance4: '60px',
        certainDistance5: '50px',
        certainDistance6: '90px',
        axisMov1: 'bottom',
        axisMov2: 'right',
        axisMov3: 'left',
        axisMov4: 'top'
    };
    //Этот класс используется для анимации элементов при их появлении на экране
    class revealDefault {
        constructor (innerElement, column, animationDuration, animationDelay, movementOfAnElementAlongCertainAxis) {
            this.innerElement = innerElement;
            this.column = column;
            this.animationDuration = animationDuration;
            this.animationDelay = animationDelay;
            this.movementOfAnElementAlongCertainAxis = movementOfAnElementAlongCertainAxis;
        };
        //Запускает анимацию появления элемента
        animationConstruct(params) {
            ScrollReveal().reveal(this.innerElement, {
                origin:this.movementOfAnElementAlongCertainAxis,
                distance:this.column,
                duration:this.animationDuration,
                delay:this.animationDelay,
                opacity:0,
                easing:'ease-in-out'
            });
        };
        animationConstructlistOfElements(params) {
            ScrollReveal().reveal(this.innerElement, {
                origin:this.movementOfAnElementAlongCertainAxis,
                distance:this.column,
                duration:this.animationDuration,
                delay:this.animationDelay,
                interval:120,
                opacity:0,
                easing:'ease-in-out'
            });
        }
    };
    //Запуск анимаций для разных элементов
    //Каждый элемент или группа элементов получает анимацию при прокрутке
    (function() {
        var elDeLoad = new revealDefault(document.querySelector('#clc'),determiningParameters.certainDistance5, 600, 100, determiningParameters.axisMov4);
        elDeLoad.animationConstruct();
    }());
    (function() {
        var elDeLoadBut = new revealDefault(document.querySelector('.w'),determiningParameters.certainDistance5, 600, 200, determiningParameters.axisMov4);
        elDeLoadBut.animationConstruct();
    }());
    (function() {
        var elDesign1 = new revealDefault(document.querySelector('#pillow'),determiningParameters.certainDistance1, 600, 200, determiningParameters.axisMov1);
        elDesign1.animationConstruct();
    }());
    (function() {
        var elDesign2 = new revealDefault(document.querySelector('#atmosphere'),determiningParameters.certainDistance2, 800, 0, determiningParameters.axisMov1);
        elDesign2.animationConstruct();
    }());
    (function() {
        var elDesign3 = new revealDefault(document.querySelector('.wt'),determiningParameters.certainDistance4, 800, 0, determiningParameters.axisMov2);
        elDesign3.animationConstruct();
    }());
    (function() {
        var elDesign4 = new revealDefault(document.querySelector('.mirror'),determiningParameters.certainDistance3, 700, 0, determiningParameters.axisMov1);
        elDesign4.animationConstruct();
    }());
    (function() {
        var elDesign5 = new revealDefault(document.querySelector('.container'),determiningParameters.certainDistance1, 700, 0, determiningParameters.axisMov3);
        elDesign5.animationConstruct();
    }());
    (function() {
        var cq1 = document.getElementById('ccenter1')
        , cq12 = document.getElementById('ccenter2')
        , cq13 = document.getElementById('ccenter3')
        , cq14 = document.getElementById('ccenter4')
        , cq15 = document.getElementById('ccenter5')
        , cq16 = document.getElementById('ccenter6')
        , cq17 = document.getElementById('ccenter7')
        , cq18 = document.getElementById('ccenter8')
        , cq19 = document.getElementById('ccenter9')
        , cq10 = document.getElementById('ccenter10');
        var cqs = [cq1, cq12, cq12, cq13, cq14, cq15, cq16, cq17, cq18, cq19, cq10];
        var elDesign10 = new revealDefault(cqs, determiningParameters.certainDistance4, 600, 0, determiningParameters.axisMov1);
        // elDesign10.animationConstructlistOfElements();
    }());
    //Анимация списка элементов
    (function() {
        var post1 = document.getElementById('post1')
        , post2 = document.getElementById('post2')
        , post3 = document.getElementById('post3')
        , post4 = document.getElementById('post4')
        , post5 = document.getElementById('post5')
        , post6 = document.getElementById('post6');
        var rrays = [post1, post2, post3, post4, post5, post6];
        var elDesign6 = new revealDefault(rrays,determiningParameters.certainDistance5, 600, 0, determiningParameters.axisMov1);
        elDesign6.animationConstructlistOfElements();
    }());
    (function() {
        var tg1 = document.getElementById('tg1')
        , tg2 = document.getElementById('tg2')
        , tg3 = document.getElementById('tg3')
        , tg4 = document.getElementById('tg4');
        var tgs = [tg1, tg2, tg3, tg4];
        var elDesign7 = new revealDefault(tgs,determiningParameters.certainDistance5, 700, 0, determiningParameters.axisMov1);
        elDesign7.animationConstructlistOfElements();
    }());
    (function() {
        var elDesign8 = new revealDefault(document.querySelector('.card-gallery-container'),determiningParameters.certainDistance6, 900, 0, determiningParameters.axisMov1);
        elDesign8.animationConstruct();
    }());
    (function() {
        var elDesign9 = new revealDefault(document.querySelector('#funSpan'),determiningParameters.certainDistance3, 700, 0, determiningParameters.axisMov1);
        elDesign9.animationConstruct();
    }());
    (function() {
        var elDesign11 = new revealDefault(document.querySelector('.prBlock'),determiningParameters.certainDistance3, 600, 0, determiningParameters.axisMov1);
        elDesign11.animationConstruct();
    }());
    (function() {
        var war1 = document.querySelector('.war1')
        , war2 = document.querySelector('.war2')
        , war3 = document.querySelector('.war3');
        var wars = [war1, war2, war3];
        var elDesign12 = new revealDefault(wars, determiningParameters.certainDistance4, 700, 0, determiningParameters.axisMov1);
        elDesign12.animationConstructlistOfElements();
    }());
    //Изменение стиля меню при прокрутке
    document.addEventListener('scroll', ()=> {
        const sc = window.scrollY;
        if(sc > 1) {
            gsap.to('.menu', {backgroundColor:'rgba(0, 0, 0, 0.8)',color:'white',borderColor:'black',ease:'power2.out'});
            gsap.to('#setColl', {height:'5vh',ease:'power2.out'});
        }else{
            gsap.to('.menu', {backgroundColor:'#ffffff6d',color:'black',ease:'power2.out'}),
            gsap.to('#setColl', {height:'10vh',ease:'power2.out'});
        };
    });
    
//------------анимация процентного соотношения популярности---------------

const label1 = document.querySelector('#label1')
, label2 = document.querySelector('#label2')
, label3 = document.querySelector('#label3')
, label4 = document.querySelector('#label4')
, label5 = document.querySelector('#label5')
, labelsFull = [label1, label2, label3, label4, label5];
ScrollReveal().reveal(labelsFull, {origin:'bottom', distance:'30px', opacity:0, interval:100, duration:1000, viewfactor:0.9});
const numbers = document.querySelectorAll('.number');
    function animateNumber(element, target) {
        let current = 0;
        const duration = 2000; 
        const step = Math.ceil(target / (duration / 16)); 
        function updateNumber() {
            if (current < target) {
                current += step;
                if (current > target) current = target; 
                element.textContent = current + "%"; 
                requestAnimationFrame(updateNumber);
            }
        }
        updateNumber();
    }
    function checkVisibility() {
        numbers.forEach(number => {
            const rect = number.getBoundingClientRect();
            const isVisible = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
            if (isVisible && !number.dataset.animated) {
                number.dataset.animated = true; 
                const target = parseInt(number.dataset.target);
                animateNumber(number, target);
            }
        });
    }
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility);


    //------------------анимация формы регистрации----------------

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const fullContainer = document.getElementById('full-container');
    signUpButton.addEventListener('click', () => {
        fullContainer.classList.add("right-panel-active");
    });
    signInButton.addEventListener('click', () => {
    fullContainer.classList.remove("right-panel-active");
    });
    //----------------------------------------------------------------
};







