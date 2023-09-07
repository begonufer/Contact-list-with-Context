import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

import rigoImage from "../../img/rigo-baby.jpg";

export const ContactCard = ({ name, address, phone, email, id }) => {
    const { store, actions } = useContext(Context);
	const [contact, setContact] = useState ({});
    
    async function transformOneData(id) {
            await actions.getOneContact(id);
            const data = store.contact;
            setContact({data})
        }

    const userId = id;
    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-3">	
                        <img src={rigoImage} className="rounded-circle img-fluid"/>
                    </div>
                    <div className="col">
                        <h3>{name}</h3>
                        <p><FaMapMarkerAlt /> {address}</p>
                        <p><FaPhoneAlt /> {phone}</p>
                        <p><FaEnvelope /> {email}</p>
                        {/* <p>{id}</p> */}
                    </div>
                    <div className="col">
                            <button className="btn" onClick={() => transformOneData(id)}>
                                <Link to={`/modifycontact/${id}`}>
                                    <FaPencilAlt />
        						</Link>
                            </button>
                        <FaTrashAlt onClick={() => actions.deleteContact(id)} />
                    </div>
                </div>
            </li>
        </>
    )
}

export default ContactCard;