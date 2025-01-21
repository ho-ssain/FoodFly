import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { GiFoodTruck } from "react-icons/gi";

export default function SignUp() {
  type FormValues = {
    name: string;
    email: string;
    role: string;
    gender:string;
    favorite_food:string;
    password: string;
    confirm_password: string;
  };

  const { register, handleSubmit, getValues, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      role: "",
      gender: "",
      favorite_food: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = (formData: FormValues) => {
    console.log(formData);
  };

  enum Roles {
    'admin' = 'restaurant-admin',
  }

  enum Gender {
    'male' = 'male',
    'female' = 'female',
    'other' = 'other',
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-950 shadow-md rounded-lg px-7 py-5">
        <GiFoodTruck size={60} className="mx-auto"/>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Full Name"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
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

          {/* Email Input */}
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

        {/* Role Input */}
        <div>
            <label
              htmlFor="gender"
              className="block text-base font-medium"
            >
              Role <span className="text-red-500">*</span>
            </label>
            <select
              id="role"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              {...register("role", {
                required: {
                  value: true,
                  message: "Role is required",
                },
              })}
            >
              <option value="">Select Role</option>
              {
                Object.keys(Roles).map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))
              }
            </select>
            <ErrorMessage
              errors={errors}
              name="gender"
              render={({ message }) => (
                <p className="text-red-500">{message}</p>
              )}
              />
          </div>

          {/* Gender Input */}
          <div>
            <label
              htmlFor="gender"
              className="block text-base font-medium"
            >
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              id="gender"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              {...register("gender", {
                required: {
                  value: true,
                  message: "Gender is required",
                },
              })}
            >
                <option value="">Select Gender</option>
              {
                Object.keys(Gender).map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))
              }
            </select>
            <ErrorMessage
              errors={errors}
              name="gender"
              render={({ message }) => (
                <p className="text-red-500">{message}</p>
              )}
              />
          </div>

          {/* Favorite Food Input */}
          <div>
            <label
              htmlFor="favorite_food"
              className="block text-base font-medium"
            >
              Favorite Food <span className="text-red-500">*</span>
            </label>
            <input
              id="favorite_food"
              type="text"
              placeholder="Enter Your Favorite Food"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              {...register("name", {
                required: {
                  value: true,
                  message: "Favorite food is required",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="favorite_food"
              render={({ message }) => (
                <p className="text-red-500">{message}</p>
              )}
            />
          </div>

          {/* Password Input */}
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

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="c-password"
              className="block text-base font-medium"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              id="c-password"
              type="password"
              placeholder="Confirm Password Again"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900"
              {...register("confirm_password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                validate: {
                  matchesPassword: (value) =>
                    value === getValues("password") ||
                    "Passwords do not match",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="confirm_password"
              render={({ message }) => (
                <p className="text-red-500">{message}</p>
              )}
            />
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
          Already Join? <Link href="/sign-in">Sign In</Link>
        </div>

        <div className="text-center mt-6 text-xs text-gray-500">
          © 2025 | All Rights Reserved & Powered by FoodFly Org.
        </div>

      </div>
    </div>
  );
}


