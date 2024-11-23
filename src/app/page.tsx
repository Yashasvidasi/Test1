"use client";
import Card from "@/component/Card";
import { Input } from "postcss";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [List, setList] = useState<any[]>([]);
  const [Index, setIndex] = useState(-1);

  const handlesave = () => {
    const obj = {
      name: name,
      surname: surname,
      age: age,
      address: address,
    };

    setList([...List, obj]);
  };

  return (
    <div className="w-screen h-screen bg-slate-800 flex flex-row justify-evenly p-10 overflow-hidden">
      <div className="flex flex-col w-1/2">
        <div className="mb-2 mt-5 flex flex-col">
          <label className="mb-2">Name</label>
          <input
            className="text-black p-1 w-1/2"
            type="text"
            id="fname"
            placeholder="first name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-2 mt-5 flex flex-col">
          <label className="mb-2">surname</label>
          <input
            className="text-black p-1 w-1/2"
            type="text"
            id="sname"
            placeholder="surname"
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          />
        </div>

        <div className="mb-2 mt-5 flex flex-col">
          <label className="mb-2">age</label>
          <input
            className="text-black p-1 w-1/2"
            type="number"
            id="age"
            placeholder="age"
            onChange={(e) => {
              setAge(parseInt(e.target.value));
            }}
          />
        </div>

        <div className="mb-2 mt-5 flex flex-col">
          <label className="mb-2">City</label>
          <input
            className="text-black p-1 w-1/2"
            type="text"
            id="address"
            placeholder="City"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>

        <button
          className="p-1 border border-white w-1/2 mt-10"
          onClick={handlesave}
        >
          Save
        </button>
      </div>
      <div className="w-1/2 border border-white flex flex-row">
        <div className="w-1/2 border border-white overflow-auto">
          {List.map((element, index) => {
            return (
              <div
                className="border border-white m-2 w-32 min-w-fit p-2"
                key={index}
                onClick={() => {
                  setIndex(index);
                }}
              >
                {element.name}
              </div>
            );
          })}
        </div>
        <div className="w-1/2 ">
          {Index !== -1 ? (
            <Card
              name={List[Index].name}
              age={List[Index].age}
              address={List[Index].address}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
