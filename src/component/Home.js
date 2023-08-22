import { ImLocation2 } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaQuoteLeft,
  FaSearch
} from "react-icons/fa";
import MyGooglemap from "./GoogleMap";
import { useState } from "react";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="bk_header">
        <div className="center_wr">
          <div className="header_sec">
            <div className="site_logo">
              <a href="#">
                <h2>Book- Store</h2>
              </a>
            </div>
            <div className="site_menu">
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Categories</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
                <li>
                  <div className="search_field">
                    <input className="serch_box" type="search" placeholder="Search here..." />
                    <span className="search_icon"><FaSearch/></span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mobile_menu">
              <button
                onClick={() => setOpen(!isOpen)}
                className={`hamburger-button ${isOpen ? "open" : "close"}`}
              />
              <div className={`panel ${isOpen ? "open" : "close"}`}>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Categories</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
                <li>
                <div className="search_field">
                    <input className="serch_box" type="search" placeholder="Search here..." />
                    <span className="search_icon"><FaSearch/></span>
                  </div>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end header */}
      <div className="banner_section">
        <div className="center_wr">
          <div className="banner_inner">
            <div className="right_sec bx-content">
              <h1>
                For All Your <br /> Reading Needs
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                quam velit saepe dolorem deserunt quo quidem ad optio.
              </p>
              <a className="read_more" href="#javascript">
                read more
              </a>
            </div>
            <div className="left_sec">
              <img
                src={require("../assets/images/slider-img.png")}
                alt="slider_image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* end benner_section */}
      <div className="book_categrory_section">
        <div className="center_wr">
          <div className="bc_content section_heading">
            <h3>Books Categories</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
            <div className="wt_layout_card_wr">
              <div className="card">
                <div className="crd_image">
                  <img src={require("../assets/images/cat1.png")} alt="cat1" />
                </div>
                <h4>Textbooks</h4>
                <p>
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using
                </p>
              </div>
              <div className="card">
                <div className="crd_image">
                  <img src={require("../assets/images/cat2.png")} alt="cat2" />
                </div>
                <h4>Science</h4>
                <p>
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using
                </p>
              </div>
              <div className="card">
                <div className="crd_image">
                  <img src={require("../assets/images/cat3.png")} alt="cat3" />
                </div>
                <h4>History</h4>
                <p>
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using
                </p>
              </div>
              <div className="card">
                <div className="crd_image">
                  <img src={require("../assets/images/cat4.png")} alt="cat4" />
                </div>
                <h4>Biography</h4>
                <p>
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using
                </p>
              </div>
              <div className="card">
                <div className="crd_image">
                  <img src={require("../assets/images/cat5.png")} alt="cat5" />
                </div>
                <h4>Adventure</h4>
                <p>
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using
                </p>
              </div>
              <div className="card">
                <div className="crd_image">
                  <img src={require("../assets/images/cat6.png")} alt="cat6" />
                </div>
                <h4>Fantasy</h4>
                <p>
                  fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end book category section */}
      <div className="about_store_section">
        <div className="center_wr">
          <div className="about_book">
            <div className="right_sec">
              <img src={require("../assets/images/about-img.png")} alt="about_image" />
            </div>
            <div className="left_sec abt_content section_heading">
              <h3>About Our Bookstore</h3>
              <p>
                At cumque tenetur iste molestiae, vel eum reiciendis assumenda!
                Numquam, repudiandae. Consequuntur obcaecati recusandae aliquam,
                amet doloribus eius dolores officiis cumque? Quibusdam
                praesentium pariatur sapiente mollitia, amet hic iusto voluptas!
                Iusto quo earum vitae excepturi, ipsam aliquid deleniti
                assumenda culpa deserunt.
              </p>
              <a className="read_more" href="#javascript">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* end about section */}
      <div className="what_say">
        <div className="center_wr">
          <div className="sect_heading section_heading">
            <h3>What Says Customers</h3>
          </div>
          <div className="customer_say_card_grp">
            <div className="cs_say_card">
              <div className="card_content">
                <p>
                  {" "}
                  Editors now use Lorem Ipsum as their default model text, and a
                  search for 'lorem ipsum' will uncover many web sites still in
                  their infancy. Various versions have evolved over the years,
                  sometimes by
                </p>
                <span>
                  <FaQuoteLeft />
                </span>
              </div>
              <div className="profile">
                <div className="profile_image">
                  <img src={require("../assets/images//profile.jpg")} alt="profile" />
                </div>
                <div className="profile_details">
                  <h5>Jone Mark</h5>
                  <h6>Student</h6>
                </div>
              </div>
            </div>
            <div className="cs_say_card">
              <div className="card_content">
                <p>
                  {" "}
                  Editors now use Lorem Ipsum as their default model text, and a
                  search for 'lorem ipsum' will uncover many web sites still in
                  their infancy. Various versions have evolved over the years,
                  sometimes by
                </p>
                <span>
                  <FaQuoteLeft />
                </span>
              </div>
              <div className="profile">
                <div className="profile_image">
                  <img src={require("../assets/images/profile.jpg")} alt="profile" />
                </div>
                <div className="profile_details">
                  <h5>Jone Mark</h5>
                  <h6>Student</h6>
                </div>
              </div>
            </div>
            <div className="cs_say_card">
              <div className="card_content">
                <p>
                  {" "}
                  Editors now use Lorem Ipsum as their default model text, and a
                  search for 'lorem ipsum' will uncover many web sites still in
                  their infancy. Various versions have evolved over the years,
                  sometimes by
                </p>
                <span>
                  <FaQuoteLeft />
                </span>
              </div>
              <div className="profile">
                <div className="profile_image">
                  <img src={require("../assets/images/profile.jpg")} alt="profile" />
                </div>
                <div className="profile_details">
                  <h5>Jone Mark</h5>
                  <h6>Student</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end what say section */}
      <div className="blog_section">
        <div className="center_wr">
          <div className="section_heading">
            <h3>From Our Blog</h3>
          </div>
          <div className="blog_crd_group">
            <div className="blog_card">
              <div className="blog_card_image">
                <img src={require("../assets/images/blog_one.jpg")} alt="blog_one" />
                <div className="publish_date">19 january 2021</div>
              </div>
              <div className="blog_card_content">
                <h3>Eius, dolor? Vel velit sed doloremque</h3>
                <p>
                  Incidunt magni explicabo ullam ipsa quo consequuntur eveniet
                  illo? Aspernatur nam dolorem a neque? Esse eaque dolores hic
                  debitis cupiditate, ad beatae voluptatem numquam dignissimos
                  ab porro
                </p>
                <a href="#">read more</a>
              </div>
            </div>
            <div className="blog_card">
              <div className="blog_card_image">
                <img src={require("../assets/images/blog_one.jpg")} alt="blog_one" />
                <div className="publish_date">19 january 2021</div>
              </div>
              <div className="blog_card_content">
                <h3>Eius, dolor? Vel velit sed doloremque</h3>
                <p>
                  Incidunt magni explicabo ullam ipsa quo consequuntur eveniet
                  illo? Aspernatur nam dolorem a neque? Esse eaque dolores hic
                  debitis cupiditate, ad beatae voluptatem numquam dignissimos
                  ab porro
                </p>
                <a href="#">read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end blog_section */}
      <div className="contact_us_section layout_padding">
        <div className="center_wr">
          <div className="constact_us">
            <div className="constact_us_form">
              <div className="section_heading">
                <h3>Contact Us</h3>
              </div>
              <form>
                <div className="form_field">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form_field">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="form_field">
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className="form_field">
                  <textarea rows={8} placeholder="Message" />
                </div>
                <div className="form_field">
                  <button className="send_btn">Send</button>
                </div>
              </form>
            </div>
            <div className="contact_us_image">
              <img
                src={require("../assets/images/contact-img.png")}
                alt="contact_image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_section">
        <div className="center_wr">
          <div className="footer">
            <div className="about_us_col c-width">
              <h5>About Us</h5>
              <p>
                Vitae aut explicabo fugit facere alias distinctio, exem commodi
                mollitia minusem dignissimos atque asperiores incidunt vel
                voluptate iste
              </p>
              <div className="social_icon_grp">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaLinkedinIn />
                </span>
                <span>
                  <FaInstagram />
                </span>
              </div>
            </div>
            <div className="address_col c-width">
              <h5>Address</h5>
              <div className="add_row">
                <span>
                  <ImLocation2 />
                </span>
                <span>Location</span>
              </div>
              <div className="add_row">
                <span>
                  <BsTelephoneFill />
                </span>
                <span>Call+01 01234567890</span>
              </div>
              <div className="add_row">
                <span>
                  <GrMail />
                </span>
                <span>demo@gmail.com</span>
              </div>
            </div>
            <div className="newslatter_col c-width">
              <h5>Newsletter</h5>
              <form className="subs_form">
                <input type="email" placeholder="email" />
                <br />
                <button className="read_more sub_btn">Subscribe</button>
              </form>
            </div>
            <div className="map_col c-width">
              <MyGooglemap />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_section">
        <div className="center_wr">
          <p>© 2023 All Rights Reserved By Free Html Templates</p>
        </div>
      </div>
    </>
  );
};

export default Home;
