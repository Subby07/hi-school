// menu bar
let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick= () =>{
    navbar.classList.add('active');
}
document.querySelector('#close-navbar').onclick= () =>{
    navbar.classList.remove('active');
};

// login form
let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () =>{
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
};
loginBtn.onclick = () =>{
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
};


let accountForm = document.querySelector('.account-form')

document.querySelector('#account-btn').onclick= () =>{
    accountForm.classList.add('active');
}
document.querySelector('#close-form').onclick= () =>{
    accountForm.classList.remove('active');
};


//swiper

var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    loop:true,
    grabCusor:true,
  });

var swiper = new Swiper(".home-courses-slider", {
    loop:true,
    grabCusor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });

var swiper = new Swiper(".teachers-slider", {
    loop:true,
    grabCusor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCusor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  });

var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCusor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
  });


  //load more button

  document.querySelector('.load-more .btn').onclick = () =>{
    document.querySelectorAll('.courses .box-container .hide').forEach(show =>{
      show.style.display = 'block';
    });
    document.querySelector('.load-more .load-btn').style.display = 'none';
  };


 

  