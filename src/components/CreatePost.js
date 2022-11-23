import { useContext } from "react";
import { FiSettings } from "react-icons/fi";
import { conManager } from "../context/TumblrContext";
import image from "./images/author.jpg";
export default function CreatePost() {
  const { view, setView } = useContext(conManager);
  return (
    <div className="create-post-background">
      <div className="create-post-container ">
        <div className="post-author-image">
          <img src={image} alt="post author" />
        </div>

        <div className="content-area">
          <div className="heading ">
            <div>OnojaVoo</div>
            <div>
              <FiSettings />
            </div>
          </div>

          <div className="title">
            <input type="text" placeholder="Title" />
          </div>

          <div className="post-body">
            <textarea
              name=""
              id=""
              cols="20"
              rows="10"
              placeholder="Go ahead, put anything"
            ></textarea>
          </div>
          <div className="tags">
            <input type="text" placeholder="#add tags" />
          </div>
          <div className="footer">
            <button onClick={() => setView({ ...view, textPost: false })}>
              Close
            </button>
            <div className="select">
              <select name="" id="" className="audience">
                <option value="">Everyone</option>
                <option value="">Mature</option>
              </select>
              <select name="" id="" className="schedule">
                <option value="">Post now</option>
                <option value="">Add to queue</option>
                <option value="">Save as draft</option>
                <option value="">Post privately</option>
                <option value="">Schedule</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
