// import React from 'react';
import React, { useState, Fragment } from 'react'
import AddPrinterForm from './forms/AddPrinterForm'
import EditPrinterForm from './forms/EditPrinterForm'
import PrinterTable from './tables/PrinterTable'
// import logo from './logo.svg';
import './App.css';



const App = () => {
	// Data
	const printersData = [
		{ id: 1, name: 'Canon', ip: '120.34.24.34',status:'active' },
		{ id: 2, name: 'Hp', ip: '136.245.42.63', status:'inactive' },
		{ id: 3, name: 'Samsung', ip: '136.452.42.36', status:'active' },
	]

	const initialFormState = { id: null, name: '', ip: '' , status:''}

	// Setting state
	const [ users, setUsers ] = useState(printersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, ip: user.ip , status: user.status })
	}

	return (
		<div className="container">
			<h1 className="App-header">Printer Management System</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit printer</h2>
							<EditPrinterForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add printer</h2>
							<AddPrinterForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View printers</h2>
					<PrinterTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App;
