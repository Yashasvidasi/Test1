"use client";
import Card from "@/components/Card";
import Form from "@/components/Form";
import PersonList from "@/components/PersonList";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [NameList, setNameList] = useState<any[]>([]);
  const [Index, setIndex] = useState(-1);
  const [errorMsg, setErrorMsg] = useState("");

  const formList = [
    { name: "Name", setter: setName },
    { name: "Surname", setter: setSurname },
    { name: "Age", setter: setAge },
    { name: "Address", setter: setAddress },
  ];

  const handleSave = () => {
    if (!name || !surname || !age || !address) {
      setErrorMsg("Please Fill in all Values");
      return;
    }
    try {
      const obj = {
        name: name,
        surname: surname,
        age: age,
        address: address,
      };

      setNameList([...NameList, obj]);
      setErrorMsg("Success");
    } catch (error) {
      setErrorMsg("Something Went wrong");
      return;
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 flex flex-col lg:flex-row justify-between p-10">
      <div className="flex flex-col lg:w-1/4 w-full p-2 mb-10">
        <Form list={formList} handleSave={handleSave} errorMsg={errorMsg} />
      </div>
      <div className="lg:w-1/2 w-full gap-10 flex flex-row">
        <div className="w-1/2 border border-white overflow-auto">
          <PersonList List={NameList} setIndex={setIndex} />
        </div>

        <div className="w-1/2 ">
          {Index !== -1 ? (
            <Card
              name={NameList[Index].name}
              age={NameList[Index].age}
              address={NameList[Index].address}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
