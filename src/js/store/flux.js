const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],			
			contact: {},
		},
		actions: {

			getAllContacts: async() => {
                const response = await fetch ("https://playground.4geeks.com/apis/fake/contact/agenda/ramira");
                const contacts = await response.json();
                setStore({ ...getStore(), contacts });
            },

			addContact: async (name, email, address, phone) => {
				const allContactData = {
					full_name: name,
					email: email,
					agenda_slug: "ramira",
					address: address,
					phone: phone,
				}
				const response = await fetch ("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type":"application/json",
					},
					body: JSON.stringify(allContactData)
				})
				const newcontact = await response.json()
				setStore({...getStore(), newcontact})
				getAllContacts()
			},

			deleteContact: async (contact_id) => {

				const url = `https://playground.4geeks.com/apis/fake/contact/${contact_id}`;
				const response = await fetch (url, {
					method: "DELETE", 
				})
				const nocontact = await response.json()
				setStore({ ...getStore(), nocontact });
			},

			modifyContact: async (name, email, address, phone, contact_id) => {
				const contactData = {
					full_name: name,
					email: email,
					agenda_slug: "ramira",
					address: address,
					phone: phone,
				}
				const url = `https://playground.4geeks.com/apis/fake/contact/${contact_id}`;
				const response = await fetch (url, {
					method: "PUT",
					headers: {
						"Content-Type":"application/json",
					},
					body: JSON.stringify(contactData)
				})
				const changedContact = await response.json()
				setStore({...getStore(), changedContact})
			},

			setContact: (contact) => {
				setStore({contact:contact})
			},

			getOneContact: async(contact_id) => {
				const url = `https://playground.4geeks.com/apis/fake/contact/${contact_id}`;
                const response = await fetch (url);
                const contactinfo = await response.json();
                getActions().setContact(contactinfo[0]);
				console.log(contactinfo)
            },
		}
	};
};

export default getState;
