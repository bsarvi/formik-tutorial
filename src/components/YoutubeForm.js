import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  social: {
    facebook: "",
    twitter: "",
  },
};

const onSubmit = (values) => {
  console.log("Form Data:", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Inavlid Email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            placeholder="Add Youtube Channel Name"
          />
          <ErrorMessage name="channel" component={TextError} />
        </div>

        <div className="=form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" type="text" id="comments" name="comments" />
          <ErrorMessage name="comments" component={TextError} />
        </div>

        <div className="=form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field type="text" id="facebook" name="social.facebook" />
          <ErrorMessage name="social.facebook" component={TextError} />
        </div>

        <div className="=form-control">
          <label htmlFor="twitter">Twitter</label>
          <Field type="text" id="twitter" name="social.twitter" />
          <ErrorMessage name="social.twitter" component={TextError} />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
