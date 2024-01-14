import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const WriteReview = ({ isOpen, onClose, onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            asin: '',
            image: '',
            overall: 0,
            reviewerID: '',
            reviewerName: '',
            reviewText: '',
            reviewTime: '',
            unixReviewTime: 0,
            summary: '',
            verified: false,
            vote: '',
        },
        validationSchema: Yup.object({
            asin: Yup.string().required('ASIN is required'),
            overall: Yup.number().min(1, 'Overall rating must be at least 1').max(5, 'Overall rating must be at most 5').required('Overall rating is required'),
            reviewerID: Yup.string().required('Reviewer ID is required'),
            reviewerName: Yup.string().required('Reviewer Name is required'),
            reviewText: Yup.string().required('Review Text is required'),
            reviewTime: Yup.string().required('Review Time is required'),
            unixReviewTime: Yup.number().required('Unix Review Time is required'),
            summary: Yup.string().required('Summary is required'),
            verified: Yup.boolean().required('Verification status is required'),
            vote: Yup.string().required('Vote is required'),
        }),
        onSubmit: (values) => {
            // You can perform any further actions here before submitting the form data
            onSubmit(values);
        },
    });

    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
            <div className="modal-overlay fixed inset-0 bg-gray-600 opacity-50"></div>
            <div className="modal-container bg-white w-1/2 mx-auto mt-10 p-6 rounded shadow-lg">
                <div className="modal-header">
                    <span className="modal-close" onClick={onClose}>
                        &times;
                    </span>
                    <h2 className="modal-title">Enter Details</h2>
                </div>
                <div className="modal-body">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="asin" className="block text-gray-700 font-bold mb-2">
                                ASIN
                            </label>
                            <input
                                type="text"
                                id="asin"
                                name="asin"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.asin}
                                className={`border ${formik.touched.asin && formik.errors.asin ? 'border-red-500' : 'border-gray-300'} p-2 w-full`}
                            />
                            {formik.touched.asin && formik.errors.asin && <div className="text-red-500">{formik.errors.asin}</div>}
                        </div>

                        {/* Repeat similar blocks for other fields */}

                        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WriteReview;
