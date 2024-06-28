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

    //이질감 스크롤?
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
      // markers: true,
      invalidateOnRefresh: true,
      // onUpdate: function (self) {
      //   const direction = self.direction;
      //   if (direction == 1) {
      //     gsap.to(".sc-interior .group-interior .item-title", { x: -50 });
      //   } else {
      //     gsap.to(".sc-interior .group-interior .item-title", { x: +50 });
      //   }
      // },

      //이질감 스크롤?
    },
  })
  .to(".sc-interior .interior-list", {
    xPercent: -100,
    x: function () {
      return window.innerWidth;
    },
  });

$(`.sc-member .group-header [data-effect="y-move"]`).each(function (index) {
  const member = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sc-member",
        start: "0% 90%",
        end: "10% 60%",
        scrub: 0,
        // markers: true,
      },
    })
    .to($(this), { yPercent: 0, delay: index * 0.1 });
});

const orderInterior1 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-order-interior .group-img",
      start: "-20% 60%",
      end: "100% 100%",
      scrub: 0,
      // markers: true,
    },
  })
  .to(".sc-order-interior .group-img", 2, { yPercent: -50 });

const orderInterior2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-order-interior .group-slide",
      start: "0% 0",
      end: "100% 100%",
      scrub: 0,
      // markers: true,
      invalidateOnRefresh: true,
    },
  })
  .to(".sc-order-interior .group-slide .video-area", { scale: 3.5 }, "slide")
  .to(
    `.sc-order-interior .group-slide [data-effect="x-move"]`,
    { xPercent: 0 },
    "slide+=.25"
  )
  .to(".sc-order-interior .group-slide .content-wrap", {
    xPercent: -100,
    x: function () {
      return window.innerWidth;
    },
  });

const interiorImg1 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-order-interior .group-interior .bg-area img:nth-child(2)",
      start: "0% 80%",
      end: "80% 90%",
      scrub: 0,
      // markers: true,
    },
  })
  .to(".sc-order-interior .group-interior .img-box1", { height: 0 });

const interiorImg2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-order-interior .group-interior .bg-area img:nth-child(3)",
      start: "0% 80%",
      end: "80% 90%",
      scrub: 0,
      // markers: true,
    },
  })
  .to(".sc-order-interior .group-interior .img-box2", { height: 0 });

const interiorText1 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-order-interior .group-interior .bg-area img:nth-child(2)",
      start: "0% 55%",
      end: "50% 55%",
      scrub: 0,
      // markers: true,
    },
  })
  .to(".sc-order-interior .group-interior .text-box1", { height: 0 }, "text")
  .to(".sc-order-interior .group-interior .text-box2", { height: 150 }, "text");

const interiorText2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-order-interior .group-interior .bg-area img:nth-child(3)",
      start: "0% 55%",
      end: "80% 90%",
      scrub: 0,
      // markers: true,
    },
  })
  .to(".sc-order-interior .group-interior .text-box2", { height: 0 }, "text")
  .to(".sc-order-interior .group-interior .text-box3", { height: 150 }, "text");

const textBg = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-visual",
      start: "0% 50%",
      end: "100% 100%",
      endTrigger: "#footer",
      scrub: 0,
      // markers: true,
    },
  })
  .to(`.sc-visual [data-effect="y-move"]`, { yPercent: 0 });

$(".sc-visual, #footer").mousemove(function (e) {
  const x = (20 * e.clientX) / $(".sc-visual").width();
  const y = (10 * e.clientY) / $(".sc-visual").height();

  $(".sc-visual .img-box").css("transform", `translate(${x}px, -${y}px)`);
});
