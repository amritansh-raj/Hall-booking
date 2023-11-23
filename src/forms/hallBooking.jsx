import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import axiosInstance from "../api/axios";

const AddConferenceForm = () => {
  const initialFormValues = {
    fromDate: "",
    fromTime: "",
    toDate: "",
    toTime: "",
    participantsCount: "",
    hallName: "",
    purpose: "",
    remark: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    try {
      const response = axiosInstance.post("hallbooking/", formValues);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="From Date"
          type="date"
          name="fromDate"
          value={formValues.fromDate}
          onChange={handleChange}
          required
        />
        <TextField
          label="From Time"
          type="time"
          name="fromTime"
          value={formValues.fromTime}
          onChange={handleChange}
          required
        />
        <TextField
          label="To Date"
          type="date"
          name="toDate"
          value={formValues.toDate}
          onChange={handleChange}
          required
        />
        <TextField
          label="To Time"
          type="time"
          name="toTime"
          value={formValues.toTime}
          onChange={handleChange}
          required
        />
        <TextField
          label="Participants Count"
          type="number"
          name="participantsCount"
          value={formValues.participantsCount}
          onChange={handleChange}
          required
        />
        <TextField
          label="Hall Name"
          name="hallName"
          select
          value={formValues.hallName}
          onChange={handleChange}
          required
        >
          <MenuItem value="hall1">Hall 1</MenuItem>
          <MenuItem value="hall2">Hall 2</MenuItem>
        </TextField>
        <TextField
          label="Purpose"
          name="purpose"
          multiline
          rows={4}
          value={formValues.purpose}
          onChange={handleChange}
          required
        />
        <TextField
          label="Remark"
          name="remark"
          multiline
          rows={4}
          value={formValues.remark}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddConferenceForm;
