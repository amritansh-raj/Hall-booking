import { TextField, Button } from "@mui/material";
import React from "react";

const InputField = ({
  label,
  name,
  placeholder,
  type,
  onChange,
  multiline,
  onAddClick,
  rows
}) => {
  return (
    <div className="form-group m-2">
      <TextField
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        label={label}
        variant="outlined"
        multiline={multiline}
        rows={rows}
        fullWidth
        required
      />
      {/* {type === "file" && (
        <Button variant="contained" onClick={onAddClick}>
          +
        </Button>
      )} */}
    </div>
  );
};

export default InputField;
