import React, { useState } from "react";
import InputField from "../components/InputField";
import axiosInstance from "../api/axios";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-toastify";

const AddHall = () => {
  const initialInputValue = {
    name: "",
    description: "",
    occupancy: "",
    booking_days: "",
  };

  const [inputValue, setInputValue] = useState(initialInputValue);
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValue);
    const requestData = new FormData();
    requestData.append("name", inputValue.name);
    requestData.append("description", inputValue.description);
    requestData.append("occupancy", inputValue.occupancy);
    requestData.append("booking_days", inputValue.booking_days);
    requestData.append("image", image);

    console.log(requestData);
    try {
      const response = await axiosInstance.post(
        "/conference_hall/",
        requestData
      );
      console.log(response);
      if (response.status === 201) {
        toast.success("Hall added");
      }
    } catch (error) {
      const status = error.response.status;
      if (status === 400) {
        toast.error("Hall with this name already exists");
      }
    }
  };

  return (
    <section className="m-4">
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
          rows={4}
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
