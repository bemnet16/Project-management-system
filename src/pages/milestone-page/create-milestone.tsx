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

import NavbarRoutes from "@/components/shared/navbar-routes";
import PathLink from "@/components/shared/path-link";
import { milestoneFormSchema } from "@/constants/form-schema";
import { Input } from "@/components/ui/input";

const paths = [
  {
    name: "Program Management",
    link: "/program",
  },
  {
    name: "Project",
    link: "/Project/projectId",
  },
  {
    name: "Phase",
    link: "/phase/projectId/phaseId",
  },
  {
    name: "Milestone",
    link: "/phase/projectId/phaseId",
  },
];

const CreateMilestone = () => {
  const form = useForm<z.infer<typeof milestoneFormSchema>>({
    resolver: zodResolver(milestoneFormSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof milestoneFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex flex-col gap-y-4 pb-6 relative">
      <div className="hidden sm:block sticky top-0 py-2 bg-white z-50  w-full ">
        <NavbarRoutes>
          <>&nbsp;</>
        </NavbarRoutes>
      </div>

      <PathLink paths={paths} current="New Milestone" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="  border-[2px] border-gray-100 rounded-2xl p-6 mx-1 sm:mr-8 sm:ml-4 flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-x-10">
             <FormField
              control={form.control}
              name="milestonename"
              render={({ field }) => (
                <FormItem className="lg:mb-3">
                  <FormLabel className="form-label">Milestone</FormLabel>
                  <Input {...field} className="form-input" />
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />
            <div>

            </div>
            <FormField
              control={form.control}
              name="programname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Programme</FormLabel>
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

            <FormField
              control={form.control}
              name="projectname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Project</FormLabel>
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

            <FormField
              control={form.control}
              name="assignee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Assignee</FormLabel>
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
            <FormField
              control={form.control}
              name="budgettype"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Type of Budget</FormLabel>
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

            <FormField
              control={form.control}
              name="estimatedbudget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Estimated Budget</FormLabel>
                  <Input {...field} className="form-input" />
                  <FormMessage className="form-message tiny-medium" />
                </FormItem>
              )}
            />
          </div>
             <div className="w-full text-end px-2 sm:px-10">
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

export default CreateMilestone;
