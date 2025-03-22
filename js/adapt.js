window.addEventListener('load', ()=> {main1()});

function main1() {

  //------------создадим бургер-меню--------------------
  
  const burgerIcon = document.getElementById('burgerIcon');
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('overlay');
  burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('open');
    menu.classList.toggle('open');
    overlay.classList.toggle('active');
  });
  overlay.addEventListener('click', () => {
    burgerIcon.classList.remove('open');
    menu.classList.remove('open');
    overlay.classList.remove('active');
  });
  
  
  //----------------график для мобильных устройств-----------------
  
  const ctx = document.getElementById('hotelChart').getContext('2d');

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Гранд Палас', 'Изумрудный', 'Тихий дворик', 'Урбан Лофт'],
                datasets: [{
                    label: 'Популярность отелей',
                    data: [70, 75, 90, 75],
                    backgroundColor: ['#E3CDA8', '#0000009a', '#000', '#0000009a'], // Тёмные цвета
                    borderColor: '#000',
                    borderWidth: 2,
                    cutout: '50%' // Отверстие в центре
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#000',
                            font: {
                                size: 14
                            }
                        }
                    },
                    datalabels: {
                        color: '#fff',
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        backgroundColor: 'rgba(20, 20, 20, 0.8)', // Тёмный фон у процентов
                        borderRadius: 5,
                        padding: 6,
                        formatter: (value) => value + '%'
                    }
                }
            },
            plugins: [ChartDataLabels]
        });
};





//---------------мобильная форма регистрации--------------------------
    
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.setAttribute('novalidate', 'novalidate');
    });

    const links = document.querySelectorAll('.panel__link, .form__retrieve-pass');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href === '#password-form') {
                const headers = document.querySelectorAll('.panel__header');
                headers.forEach(function(header) {
                    header.classList.remove('active');
                });
            } else {
                link.parentElement.classList.add('active');
                const siblings = link.parentElement.parentElement.children;
                Array.from(siblings).forEach(function(sibling) {
                    if (sibling !== link.parentElement) {
                        sibling.classList.remove('active');
                    }
                });
            }
            const target = document.querySelector(href);
            const formsContainer = document.querySelector('.panel__forms');
            const allForms = formsContainer.querySelectorAll('form');
            allForms.forEach(function(form) {
                if (form !== target) {
                    form.style.display = 'none';
                }
            });
            target.style.display = 'block';
            target.style.opacity = 0;
            setTimeout(function() {
                target.style.transition = 'opacity 0.5s';
                target.style.opacity = 1;
            }, 0);
        });
    });
    const prevButtons = document.querySelectorAll('.panel__prev-btn');
    prevButtons.forEach(function(prevBtn) {
        prevBtn.addEventListener('click', function() {
            const panels = document.querySelectorAll('.panel, .panel_blur');
            panels.forEach(function(panel) {
                panel.style.display = 'none';
            });
        });
    });
});
function validateForm() {
    const forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            const inputs = form.querySelectorAll('input');
            inputs.forEach(function(input) {
                if (input.required && !input.value) {
                    isValid = false;
                    const errorElement = document.createElement('div');
                    errorElement.classList.add('form__error');
                    errorElement.textContent = 'This field is required';
                    input.parentElement.appendChild(errorElement);
                }
            });

            if (isValid) {
                form.submit();
            }
        });
    });
}
validateForm();