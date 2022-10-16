# GET-URL-ID
This package can extract id from social media url Youtube, Instagram, Tik Tok, Twitter, Facebook

## How To Use
follow the step bellow

### Install
```
npm i get-url-id
```

### Example Code
```
onst getSocialId = require("get-url-id");

const idYoutube = getSocialId.Youtube("https://www.youtube.com/watch?v=O48gok_FLCg");
console.log(idYoutube);

//output 
//{ id : "O48gok_FLCg" }

```

### Full Features
```
getSocialId.Youtube("url")    //output { id : "string" }
getSocialId.Facebook("url")   //output { id : "string" }
getSocialId.Instagram("url")  //output { id : "string" }
getSocialId.Tiktok("url")     //output { id : "string", username : "string" }
getSocialId.Twitter("url")    //output { id : "string", username : "string" }
```

### Suported Url
Youtube Url
```
"https://www.youtube.com/watch?v=lpoYF9NLGRU1"
"https://youtu.be/lpoYF9NLGRU2"
"https://www.youtube.com/embed/lpoYF9NLGRU3"
```

Facebook Url
```
"https://fb.watch/gbloE95KGZ/"
"https://www.facebook.com/watch?v=598643818674249"
```

Instagram Url
```
"https://www.instagram.com/reel/Cjwv60epQez/?utm_source=ig_web_copy_link"
"https://www.instagram.com/p/Cjwv60epQez/"
```

Twitter Url
```
"https://twitter.com/jayakabajay/status/1581279044884377602?s=20&t=On07Mpx7xw8hnOawTUpXoA"
"https://twitter.com/jayakabajay/status/1581279044884377602"
```

Tiktok Url
```
"https://www.tiktok.com/@officialrcti/video/7142906273170754843?is_from_webapp=v1&item_id=7142906273170754843"
"https://vm.tiktok.com/ZSRgm9yEn"
"https://vt.tiktok.com/ZSRgm9yEn"
```
