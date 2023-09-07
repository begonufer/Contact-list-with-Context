import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { store, actions } = useContext(Context);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

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

    const addOneContact = () => {
        actions.addContact(name, email, address, phone);
    };

    return (
        <>
        <div>
            <div className="justify-content-center p-5 m-5 border">
            <h1 className="text-center my-4">Add a new contact</h1>
            <div className="form-group my-3">
                <label>Full Name</label>
                <input
                    type="text"
                    className="form-control my-2"
                    onChange={(e) => {
                        updateName(e.target.value);
                    }}
                    id="fullNameInput"
                    placeholder="Full Name"
                />
            </div>
            <div className="form-group my-3">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control my-2"
                    onChange={(e) => {
                        updateEmail(e.target.value);
                    }}
                    id="emailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                />
            </div>
            <div className="form-group my-3">
                <label>Phone</label>
                <input
                    type="text"
                    className="form-control my-2"
                    onChange={(e) => {
                        updatePhone(e.target.value);
                    }}
                    id="phoneInput"
                    placeholder="Enter phone"
                />
            </div>
            <div className="form-group my-3">
                <label>Address</label>
                <input
                    type="text"
                    className="form-control my-2"
                    onChange={(e) => {
                        updateAddress(e.target.value);
                    }}
                    id="addressInput"
                    placeholder="Enter address"
                />
            </div>
            <div className="d-grid gap-2">
                <button onClick={() => addOneContact()} className="btn btn-primary">
                    Save
                </button>
                <Link to="/contact">
                    <button className="btn text-center">
                        or get back to contacts
                    </button>
                </Link>
            </div>
            </div>
        </div>
        </>
    );
};

export default AddContact;