import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {useFormik} from 'formik';

const FormComponent = () => {

      const [ state, setState ] = useState(1);

      let today = new Date();
      let defaultStartDate = today.toLocaleDateString('en-CA');

      //formatting end date to be 1 month later by default
      let year = today.getFullYear();
      let month = `${today.getMonth() + 2}`.padStart(2, "0");
      let day = `${today.getDate()}`.padStart(2, "0");

      let defaultEndDate = [year, month, day].join("-");

      const formik = useFormik({
        initialValues:{
          id: 1,
          objective: "",
          measure1: "",
          measure2: "",
          measure3: "",
          startDate: defaultStartDate,
          endDate: defaultEndDate
        },
        onSubmit: (values, {resetForm}) => {
          localStorage.setItem("formData", JSON.stringify(values));
          alert("Updated!");
          resetForm();
        }
      });

      return (
        <div className="dashContainer">
            <form onSubmit={formik.handleSubmit} className="formContainer">
                  <div className="form-left">
                        <p>
                          <label htmlFor="objective">Objective: </label>
                          <input type="text" name="objective" value={formik.values.objective} onChange={formik.handleChange} className="form-input" size="90"></input>
                        </p>
                        <p>
                          <label htmlFor="measure1">Key Measures: </label>
                          <input type="text" name="measure1" value={formik.values.measure1} onChange={formik.handleChange} className="form-input" size="90"></input>
                        </p>
                        <p>
                          <input type="text" name="measure2" value={formik.values.measure2} onChange={formik.handleChange} className="form-input" size="90"></input>
                        </p>
                        <p>
                          <input type="text" name="measure3" value={formik.values.measure3} onChange={formik.handleChange} className="form-input" size="90"></input>
                        </p>
                        <button type="submit" className="formUpdateButton">Update</button>
                      </div>
                      <div className="form-right">
                        <p>
                          <label htmlFor="startDate">Start Date: </label>
                          <input type="date" name="startDate" value={formik.values.startDate} onChange={formik.handleChange} className="form-input" size="45"></input>
                        </p>
                        <p>
                          <label htmlFor="endDate">End Date: </label>
                          <input type="date" name="endDate" value={formik.values.endDate} onChange={formik.handleChange} className="form-input" size="45"></input>
                        </p>
                  </div>
            </form>

            <button className="add-objective-button">Add New Objective</button>
        </div>

      );
  }


export default FormComponent;
