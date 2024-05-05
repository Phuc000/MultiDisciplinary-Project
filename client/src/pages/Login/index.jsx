import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import '@coreui/coreui/dist/css/coreui.min.css'
import './Login.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username: ', username);
        console.log('Password: ', password);
        // FetchRequest('api/AuthenticationApi/Login', 'POST', {
        //     UserName: username,
        //     Password: password
        //     }, successCallback, errorCallback);
        setPopupMessage('Login successful');
        setShowPopup(true);
        setTimeout(() => {
            window.location.href = '/dashboard';
        }, 1500);
    };

    const successCallback = (data) => {
        console.log('Success:', data);
        localStorage.setItem('token', data.Token);
        localStorage.setItem('username', data.UserName); // Store the username
        setPopupMessage('Login successful');
        setShowPopup(true);
        // wait for 1 second before redirecting to dashboard
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1000);
        
        
    }
      
    const errorCallback = (error) => {
        console.error('Error:', error);
        setPopupMessage('Login failed. Wrong password or username.');
        setShowPopup(true);
    }

    return (
        <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center login-content">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md={8}>
                <CCardGroup>
                  <CCard className="p-4">
                    <CCardBody>
                      <CForm onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <p className="text-body-secondary">Sign In to your account</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput placeholder="Username" autoComplete="username" onChange={(e) => setUsername(e.target.value)} required/>
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <CFormInput
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </CInputGroup>
                        <CRow>
                          <CCol xs={6}>
                            <CButton type='submit' color="primary" className="px-4">
                              Login
                            </CButton>
                          </CCol>
                          <CCol xs={6} className="text-right">
                            <CButton color="link" className="px-0">
                              Forgot password?
                            </CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>
                  <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                    <CCardBody className="text-center">
                      <div>
                        <h2>Sign up</h2>
                        <p>
                            Wellcome to our website.
                          Don't have an account? Register now to get started.
                        </p>
                        <Link to="/register">
                          <CButton color="primary" className="mt-3" active tabIndex={-1}>
                            Register Now!
                          </CButton>
                        </Link>
                      </div>
                    </CCardBody>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
            {showPopup && (
                <CAlert className='popup' color='primary' dismissible visible={showPopup} onClose={() => setShowPopup(false)}>
                    <p>{popupMessage}</p>
                </CAlert>
            )}
        </div>
  )
}

export default Login