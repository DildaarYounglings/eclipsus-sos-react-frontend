import React, { useState } from "react";

export const Arrays = () => {
  let idCount = 0;
  const initialData = { Alias: "Someone" };
  const [textareaText,setTextareaText] = useState("")
  const [inputText, setInputText] = useState("");
  const [arrayOfObjects, setArrayOfObjects] = useState([initialData]);
  const handleDelete = function (itemString) {
    let deleted = arrayOfObjects.filter(
      (object) => object.Alias !== itemString
    );
    setArrayOfObjects(deleted);
  };
  const handleChangeObjectInArray = function (itemString,valueToChangeTo) {
    setArrayOfObjects(
      arrayOfObjects.map((item) => {
        if (item.Alias === itemString) {
          return { ...item, Alias: `${item.Alias} is ${valueToChangeTo}` };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div>
      <ol>
        {arrayOfObjects.map(({ Alias }, index) => (
          <li key={Alias.concat(`${index}`)}>
            {Alias}
            <input
              type="button"
              value="delete"
              onClick={() => handleDelete(Alias)}
            />
            <input
              type="button"
              value="changeObjectValue"
              onClick={() => handleChangeObjectInArray(Alias,textareaText)}
            />
          </li>
        ))}
        <br/><br/><br/>
        <textarea value={textareaText} onChange={(e) => setTextareaText(e.target.value)} placeholder={"type Something to edit the alias name then click on \"changeObectValue\""}/>
        <br/><br/><br/>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <input
          type="button"
          value="add"
          onClick={() => {
            if (arrayOfObjects.length === 0 || arrayOfObjects === undefined) {
              setArrayOfObjects([
                ...arrayOfObjects,
                { Alias: inputText, id: 0 },
              ]);
            } else {
              setArrayOfObjects([
                ...arrayOfObjects,
                { Alias: inputText, id: idCount++ },
              ]);
            }
          }}
        />
      </ol>
    </div>
  );
};
