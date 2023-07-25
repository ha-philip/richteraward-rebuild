import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
  name: string;
  surname: string;
  birth: string;
  school: string;
  proof: string;
  team_member: string;
  section: string;
  age_category: string;
  my_email: string;
  phone: string;
  youtube_link: string;
  depostisor: string;
  teacher: string;
  teacher_email: string;
  performing_piece: string;
}
export default function Regulation() {
  const [apply, set_apply] = useState(false);
  const getOverlay = () => set_apply(true);
  const closeOverlay = () => set_apply(false);

  const [end, set_end] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "all",
  });

  const onVaild = () => {
    set_end(true);
  };
  const onInValid = (err: any) => {
    set_end(false);
  };
  return (
    <>
      <div className="lg:px-24 px-5 bg-[whitesmoke] lg:pt-32 py-14" id="regulation">
        <div className="flex flex-col justify-center items-center space-y-10">
          <span className="lg:text-4xl text-lg font-thin tracking-widest border-b border-red-800 p-3">Regulation of competition</span>
          <div className="flex flex-col justify-center items-center">
            <p className="lg:text-xl text-xs font-thin tracking-tighter">
              All participants must submit their performance with video. <br />
              The judges consist of the Artistic Director of the competition and world-famous professors or pianists <br />
              who already has great reputation and international career.
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-10">
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Prizes</h1>
                <p className="lg:text-3xl text-xl font-bold tracking-tighter text-yellow-600">Grand Prize : 3000 € (Euros)</p>
                <p className="lg:text-base text-xs tracking-tighter">The Grand Prize will be awarded to the higest scorer in all categories. 3000 Euros will be given as monetary award.</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Section</h1>
                <p className="tracking-tighter">text text text</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Required Repertoire</h1>
                <p className="tracking-tighter">text text text</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Age Category</h1>
                <p className="tracking-tighter">text text text</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Announcement of the Result</h1>
                <p className="tracking-tighter">text text text</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Awards for each category</h1>
                <p className="tracking-tighter">text text text</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Application</h1>
                <p className="tracking-tighter">text text text</p>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Teacher's Award</h1>
                <p className="lg:text-base text-xs tracking-tighter">text text text text text</p>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl p-7 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">Detail</h1>
                <p className="lg:text-base text-xs tracking-tighter">text text text text text</p>
              </div>
              <div className="lg:col-span-2 flex justify-center items-center">
                <button
                  onClick={getOverlay}
                  className="bg-red-800 text-white font-thin tracking-tight lg:text-2xl text-lg lg:w-72 w-52 py-5 hover:bg-black transition rounded-xl" >APPLY
                </button>
              </div>
            </div>
            {apply ?
              <>
                <motion.div
                  className="fixed w-full h-full bg-[rgba(0,0,0,0.6)] top-0 z-30 transtion"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="fixed lg:top-8 top-5 z-30 lg:w-[65%] w-[90%]">
                  <h1 onClick={closeOverlay} className="flex justify-end lg:mb-3 mb-1" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </h1>
                  <h2 className="bg-black text-white p-3 text-center tracking-[0.5rem] lg:text-2xl text-base">APPLICATION</h2>
                  <form onSubmit={handleSubmit(onVaild, onInValid)}>
                    <div className="bg-[whitesmoke] lg:h-[38rem] h-[36rem] flex flex-col justify-start lg:p-10 p-3 overflow-y-scroll">
                      <h2 className="text-red-800 font-bold text-sm">* Required Field</h2>

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">Name</span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("name", {
                          required: "Please write down your name.",
                          validate: {
                            textCheck: (value) => !value.includes(">" || "<" || "?" || "/" || "@" || "=") || "Cannot special text."
                          },
                        })}
                      />
                      {errors.name ? <p className="text-xs mt-3 text-red-500">{errors.name.message}</p> : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">Surname</span>
                      <input 
                      type="text" 
                      className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs" 
                      autoComplete="off"
                      {...register("surname", {
                        required: "Please write down your surname.",
                        validate: {
                          textCheck: (value) => !value.includes(">" || "<" || "?" || "/" || "@" || "=") || "Cannot special text."
                        },
                      })}
                      />
                      {errors.surname ? <p className="text-xs mt-3 text-red-500">{errors.surname.message}</p> : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">Date of Birth</span>
                      <input 
                      type="text" 
                      className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs" 
                      autoComplete="off" 
                      {...register("birth", {
                        required: "Please write down your birthday.",
                      })}
                      />
                      {errors.birth ? <p className="text-xs mt-3 text-red-500">{errors.birth.message}</p> : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold tracking-tight">Current School</span>
                      <input 
                      type="text" 
                      className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs" 
                      autoComplete="off" 
                      {...register("school")}
                      />

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">Attachment for the proof your age</span>
                      <input 
                      type="text" 
                      className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs" 
                      autoComplete="off" 
                      {...register("proof", {
                        required: "Please upload your file.",
                      })}
                      />
                      <p className="lg:text-xs text-[0.5rem] mt-2 tracking-tight">( Please scan the first page of your passport and upload it here )</p>
                      {errors.proof ? <p className="text-xs mt-3 text-red-500">{errors.proof.message}</p> : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold tracking-tight">Team Member Personal Information</span>
                      <input 
                      type="text"
                      className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs" 
                      autoComplete="off" 
                      {...register("team_member")}
                      />

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">Section</span>
                      <input 
                      type="text" 
                      className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs" 
                      autoComplete="off" 
                      {...register("section", {
                        required: "Please choose your section.",
                      })}
                      />
                      {errors.section ? <p className="text-xs mt-3 text-red-500">{errors.section.message}</p> : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">Age Category</span>
                      <input 
                      type="text" 
                      className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs" 
                      autoComplete="off" 
                      {...register("age_category", {
                        required: "Please choose your category.",
                      })}
                      />
                      {errors.age_category ? <p className="text-xs mt-3 text-red-500">{errors.age_category.message}</p> : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">E-mail Address of the participant</span>
                      <input 
                      type="text" 
                      className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs" 
                      autoComplete="off" 
                      {...register("my_email", {
                        required: "Please write down your email.",
                        validate: {
                            must: (value) => value.includes("@") || "Email must have '@'"
                        }
                      })}
                      />
                      {errors.my_email ? <p className="text-xs mt-3 text-red-500">{errors.my_email.message}</p> : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">Phone-number ( with the Country Code )</span>
                      <input 
                      type="number" 
                      className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs" 
                      autoComplete="off" 
                      {...register("phone", {
                        required: "Please write down your phone number.",
                      })}
                      />
                      {errors.phone ? <p className="text-xs mt-3 text-red-500">{errors.phone.message}</p> : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">Youtube link of your performance</span>
                      <input 
                      type="text"
                      className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs" 
                      autoComplete="off" 
                      {...register("youtube_link", {
                        required: "Please write down your link.",
                      })}
                      />
                      {errors.youtube_link ? <p className="text-xs mt-3 text-red-500">{errors.youtube_link.message}</p> : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">Name of the depositor ( Application Fee )</span>
                      <input 
                      type="text" 
                      className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs" 
                      autoComplete="off" 
                      {...register("depostisor", {
                        required: "Please write down depostisor name.",
                      })}
                      />
                      {errors.depostisor ? <p className="text-xs mt-3 text-red-500">{errors.depostisor.message}</p> : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">Current Teacher</span>
                      <input 
                      type="text" 
                      className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs" 
                      autoComplete="off" 
                      {...register("teacher", {
                        required: "Please write down your name of current teacher.",
                      })}
                      />
                      {errors.depostisor ? <p className="text-xs mt-3 text-red-500">{errors.depostisor.message}</p> : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">E-mail address of the Current Teacher</span>
                      <input 
                      type="text" 
                      className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs" 
                      autoComplete="off" 
                      {...register("teacher_email", {
                        required: "Please write down teacher_email.",
                        validate: {
                            must: (value) => value.includes("@") || "Email must have '@'"
                        }
                      })}
                      />
                      {errors.teacher_email ? <p className="text-xs mt-3 text-red-500">{errors.teacher_email.message}</p> : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">Performing Piece(s) / Duration</span>
                      <input
                      type="text" 
                      className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs" 
                      autoComplete="off" 
                      {...register("performing_piece", {
                        required: "Please write down your performing piece or duration.",
                      })}
                      />
                      {errors.performing_piece ? <p className="text-xs mt-3 text-red-500">{errors.performing_piece.message}</p> : null}

                      <input type="submit" className="mt-24 mb-14 mx-auto bg-red-800 text-white font-thin tracking-tight lg:text-2xl text-lg lg:w-52 w-36 lg:py-5 py-3 hover:bg-black transition rounded-xl" value="SUBMIT" />
                    </div>
                  </form>
                </motion.div>
              </>
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
