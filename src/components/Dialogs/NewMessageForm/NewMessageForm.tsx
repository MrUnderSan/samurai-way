import React, {FC} from 'react';
import {useFormik} from 'formik';

type Props = {
    onSubmit: (message: string) => void
}

export const NewMessageForm: FC<Props> = ({onSubmit}) => {

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        onSubmit: values => {
            onSubmit(values.message)
            formik.resetForm()
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <textarea
                    {...formik.getFieldProps('message')}
                />
            </div>
            <button type="submit">add message</button>
        </form>
    )
}