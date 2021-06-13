import React from 'react';
import FormHeader from '../contents/formHeader';
import useForm from "../../hooks/useform";
import { renderInput, renderSelect, renderTextarea, renderButton } from '../common/form';
import { countries } from '../../services/countryServices';
import { cities } from '../../services/cityServices';
import { sources } from '../../services/sourceServices';

import '../../assets/css/pages/customers.css';  

const CustomerCreate = () => {
    
    const { inputs, handleInputChange, handleSubmit } = useForm();

    return (
        
        <div className="main-content">
            <section className="section">
                <FormHeader title="Add new lead" link="/leads" />
                <div className="section-body">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="card">
                                <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                                    <div className="card-body card-grid">
                                        {renderInput("name", "Name", inputs.name_name, handleInputChange)}
                                        {renderInput("email", "Email", inputs.email, handleInputChange, "email")}
                                        {renderInput("phone", "Phone", inputs.phone, handleInputChange)}
                                        {renderInput("designation", "Designation", inputs.designation, handleInputChange)}
                                        {renderSelect("country", "Country", countries, inputs.country, handleInputChange)}
                                        {renderSelect("city", "City", cities, inputs.city, handleInputChange)}
                                        {renderInput("website", "Website", inputs.website, handleInputChange)}
                                        {renderSelect("source", "Source", sources, inputs.source, handleInputChange)}
                                        {renderTextarea("business_information", "Business Information", inputs.business_information, handleInputChange)}
                                    </div>
                                    <div className="card-footer text-right">
                                        {renderButton("Submit")}
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