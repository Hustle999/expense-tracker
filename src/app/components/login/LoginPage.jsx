// "use client";
// import Link from "next/link";
// import { LoginForm } from "./LoginForm";

// export const LoginPage = () => {
//   return (
//     <main className="grid grid-cols-2 h-screen">
//       <div className="flex flex-col justify-center items-center gap-10">
//         <div className="flex items-center gap-3">
//           <div className="w-[25px] h-[25px]">
//             <img src="./Vector.png" alt="" />
//           </div>
//           <div className="font-semibold text-2xl">Geld</div>
//         </div>
//         <div className="flex flex-col gap-2 text-center">
//           <div className="font-semibold text-2xl">Welcome Back</div>
//           <div>Welcome back, Please enter your details</div>
//         </div>
//         <LoginForm />
//         <div className="flex gap-3">
//           <div>Don't have account?</div>
//           <Link href="register">
//             <div className="text-blue-600">Sign up</div>
//           </Link>
//         </div>
//       </div>
//       <div className="bg-blue-600"></div>
//     </main>
//   );
// };

"use client";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
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
    <div className="grid grid-cols-2 h-screen">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="flex items-center gap-3">
          <div className="w-[25px] h-[25px]">
            <img src="./VectorBlue.png" alt="" />
          </div>
          <div className="font-semibold text-2xl">Geld</div>
        </h1>
        <div className="flex flex-col gap-2 text-center">
          <div className="font-semibold text-2xl">Welcome Back</div>
          <div>Welcome back, Please enter your details</div>
        </div>
        <LoginForm />
        <div className="flex flex-col items-center py-3 w-full gap-3">
          <p className="flex gap-3">
            Don't have account?
            <Link href="/register">
              <p className="text-blue-500">Sign-up</p>
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-blue-600"></div>
    </div>
  );
};
