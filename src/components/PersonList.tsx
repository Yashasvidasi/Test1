const PersonList = ({
  List,
  setIndex,
}: {
  List: any[];
  setIndex: (arg0: number) => void;
}) => {
  return (
    <>
      {List.map((element, index) => {
        return (
          <div
            className="border border-white m-2 w-32 min-w-fit p-2 hover:cursor-pointer"
            key={index}
            onClick={() => {
              setIndex(index);
            }}
          >
            {element.name}
          </div>
        );
      })}
    </>
  );
};

export default PersonList;
