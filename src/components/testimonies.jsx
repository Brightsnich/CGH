import "../Assets/css/slider.css";

function Testimonyslider(props) {
    return <>
            <div className="slideContainer">
                {/* <img className="slideContainer-img" src={props.imgUrl} alt="" width="55" height="55" /> */}
                <span class="material-symbols-outlined">
                    grade
                </span>
                <p> {props.testimony}
                </p>
            </div>
    </>
}

export default Testimonyslider;