import React from "react";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://morning-taiga-03654.herokuapp.com/addServices`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mt-4">Add Services</h2>
      <input {...register("name")} className="p-2 m-2" placeholder="Name" />
      <input
        {...register("desciption")}
        className="p-2 m-2"
        placeholder="Description"
      />
      <input
        {...register("img")}
        className="p-2 m-2"
        placeholder="Image Link"
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <input className="btn btn-danger" type="submit" />
    </form>
  );
};

export default AddServices;
