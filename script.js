const burger = document.querySelector('nav svg')

burger.addEventListener('click', () => {
    if(burger.classList.contains('active')){
        gsap.to('.links', {x: '100%'});
        gsap.to('.line', {stroke: "white"});
        gsap.set('body', {overflow: "auto"})
        gsap.set('body', {overflowX: "hidden"})
    }else{
        gsap.to('.links', {x: '0%'});
        gsap.to('.links a', {fontSize: 30});
        gsap.fromTo(
            '.links a',
            {opacity: 0, y:0},
            {opacity: 1, y:20, delay:0.20, stagger: 0.20});
        gsap.set('body', {overflow: "hidden"})
    }
    burger.classList.toggle("active");
});

const videos = gsap.utils.toArray('.video');
const legends = gsap.utils.toArray('.legend');

gsap.set(videos, { opacity: 0 });
gsap.set(legends, { opacity: 0 });

videos.forEach((video, index) => {
    const legend = legends[index];

    ScrollTrigger.create({
        trigger: video,
        start: "top center",
        end: "bottom center",
        
        onEnter: () => {
            gsap.to([video, legend], { opacity: 1 });
            video.play();
        },
        onEnterBack: () => video.play(),
        onLeave: () => video.pause(),
        onLeaveBack: () => video.pause(),
    });
});


