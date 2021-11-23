import React from 'react';
import {useForm} from 'react-hook-form';
import img from '../images/contact.svg';

function Contact() {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data);
  }


  return (
    <div id="contact">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6">
            <img src={img} alt={img} className="img-fluid contact-img" />
          </div>
          <div className="col-12 col-lg-6 col-md-6">
            <h1 className="text-center my-3 mb-4">Contact Us</h1>
            <div className="row">
              <div className="col-10 col-sm-8 col-md-10 col-md-10 mx-auto">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mb-3">
                  <input className="form-control form-control-lg" type="text" placeholder="name..." aria-label=".form-control-lg example" {...register("name", {required: 'Please enter you name...'})}  />
                  {errors.name && <p className="text-danger"> {errors.name.message}</p>}
                </div>
                <div className="mb-3">
                  <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="email" {...register('email', {required: 'Please enter you email...', pattern: {
                    value: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid Email...'
                  } })}/>
                  {errors.email && <p className="text-danger"> {errors.email.message}</p>}
                </div>
                <div class="mb-3">
                  <textarea placeholder="message..." class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" {...register('message', {required: 'Please enter message...'})}></textarea>
                  {errors.message && <p className="text-danger"> {errors.message.message}</p>}
                </div>

                <div className="mb-3 d-grid">
                  <button className="btn btn-lg btn-pink">Submit</button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
