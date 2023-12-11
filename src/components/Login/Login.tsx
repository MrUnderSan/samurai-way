import React from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import {useFormik} from 'formik';
import {useAppDispatch, useAppSelector} from '../../redux/redux-store';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';

import 'antd/dist/antd.css'

type FieldType = {
    email: string;
    password: string;
    rememberMe: boolean;
};

export const Login: React.FC = () => {

    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(store => store.auth.isAuth)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: Partial<FieldType> = {}

            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 4) {
                errors.password = 'Invalid password'
            }

            return errors
        },
        onSubmit: values => {
            dispatch(login(values))
        },
    });

    if (isAuth) {
        return  <Redirect to="/profile"/>
    }

    return (
        <Form
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{rememberMe: formik.values.rememberMe}}
            onFinish={formik.handleSubmit}
        >
            <Form.Item<FieldType>
                label="Email"
                {...formik.getFieldProps('email')}
            >
                <Input/>
            </Form.Item>
            {formik.errors.email && formik.touched.email
                && <div style={{color: 'red'}}>
                    {formik.errors.email}
                </div>}
            <Form.Item<FieldType>
                label="Password"
                {...formik.getFieldProps('password')}
            >
                <Input.Password/>
            </Form.Item>
            {formik.errors.password && formik.touched.password
                && <div style={{color: 'red'}}>
                    {formik.errors.password}
                </div>}
            <Form.Item<FieldType>
                valuePropName="checked"
                wrapperCol={{offset: 8, span: 16}}
                {...formik.getFieldProps('rememberMe')}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
};
