import { TestimonialType } from "../types/TestimonialType";
import Rating from "./Rating";

interface props {
  testiomonio: TestimonialType;
}

const Testimonial = ({ testiomonio }: props) => (
  <div
    className={
      "flex flex-col p-4 max-w-md min-w-sm rounded " +
      testiomonio.primaryColor +
      testiomonio.shadow
    }
  >
    <div className="flex gap-1 text-start">
      <Rating ratingColor={testiomonio.ratingColor} />
      <Rating ratingColor={testiomonio.ratingColor} />
      <Rating ratingColor={testiomonio.ratingColor} />
      <Rating ratingColor={testiomonio.ratingColor} />
      <Rating ratingColor={testiomonio.ratingColor} />
    </div>
    <h4 className="text-titleColor text-2xl text-start font-bold">
      {testiomonio.title}
    </h4>

    <p className="text-start my-3">{testiomonio.text}</p>

    <div className="flex">
      <div
        className={
          "border-2 rounded-[50%] w-fit h-fit " + testiomonio.borderColor
        }
      >
        <img
          className="rounded-[50%] h-12 w-12"
          src={testiomonio.userImg}
          alt="User image"
        />
      </div>
      <div className="flex flex-col text-start px-2">
        <h5 className="font-semibold">{testiomonio.name}</h5>
        <p className="text-sm">{testiomonio.jobTitle}</p>
      </div>
    </div>
  </div>
);

export default Testimonial;
