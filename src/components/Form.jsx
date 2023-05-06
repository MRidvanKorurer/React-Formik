import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schema/basicSchema";

const Form = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
    // console.log(values, actions);
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        age: "",
        message: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="formItem">
          <label>Ad Soyad</label>
          <input
            type="text"
            value={values.name}
            onChange={handleChange}
            id="name"
            className="input"
          />
        </div>
        {errors.name && <p className="inputP">{errors.name}</p>}

        <div className="formItem">
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            className="input"
          />
        </div>
        {errors.email && <p className="inputP">{errors.email}</p>}

        <div className="formItem">
          <label>Şifre</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            className="input"
          />
        </div>
        {errors.password && <p className="inputP">{errors.password}</p>}

        <div className="formItem">
          <label>Yaşınız</label>
          <input
            type="number"
            value={values.age}
            onChange={handleChange}
            id="age"
            className="input"
          />
        </div>
        {errors.age && <p className="inputP">{errors.age}</p>}

        <div className="formItem">
          <label>Mesajınız</label>
          <textarea
            type="text"
            value={values.message}
            onChange={handleChange}
            id="message"
            rows={6}
            className="input"
          />
        </div>
        {errors.message && <p className="inputP">{errors.message}</p>}

        <button className="btnSubmit" disabled={isSubmitting} type="submit">
          GÖNDER
        </button>
      </form>
    </div>
  );
};

export default Form;
