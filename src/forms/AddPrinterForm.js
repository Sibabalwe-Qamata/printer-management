import React, { useState } from 'react'
import axios from 'axios';

const AddPrinterForm = props => {
	const initialFormState = { id: null, name: '', ip: '', status:'' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}
	return (
		<form
			 async onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.ip || !user.status) return

				props.addUser(user)
                setUser(initialFormState)
                // await axios.post(
                //     'https://i1xsjzkri4.execute-api.us-east-1.amazonaws.com/default/serverlessAppFunction',
                //     { key1: `${name}, ${message}` }
                // );
			}}
		>
			<label>Printer Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Printer Ip</label>
			<input type="text" name="ip" value={user.ip} onChange={handleInputChange} />
            <label>Status (active/inactive)</label>
			<input type="text" name="status" value={user.status} onChange={handleInputChange} />
			<button>Add new printer</button>
		</form>
	)
}

export default AddPrinterForm