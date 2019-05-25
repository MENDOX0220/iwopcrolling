const cheerio = require('cheerio')
const axios = require('axios')

axios.get("https://playoverwatch.com/ko-kr/heroes#all")
.then(data=>{
    var $ = cheerio.load(data.data)
     $("span.portrait-title").each((idx,ele)=>{
         console.log(ele.children[0].data)

     })
//     $("h2>.mw-headline").each((idx,ele)=>{
//         console.log(ele.children[0].data)
//         console.ele(Str)
//     })
 })