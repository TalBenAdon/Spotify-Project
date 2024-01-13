import React, { useState } from 'react'
import styles from './styles.module.css'
import { UserContext } from '../../Context/UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const [useForm, setUseForm] = useState({ userName: '', password: '' })
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(useForm)
    navigate('/')
  }

  const handleChange = e => setUseForm(oldForm => ({ ...oldForm, [e.target.name]: e.target.value }))

  return (

    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit} >
        <h3>Login</h3>
        <div className={styles.formGroups}>
          <label htmlFor="username" className={styles.label}>
            User Name:
          </label>
          <input type="text" name='userName' onChange={handleChange} value={useForm.userName} />
        </div>
        <div className={styles.formGroups}>
          <label htmlFor="password">
            Password:
          </label>
          <input type="password" name='password' onChange={handleChange} value={useForm.password} />
        </div>
        <button type='submit' className={styles.button} onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  )
}
