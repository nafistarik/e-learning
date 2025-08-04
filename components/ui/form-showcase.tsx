// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { FormInput } from "@/components/ui/form-input";
// import { FormSelect } from "@/components/ui/form-select";
// import { FormDatePicker } from "@/components/ui/form-date-picker";
// // import { FormFileUpload } from "@/components/ui/form-file-upload";
// import { FormTextarea } from "@/components/ui/form-textarea";
// import { FormRadioGroup } from "@/components/ui/form-radio-group";
// import { FormSwitch } from "@/components/ui/form-switch";
// import { FormCheckbox } from "@/components/ui/form-checkbox";

// // ---------------------------
// // 1. Zod Schema
// // ---------------------------
// const formSchema = z.object({
//   name: z.string().min(2, "Name is required"),
//   email: z.string().email("Invalid email"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
//   role: z.string().min(1, "Role is required"),

//   dob: z
//     .union([z.date(), z.string().transform((val) => new Date(val))])
//     .refine((val) => val instanceof Date && !isNaN(val.getTime()), {
//       message: "Date of Birth is required",
//     }),

//   bio: z.string().min(10, "Bio must be at least 10 characters"),

//   agree: z
//     .literal(true)
//     .refine((val) => val === true, { message: "You must agree to continue" }),

//   newsletter: z.boolean().optional(),

//   gender: z
//     .enum(["male", "female", "other"])
//     .refine((val) => !!val, { message: "Select a gender" }),
// });


// // ---------------------------
// // 2. Component
// // ---------------------------
// export default function FormShowcase() {
//   const {
//     register,
//     handleSubmit,
//     control,
//     // setValue,
//     formState: { errors },
//   } = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//       role: "",
//       dob: undefined,
//       // resume: undefined,
//       bio: "",
//       agree: false,
//       newsletter: false,
//       gender: undefined,
//     },
//   });

//   const onSubmit = (data: z.infer<typeof formSchema>) => {
//     console.log("✅ Form Submitted:", data);
//   };

//   return (
//     <div className="container flex flex-col items-center justify-center py-10">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="space-y-6 max-w-2xl w-full p-6 border rounded-xl shadow bg-white"
//       >
//         <FormInput
//           label="Name"
//           name="name"
//           type="text"
//           placeholder="John Doe"
//           register={register}
//           error={errors.name?.message}
//         />

//         <FormInput
//           label="Email"
//           name="email"
//           type="email"
//           placeholder="john@example.com"
//           register={register}
//           error={errors.email?.message}
//         />

//         <FormInput
//           label="Password"
//           name="password"
//           type="password"
//           placeholder="••••••••"
//           register={register}
//           error={errors.password?.message}
//         />

//         <FormSelect
//           label="Role"
//           name="role"
//           control={control}
//           options={[
//             { label: "Developer", value: "developer" },
//             { label: "Designer", value: "designer" },
//             { label: "Manager", value: "manager" },
//           ]}
//           error={errors.role?.message}
//         />

//         <FormDatePicker
//           label="Date of Birth"
//           name="dob"
//           control={control}
//           error={errors.dob?.message}
//         />

//         {/* <FormFileUpload
//           label="Resume"
//           name="resume"
//           control={control}
//           error={errors.resume?.message}
//         /> */}

//         <FormTextarea
//           label="Bio"
//           name="bio"
//           register={register}
//           error={errors.bio?.message}
//           placeholder="Tell us about yourself..."
//         />

//         <FormRadioGroup
//           label="Gender"
//           name="gender"
//           options={[
//             { label: "Male", value: "male" },
//             { label: "Female", value: "female" },
//             { label: "Other", value: "other" },
//           ]}
//           control={control}
//           error={errors.gender?.message}
//         />

//         <FormSwitch
//           label="Subscribe to Newsletter"
//           name="newsletter"
//           control={control}
//         />

//         <FormCheckbox
//           label="I agree to the terms and conditions"
//           name="agree"
//           control={control}
//           error={errors.agree?.message}
//         />

//         <Button type="submit" className="w-full">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// }
