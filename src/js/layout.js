import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Contact } from "./views/Contact.jsx";
import { AddContact } from "./views/AddContact.jsx";
import { ModifyContact } from "./views/ModifyContact.jsx";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/addcontact" element={<AddContact />} />
						<Route path="/modifycontact/:id" element={<ModifyContact />} />

						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);