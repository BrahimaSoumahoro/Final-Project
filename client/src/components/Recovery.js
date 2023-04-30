import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { PasswordValidate } from '../helper/validate'


export default function Recovery() {

  const formik = useFormik({
    initialValues : {
      Password : ''
    },
    validate :PasswordValidate,
    validateOnBlur: false, 
    validateOnChange: false,
    onSubmit : async values => {
      console.log(values)
    }
})
  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex  justify-center items-center h-screen'>
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Recover your password here</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Check your email for your recovery one time code!
            </span>
            </div>

            <form className='pt-25'>
   

              <div className="textbox flex flex-col items-center gap-6">

                <div className='input text-center'>
                  <span className='py-4 text-sm text-left text-gray-500'>
                  Enter your one time code below.
                </span>
                  <input className={styles.textbox} type="text" placeholder='One Time Code here'  />
                </div>

                  <button className={styles.btn} type='submit'>Sign In</button>
              </div>

              <div className="text-center py-4">
                <span className="text-gray-500">Did Not get one time code? <button className="text-red-500" >Resend one time code</button></span>

              </div>

            </form>

        </div>
      </div>
    </div>
  )
}
