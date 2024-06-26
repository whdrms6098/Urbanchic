gsap.set(`[data-effect="fade"]`, { opacity: 0 });
gsap.set(`[data-effect="x-move"]`, { xPercent: 100 });
gsap.set(`[data-effect="y-move"]`, { yPercent: 100 });

const artText = gsap.timeline({});

$(".group-art .title-area span").each(function () {
  artText.to($(this), { y: 0, duration: 0.2 });
});

const artSubText = gsap.timeline({
  delay: 0.5,
});

$(".group-art .sub-title-area span").each(function () {
  artSubText.to($(this), { y: 0, duration: 0.2 });
});

artSubText.to(".group-art .desc-area p", { opacity: 1, duration: 1 }, "-=1.25");

artSubText.to(".group-slide .img-area img", { scale: 1, duration: 1 }, "-=1.5");

const introBg = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-intro .group-art",
      start: "0% 0%",
      end: "100% 100%",
      endTrigger: ".sc-intro .group-slide .img-area",
      scrub: 0,
      //   markers: true,
    },
  })
  .to(".group-slide", { padding: 0 });

const groupSlide = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-intro .group-slide",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
      //   markers: true,
      invalidateOnRefresh: true,
    },
  })
  .to(
    ".sc-intro .content-wrap",
    1,
    {
      xPercent: -100,
      x: function () {
        return (
          $(".sc-intro .area1").outerWidth() -
          $(".sc-intro .wander-img").outerWidth()
        );
        //wander-img 넓이 값만큼 빼야 되는 이유?
      },
    },
    "bg"
  )
  .to(".sc-intro .wander-img", { xPercent: -100 }, "bg")
  .to(".sc-intro .img-area img", { scale: 0.84 }, "bg")
  .to(".sc-intro .text-area-bg", { width: "100%" })
  .to(
    ".sc-intro .content-wrap",
    {
      xPercent: -100,
      x: function () {
        return window.innerWidth;
      },
    },
    "text"
  )
  .to(`.sc-intro .area2 [data-effect="x-move"]`, { xPercent: 0 }, "text");

const groupGallery = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-intro .group-gallery",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
    onEnter: function () {
      gsap.set(`[data-effect="fade"]`, { opacity: 1 });
      $(".sc-intro .area2 .gallery-area").addClass("remove");
    },
    onLeaveBack: function () {
      gsap.set(`[data-effect="fade"]`, { opacity: 0 });
      $(".sc-intro .area2 .gallery-area").removeClass("remove");
    },
    // onUpdate: function (self) {
    //   const direction = self.direction;
    //   if (direction == 1) {
    //     gsap.to(".group-gallery .img-item img", { y: +50 });
    //   } else {
    //     gsap.to(".group-gallery .img-item img", { y: -50 });
    //   }
    // },
  },
});

$(`.sc-order .group-call [data-effect="y-move"]`).each(function (index) {
  console.log($(this));
  const call = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sc-order",
        start: "0% 80%",
        end: "50% 100%",
        scrub: 0,
        // markers: true,
      },
    })
    .to($(this), { yPercent: 0, delay: index * 0.1 });
});

$(`.sc-order .group-order [data-effect="y-move"]`).each(function (index) {
  const order = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sc-order",
        start: "50% 80%",
        end: "100% 100%",
        scrub: 0,
        // markers: true,
      },
    })
    .to($(this), { yPercent: 0, delay: index * 0.1 });
});

const interior = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".group-interior",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
      markers: true,
    },
  })
  .to(".sc-interior .interior-list", { xPercent: -100 });
