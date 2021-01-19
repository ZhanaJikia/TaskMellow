import React, { Component } from 'react'

import GroupList from './GroupList'
import ModalSignIn from './ModalSignIn'
import Header from './Header'

export default class extends Component {
    state = {
			isUserSignIn: '',
			isModalOpen: false,
    }

    toggleSignIn = () => {
      const { isUserSignIn, isModalOpen } = this.state;
			(isUserSignIn && !isModalOpen)
					? this.setState({ isUserSignIn: '' })
					: this.setState({ isModalOpen: true })
    }

    handleLogin = (user) => {
			this.setState({
				isUserSignIn: user,
				isModalOpen: false,
			})
    }

    render() {
			const { isUserSignIn, isModalOpen } = this.state;
			return (
				<React.Fragment>
					<Header
							isUserSignIn={isUserSignIn}
							toggleSignIn={this.toggleSignIn}
					/>

					<GroupList 
							isUserSignIn={isUserSignIn}
							flowUser={ (user) => this.setState({ isUserSignIn: user }) }
					/>

					{isModalOpen
							&&!isUserSignIn
							&&<ModalSignIn closeModalSignIn={this.handleLogin} />
					}
				</React.Fragment>
			)
    }
}