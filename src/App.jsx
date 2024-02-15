import './App.css'

function App() {

  return (
    <>
         {/* NAVBAR  */}
        <nav>
  <div className="container nav_container">
    <a href="#"><h4>WEB.</h4></a>
    <ul className="nav_menu">
      <li><a href="index.html">Home</a></li>
      <li><a href="index.html">About</a></li>
      <li><a href="index.html">Courses</a></li>
      <li><a href="index.html">Contact</a></li>
    </ul>
    <button id="open-menu-btn"><i className="fa-solid fa-bars"></i></button>
    <button id="close-menu-btn"><i className="fa-solid fa-xmark"></i></button>
  </div>
</nav>

     {/* <!-- HEADER START  -->  */}
     
    <header>
  <div className="container header_container">
    <div className="header_left">
      <h1>Web Desingner.</h1>
      <p>Hello Web Addicted! Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.</p>
      <a href="courses.html" className="btn btn-primary">Get Started</a>
    </div>
    <div className="header_right">
      <div className="header_right-img">
        <img src="./images/main.png" alt="" />
      </div>
    </div>
  </div>
</header>
{/* <!-- Categories start  --> */}

     <section class="categories">
        <div class="container categories_container">
            <div class="categories_left">
                <h1>Categories</h1>
                <p>That's fantastic! Covering HTML, CSS, and JavaScript is a great way to address the fundamental building blocks of web development. These languages are essential for creating dynamic and visually appealing websites.</p>
                <a href="#" class="btn">Learn More</a>
            </div>

            <div class="categories_right">
                
                <article class="category">
                    <span class="category_icon"><i class="fa-brands fa-bitcoin"></i></span>
                    <h5>HTML</h5>
                    <p> HTML is the standard markup language for creating Web pages ! </p>
                </article>

                <article class="category">
                    <span class="category_icon"><i class="fa-brands fa-bitcoin"></i></span>
                    <h5>CSS</h5>
                    <p>CSS is unique in that it doesn't create any new elements, like HTML or JavaScript !</p>
                </article>

                <article class="category">
                    <span class="category_icon"><i class="fa-brands fa-bitcoin"></i></span>
                    <h5>JavaScript</h5>
                    <p>JavaScript is a scripting language used to create and control dynamic website content</p>
                </article>

                <article class="category">
                    <span class="category_icon"><i class="fa-brands fa-bitcoin"></i></span>
                    <h5>React</h5>
                    <p>React is a JavaScript-based UI development library</p>
                </article>

                <article class="category">
                    <span class="category_icon"><i class="fa-brands fa-bitcoin"></i></span>
                    <h5>Node js</h5>
                    <p>Node.js is an Open Source, cross-platform runtime environment for executing JavaScript code.</p>
                </article>

                <article class="category">
                    <span class="category_icon"><i class="fa-brands fa-bitcoin"></i></span>
                    <h5>Next Js</h5>
                    <p>Next.js is a React framework for building full-stack web applications !</p>
                </article>

            </div>
        </div>
     </section>

     {/* <!-- COURSES PAGE START  --> */}

     <section className="courses">
  <h2>Our Popular Courses</h2>
  <div className="container courses__container">
    <article className="course">
      <div className="course__image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9DCNeiPopxyl7wVsIvY78syh8Yihq6f4yw&usqp=CAU" alt="" />
      </div>
      <div className="course__info">
        <h4>Master HTML</h4>
        <p>HTML (Hypertext Markup Language) is the foundation of web development, providing the structure and semantics for content on the internet.</p>
        <a href="" className="btn btn-primary">Learn More</a>
      </div>
    </article>
    <article className="course">
      <div className="course__image">
        <img src="https://m.media-amazon.com/images/I/41PJbNP9JEL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFOUR%2CBottomLeft%2C360%2C-6_SR600%2C315_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg" alt="" />
      </div>
      <div className="course__info">
        <h4>Become CSS Expert</h4>
        <p>CSS (Cascading Style Sheets) enhances the presentation of HTML by styling elements, creating visually appealing and responsive web pages.</p>
        <a href="" className="btn btn-primary">Learn More</a>
      </div>
    </article>
    <article className="course">
      <div className="course__image">
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230809133232/JavaScript-Complete-Guide-copy-2.webp" alt="" />
      </div>
      <div className="course__info">
        <h4>Become Javascript Champion</h4>
        <p>JavaScript is a versatile programming language that adds interactivity and dynamic behavior to web pages, making them more engaging for users.</p>
        <a href="" className="btn btn-primary">Learn More</a>
      </div>
    </article>
  </div>
</section>

     {/* <!-- QUESTIONS TAB START --> */}

     <section class="faqs">
        <h2>Frequently Asked Questions</h2>
        <div class="container faqs__container">
            <article class="faq">
                <div class="faq__icon">
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Questions no. 1</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vitae, provident explicabo voluptates voluptas assumenda maxime ipsa, animi nulla exercitationem praesentium perspiciatis mollitia. Mollitia modi adipisci, itaque dicta numquam eaque.</p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Questions no. 2</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vitae, provident explicabo voluptates voluptas assumenda maxime ipsa, animi nulla exercitationem praesentium perspiciatis mollitia. Mollitia modi adipisci, itaque dicta numquam eaque.</p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Questions no. 3</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vitae, provident explicabo voluptates voluptas assumenda maxime ipsa, animi nulla exercitationem praesentium perspiciatis mollitia. Mollitia modi adipisci, itaque dicta numquam eaque.</p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Questions no. 4</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vitae, provident explicabo voluptates voluptas assumenda maxime ipsa, animi nulla exercitationem praesentium perspiciatis mollitia. Mollitia modi adipisci, itaque dicta numquam eaque.</p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Questions no. 5</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vitae, provident explicabo voluptates voluptas assumenda maxime ipsa, animi nulla exercitationem praesentium perspiciatis mollitia. Mollitia modi adipisci, itaque dicta numquam eaque.</p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Questions no. 6</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vitae, provident explicabo voluptates voluptas assumenda maxime ipsa, animi nulla exercitationem praesentium perspiciatis mollitia. Mollitia modi adipisci, itaque dicta numquam eaque.</p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Questions no. 7</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vitae, provident explicabo voluptates voluptas assumenda maxime ipsa, animi nulla exercitationem praesentium perspiciatis mollitia. Mollitia modi adipisci, itaque dicta numquam eaque.</p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Questions no. 8</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vitae, provident explicabo voluptates voluptas assumenda maxime ipsa, animi nulla exercitationem praesentium perspiciatis mollitia. Mollitia modi adipisci, itaque dicta numquam eaque.</p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Questions no. 9</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vitae, provident explicabo voluptates voluptas assumenda maxime ipsa, animi nulla exercitationem praesentium perspiciatis mollitia. Mollitia modi adipisci, itaque dicta numquam eaque.</p>
                </div>
            </article>

            <article class="faq">
                <div class="faq__icon">
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div class="question__answer">
                    <h4>Questions no. 10</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vitae, provident explicabo voluptates voluptas assumenda maxime ipsa, animi nulla exercitationem praesentium perspiciatis mollitia. Mollitia modi adipisci, itaque dicta numquam eaque.</p>
                </div>
            </article>

        </div>
     </section>

     {/* <!--  FEEDBACK  PAGE  START  --> */}

     <section class="container testimonials__container mySwiper">
        <h2>Viewers Feedback</h2>
        <div class="swiper-wrapper">
            <article class="testimonial swiper-slide">
                <div class="avatar">
                    <img src="https://media.istockphoto.com/id/1326992705/photo/portrait-of-young-indian-businessman-freelancer-looking-t-camera-with-smile.jpg?s=612x612&w=0&k=20&c=orGn0kjzb6lRBBLvFc8tm5Lem5SIfoL_txxnOsmd8ck=" alt=""/>
                </div>
                <div class="testimonial__info">
                    <h5>Rahul</h5>
                    <small>Student</small>
                </div>
                <div class="testimonial__body">
                    <p>Your ability to work across teams and departments is a strength not everyone has. I'm impressed with the way you're working to dismantle silos. For example, when you drew the marketing team into our conversations, it sharpened our ideas and helped us meet goals faster. Keep up the good work</p>
                </div>
            </article>
            <article class="testimonial swiper-slide">
                <div class="avatar">
                    <img src="https://media.istockphoto.com/id/155288041/photo/indian-girl-in-the-university.jpg?s=612x612&w=0&k=20&c=OPg_GzXdIMZ3btYu61HX79KxSBe7A6BYPSYYknNBafQ=" alt=""/>
                </div>
                <div class="testimonial__info">
                    <h5>Navya</h5>
                    <small>Student</small>
                </div>
                <div class="testimonial__body">
                    <p>Your ability to work across teams and departments is a strength not everyone has. I'm impressed with the way you're working to dismantle silos. For example, when you drew the marketing team into our conversations, it sharpened our ideas and helped us meet goals faster. Keep up the good work</p>
                </div>
            </article>
            <article class="testimonial swiper-slide">
                <div class="avatar">
                    <img src="https://media.istockphoto.com/id/1326992705/photo/portrait-of-young-indian-businessman-freelancer-looking-t-camera-with-smile.jpg?s=612x612&w=0&k=20&c=orGn0kjzb6lRBBLvFc8tm5Lem5SIfoL_txxnOsmd8ck=" alt=""/>
                </div>
                <div class="testimonial__info">
                    <h5>Rahul</h5>
                    <small>Student</small>
                </div>
                <div class="testimonial__body">
                    <p>Your ability to work across teams and departments is a strength not everyone has. I'm impressed with the way you're working to dismantle silos. For example, when you drew the marketing team into our conversations, it sharpened our ideas and helped us meet goals faster. Keep up the good work</p>
                </div>
            </article>
            <article class="testimonial swiper-slide">
                <div class="avatar">
                    <img src="https://media.istockphoto.com/id/155288041/photo/indian-girl-in-the-university.jpg?s=612x612&w=0&k=20&c=OPg_GzXdIMZ3btYu61HX79KxSBe7A6BYPSYYknNBafQ=" alt=""/>
                </div>
                <div class="testimonial__info">
                    <h5>Navya</h5>
                    <small>Student</small>
                </div>
                <div class="testimonial__body">
                    <p>Your ability to work across teams and departments is a strength not everyone has. I'm impressed with the way you're working to dismantle silos. For example, when you drew the marketing team into our conversations, it sharpened our ideas and helped us meet goals faster. Keep up the good work</p>
                </div>
            </article>
            <article class="testimonial swiper-slide">
                <div class="avatar">
                    <img src="https://media.istockphoto.com/id/155288041/photo/indian-girl-in-the-university.jpg?s=612x612&w=0&k=20&c=OPg_GzXdIMZ3btYu61HX79KxSBe7A6BYPSYYknNBafQ=" alt=""/>
                </div>
                <div class="testimonial__info">
                    <h5>Navya</h5>
                    <small>Student</small>
                </div>
                <div class="testimonial__body">
                    <p>Your ability to work across teams and departments is a strength not everyone has. I'm impressed with the way you're working to dismantle silos. For example, when you drew the marketing team into our conversations, it sharpened our ideas and helped us meet goals faster. Keep up the good work</p>
                </div>
            </article>
            <article class="testimonial swiper-slide">
                <div class="avatar">
                    <img src="https://media.istockphoto.com/id/1326992705/photo/portrait-of-young-indian-businessman-freelancer-looking-t-camera-with-smile.jpg?s=612x612&w=0&k=20&c=orGn0kjzb6lRBBLvFc8tm5Lem5SIfoL_txxnOsmd8ck=" alt=""/>
                </div>
                <div class="testimonial__info">
                    <h5>Rahul</h5>
                    <small>Student</small>
                </div>
                <div class="testimonial__body">
                    <p>Your ability to work across teams and departments is a strength not everyone has. I'm impressed with the way you're working to dismantle silos. For example, when you drew the marketing team into our conversations, it sharpened our ideas and helped us meet goals faster. Keep up the good work</p>
                </div>
            </article>
            <article class="testimonial swiper-slide">
                <div class="avatar">
                    <img src="https://media.istockphoto.com/id/1326992705/photo/portrait-of-young-indian-businessman-freelancer-looking-t-camera-with-smile.jpg?s=612x612&w=0&k=20&c=orGn0kjzb6lRBBLvFc8tm5Lem5SIfoL_txxnOsmd8ck=" alt=""/>
                </div>
                <div class="testimonial__info">
                    <h5>Rahul</h5>
                    <small>Student</small>
                </div>
                <div class="testimonial__body">
                    <p>Your ability to work across teams and departments is a strength not everyone has. I'm impressed with the way you're working to dismantle silos. For example, when you drew the marketing team into our conversations, it sharpened our ideas and helped us meet goals faster. Keep up the good work</p>
                </div>
            </article>
            <article class="testimonial swiper-slide">
                <div class="avatar">
                    <img src="https://media.istockphoto.com/id/155288041/photo/indian-girl-in-the-university.jpg?s=612x612&w=0&k=20&c=OPg_GzXdIMZ3btYu61HX79KxSBe7A6BYPSYYknNBafQ=" alt=""/>
                </div>
                <div class="testimonial__info">
                    <h5>Navya</h5>
                    <small>Student</small>
                </div>
                <div class="testimonial__body">
                    <p>Your ability to work across teams and departments is a strength not everyone has. I'm impressed with the way you're working to dismantle silos. For example, when you drew the marketing team into our conversations, it sharpened our ideas and helped us meet goals faster. Keep up the good work</p>
                </div>
            </article>
        </div>
        <div class="swiper-pagination"></div>
     </section>
     
     {/* <!--  Footer Start  -->  */}

     <footer class="footer">
        <div class="container footer__container">

            <div class="footer__2">
                <h4>Links </h4>
                <ul class="permalink">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div class="footer__3">
                <h4>Privacy</h4>
                <ul class="privacy">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Refund Policy</a></li>
                </ul>
            </div>

            <div class="footer__4">
                <h4>Contact us</h4>
                <div>
                    <p>+91 73682-----!</p>
                    <p>abcd123@gmail.com</p>
                </div>

                <ul class="footer__socials">
                    <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="footer__copyright">
            <small>Copyright &copy; Web.</small>
        </div>
     </footer>

    </>
  )
}

export default App
