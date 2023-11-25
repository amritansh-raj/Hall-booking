import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import axiosInstance from "../api/axios";
import { Select } from "@mui/material";

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
  const [halls, setHalls] = useState([]);

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

  useEffect(() => {
    const getHalls = async () => {
      try {
        const response = await axiosInstance.get("drop_conf_hall");
        setHalls(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getHalls();
    console.log(halls);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="m-4">
        <TextField
          label="From Date"
          type="date"
          name="fromDate"
          value={formValues.fromDate}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <TextField
          label="From Time"
          type="time"
          name="fromTime"
          value={formValues.fromTime}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <TextField
          label="To Date"
          type="date"
          name="toDate"
          value={formValues.toDate}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <TextField
          label="To Time"
          type="time"
          name="toTime"
          value={formValues.toTime}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <TextField
          label="Participants Count"
          type="number"
          name="participantsCount"
          value={formValues.participantsCount}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <Select
          label="Hall Name"
          name="hallName"
          select
          value={formValues.hallName}
          onChange={handleChange}
          required
        >
          {halls.map((hall, index) => {
            <MenuItem value={hall.id}>{hall.name}</MenuItem>;
          })}
        </Select>
        <br />
        <TextField
          label="Purpose"
          name="purpose"
          multiline
          rows={4}
          value={formValues.purpose}
          onChange={handleChange}
          required
        />{" "}
        <br />
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
