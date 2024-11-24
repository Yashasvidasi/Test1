interface fields {
  list: {
    name: string;
    setter: any;
  }[];
  handleSave: () => void;
  errorMsg: string;
}

const Form = ({ list, handleSave, errorMsg }: fields) => {
  return (
    <>
      {list.map((element, index) => {
        return (
          <div key={index} className="mb-2 mt-5 flex flex-col">
            <label className="mb-2">{element.name}</label>
            <input
              className="text-black p-1 w-full rounded-sm "
              type="text"
              id="fname"
              placeholder="first name"
              onChange={(e) => {
                element.setter(e.target.value);
              }}
            />
          </div>
        );
      })}

      <button
        className="p-1 border border-white lg:w-1/2 w-full mt-10 rounded-md"
        onClick={handleSave}
      >
        Save
      </button>
      <label
        className={`mt-5 ${
          errorMsg !== "Success" ? "text-red-500" : "text-green-500"
        }`}
      >
        {errorMsg}
      </label>
    </>
  );
};

export default Form;
