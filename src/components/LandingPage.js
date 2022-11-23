import "../landingPageStyles.scss";
import soccer from "./images/soccer.jpg";
import author from "./images/author.jpg";
import blogpost from "./images/blogpost.jpg";
import postimage from "./images/postimage.svg";
import { BsMenuButtonWide, BsColumnsGap, BsGridFill } from "react-icons/bs";
import { GoRocket } from "react-icons/go";
import { MdClose } from "react-icons/md";
import { GiPolarStar } from "react-icons/gi";
import { SiElasticstack } from "react-icons/si";
import {
  AiFillDownCircle,
  AiOutlineHeart,
  AiOutlineRetweet,
  AiOutlineClose
} from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { TiArrowForwardOutline } from "react-icons/ti";
import { useState } from "react";
import SelectMore from "./SelectMore";
import PostTypes from "./PostTypes";
import CreatePost from "./CreatePost";

export default function LandingPage() {
  const [view, setView] = useState({
    gridView: false,
    columnView: false,
    more: false
  });
  return (
    <div className="landPageContainer ">
      <div className="homepage-body">
        {/* <PostTypes/> */}
        {/* <CreatePost /> */}
        <div className="main-page">
          <nav>
            <div className="controls ">
              <button>
                Trending <GoRocket />{" "}
              </button>
              <button>
                Staff Picks <GiPolarStar className="star" />
              </button>
              <button onClick={() => setView({ ...view, more: !view.more })}>
                More <AiFillDownCircle />{" "}
              </button>
            </div>

            <div className="view-switch">
              <button onClick={() => setView({ ...view, gridView: true })}>
                <BsGridFill
                  className={view.gridView ? "text-light switch" : "switch"}
                />
              </button>
              <button onClick={() => setView({ ...view, gridView: false })}>
                <SiElasticstack
                  className={!view.gridView ? "text-light switch" : "switch"}
                />
              </button>
            </div>
          </nav>
          {view.more ? <SelectMore /> : null}
          <div className="trending">
            <div className="trending-item">
              <div className="text-area">
                <h3>1</h3>
                <div>
                  <h4>art</h4>
                  <h5>#illustration</h5>
                </div>
              </div>
              <div className="image">
                <img
                  src={soccer}
                  alt="trending item"
                  className="trending-img"
                />
              </div>
            </div>
            <div className="trending-item2">
              <div className="text-area">
                <h3>2</h3>
                <div>
                  <h4>artistis on tumblr</h4>
                  <h5>#hot</h5>
                </div>
              </div>
              <div className="image">
                <img
                  src={soccer}
                  alt="trending item"
                  className="trending-img"
                />
              </div>
            </div>
            <div className="trending-item3">
              <div className="text-area">
                <h3>3</h3>
                <div>
                  <h4>supernatural</h4>
                  <h5>#jensen ackles #misha collins</h5>
                </div>
              </div>
              <div className="image">
                <img
                  src={soccer}
                  alt="trending item"
                  className="trending-img"
                />
              </div>
            </div>
            <div className="trending-item4">
              <div className="text-area">
                <h3>4</h3>
                <div>
                  <h4>rottmnt</h4>
                  <h5>#tmnt #teenage mutant ninja turtles</h5>
                </div>
              </div>
              <div className="image">
                <img
                  src={soccer}
                  alt="trending item"
                  className="trending-img"
                />
              </div>
            </div>
          </div>

          <div className={view.gridView ? "gridView" : "columnView"}>
            <div className="post-area">
              <div className="author-img">
                <img src={author} alt="Post author" className="" />
              </div>
              <div className="post">
                <div className="post-header">
                  <div className="author">
                    <div className="username">OnojaVoo</div>
                    <div className="follow">Follow</div>
                  </div>

                  <div className="options">
                    <FiMoreHorizontal />
                  </div>
                </div>
                <div className="post-body">
                  <div className="image-area">
                    <img src={blogpost} alt="post-postal" />
                  </div>

                  <div className="post-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, qui consequatur ad non reprehenderit est amet
                    veritatis sunt vel nam. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Praesentium, sequi. Facere
                    obcaecati omnis dolorum aliquid maiores, voluptatem iure
                    modi non architecto quibusdam consequatur voluptate? Quo
                    facere provident tenetur impedit cupiditate.
                  </div>
                </div>
                <div className="post-footer">
                  <div className="notes">876 notes</div>
                  <div className="icons">
                    <button>
                      <TiArrowForwardOutline />
                    </button>
                    <button>
                      <AiOutlineRetweet />
                    </button>
                    <button>
                      <AiOutlineHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-area">
              <div className="author-img">
                <img src={author} alt="Post author" className="" />
              </div>
              <div className="post">
                <div className="post-header">
                  <div className="author">
                    <div className="username">VooOnoja</div>
                    <div className="follow">Follow</div>
                  </div>

                  <div className="options">
                    <FiMoreHorizontal />
                  </div>
                </div>
                <div className="post-body">
                  <div className="image-area">
                    <img src={postimage} alt="post-postal" />
                  </div>

                  <div className="post-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, qui consequatur ad non reprehenderit est amet
                    veritatis sunt vel nam. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Praesentium, sequi. Facere
                    obcaecati omnis dolorum aliquid maiores, voluptatem iure
                    modi non architecto quibusdam consequatur voluptate? Quo
                    facere provident tenetur impedit cupiditate.
                  </div>
                </div>
                <div className="post-footer">
                  <div className="notes">876 notes</div>
                  <div className="icons">
                    <button>
                      <TiArrowForwardOutline />
                    </button>
                    <button>
                      <AiOutlineRetweet />
                    </button>
                    <button>
                      <AiOutlineHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="post-area">
              <div className="author-img">
                <img src={author} alt="Post author" className="" />
              </div>
              <div className="post">
                <div className="post-header">
                  <div className="author">
                    <div className="username">VooOnoja</div>
                    <div className="follow">Follow</div>
                  </div>

                  <div className="options">
                    <FiMoreHorizontal />
                  </div>
                </div>
                <div className="post-body">
                  <div className="image-area">
                    <img src={postimage} alt="post-postal" />
                  </div>

                  <div className="post-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, qui consequatur ad non reprehenderit est amet
                    veritatis sunt vel nam. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Praesentium, sequi. Facere
                    obcaecati omnis dolorum aliquid maiores, voluptatem iure
                    modi non architecto quibusdam consequatur voluptate? Quo
                    facere provident tenetur impedit cupiditate.
                  </div>
                </div>
                <div className="post-footer">
                  <div className="notes">876 notes</div>
                  <div className="icons">
                    <button>
                      <TiArrowForwardOutline />
                    </button>
                    <button>
                      <AiOutlineRetweet />
                    </button>
                    <button>
                      <AiOutlineHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="post-area">
              <div className="author-img">
                <img src={author} alt="Post author" className="" />
              </div>
              <div className="post">
                <div className="post-header">
                  <div className="author">
                    <div className="username">VooOnoja</div>
                    <div className="follow">Follow</div>
                  </div>

                  <div className="options">
                    <FiMoreHorizontal />
                  </div>
                </div>
                <div className="post-body">
                  <div className="image-area">
                    <img src={postimage} alt="post-postal" />
                  </div>

                  <div className="post-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, qui consequatur ad non reprehenderit est amet
                    veritatis sunt vel nam. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Praesentium, sequi. Facere
                    obcaecati omnis dolorum aliquid maiores, voluptatem iure
                    modi non architecto quibusdam consequatur voluptate? Quo
                    facere provident tenetur impedit cupiditate.
                  </div>
                </div>
                <div className="post-footer">
                  <div className="notes">876 notes</div>
                  <div className="icons">
                    <button>
                      <TiArrowForwardOutline />
                    </button>
                    <button>
                      <AiOutlineRetweet />
                    </button>
                    <button>
                      <AiOutlineHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="post-area">
              <div className="author-img">
                <img src={author} alt="Post author" className="" />
              </div>
              <div className="post">
                <div className="post-header">
                  <div className="author">
                    <div className="username">VooOnoja</div>
                    <div className="follow">Follow</div>
                  </div>

                  <div className="options">
                    <FiMoreHorizontal />
                  </div>
                </div>
                <div className="post-body">
                  <div className="image-area">
                    <img src={postimage} alt="post-postal" />
                  </div>

                  <div className="post-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, qui consequatur ad non reprehenderit est amet
                    veritatis sunt vel nam. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Praesentium, sequi. Facere
                    obcaecati omnis dolorum aliquid maiores, voluptatem iure
                    modi non architecto quibusdam consequatur voluptate? Quo
                    facere provident tenetur impedit cupiditate.
                  </div>
                </div>
                <div className="post-footer">
                  <div className="notes">876 notes</div>
                  <div className="icons">
                    <button>
                      <TiArrowForwardOutline />
                    </button>
                    <button>
                      <AiOutlineRetweet />
                    </button>
                    <button>
                      <AiOutlineHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="post-area">
              <div className="author-img">
                <img src={author} alt="Post author" className="" />
              </div>
              <div className="post">
                <div className="post-header">
                  <div className="author">
                    <div className="username">VooOnoja</div>
                    <div className="follow">Follow</div>
                  </div>

                  <div className="options">
                    <FiMoreHorizontal />
                  </div>
                </div>
                <div className="post-body">
                  <div className="image-area">
                    <img src={postimage} alt="post-postal" />
                  </div>

                  <div className="post-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, qui consequatur ad non reprehenderit est amet
                    veritatis sunt vel nam. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Praesentium, sequi. Facere
                    obcaecati omnis dolorum aliquid maiores, voluptatem iure
                    modi non architecto quibusdam consequatur voluptate? Quo
                    facere provident tenetur impedit cupiditate.
                  </div>
                </div>
                <div className="post-footer">
                  <div className="notes">876 notes</div>
                  <div className="icons">
                    <button>
                      <TiArrowForwardOutline />
                    </button>
                    <button>
                      <AiOutlineRetweet />
                    </button>
                    <button>
                      <AiOutlineHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-bar">
          <div className="trending-blogs">
            <div className="heading">Trending Blogs</div>
            <div className="blog-list">
              <div className="item">
                <div className="blog-author-image">
                  <img src={author} alt="Trending blog author" />
                </div>

                <div className="blog-author-details">
                  <div className="username">Monalizza</div>
                  <div className="full-name">Liza Donnelly</div>
                </div>

                <div className="actions">
                  <div className="follow">Follow</div>

                  <div className="cancel">
                    <MdClose className="icon" />
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="blog-author-image">
                  <img src={author} alt="Trending blog author" />
                </div>

                <div className="blog-author-details">
                  <div className="username">Monalizza</div>
                  <div className="full-name">Liza Donnelly</div>
                </div>

                <div className="actions">
                  <div className="follow">Follow</div>

                  <div className="cancel">
                    <MdClose className="icon" />
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="blog-author-image">
                  <img src={author} alt="Trending blog author" />
                </div>

                <div className="blog-author-details">
                  <div className="username">Monalizza</div>
                  <div className="full-name">Liza Donnelly</div>
                </div>

                <div className="actions">
                  <div className="follow">Follow</div>

                  <div className="cancel">
                    <MdClose className="icon" />
                  </div>
                </div>
              </div>
            </div>
            <p className="show-more">Show more blogs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
