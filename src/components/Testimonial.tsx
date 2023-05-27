const Testimonial = ({ test }: any) => (
  <div
    className={
      'flex flex-col p-4 max-w-md min-w-sm rounded ' +
      test.primaryColor +
      ' ' +
      test.shadow
    }
  >
    <div className="flex gap-1 text-start">
      <span
        className={'flex w-5 h-5 p-1 rounded ' + 'bg-' + test.shadowColor}
      ></span>
    </div>
    <h4 className="text-titleColor text-2xl text-start font-bold">
      {test.title}
    </h4>

    <p className="text-start my-3">{test.text}</p>

    <div className="flex">
      <div
        className={
          'border-2 rounded-[50%] w-fit h-fit border-' + test.shadowColor
        }
      >
        <img
          className="rounded-[50%] h-12 w-12"
          src={test.userImg}
          alt="User image"
        />
      </div>
      <div className="flex flex-col text-start px-2">
        <h5 className="font-semibold">{test.name}</h5>
        <p className="text-sm">{test.jobTitle}</p>
      </div>
    </div>
  </div>
);

export default Testimonial;
