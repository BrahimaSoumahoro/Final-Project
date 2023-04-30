import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { resetPasswordValidate} from '../helper/validate'


export default function Reset() {

  const formik = useFormik({
    initialValues : {
      Password : '',
      confirm_password : ''
    },
    validate :resetPasswordValidate,
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
        <div className={styles.glass} style={{ width : "50%"}}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Reset your account</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Reset your password here.
            </span>
            </div>

            <form className='py-20' onSubmit={formik.handleSubmit}>
              <div className="textbox flex flex-col items-center gap-6">
                <input {...formik.getFieldProps('Password')} className={styles.textbox} type="text" placeholder='Your New Password'  />
                <input {...formik.getFieldProps('confirm_password')} className={styles.textbox} type="text" placeholder='Confirm your Password'  />
                  <button className={styles.btn} type='submit'>Reset your account</button>
              </div>

            </form>

        </div>
      </div>
    </div>
  )
}
