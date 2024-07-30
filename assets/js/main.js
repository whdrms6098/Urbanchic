const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 800);
});

gsap.ticker.lagSmoothing(0);

const visualText1 = new SplitType(".sc-intro .sub-title-area", {
  types: "words, chars",
});
const visualText2 = new SplitType(".sc-intro .title-area", {
  types: "words, chars",
});

const introTl = gsap.timeline({});
introTl.from(
  ".group-art .sub-title-area .char",
  { yPercent: 100, duration: 0.2, stagger: 0.1 },
  "a"
);
introTl.from(
  ".group-art .title-area .char",
  { yPercent: 100, duration: 0.2, stagger: 0.1 },
  "a"
);
introTl.to(".group-art .desc-area p", { opacity: 1, duration: 1 }, "a");
introTl.fromTo(".group-slide .img-area img", { scale: 1.2 }, { scale: 1, duration: 1 }, "a");

let mm = gsap.matchMedia();
mm.add("(min-width: 1000px)", () => {
  gsap.set(`[data-effect="fade"]`, { opacity: 0 });
  gsap.set(`[data-effect="x-move"]`, { xPercent: 100 });
  gsap.set(`[data-effect="y-move"]`, { yPercent: 100 });
  gsap.defaults({
    ease: "none",
  });

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
      {
        x: function () {
          return -$(".sc-intro .area1").outerWidth() + window.innerWidth;
        },
      },
      "bg"
    )
    .fromTo(".sc-intro .img-area img", { scale: 1 }, { scale: 0.84 }, "bg")
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
    .to(".sc-intro .area2 .text-list", { yPercent: -100 }, "list")
    .to(
      ".sc-intro .area2 .img-list",
      {
        yPercent: -100,
        y: function () {
          return window.innerHeight;
        },
      },
      "list+=0.04"
    )
    .to(".sc-intro .area2 .img-item", { y: -200 }, "list+=0.06");

  gsap.to(".wander-img figure", {
    xPercent: -250,
    scrollTrigger: {
      trigger: ".sc-intro .group-slide .wander-img",
      containerAnimation: groupSlide,
      start: "left 100%",
      end: "left 0%",
      scrub: 0,
      ease: "none",
      // markers:true,
    },
  });

  gsap.fromTo(
    ".gallery-area .img-list",
    {
      x: 300,
    },
    {
      scrollTrigger: {
        trigger: ".sc-intro .group-slide .gallery-area",
        containerAnimation: groupSlide,
        start: "left 100%",
        end: "left 80%",
        scrub: 0,
        // markers: true,
      },
      x: 0,
    }
  );

  gsap.fromTo(
    ".sc-order .bg",
    {
      yPercent: -20,
    },
    {
      scrollTrigger: {
        trigger: ".sc-order",
        start: "0% 100%",
        end: "100% 0%",
        scrub: 0,
      },
      yPercent: 20,
    }
  );

  gsap.to('.sc-order .group-call [data-effect="y-move"]', {
    scrollTrigger: {
      trigger: ".sc-order .title-area",
      start: "0% 80%",
      end: "100% 80%",
      scrub: 0,
      // markers: true,
    },
    yPercent: 0,
    stagger: 0.01,
  });

  gsap.to(`.sc-order .group-order [data-effect="y-move"]`, {
    scrollTrigger: {
      trigger: ".sc-order",
      start: "50% 80%",
      end: "100% 100%",
      scrub: 0,
      // markers: true,
    },
    yPercent: 0,
    stagger: 0.01,
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
      },
    })
    .to(".sc-interior .interior-list", {
      xPercent: -100,
      x: function () {
        return window.innerWidth;
      },
    });

  gsap.to('.sc-member .group-header [data-effect="y-move"]', {
    scrollTrigger: {
      trigger: ".sc-member",
      start: "0% 90%",
      end: "10% 60%",
      scrub: 0,
      // markers: true,
    },
    yPercent: 0,
    y: 0,
    stagger: 0.01,
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
});

mm.add("(max-width:1000px)", () => {
  gsap.set(`[data-effect="fade"]`, { opacity: 1 });
  gsap.set(`[data-effect="x-move"]`, { xPercent: 0 });
  gsap.set(`[data-effect="y-move"]`, { yPercent: 0, y: 0 });
})

interiorList = gsap.timeline({
  scrollTrigger: {
    trigger: '.bg-area',
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
  },
})
interiorList.to('.sc-order-interior .group-interior .area1', {
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
}, 'a');
interiorList.to('.sc-order-interior .group-interior .area2', {
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
}, 'a');
interiorList.to('.sc-order-interior .group-interior .area2', {
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
}, 'b');
interiorList.to('.sc-order-interior .group-interior .area3', {
  "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
}, 'b');

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

  gsap.to(".sc-visual .img-box", { x: x, y: y })
});

$(".menu-btn").click(function () {
  $("#header .gnb").toggleClass("active");
  $(this).find("span.close").toggleClass("active");
  $(this).find("span.open").toggleClass("remove");
});

$("#header .gnb-item").each(function (index) {
  const targetIndex = index;

  $(this).click(function () {
    gsap.to(window, {
      duration: 0.7,
      scrollTo: { y: `#sc${targetIndex + 1}` },
    });

    $("#header .gnb").removeClass("active");
    $("#header .menu-btn span.close").removeClass("active");
    $("#header .menu-btn span.open").removeClass("remove");
  });
});

$(document).click(function (e) {
  if (!$("#header .gnb, .menu-btn").has(e.target).length) {
    $("#header .gnb").removeClass("active");
    $("#header .menu-btn span.close").removeClass("active");
    $("#header .menu-btn span.open").removeClass("remove");
  }

  if (
    !$(
      ".interior-side .group-side, .sc-interior .group-interior .interior-box .interior-item"
    ).has(e.target).length
  ) {
    lenis.start();
    $(".interior-side .group-side").removeClass("active");
    setTimeout(() => {
      $(".interior-side").removeClass("active");
      $("body").removeClass("active");
      $(`.interior-side [data-room*="room"]`).css("display", "none");
    }, 1200);
  }
});

$(".sc-interior .group-interior .interior-item").click(function () {
  const room = $(this).data("room");
  lenis.stop();
  
  $(".wrapper").css("display", "none");
  
  const targetElement = $(`.wrapper[data-room="${room}"]`);
  targetElement.css("display", "block");
  
  $(".interior-side").addClass("active");
  $("body").addClass("active");
  
  $('.interior-side').scrollTop(0);
  
  setTimeout(() => {
    $(".group-side").addClass("active");
  }, 300);
});

$(".interior-side .side-close").click(function () {
  lenis.start();
  $(".interior-side .group-side").removeClass("active");
  setTimeout(() => {
    $(".interior-side").removeClass("active");
    $("body").removeClass("active");
    $(`.interior-side [data-room*="room"]`).css("display", "none");
  }, 1200);
});
