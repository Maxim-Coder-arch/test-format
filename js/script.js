//--------------анимация прокрутки галереи-------------------
window.addEventListener('load', ()=> {
    const imageCon = document.querySelector(".image-container");
            const prevEl = document.getElementById("prev");
            const nextEl = document.getElementById("next");
            let x = 0;
            let timer = 0;
            function updateImage() {
                imageCon.style.transform = `perspective(1000px) rotateY(${x}deg)`;
                timer = setTimeout(() => {
                    x = x - .1;
                    updateImage();
                }, 0);
            }
    updateImage();
});