import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ModifyContact = () => {
	const { store, actions } = useContext(Context);

	const [name, setName] = useState(store.contact.full_name);
	const [email, setEmail] = useState(store.contact.email);
	const [address, setAddress] = useState(store.contact.address);
	const [phone, setPhone] = useState(store.contact.phone);

	const updateName = (nameInputValue) => {
	  setName(nameInputValue);
	};
	const updateEmail = (emailInputValue) => {
	  setEmail(emailInputValue);
	};
	const updateAddress = (addressInputValue) => {
	  setAddress(addressInputValue);
	};
	const updatePhone = (phoneInputValue) => {
		setPhone(phoneInputValue);
	  };
  
	const ModifyOneContact = () => {
		actions.modifyContact(name, email, address, phone, store.contact.id)
	};

	return (
		<>
			<div>
				<div className="justify-content-center p-5 m-5 border">
					<h1 className="text-center my-4">Modify contact</h1>

					<div className="form-group my-3">
						<label>Full Name</label>
						<input 
							type="text"
							className="form-control my-2"
							name="full_name"
							onChange={(e) => {updateName(e.target.value)}}
							id="fullNameInput"
							placeholder= {store.contact.full_name}
							defaultValue= {store.contact.full_name}
						/>
					</div>

					<div className="form-group my-3">
						<label>Email</label>
						<input
							type="email"
							name="email"
							className="form-control my-2"
							onChange={(e) => {updateEmail(e.target.value)}}
							id="emailInput"
							aria-describedby="emailHelp"
							placeholder= {store.contact.email}
							defaultValue= {store.contact.email}
						/>
					</div>

					<div className="form-group my-3">
						<label>Phone</label>
						<input
							type="text"
							name="phone"
							className="form-control my-2"
							onChange={(e) => {updatePhone(e.target.value)}}
							id="phoneInput"
							placeholder= {store.contact.phone}
							defaultValue= {store.contact.phone}
						/>
					</div>

					<div className="form-group my-3">
						<label>Address</label>
						<input
							type="text"
							name="address"
							className="form-control my-2" 
							onChange={(e) => {updateAddress(e.target.value)}}
							id="addressInput"
							placeholder= {store.contact.address}
							defaultValue= {store.contact.address}
						/>
					</div>

					<div className="d-grid gap-2">
						<button onClick={() => ModifyOneContact()} className="btn btn-primary">Save</button>
						<Link to="/contact">
							<button className="btn text-center">or get back to contacts</button>						
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default ModifyContact;