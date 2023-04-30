import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import styles from '../styles/Profile.module.css';
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { ProfileValidate } from '../helper/validate';
import convertToBase64 from '../helper/convert';
import extended from '../styles/Profile.module.css';


export default function Profile() {

/** Converting the image file to 64 and storing it here */
const [file, setFile] = useState()

  const formik = useFormik({
    initialValues : {
      firstName :'',
      lastName : '',
      email: '',
      phone : '',
      address: '',
      city : '',
      state : '',
      zipcode : '',
    },
    validate :ProfileValidate,
    validateOnBlur: false, 
    validateOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values, { profile : file || ""})
      console.log(values)
    }
})
/** formik doesn't support file upload so we need to create this handler */
const onUpload = async e => {
  const base64 = await convertToBase64(e.target.files[0]);
  setFile(base64);
}

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex  justify-center items-center h-screen'>
        <div className={styles.glass} style={{width : "45%"}}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Profile</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              It is all about you here. You look good!
            </span>
            </div>

            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4'>
                <label htmlFor="profile">

{/* if a profile picture is uploaded we use that, if not just use the avatar */}
                  <img src={file || avatar} className={styles.profile_img} alt="avatar" />
                </label>

                  <input onChange={onUpload} type="file" id="profile" name="profile"/>

              </div>

              <div className="textbox flex flex-col items-center gap-6">

                <div className='name flex w-3/4 gap-10'>
                  <input {...formik.getFieldProps('firstName')} className={styles.textbox} type="text" placeholder='FirstName*'  />
                  <input {...formik.getFieldProps('LastName')} className={styles.textbox} type="text" placeholder='LastName*'  />
                </div>

                   <div className='name flex w-3/4 gap-10'>
                  <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email*'  />
                  <input {...formik.getFieldProps('phone')} className={styles.textbox} type="text" placeholder='Phone Number*'  />
                </div>

{/* @@@@@@@@@@@ The Address fields */}
    <input {...formik.getFieldProps('address')} className={styles.textbox} type="text" placeholder='Address*'  />
              
              <div className='location flex w-3/4 gap-10'>
                <input {...formik.getFieldProps('city')} className={styles.textbox} type="text" placeholder='City*'  />
                <input {...formik.getFieldProps('state')} className={styles.textbox} type="text" placeholder='State*'  />
                <input {...formik.getFieldProps('zipcode*')} className={styles.textbox} type="text" placeholder='Zip Code*'  />
              </div>

                  <button className={styles.btn} type='submit'>Submit your updated info</button>
              </div>

              <div className="text-center py-4">
                <span className="text-gray-500">Cancel the update! <Link className="text-red-500" to="/">logout</Link></span>

              </div>

            </form>

        </div>
      </div>
    </div>
  )
}
