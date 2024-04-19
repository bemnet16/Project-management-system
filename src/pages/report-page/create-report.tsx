import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import NavbarRoutes from "@/components/shared/navbar-routes";
import PathLink from "@/components/shared/path-link";
import { reportformSchema } from "@/constants/form-schema";


const paths = [
  {
    name: "Program Management",
    link: "/program",
  },
  {
    name: "Add Report",
    link: "/report/create",
  },
];

const CreateReport = () => {
  const form = useForm<z.infer<typeof reportformSchema>>({
    resolver: zodResolver(reportformSchema),
    defaultValues: {
      programname: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof reportformSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-y-4 pb-6">
      <div className="hidden sm:block sticky top-0 py-2 bg-white z-50  w-full ">
        <NavbarRoutes>
          <>&nbsp; </>
        </NavbarRoutes>
      </div>

      <PathLink paths={paths} current="Add Report" />


      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="border-[2px] border-gray-100 rounded-2xl p-6 mx-1 sm:mr-8 sm:ml-4 flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-10">
            <FormField
              control={form.control}
              name="programname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Programme Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} className="form-input " />
                  </FormControl>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="programname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">
                    Project Name
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Bemnet Adugnaw">
                        Bemnet Adugnaw
                      </SelectItem>
                      <SelectItem value="Hilina Adugnaw">
                        Hilina Adugnaw
                      </SelectItem>
                      <SelectItem value="Dagmawit Tadele">
                        Dagmawit Tadele
                      </SelectItem>
                      <SelectItem value="Eyosias Solomon">
                        Eyosias Solomon
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

           

 <div className=" col-span-2 flex flex-col sm:grid sm:grid-cols-3 md:flex md:flex-col lg:grid lg:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="phasename"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Phase</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Bemnet Adugnaw">High</SelectItem>
                      <SelectItem value="Hilina Adugnaw">Low</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="milestone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Milestone</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Bemnet Adugnaw">Bole</SelectItem>
                      <SelectItem value="Hilina Adugnaw">Megenagna</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="module"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Module</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Bemnet Adugnaw">Finance</SelectItem>
                      <SelectItem value="Hilina Adugnaw">
                        Human Resourse
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />
            </div>

            

           

            <div className="mt-8 col-span-2 mx-1 sm:mr-8 sm:ml-4 flex flex-col sm:grid sm:grid-cols-3 md:flex md:flex-col lg:grid lg:grid-cols-3 gap-6 sm:gap-10">
               <FormField
              control={form.control}
              name="task"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">
                    Task
                  </FormLabel>
                  {/* <FormDescription className="form-description text-slate-600 text-xs">
                    ( you can make it acceissble now or later )
                  </FormDescription> */}
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Bemnet Adugnaw">Active</SelectItem>
                      <SelectItem value="Hilina Adugnaw">Deactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />
              <FormField
                control={form.control}
                name="activity"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="form-label">Activity</FormLabel>
                     <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="form-input">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <SelectItem value="Bemnet Adugnaw">activity 1</SelectItem>
                      <SelectItem value="Hilina Adugnaw">activity 2</SelectItem>
                    </SelectContent>
                  </Select>

                    <FormMessage className="form-message tiny-medium" />
                  </FormItem>
                )}
              />


            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel className="small-semibold text-slate-600 pl-1">
                    Report Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="form-textarea w-full h-32 rounded-lg"
                      placeholder="Type your description here"
                      id="message"
                    />
                  </FormControl>

                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-2 flex items-center gap-2 ">
                  <FormLabel className="small-semibold text-slate-600 pl-1">
                    Send To
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="form-input max-w-[250px] h-32 rounded-lg"
                      placeholder=""
                      id="message"
                    />
                  </FormControl>

                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )} />

                     

 <div className=" col-span-3 flex flex-col sm:grid sm:grid-cols-3 md:flex md:flex-col lg:grid lg:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Sender Name</FormLabel>
                <FormControl>
                    <Input
                      {...field}
                      className="form-input max-w-[250px] h-32 rounded-lg"
                      placeholder=""
                      id="message"
                    />
                  </FormControl>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Email</FormLabel>
                 <FormControl>
                    <Input
                      {...field}
                      className="form-input max-w-[250px] h-32 rounded-lg"
                      placeholder=""
                      id="message"
                    />
                  </FormControl>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="attachment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Attachment</FormLabel>
                <FormControl>
                    <Input
                      {...field}
                      type="file"
                      className="form-input max-w-[250px] h-32 rounded-lg"
                      placeholder=""
                      id="message"
                    />
                  </FormControl>
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />
            </div>

             <div className="w-full flex gap-3 ">
            <Button
              type="submit"
              className=" bg-slate-200 hover:bg-slate-300 border-2 border-black/20 rounded-full text-slate-500 font-semibold sm:px-10 h-8  sm:text-base "
            >
              CC
            </Button>
            <Button
              type="submit"
              className=" bg-slate-600 hover:bg-slate-700 rounded-full text-white font-semibold sm:px-10 h-8  sm:text-base "
            >
              Add
            </Button>
          </div>


          </div>

            </div>
          <div className="w-full px-2 sm:px-10 text-end ">
            <Button
              type="submit"
              className=" bg-slate-600 hover:bg-slate-700 text-white font-semibold mx-auto col-span-2  px-8 sm:px-14 h-8 sm:h-10 sm:text-base sm:py-3 "
            >
              Finish
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateReport;
