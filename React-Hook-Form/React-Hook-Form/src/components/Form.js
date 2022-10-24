import React from 'react'
import bglmg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';

export default function Form(){
    // eslint-disable-next-line no-unused-vars
    const {register, handleSubmit,watch,formState: {errors}} = useForm()
    // eslint-disable-next-line no-unused-vars
    const onSubmit = data => console.log(data);

    //console.log(watch('username'));
    return(
        <section>
            <div className="register">
                <div className="col-1">
                    <h2>Sign In</h2>
                    <span>Please Register Here!</span>
                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("username")}placeholder='username'/>
                        <input type="text" {...register("password")}placeholder='password'/>
                        <input type="text" {...register("confirmpwd")}placeholder='confirm password'/>
                        <input type="text" {...register("mobile",{required:true,maxLength: 10})}placeholder='cell phone. You can use for call to Drake :D'/>
                        {errors.mobile?.type === "required" && "Mobile Number is required"}
                        {errors.mobile?.type === "maxLength" && "Mobile Length Exceed"}
                        <button className='btn'>Sign In</button>
                    </form>
                </div>
                <div className="col-2">
                    <img src={bglmg} alt="" />
                </div>
            </div>


        </section>
    )
}