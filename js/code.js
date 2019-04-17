$('.slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true
});

$('.slides').on('click', '.slick-slide', slideOnClick);


function slideOnClick() {
    const data = this.dataset.src;
    removeSelected();
    this.classList.add("selected");

    let $container = document.getElementById("content-frame");
    $container.innerHTML = "";
    let $el = document.createElement("iframe");
    $el.frameborder = "0";
    $el.src = "https://kekc12361.github.io/"+ data;
    $container.appendChild($el);
}



function removeSelected(){
    let selectedElements = document.getElementsByClassName("selected");
    if (selectedElements.length)
     selectedElements[0].classList.remove("selected");
}

