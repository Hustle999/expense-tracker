"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setErrorMessage("");
      try {
        const response = await fetch("http://localhost:4444/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success("Login successful!");
          localStorage.setItem("isLoggedIn", "true");
          router.push("/dashboard");
        } else {
          setErrorMessage(data.message || "Invalid credentials");
        }
      } catch (error) {
        setErrorMessage("Network error");
      }
    },
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      toast.success("you already login");
      router.push("/dashboard");
    }
  }, [router]);
  return (
    <form
      className="flex flex-col w-[384px] gap-4"
      onSubmit={formik.handleSubmit}
    >
      <div className="mb-4">
        <input
          placeholder="Email"
          id="email"
          name="email"
          type="email"
          className="w-full bg-slate-100 border rounded-lg p-3"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className="text-red-600">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <input
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          className="w-full bg-slate-100 border rounded-lg p-3"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div className="text-red-600">{formik.errors.password}</div>
        ) : null}
      </div>

      {errorMessage && <div className="mb-4 text-red-600">{errorMessage}</div>}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Log in
      </button>
    </form>
  );
};
