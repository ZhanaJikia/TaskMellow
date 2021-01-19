import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../components/images/taskLogo.png'

export default function (props) {
    const { onChangeEmail, closeModalSignIn, emailValue, children } = props

    return (
			<div className="col-md-5 text-center">
				<img src={logo} alt="logo"></img>
				<form>
					<div onChange={onChangeEmail} className="form-group">
							<input className="email form-control" type="email" placeholder="Email" />
					</div>
					<div className="form-group">
							<input className="form-control" type="password" placeholder="Password" />
					</div>
					<button onClick={closeModalSignIn.bind(this, emailValue)} className="btn btn-primary btn-block">Sign in</button>
				</form>
				{children}
			</div>
    )
}