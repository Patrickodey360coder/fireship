import React, { useState, useEffect} from 'react'
import img from '../images/contact.svg'

function Contact() {
  const [forms, setForms] = useState({});
  const [form, setForm] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    setForm(forms)
    console.log(form)
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
              <form>
                <div className="mb-3">
                  <input className="form-control form-control-lg" type="text" placeholder="name..." aria-label=".form-control-lg example" value={form}  />
                </div>
                <div className="mb-3">
                  <input type="email" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="email" value={form} onChange={handleSubmit}/>
                </div>
                <div class="mb-3">
                  <textarea placeholder="message..." class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3"></textarea>
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
