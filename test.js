const {
  Youtube,
  Facebook,
  Instagram,
  Twitter,
  Tiktok,
} = require("./src/index.js");

const urlYoutube = [
  "https://www.youtube.com/watch?v=lpoYF9NLGRU1",
  "https://youtu.be/lpoYF9NLGRU2",
  "https://www.youtube.com/embed/lpoYF9NLGRU3",
];

const urlFacebook = [
  "https://fb.watch/gbloE95KGZ/",
  "https://www.facebook.com/watch?v=598643818674249",
];

const urlInstagram = [
  "https://www.instagram.com/reel/Cjwv60epQez/?utm_source=ig_web_copy_link",
  "https://www.instagram.com/p/Cjwv60epQez/",
];

const urlTwitter = [
  "https://twitter.com/jayakabajay/status/1581279044884377602?s=20&t=On07Mpx7xw8hnOawTUpXoA",
  "https://twitter.com/jayakabajay/status/1581279044884377602",
];

const urlTiktok = [
  "https://www.tiktok.com/@officialrcti/video/7142906273170754843?is_from_webapp=v1&item_id=7142906273170754843",
  "https://vm.tiktok.com/ZSRgm9yEn",
  "https://vt.tiktok.com/ZSRgm9yEn",
];

const idYoutube = urlYoutube.map((url) => {
  const id = Youtube(url);
  return id;
});

const idFacebook = urlFacebook.map((url) => {
  const id = Facebook(url);
  return id;
});

const idInstagram = urlInstagram.map((url) => {
  const id = Instagram(url);
  return id;
});

const idTwitter = urlTwitter.map((url) => {
  const id = Twitter(url);
  return id;
});

const idTiktok = urlTiktok.map((url) => {
  const id = Tiktok(url);
  return id;
});

console.log("Id Youtube = ");
console.log(idYoutube);

console.log("Id Facebook = ");
console.log(idFacebook);

console.log("Id Instagram = ");
console.log(idInstagram);

console.log("Id Twitter = ");
console.log(idTwitter);

console.log("Id Tiktok = ");
console.log(idTiktok);
