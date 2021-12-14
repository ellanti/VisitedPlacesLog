import { Popup } from "react-leaflet";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";

import { fetchUrl } from "../../redux/visitedPlaces/vPAction";
import { editPlace, deletePlace } from "../../utils/dataoperations";
import "./popUpStyling.css";

const url = "/visited";
function PopUp(props: { placeId: string; placeName: string; img: string }) {
  const [name, setName] = useState(props.placeName);
  const [image, setImg] = useState(props.img);
  const [debounceImg] = useDebounce(image, 700);

  const popupRef = useRef<any>(null);
  const dispatch = useDispatch();
  function handleEdit() {
    editPlace(`${url}/${props.placeId}`, { name, image }).then(() => {
      dispatch(fetchUrl(url));
      if (popupRef.current) {
        popupRef.current._closeButton.click();
      }
    });
  }
  function handleDel() {
    deletePlace(`${url}/${props.placeId}`).then(() => dispatch(fetchUrl(url)));
  }

  return (
    <Popup ref={popupRef}>
      <div className="detailsDiv">
        <div className="infoDiv">
          <label>
            <strong>NAME: </strong>
          </label>
          <input
            type="text"
            id="place"
            name="place"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="infoDiv">
          <label>
            <strong>IMAGEURL: </strong>
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
      </div>
      <div>
        {/* using Debounce value to avoid continuous image rendering on change in image input value */}
        {debounceImg === "N/A" || debounceImg === "" ? (
          []
        ) : (
          <img src={debounceImg} alt="Place" className="imagestyle" />
        )}
      </div>
      <div className="buttonDiv">
        <button className="save" onClick={handleEdit}>
          Save
        </button>
        <button className="del" onClick={handleDel}>
          Delete
        </button>
      </div>
    </Popup>
  );
}

export default PopUp;
