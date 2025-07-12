
  // قائمة النصوص مع سرعات مختلفة (بالثواني)
  const texts = [
    { content: 'تطبيق فريد بكل ما تحمله الكلمة من معنى جعل من المستحيل ممكن شكرا على جهودكم التي لا تقدر بثمن', speed: 20 },
    { content: 'تطبيقات جميله جدا وفيها مميزات كثيرة ومفيدة انصح الجميع بتنزيله', speed: 25 },
    { content: 'جميل وجذاب ومفيد جدا انصح الجميع بتنزيله واستخدامه', speed: 15 },
    { content: 'اجمل تطبيق شفته بحياتي انصح الجميع بتثبيته واستخدامه', speed: 17 },
  ];

  const container = document.getElementById('marqueeContainer');

  // إضافة النصوص إلى الحاوية
  texts.forEach(item => {
    const div = document.createElement('div');
    div.className = 'marquee';
    div.innerText = item.content;
    // ضبط مدة الحركة بناءً على السرعة
    div.style.animationDuration = item.speed + 's';
    container.appendChild(div);
  });
  // وظيفة لعرض التنبيه
  function showAlert() {
    document.getElementById('alertBox').style.display = 'block';
  }

  // وظيفة لإغلاق التنبيه
  function hideAlert() {
    document.getElementById('alertBox').style.display = 'none';
  }

let index = 0;
let index2 = 0;
const images2 = document.getElementById('images');
const images3 = document.getElementById('images2');
const totalImages = 5; // Adjust based on number of images
const totalImages2 = 4; // Adjust based on number of images
function moveLeft() {
    index = (index > 0) ? index - 1 : totalImages - 1;
    index2 = (index2 > 0) ? index2 - 1 : totalImages2 - 1;
    updateCarousel();
}

function moveRight() {
    index = (index < totalImages - 1) ? index + 1 : 0;
    index2 = (index2 < totalImages2 - 1) ? index2 + 1 : 0;
    updateCarousel();
}

function updateCarousel() {
    images2.style.transform = 'translateX(' + (-index * 100) + '%)';
    images3.style.transform = 'translateX(' + (-index2 * 100) + '%)';
}

setInterval(moveRight, 4000); // Auto move every 3 seconds

  const images = [
    'img/Picsart_25-07-12_12-20-11-642.png',
    'img/Picsart_25-02-08_01-20-48-696.png',
    'img/Picsart_25-07-12_12-19-52-540.png'
  ];

  const slideshow = document.getElementById('slide1');
  let currentIndex = 0;
  let nextIndex = 1;

  // إعداد الصورة الأولى
  slideshow.style.backgroundImage = `url(${images[currentIndex]})`;

  function changeImage() {
    // إعداد الصورة التالية
    slideshow.style.opacity = 0; // إخفاء الصورة تدريجيًا
    setTimeout(() => {
      // تغيير الصورة
      slideshow.style.backgroundImage = `url(${images[nextIndex]})`;
      slideshow.style.opacity = 1; // إظهار الصورة الجديدة تدريجيًا
    }, 1000); // مدة الانتقال (1 ثانية)

    // تحديث الفهرس
    currentIndex = nextIndex;
    nextIndex = (nextIndex + 1) % images.length;
  }

  // تغيير الصورة كل 5 ثوانٍ
  setInterval(changeImage, 5000);

  function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("open");
  }
