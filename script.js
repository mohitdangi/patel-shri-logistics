// accordian 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;

        if (pannel.style.display === "block") {
            pannel.style.display = "none";
        } else {
            pannel.style.display = "block";
        }
    });
}
//call
document.getElementById("book-now-button").addEventListener("click", function() {
    window.location.href = "tel:6260036264";
});

//whatsapp

document.getElementById("get-quote-button").addEventListener("click", function() {
    var phoneNumber = "6260036264"; // Replace with the actual phone number
    var instantQuoteMessage = "Thank you for requesting an instant quote! Please tell the location from where to pick and drop our Package";

    var encodedMessage = encodeURIComponent(instantQuoteMessage);
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

    window.open(whatsappUrl, "_blank");
});

document.getElementById("send-whatsapp").addEventListener("click", function() {
    var pickup = document.getElementById("pickupInput").value;
    var drop = document.getElementById("dropInput").value;

    var message = encodeURIComponent("Hi, I want to make a booking. Pickup: " + pickup + ". Drop: " + drop);

    var whatsappUrl = "https://wa.me/6260036264/?text=" + message;

    window.open(whatsappUrl, "_blank");
});

//testimonial
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
