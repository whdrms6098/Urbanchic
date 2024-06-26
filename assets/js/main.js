gsap.set(`[data-effect="fade"]`, { opacity: 0 });

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
  .to(".sc-intro .content-wrap", {
    xPercent: -100,
    x: function () {
      return window.innerWidth;
    },
  });

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
  },
});
