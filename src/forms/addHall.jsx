import React, { useState } from "react";
import InputField from "../components/InputField";
import axiosInstance from "../api/axios";

const AddHall = () => {
  const initialInputValue = {
    hallname: "",
    price: "",
  };

  const [inputValue, setInputValue] = useState(initialInputValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValue);

    try {
      const response = await axiosInstance.post("", inputValue);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <InputField
          type={"number"}
          placeholder={"Add Price"}
          label={"Price"}
          name={"price"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"text"}
          placeholder={"Product Name"}
          label={"Name"}
          name={"hallname"}
          onChange={handleInputChange}
        />
        <InputField
          type={"number"}
          placeholder={"Add Price"}
          label={"Price"}
          name={"price"}
          onChange={handleInputChange}
        />
        <button type="submit"> ADD</button>
      </form>
    </section>
  );
};

export default AddHall;
