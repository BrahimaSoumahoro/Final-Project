import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { registerValidate } from '../helper/validate'
import convertToBase64 from '../helper/convert'


export default function Register() {

/** Converting the image file to 64 and storing it here */
const [file, setFile] = useState()

  const formik = useFormik({
    initialValues : {
      email: 'username@email.com',
      username: 'username',
      Password : ''
    },
    validate :registerValidate,
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
            <h4 className='text-5xl font-bold'>Register</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Glad we are on your mind to join us, welcome.
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
                <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email*'  />
                 <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username*'  />
                  <input {...formik.getFieldProps('Password')} className={styles.textbox} type="text" placeholder='Password*'  />
                  <button className={styles.btn} type='submit'>Register</button>
              </div>

              <div className="text-center py-4">
                <span className="text-gray-500">Already have an account?<Link className="text-red-500" to="/">Just log in, please</Link></span>

              </div>

            </form>

        </div>
      </div>
    </div>
  )
}
