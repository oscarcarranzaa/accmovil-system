import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import Close from 'components/icons/close'
import EyeSVG from 'components/icons/eye'
import EyeInvisibleSVG from 'components/icons/eyeInvisible'
import Spinner from 'components/icons/spinner'
import WarnSVG from 'components/icons/warn'
import isValidEmail from 'hooks/useValidEmail'
import { useRouter } from 'next/router'
import styles from 'styles/login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(true)
  const [pass, setPass] = useState('')
  const [validPass, setValidPass] = useState(true)
  const [watchPass, setWatchPass] = useState(false)
  const [error, setError] = useState(null)
  const [send, setSend] = useState(false)
  const [redirect, setRedirect] = useState('Vamos')

  const Router = useRouter()
  const validateEmail = (email) => {
    const validate = isValidEmail(email)
    setValidEmail(validate)
  }

  const sendLogin = (e) => {
    e.preventDefault()
    const validateEmail = isValidEmail(email)
    email.length <= 3 ? setValidEmail(false) : setValidEmail(true)
    pass.length <= 4 ? setValidPass(false) : setValidPass(true)
    if (validateEmail && pass.length > 4) {
      setSend(true)
      const credentials = { email, password: pass }
      axios({
        method: 'POST',
        url: '/api/v1/auth/login',
        data: credentials,
        withCredentials: true
      })
        .then(() => {
          setSend(false)
          setRedirect('Redireccionando...')
          setError(null)
          Router.push('/')
        })
        .catch((err) => {
          console.log(err)
          setError(err.response.data.error)
          setSend(false)
        })
    }
  }
  const emailSucces = validEmail ? null : 'Correo no válido'
  const passSucces = validPass ? null : 'Contraseña muy corta'
  const inputPass = watchPass ? 'text' : 'password'
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.HomeBg}></div>
        <div className={styles.BgFront}></div>
        <div className={`${styles.glass} md:flex block items-center`}>
          <form onSubmit={sendLogin}>
            <h2
              className={`text-center text-lg font-semibold pl-2 pr-2 ${
                error !== null ? 'mb-1' : 'mb-9'
              }`}
            >
              SISTEMA ACCMOVIL
            </h2>
            <div
              className={`${styles.msgErrorLogin} ${
                error !== null ? 'flex' : 'hidden'
              } justify-center`}
            >
              <WarnSVG size={15} />
              <small className="ml-1">{error}</small>
            </div>
            <div className={styles.inputCont}>
              <p>Correo electrónico</p>
              <div
                className={`${styles.inputLogin} ${
                  !validEmail ? styles.inputFailed : ''
                }`}
              >
                <input
                  type="text"
                  value={email}
                  autoComplete="false"
                  autoCapitalize="false"
                  autoCorrect="false"
                  placeholder="Escribe tu correo"
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => validateEmail(email)}
                />
                <button
                  type="button"
                  className={`${styles.buttonInput} ${
                    email.length === 0 ? 'hidden' : ''
                  }`}
                  onClick={() => setEmail('')}
                >
                  <Close size={13} fill="#000" />
                </button>
              </div>
              <div className={styles.msgError}>
                <p>{emailSucces}</p>
              </div>
            </div>
            <div className={styles.inputCont}>
              <p>Contraseña</p>
              <div
                className={`${styles.inputLogin} ${
                  !validPass ? styles.inputFailed : ''
                }`}
              >
                <input
                  type={inputPass}
                  value={pass}
                  autoComplete="false"
                  autoCapitalize="false"
                  autoCorrect="false"
                  placeholder="Contraseña"
                  onChange={(e) => setPass(e.target.value)}
                  onBlur={() => {
                    pass.length > 4 ? setValidPass(true) : setValidPass(false)
                  }}
                />
                <button
                  type="button"
                  className={styles.buttonInput}
                  onClick={() => setWatchPass(!watchPass)}
                >
                  {watchPass ? (
                    <EyeSVG size={20} fill="#000" />
                  ) : (
                    <EyeInvisibleSVG size={20} fill="#000" />
                  )}
                </button>
              </div>
              <div className={styles.msgError}>
                <p>{passSucces}</p>
              </div>
            </div>
            <button
              className={`${styles.buttonSend} ${
                send ? styles.sendLogin : ''
              } font-semibold`}
              disabled={send}
            >
              {!send ? (
                redirect
              ) : (
                <Spinner size={24} primaryFill={'#fff'} secondFill={'#fff'} />
              )}
            </button>
          </form>
          <div className="mt-10 md:mt-0 md:ml-12 flex flex-col items-center">
            <div>
              <Image
                src={'/Logo-nombre.webp'}
                width={300}
                height={60}
                objectFit="cover"
              ></Image>
            </div>
            <div className="max-w-xs text-center">
              <p>Sistema administrador Accmovil, Honduras</p>
              <small>Todos los derechos reservados</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
