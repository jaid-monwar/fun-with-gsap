function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");

  var clutter = "";

  var halfLength = Math.floor(splittedText.length / 2);

  //   console.log(halfLength);

  splittedText.forEach(function (e, i) {
    // clutter += `<span class="a">${e}</span>`;
    if (i < halfLength) {
      clutter += `<span class="l-to-r">${e}</span>`;
    } else {
      clutter += `<span class="r-to-l">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

// gsap.from("h1 span", {
//   y: 50,
//   opacity: 0,
//   duration: 0.8,
//   delay: 0.5,
//   stagger: 0.15,
// });

gsap.from("h1 .l-to-r", {
  y: 50,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
  opacity: 0,
});
gsap.from("h1 .r-to-l", {
  y: 50,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
  opacity: 0,
});
