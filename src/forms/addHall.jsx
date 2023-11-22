import React, { useState } from "react";
import InputField from "../components/InputField";
import axiosInstance from "../api/axios";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const AddHall = () => {
  const initialInputValue = {
    name: "",
    description: "",
    occupancy: "",
    booking_days: "",
  };

  const [inputValue, setInputValue] = useState(initialInputValue);
  const [image, setImage] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleImageChange = (e) => {
    // const { name, value } = e.target;
    // const ImageValue = e.target.files[0];
    // console.log(ImageValue);
    // const formData = new FormData();
    // formData.append("image", e.target.files[0]);
    // console.log(formData);
    setImage(e.target.files[0]);
    console.log(image);
    // const updatedImages = [...inputValue.image];
    // updatedImages[index] = image;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValue);
    inputValue.image = image;

    try {
      const response = await axiosInstance.post(
        "/conference_hall/",
        inputValue
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          name="name"
          placeholder="Enter name"
          type="text"
          onChange={handleInputChange}
          required
        />

        <InputField
          label="Description"
          name="description"
          placeholder="Enter description"
          type="text"
          onChange={handleInputChange}
          multiline
          required
        />

        <InputField
          label="Eligible Occupancy"
          name="occupancy"
          placeholder="Enter eligible occupancy"
          type="number"
          onChange={handleInputChange}
          required
        />

        <InputField
          label="Continuous Booking Days Limit"
          name="booking_days"
          placeholder="Enter days limit"
          type="number"
          onChange={handleInputChange}
          required
        />

        <InputField
          label="Images"
          name="image"
          type="file"
          onChange={handleImageChange}
          multiple
          required
        />

        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Send
        </Button>
      </form>
    </section>
  );
};

export default AddHall;
