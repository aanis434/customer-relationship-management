import React from 'react';
import Joi from 'joi-browser';
import FormHeader from '../contents/formHeader';
import useForm from "../../hooks/useform";
import { renderInput, renderSelect, renderTextarea, renderButton } from '../common/form';
import { countries } from '../../services/countryServices';
import { cities } from '../../services/cityServices';
import { sources } from '../../services/sourceServices';
import { ratings } from '../../services/ratingServices';

import '../../assets/css/pages/customers.css';  

const CustomerCreate = () => {
    
    const schema = {
        _id: Joi.string(),
        company: Joi.string().min(3).required().label("Company Name"),
        contact_name: Joi.string().min(2).max(115).required().label("Contact Name"),
        email: Joi.string().email().label("Email"),
        phone: Joi.string().required().label("Phone"),
        designation: Joi.string().label("Designation"),
        country: Joi.string().label("Country"),
        city: Joi.string().label("City"),
        website: Joi.string().label("Website"),
        source: Joi.string().label("Source"),
        rating: Joi.string().label("Rating"),
        address: Joi.string().label("Address"),
        business_information: Joi.string().label("Business Information"),
    }

    const { inputs, errors, validate, handleInputChange, handleSubmit } = useForm(schema);

    return (
        
        <div className="main-content">
            <section className="section">
                <FormHeader title="Add new customer" link="/customers" />
                <div className="section-body">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="card">
                                <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                                    <div className="card-body card-grid">
                                        {renderInput("company", "Company Name", inputs.company, errors, handleInputChange)}
                                        {renderInput("contact_name", "Contact Name", inputs.contact_name, errors, handleInputChange)}
                                        {renderInput("email", "Email", inputs.email, errors, handleInputChange, "email")}
                                        {renderInput("phone", "Phone", inputs.phone, errors, handleInputChange)}
                                        {renderInput("designation", "Designation", inputs.designation, errors, handleInputChange)}
                                        {renderSelect("country", "Country", countries, inputs.country, errors, handleInputChange)}
                                        {renderSelect("city", "City", cities, inputs.city, errors, handleInputChange)}
                                        {renderInput("website", "Website", inputs.website, errors, handleInputChange)}
                                        {renderSelect("source", "Source", sources, inputs.source, errors, handleInputChange)}
                                        {renderSelect("rating", "Rating", ratings, inputs.rating, errors, handleInputChange)}
                                        {renderTextarea("address", "Address", inputs.address, errors, handleInputChange)}
                                        {renderTextarea("business_information", "Business Information", inputs.business_information, errors, handleInputChange)}
                                    </div>
                                    <div className="card-footer text-right">
                                        {renderButton("Submit", validate)}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default CustomerCreate;