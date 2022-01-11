AOS.init();

var headings_text = document.querySelectorAll('.wave');

headings_text.forEach(element => {
    element.innerHTML = element.textContent.replace(/\S/g, "<span class='move'>$&</span>");
})


animate_wave();

function animate_wave() {

    for (let i = 0; i < headings_text.length; i++) {

        anime.timeline({ loop: false })
            .add({
                targets: '.wave .move',
                translateY: ["1.1em", 0],
                translateZ: 0,
                duration: 2000,
                opacity: 1,
                delay: (el, i) => 10 * i
            }).add({
                targets: '.wave',
                opacity: 1,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });

    }
}