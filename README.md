# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo).

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![Mobile](./screenshots/mobile.png)
![Desktop](./screenshots/desktop.png)

### Links

- Solution URL: [Single-page design portfolio](https://github.com/sonny-coding/single-page-design-portfolio)
- Live Site URL: [Vercel](https://single-page-design-portfolio-three.vercel.app/)

### Built with

- Mobile-first workflow
- Vite
- Tailwindcss
- Swiper

### What I learned

- Create an image carousel with swiper

```jsx
<Swiper
  initialSlide={1}
  slidesPerView={"auto"}
  centeredSlides={true}
  spaceBetween={30}
  loop={true}
  navigation={{
    prevEl: ".prev",
    nextEl: ".next",
  }}
  grabCursor={true}
  breakpoints={{
    1024: {
      slidesPerView: 3,
    },
  }}
  modules={[Navigation]}
  className="mySwiper"
>
  <SwiperSlide>
    <img src={Image1} alt="image1" />
  </SwiperSlide>
  ...
  <div className="mx-auto mt-4 flex justify-center items-center gap-2">
    <div className="prev">
      <SliderButton>
        <ArrowLeft />
      </SliderButton>
    </div>
    <div className="next">
      <SliderButton>
        <ArrowRight />
      </SliderButton>
    </div>
  </div>
</Swiper>
```

### Author

- Github - [sonny-coding](https://github.com/sonny-coding)
- Twitter - [@sonnyConnect](https://twitter.com/sonnyConnect)
