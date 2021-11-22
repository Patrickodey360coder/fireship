import React from 'react'
import '../components/App.css'

export default function Footer() {
  return (
    <div id="contact">
      <footer id="footer">
        <div class="footer-newsletter">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>Sign up today for free and be the first to get notified on new updates.</p>
                <form action="" method="post">
                  <input type="email" name="email"/>
                  <input type="submit" value="Subscribe"/>
                </form>
              </div>
            </div>
          </div>
        </div>

      <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Ninestars</h3>
            <p>
              SCO 145 <br/>
              Deva Ji VIP Plazar Zirakpur<br/>
              Mohali india <br/><br/>
              <strong>Phone:</strong> +9 180 9152 6192<br/>
              <strong>Email:</strong> info@akshiptikainfotech.com <br/>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#hero">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
              {/* <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li> */}
              {/* <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li> */}
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#services">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#services">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#services">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#services">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#services">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Follow us on all our social media platforms to stay updated.</p>
            <div class="social-links mt-3">
              <a href="https://twitter.com/AkshiptikaI" target="_blank" class="twitter"><i class="icofont-twitter"></i></a>
              <a href="https://www.facebook.com/akshiptikainfotech" target="_blank" class="facebook"><i class="icofont-facebook"></i></a>
              <a href="https://www.instagram.com/akshiptikainfotech/" target="_blank" class="instagram"><i class="icofont-instagram"></i></a>
              {/* <a href="https://in.pinterest.com/munish_mr2002/_created/" target="_blank" class="google"><i class="icofont-pintrest"></i></a> */}
              <a href="https://www.linkedin.com/company/77111635/admin/recommend/" target="_blank" class="linkedin"><i class="icofont-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
      </div>

      <div class="container py-4">
        <div class="copyright">
          &copy; Copyright <strong><span>Akshiptika</span></strong>. All Rights Reserved
        </div>
      </div>
      </footer>
    </div>
  )
}
