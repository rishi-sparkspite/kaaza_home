function footer_main() {
  return `
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
      }

      .footer {
        position: relative;
        width: 100%;
        background: #A1A483;
        padding: 20px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        color: #fff;
      }

      .footer .contact {
        flex: 1;
        max-width: 50%;
        font-size: 1rem;
        line-height: 1.8;
      }

      .footer .brand {
        flex: 1;
        max-width: 50%;
        text-align: right;
        font-size: 1.5rem;
        font-weight: 700;
      }

      .footer .brand span {
        font-weight: 400;
        font-size: 0.9rem;
      }

      .social-icon {
        display: flex;
        margin-top: 10px;
        justify-content: flex-start;
      }

      .social-icon__item {
        list-style: none;
      }

      .social-icon__link {
        font-size: 1.5rem;
        color: #fff;
        margin-right: 15px;
        display: inline-block;
        transition: 0.5s;
      }

      .social-icon__link:hover {
        transform: translateY(-5px);
      }

      .waves {
        position: absolute;
        width: 100%;
        height: 100px;
        top: -100px;
        left: 0;
        overflow: hidden;
        line-height: 0;
      }

      @keyframes animateWaves {
        0% { background-position-x: 1000px; }
        100% { background-position-x: 0px; }
      }

      @keyframes animate {
        0% { background-position-x: -1000px; }
        100% { background-position-x: 0px; }
      }
    </style>

    <footer class="footer">
      <div class="contact">
        <h4>Contact Us</h4>
        <p>Phone: +91 85698 99969</p>
        <p>Email: Maalakshmitexofabs@gmail.com</p>
        <p>Address: Panipat, Haryana, India</p>
        <ul class="social-icon">
          <li class="social-icon__item">
            <a class="social-icon__link" href="#"><ion-icon name="logo-facebook"></ion-icon></a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#"><ion-icon name="logo-twitter"></ion-icon></a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
          </li>
          <li class="social-icon__item">
            <a class="social-icon__link" href="#"><ion-icon name="logo-instagram"></ion-icon></a>
          </li>
        </ul>
      </div>
      <div class="brand">
        <h2>Kaaza Home</h2>
        <span>&copy;2024 | All Rights Reserved</span>
      </div>
    </footer>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  `;
}

export default footer_main;
