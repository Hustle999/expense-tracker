"use client";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const Register = () => {
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
        const response = await fetch("http://localhost:4444/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();

        if (response.ok) {
          router.push("/");
        } else {
          setErrorMessage(data.message || "Error occurred");
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
    <div className="grid grid-cols-2 h-screen">
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-white p-8 w-full max-w-md">
          <div className="flex justify-center items-center gap-4 mb-[50px]">
            <img width={30} height={30} src="./VectorBlue.png" alt="" />
            <div className="font-semibold text-2xl">Geld</div>
          </div>
          <h1 className="text-2xl font-semibold mb-[5px] text-center">
            Create Geld account
          </h1>
          <h1 className=" mb-6 text-center ">
            Sign up below to create your Wallet account
          </h1>
          <form className="flex flex-col gap-7" onSubmit={formik.handleSubmit}>
            <input
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              className="mt-1 w-full p-3 border bg-slate-100 border-gray-300 rounded-md"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}

            <input
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              className="mt-1 w-full p-3 border bg-slate-100 border-gray-300 rounded-md"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <div className="text-red-600">{formik.errors.password}</div>
            ) : null}

            {errorMessage && (
              <div className="mb-4 text-red-600">{errorMessage}</div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 font-semibold rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
          <div className="flex justify-center items-center py-3 w-full gap-3">
            <p>Already have account ?</p>
            <Link href="/">
              <button className=" text-blue-500 hover:text-blue-600 p-2 rounded-md  w-full">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-blue-600"></div>
    </div>
  );
};
