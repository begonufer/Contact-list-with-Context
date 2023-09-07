import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import ContactCard from "./../component/ContactCard.jsx";

export const Contact = () => {
    const { store, actions } = useContext(Context);
    
    useEffect(() => {
        actions.getAllContacts()
    }, [])
    
	return (
		<>
        	<div className="ml-auto">
				<Link to="/addcontact">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
    		<div className="container-fluid">
	    		<ul>
                    {store.contacts.map((contact, index) => (
                            <ContactCard 
                                name={contact.full_name}
                                address={contact.address}
                                phone={contact.phone}
                                email={contact.email}
                                key={index}
                                id={contact.id}
                            />
					))}
    			</ul>
	    	</div>
		</>
	);
};

export default Contact;