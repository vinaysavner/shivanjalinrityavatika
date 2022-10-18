import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';



function ContactHome ()  {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
      const [disabled, setDisabled] = useState(false);
    
      // Function that displays a success toast on bottom right of the page when form submission is successful
      const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };
    
      // Function called on submit that uses emailjs to send email of valid contact form
      const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        try {
          // Disable form while processing submission
          setDisabled(true);
    
          // Define template params
          const templateParams = {
            name,
            email,
            subject,
            message
          };
    
          // Use emailjs to email contact form data
          await emailjs.send(
            "service_j4zx2bn",
            "template_p5arrs7",
            templateParams,
            "Kahvc3Z_VTPqM-kVx"
          );
    
          // Reset contact form fields after submission
          reset();
          // Display success toast
          toastifySuccess();
          // Re-enable form submission
          setDisabled(false);
        } catch (e) {
          console.log(e);
        }
      };
  return (
    <div>
         {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                <h2>Contact</h2>
                <p>Contact Us</p>
                </div>
            </div>

            {/* <div data-aos="fade-up">
                <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
            </div> */}

            <div class="container" data-aos="fade-up">

                <div class="row mt-5">

                <div class="col-lg-4">
                    <div class="info">
                    <div class="address">
                        <i class="bi bi-geo-alt"></i>
                        <h4>Location:</h4>
                        <p> 505, Silver Star City, near Silicon City, Indore, Madhya Pradesh 452012</p>
                    </div>

                    <div class="open-hours">
                        <i class="bi bi-clock"></i>
                        <h4>Open Hours:</h4>
                        <p>
                        Monday-Saturday:<br/>
                        11:00 AM - 6:00 PM
                        </p>
                    </div>

                    <div class="email">
                        <i class="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>Priya@gmail.com</p>
                    </div>

                    <div class="phone">
                        <i class="bi bi-phone"></i>
                        <h4>Call:</h4>
                        <p> 079748 88294</p>
                    </div>

                    </div>

                </div>

                <div class="col-lg-8 mt-5 mt-lg-0">

                    <form  onSubmit={handleSubmit(onSubmit)} noValidate class="php-email-form">
                    <div class="row">
                        <div class="col-md-6 form-group">
                        <input
                        type='text'
                        name='name'
                        {...register('user_name', {
                          required: {
                            value: true,
                            message: 'Please enter your name'
                          },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                        })}
                        className='form-control formInput'
                        placeholder='Name'
                      ></input>
                       {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                        </div>
                        <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input
                        type='email'
                        name='user_email'
                        {...register('email', {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        className='form-control formInput'
                        placeholder='Email address'
                      ></input>
                      {errors.email && (
                        <span className='errorMessage'>Please enter a valid email address</span>
                      )}
                        </div>
                    </div>
                    <div class="form-group mt-3">
                    <input
                        type='text'
                        name='subject'
                        {...register('subject', {
                          required: {
                            value: true,
                            message: 'Please enter a subject'
                          },
                          maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                          }
                        })}
                        className='form-control formInput'
                        placeholder='Subject'
                      ></input>
                      {errors.subject && (
                        <span className='errorMessage'>{errors.subject.message}</span>
                      )}
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6 form-group">
                        <input
                        type='text'
                        name='age'
                        {...register('age', {
                          required: {
                            value: true,
                            message: 'Please enter your age'
                          },
                          maxLength: {
                            value: 30,
                            message: 'Please use 3 characters or less'
                          }
                        })}
                        className='form-control formInput'
                        placeholder='Student age'
                      ></input>
                      {errors.age && <span className='errorMessage'>{errors.age.message}</span>}
                        </div>
                        <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input
                        type='text'
                        name='contact'
                        {...register('contact', {
                          required: {
                            value: true,
                            message: 'Please enter your Contact no.'
                          },
                          maxLength: {
                            value: 30,
                            message: 'Please use 11 characters or less'
                          }
                        })}
                        className='form-control formInput'
                        placeholder='Contact Number'
                      ></input>
                      {errors.contact && <span className='errorMessage'>{errors.contact.message}</span>}
                        </div>
                    </div>
                    <div class="form-group mt-3">
                    <textarea
                        rows={3}
                        name='message'
                        {...register('message', {
                          required: true
                        })}
                        className='form-control formInput'
                        placeholder='Message'
                      ></textarea>
                      {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>
                    
                    <div class="my-3">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you! </div>
                    </div>
                    <div class="text-center"><button type="submit"  disabled={disabled}>Send Message</button></div>
                    </form>
                    <ToastContainer />

                </div>

                </div>

            </div>
        </section>
        {/* <!-- End Contact Section --> */}
    </div>
  )
  
}

export default ContactHome