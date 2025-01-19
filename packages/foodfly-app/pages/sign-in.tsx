import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { GiFoodTruck } from "react-icons/gi";

const LoginForm = () => {
  type FormValues = {
    email: string;
    password: string;
  };

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (formData: FormValues) => {
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-950 shadow-md rounded-lg px-8 py-10">
        <GiFoodTruck size={80} className="mx-auto"/>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email input */}
          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email Address"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="text-red-500">{message}</p>
              )}
            />
          </div>

          {/* Password input */}
          <div>
            <label
              htmlFor="password"
              className="block text-base font-medium"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                validate: {
                  minLength: (value) =>
                    value.length >= 5 ||
                    "Password should have more than 5 characters",
                  isContainNumber: (value) =>
                    /\d/.test(value) || "Password should have at least one number",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <p className="text-red-500">{message}</p>
              )}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-500 hover:text-blue-700"
            >
              Forgot Password?
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-6 text-sm text-gray-200">
          New to FoodFly? <Link href="/sign-up">Sign Up</Link>
        </div>
        <div className="text-center mt-6 text-xs text-gray-500">
          © 2025 | All Rights Reserved & Powered by FoodFly Org.
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
