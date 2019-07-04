import React, { useState } from 'react'
import axios from 'axios';

const AddPrinterForm = props => {
	const initialFormState = { id: null, name: '', username: '', status:'' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}
	return (
		<form
			 async onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username || !user.status) return

				props.addUser(user)
                setUser(initialFormState)
                // await axios.post(
                //     'https://i1xsjzkri4.execute-api.us-east-1.amazonaws.com/default/serverlessAppFunction',
                //     { key1: `${name}, ${message}` }
                // );
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Ip</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <label>Status</label>
			<input type="text" name="status" value={user.status} onChange={handleInputChange} />
			<button>Add new printer</button>
		</form>
	)
}

export default AddPrinterForm