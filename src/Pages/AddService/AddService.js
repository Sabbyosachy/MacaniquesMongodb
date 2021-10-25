import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
        const { register, handleSubmit,reset } = useForm();
        
        const onSubmit = data =>{
            console.log(data);
            axios.post('http://localhost:5000/services',data)
           
            .then(res=> {
                if(res.data.insertId){
                    alert('Added Successfylly');
                    reset();
                }
              })
        } 

   
        return (
        <div className="addservice">
            <h2>Please Add A Service</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} required placeholder="Name" />
        <input {...register("description")} required placeholder="Description" />
        <input type="number" {...register("price")} required placeholder="Price" />
        <input{...register("img")} required placeholder="img-url" />
        <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;