"use client";
import { FC, useState } from "react";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/text-area";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import { Button } from "@/app/_components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUsSchema, ContactUsSchema } from "@/lib/validation/auth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import SelectCategory from "@/app/_components/select-category";
import { useToast } from "@/app/_components/ui/use-toast";

interface ContactUsFormProps {}

const typeOfUser = ["Individual", "Business"];
const typeOfEnquiry = ["General", "Support"];

const ContactUsForm: FC<ContactUsFormProps> = ({}) => {
  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsSchema>({
    resolver: zodResolver(contactUsSchema),
  });
  const { toast } = useToast();

  const submitHandler = async function (formData: ContactUsSchema) {
    try {
      console.log(formData);
      const { data } = await axios.post("/api/contact-us", formData);
      console.log(data);
      if (data.status === 200) {
        console.log(data);
        toast({
          title: "Your data has been Submitted",
          description: "Please Check your data",
          variant: "default",
        });
        return reset();
      }

      return toast({
        title: "Something Went Wrong",
        description: "Please Check your data",
        variant: "destructive",
      });
    } catch (err) {
      console.log(err);
      if (err instanceof z.ZodError) {
        setError("root", { message: err.message });
        return;
      }
      if (err instanceof AxiosError) {
        setError("root", { message: err.response?.data });
        return;
      }

      setError("root", { message: "something went wrong" });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col items-start justify-center gap-1"
    >
      <h4 className="text-extra_paragraph_heading text-foreground font-heading font-light uppercase">
        Contact Form
      </h4>
      <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-2 py-0">
        <div className="flex items-start  flex-col w-full justify-start gap-2 bg-transparent border-none outline-none text-foreground">
          <SelectCategory<ContactUsSchema>
            disabled={isSubmitting}
            register={register}
            name="typeOfUser"
            id="location"
            label=""
            category={typeOfUser}
            className="min-w-full p-2 outline-none border-b border-b-foreground  rounded-none text-foreground w-full h-10 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors?.typeOfUser ? (
            <p className="px-1 text-xs text-destructive h-4">
              {errors.typeOfUser.message}
            </p>
          ) : (
            <p className="h-4"></p>
          )}
        </div>
        <div className="flex items-start flex-col justify-start gap-2 w-full group relative">
          <Input
            id="Name"
            autoCapitalize="off"
            autoComplete="none"
            placeholder=" "
            className="w-full p-0 text-foreground focus-visible:ring-offset-0 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 rounded-none focus-visible:border-b focus-visible:border-b-foreground focus:border-primary peer"
            type="text"
            {...register("name")}
            disabled={isSubmitting}
            required
          />
          <Label
            htmlFor="Name"
            className="absolute text-sm text-foreground  duration-300 transform -translate-y-7 scale-90 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-foreground peer-focus:scale-90 peer-focus:-translate-y-7 "
          >
            First Name
          </Label>
          {errors?.name ? (
            <p className="px-1 text-xs text-destructive h-4">
              {errors.name.message}
            </p>
          ) : (
            <p className="h-4"></p>
          )}
        </div>

        <div className="flex items-start flex-col justify-start gap-2 w-full group relative">
          <Input
            id="Email"
            autoCapitalize="off"
            autoComplete="none"
            placeholder=" "
            className="w-full p-0 text-foreground focus-visible:ring-offset-0 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 rounded-none focus-visible:border-b focus-visible:border-b-foreground focus:border-primary peer"
            type="email"
            {...register("email")}
            disabled={isSubmitting}
            required
          />
          <Label
            htmlFor="Email"
            className="absolute text-sm text-foreground  duration-300 transform -translate-y-7 scale-90 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-foreground peer-focus:scale-90 peer-focus:-translate-y-7 "
          >
            Email
          </Label>
          {errors?.email ? (
            <p className="px-1 text-xs text-destructive h-4">
              {errors.email.message}
            </p>
          ) : (
            <p className="h-4"></p>
          )}
        </div>

        <div className="flex items-start flex-col justify-start gap-2 w-full group relative">
          <Input
            id="Contact Number"
            autoCapitalize="off"
            autoComplete="none"
            placeholder=" "
            className="w-full p-0 text-foreground focus-visible:ring-offset-0 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 rounded-none focus-visible:border-b focus-visible:border-b-foreground focus:border-primary peer"
            type="tel"
            {...register("phone")}
            disabled={isSubmitting}
            required
          />
          <Label
            htmlFor="Mobile Number"
            className="absolute text-sm text-foreground  duration-300 transform -translate-y-7 scale-90 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-foreground peer-focus:scale-90 peer-focus:-translate-y-7 "
          >
            Mobile Number
          </Label>
          {errors?.phone ? (
            <p className="px-1 text-xs text-destructive h-4">
              {errors.phone.message}
            </p>
          ) : (
            <p className="h-4"></p>
          )}
        </div>

        <div className="flex items-start flex-col w-full justify-start gap-2 bg-transparent border-none outline-none text-foreground">
          <SelectCategory<ContactUsSchema>
            disabled={isSubmitting}
            register={register}
            name="typeOfEnquiry"
            id="typeOfEnquiry"
            label=""
            category={typeOfEnquiry}
            className="min-w-full p-2 outline-none border-b border-b-foreground rounded-none text-foreground w-full h-10 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors?.typeOfEnquiry ? (
            <p className="px-1 text-xs text-destructive h-4">
              {errors.typeOfEnquiry.message}
            </p>
          ) : (
            <p className="h-4"></p>
          )}
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-2">
          <div className="flex items-start flex-col justify-start gap-2 w-full relative">
            <Textarea
              required
              className="w-full p-0 text-foreground focus-visible:ring-offset-0 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus-visible:ring-0 rounded-none focus-visible:border-b focus-visible:border-b-foreground focus:border-primary peer"
              placeholder=" "
              {...register("message")}
              disabled={isSubmitting}
            />
            <Label
              className="absolute text-sm text-foreground duration-300 transform -translate-y-9 scale-90 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-10 peer-focus:text-foreground peer-focus:scale-90 peer-focus:-translate-y-9"
              htmlFor="Message"
            >
              Message
            </Label>
            {errors?.message ? (
              <p className="px-1 text-xs text-destructive h-4">
                {errors.message.message}
              </p>
            ) : (
              <p className="h-4"></p>
            )}
          </div>
        </div>
        <Button
          variant={"outline"}
          size={"lg"}
          className="bg-foreground text-primary max-w-28 font-heading"
          disabled={isSubmitting}
        >
          Contact Us
        </Button>
      </div>
    </form>
  );
};

export default ContactUsForm;
