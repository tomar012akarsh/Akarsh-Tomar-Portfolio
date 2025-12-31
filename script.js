$(document).ready(function () {

// sticky navbar & scroll-up button
$(window).scroll(function () {
    if (this.scrollY > 20) {
        $('.navbar').addClass("sticky");
    } else {
        $('.navbar').removeClass("sticky");
    }

    if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass("show");
    } else {
        $('.scroll-up-btn').removeClass("show");
    }
});

$('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function () {
    $('html').css("scrollBehavior", "smooth");
});

$('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

// typing animations
var typed = new Typed(".typing", {
    strings: ["Software Engineer", "Backend Engineer", "Full Stack Developer", "AI & ML Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed2 = new Typed(".typing-2", {
    strings: ["Software Engineer at MiQ", "Spring Boot Developer", "AWS & DevOps Engineer", "Data Science & AI Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// owl carousel
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 1, nav: false },
        600: { items: 2, nav: false },
        1000: { items: 3, nav: false }
    }
});

// CONTACT FORM EMAIL SENDING
$('#contact-form').off('submit').on('submit', function (e) {
    e.preventDefault(); // prevent default form submission

    const $form = $(this);
    const $submitBtn = $form.find('button[type="submit"]');

    // Disable the submit button to prevent double submission
    $submitBtn.prop('disabled', true);

    emailjs.sendForm(
        'service_eik7n9o',  // Your service ID
        'template_1upze56', // Your template ID
        this
    ).then(function () {
        alert("Message sent successfully!");
        $form[0].reset();
        $submitBtn.prop('disabled', false); // re-enable button
    }, function (error) {
        alert("Failed to send message. Please try again.");
        console.error(error);
        $submitBtn.prop('disabled', false); // re-enable button
    });
});

});
