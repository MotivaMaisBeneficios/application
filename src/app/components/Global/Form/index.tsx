// components/Global/Form.tsx
'use client';

import { Formik, Form, FormikHelpers, FormikValues } from 'formik';
import * as React from 'react';
import { Schema } from 'yup';

type FormProps<T extends FormikValues> = {
  initialValues: T;
  validationSchema?: Schema<T>;
  onSubmit: (values: T, helpers: FormikHelpers<T>) => void | Promise<unknown>;
  children: React.ReactNode;
};

export function GlobalForm<T extends FormikValues>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: FormProps<T>) {
  return (
    <Formik<T>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="w-full">{children}</Form>
    </Formik>
  );
}
