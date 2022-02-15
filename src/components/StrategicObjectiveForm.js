import React from 'react';
import ReactDOM from 'react-dom';
import {useFormik} from 'formik';

const FormComponent = () => {

      const formik = useFormik({
        initialValues:{
          objective: "",
          measure1: "",
          measure2: "",
          measure3: ""
        },
        onSubmit: values => {
          alert(JSON.stringify(values));
        }
      });

      return (
        <div>
          <form onSubmit={formik.handleSubmit}>
            <p>
              <label htmlFor="objective">Objective: </label>
              <input type="text" name="objective" value={formik.values.objective} onChange={formik.handleChange}></input>
            </p>
            <p>
              <label htmlFor="measure1">Key Measure 1: </label>
              <input type="text" name="measure1" value={formik.values.measure1} onChange={formik.handleChange}></input>
            </p>
            <p>
              <label htmlFor="measure2">Key Measure 2: </label>
              <input type="text" name="measure2" value={formik.values.measure2} onChange={formik.handleChange}></input>
            </p>
            <p>
              <label htmlFor="measure3">Key Measure 3: </label>
              <input type="text" name="measure3" value={formik.values.measure3} onChange={formik.handleChange}></input>
            </p>
            <button type="submit">Update</button>
          </form>
        </div>
      );
  }


export default FormComponent;
