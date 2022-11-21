import image from "../img/not-found.jpg";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <img className="notFoundImage" src={image} alt="some" />
    </div>
  );
};

export default NotFound;
