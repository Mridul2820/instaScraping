const puppeteer = require('puppeteer');

// const formImg = document.getElementById('form-img');
// const formReel = document.getElementById('form-reel');
// const formVideo = document.getElementById('form-video');
// const formIgtv = document.getElementById('form-igtv');

// const searchImg = document.getElementById('search-img');
// const searchreel = document.getElementById('search-reel');
// const searchVideo = document.getElementById('search-video');
// const searchIgtv = document.getElementById('search-igtv');

// Image 
async function scrapeImage(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Image
    const [el] = await page.$x('//*[@id="react-root"]/section/main/div/div[1]/article/div[2]/div/div/div[1]/img');
    const imgSrc = await el.getProperty('src');
    const imageURL = await imgSrc.jsonValue();


    console.log({imageURL});

    browser.close();
}

scrapeImage('https://www.instagram.com/p/CIIjvBiAtf2/');
scrapeImage('https://www.instagram.com/p/CILKyeKrCSz/');

// Image Form Event Listner
// formImg.addEventListener('submit', e => {
//     e.preventDefault();

//     const GetImg = searchImg.value.trim();

//     if (!GetImg) {
//         alert('Type Something');
//     }

//     else {
//         scrapeImage(GetImg);
//     }
// })








// // Video
// async function scrapeVideo(url) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);

//     // Video
//     const [el] = await page.$x('//*[@id="react-root"]/section/main/div/div[1]/article/div[2]/div/div/div[1]/div/div/video');
//     const VdoSrc = await el.getProperty('src');
//     const videoURL = await VdoSrc.jsonValue();

//     console.log({videoURL});

//     browser.close();
// }

// scrapeVideo('https://www.instagram.com/p/CIIm3JOh3IY/');
// scrapeVideo('https://www.instagram.com/reel/CILCIYtn2ZR/');




// // IGVideo
// async function scrapeIGVideo(url) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);

//     // IGVideo
//     const [el] = await page.$x('//*[@id="react-root"]/section/main/div/div[1]/article/div[2]/div/div/div/div/div/video');
//     const VdoIGSrc = await el.getProperty('src');
//     const videoIGURL = await VdoIGSrc.jsonValue();

    
//     console.log({videoIGURL});

//     browser.close();
// }

// scrapeIGVideo('https://www.instagram.com/tv/CHw7NYqKRgm/');


// // Caption
// async function scrapeCaption(url) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);

//     // Caption
//     const [el] = await page.$x('/html/body/div[1]/section/main/div/div[1]/article/div[3]/div[1]/ul/div/li/div/div/div[2]/span');
//     const caption = await el.getProperty('textContent');
//     const captionTxt = await caption.jsonValue();


//     console.log({captionTxt});

//     browser.close();
// }

// scrapeCaption('https://www.instagram.com/p/CIIm3JOh3IY/');
