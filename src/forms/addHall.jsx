import React, { useState } from "react";
import InputField from "../components/InputField";

const AddHall = () => {
  const initialInputValue = {
    name: "",
    price: "",
  };

  const [inputValue, setInputValue] = useState(initialInputValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          value={name}
          placeholder="Product Name"
          label="Name"
          name="name"
          onChange={handleInputChange}
        />
        <InputField
          type="number"
          value={price}
          placeholder="Add Price"
          label="Price"
          name="price"
          onChange={handleInputChange}
        />
        <button type="submit"> ADD</button>
      </form>
    </section>
  );
};

export default AddHall;
