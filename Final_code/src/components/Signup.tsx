import {Button, Box, Typography, TextField } from "@mui/material";
import { Form, Formik} from "formik";
import {Field} from "formik";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
import "./Signup.css"
import {Card} from "react-bootstrap";

const initalValues = {
    email: "",
    password: "",
};

const MaterialForm = () => {
    const navigate = useNavigate();
    return (
        <div className="MaterialForm">
            <Card className={"Card"}>
            <Typography className="h1" variant="h4">
                LOGIN PAGE
            </Typography>
            <Formik
                initialValues={initalValues}
                validationSchema={object({
                    email: string().required("Please enter email").email("Invalid email"),
                    password: string()
                        .required("Please enter password")
                        .min(7, "Password should be minimum 7 characters long"),
                })}
                onSubmit={(values, formikHelpers) => {
                    console.log(values);
                    formikHelpers.resetForm();
                }}
            >
                {({ errors, isValid, touched, dirty }) => (
                    <Form>
                        <Field
                            name="email"
                            type="email"
                            as={TextField}
                            variant="outlined"
                            color="primary"
                            label="Email"

                            error={Boolean(errors.email) && Boolean(touched.email)}
                            helperText={Boolean(touched.email) && errors.email}
                        />
                        <Box height={14} />


                        <Box height={14} />
                        <Field
                            name="password"
                            type="password"
                            as={TextField}
                            variant="outlined"
                            color="primary"
                            label="Password"

                            error={Boolean(errors.password) && Boolean(touched.password)}
                            helperText={Boolean(touched.password) && errors.password}
                        />
                        <Box height={14} />

                        <Button
                            onClick={()=> navigate('/Module1')}
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            disabled={!isValid || !dirty}
                        >
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
            </Card>
        </div>
    );
};

export default MaterialForm;