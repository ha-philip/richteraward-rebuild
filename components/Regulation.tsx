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
      <div
        className="lg:px-24 px-5 bg-[whitesmoke] lg:pt-32 py-14"
        id="regulation"
      >
        <div className="flex flex-col justify-center items-center space-y-10">
          <span className="lg:text-4xl text-lg font-thin tracking-widest border-b border-red-800 p-3">
            Regulation of competition
          </span>
          <div className="flex flex-col justify-center items-center">
            <p className="lg:text-xl text-xs font-thin">
              All participants must submit their performance with video. <br />
              The judges consist of the Artistic Director of the competition and
              world-famous professors or pianists <br />
              who already has great reputation and international career.
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-10">
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  Prizes
                </h1>
                <p className="lg:text-3xl text-xl font-bold tracking-tighter text-yellow-600">
                  Grand Prize : 3000 € (Euros)
                </p>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  The Grand Prize will be awarded to the higest scorer in all
                  categories. 3000 Euros will be given as monetary award.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  Section
                </h1>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  Piano Solo ( Piano Solo ) <br/>
                  Piano Duo ( Four hands & Two piano ) <br/>
                  Piano Concerto ( With second piano or Orchestra ) <br/>
                  Piano Chamber <br/>
                  Music ( Duet, Trio, Quartet, Quintet ) <br/>
                  <span className="ml-5 lg:text-sm text-xs">*In the case of Piano Chamber music Section, no transcriptions or arrangements are allowed. </span><br/>
                  <span className="ml-5 lg:text-sm text-xs">*Only original piano chamber music works will be accepted. ( The form of accompaniment is excluded. )</span>
                </p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  Required Repertoire
                </h1>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                Free choice of 1 piece or several pieces <br/><br/>
                Junior Division: Max. 10 min. <br/>
                ntermediate Division: Max. 15 min. <br/>
                Senior Division: Max. 20 min. <br/><br/>
                <span className="lg:text-sm text-xs">• Music composed by the performer is not allowed, only officially published works can be performed. </span><br/>
                <span className="lg:text-sm text-xs">• The recording must have been recorded after the 1st of June 2021.</span>
                </p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  Age Category
                </h1>
                <p className="lg:text-sm text-xs tracking-tighter font-thin">
                There are different age categories in our competition, the age of participant must be calculated with this day ( 30th of April, 2022 ).
                </p>
                <div className="flex lg:flex-row flex-col justify-between items-center gap-3 font-thin lg:text-lg text-xs text-center">
                  <div>
                    <p>Junior Division</p>
                    <p>(9-13 years of age)</p>
                  </div>
                  <div>
                    <p>Intermediate Division</p>
                    <p>(14-18 years of age)</p>
                  </div>
                  <div>
                    <p>Senior Division</p>
                    <p>(19-40 years of age)</p>
                  </div>
                </div>
                <p className="lg:text-sm text-xs tracking-tighter font-thin">
                *In the case of Duo Section and Chamber Music Section, the average age of all particpants must be written in the application form.<br/>
                ( It is mandatory to attach the proof of age from each participant in theapplication form. )  
                </p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  Announcement of the Result
                </h1>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  <span>Notification on the homepage</span><br/><br/>
                  June 1, 2022 <br/>
                  All Prizewinners will receive individual notification by an e-mail.
                  </p>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  Awards for each category
                </h1>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                First Prize / Second Prize / Third Prize <br/><br/>
                ( Grand Prix and these main prizes will be selected only by the judges )
                </p>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  Application
                </h1>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                Dead Line: 30th of April 2022
                </p>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  1 ) Submit a completed online application <br/>
                  <span className="lg:text-base text-xs">-fill out the application form on our homepage and click the “Submit” button.</span><br/><br/>
                  2 ) Transfer the application fee to the following account <br/>
                  <span className="lg:text-base text-xs">
                  Piano Solo Section : 130 Euros<br/>
                  Piano Concerto Section: 130 Euros<br/>
                  Piano Duo Section : 160 Euros<br/>
                  Piano Chamber Music Section :<br/>
                    <span className="lg:text-sm text-xs">
                      - Duet : 160 Euros<br/>
                      - Trio : 170 Euros<br/>
                      - Quartet : 200 Euros<br/>
                      - Quintet : 210 Euros<br/>
                      </span>
                  *Paypal : kmat0@nationalux.org<br/>
                  - It must be transferred with the name of the participant.( Mandatory )<br/>
                  - If participant wants to apply for multiple Sections, the application fees are different as follows.<br/>
                  Two Sections - 190 Euros<br/>
                  Three Sections - 270 Euros<br/>
                  (When applying for multiple Sections, each application form must be submitted separately.)
                  </span>
                </p>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  Teacher's Award
                </h1>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                The teacher of the Grand Prix Winner and the teacher who produce more than three Prize Winners will be awarded
                </p>
                <p className="lg:text-base text-xs tracking-tighter font-thin">
                Netizen Special Prize<br/><br/>
                For the “Netizen Special Prize”, the competition will collect and post all participant’s videos on the following Link on the 16th of May 2022.<br/>
                From the 16th of May 2022 to the 31st of May 2022, all votes from Netizen will be valid during this period, but only on this following Link.<br/>
                https://nationalux.com/@Richteraward
                </p>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                How To Vote
                </p>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                1. Vote your favorite artist by clicking "Like" on their videos. <br/>
                (There are no limits how many artists you can vote, but you can not give multiple votes to an artist.) <br/>
                2. Prize for the most beloved artist (The most number of “Like”) <br/>
                3. Prize for the most popular artist (The most number of “Views”) <br/>
                4. We will release the music of the -Netizen Prize Winner- to the Amazon, Apple Music and spotify. <br/>
                5. Videos of these prize winners will be produced with -surround sound system- of the Nationalux.
                </p>
              </div>
              <div className="lg:col-span-2 flex flex-col justify-center items-center space-y-6 shadow-2xl lg:p-7 p-3 bg-white">
                <h1 className="lg:text-2xl text-xs font-thin tracking-widest border-b border-red-800 p-3 text-center">
                  Detail
                </h1>
                <p className="lg:text-lg text-sm tracking-tighter font-thin">
                  - The video must be taken with a fixed camera in which the participant’s hands are visible.<br/>
                  - The recording must have been recorded after the 1st of June 2021.<br/>
                  - It is possible to apply for multiple Sections. However, it is not possible to apply for multiple age categories in the same Section.<br/>
                  - Incomplete application including failure to pay application fee will result in disqualification.<br/>
                  - All documents will not be returned and the application fee is not refundable.<br/>
                  - The judges' decision is final and unappealable. The scores of the jury will not be provided and published.<br/>
                  - Jury may not vote to their own pupils.<br/>
                  - Certificate of the prize will be sent by an e-mail, no later than the 8th of June 2022.<br/>
                  - Participant who wish to receive their certificate by post, they must notify to the secretary of the competition by an e-mail.<br/>
                  - "Nationalux“ has the right to post and use the videos of participants. Contestants may not claim competition and Nationalux for their profits and remuneration.<br/>
                  - Result of the competition will be announced on the 1st of June 2022.
                </p>
              </div>
              <div className="lg:col-span-2 flex justify-center items-center">
                <button
                  onClick={getOverlay}
                  className="bg-red-800 text-white font-thin tracking-tight lg:text-2xl text-lg lg:w-72 w-52 py-5 hover:bg-black transition rounded-xl"
                >
                  APPLY
                </button>
              </div>
            </div>
            {apply ? (
              <>
                <motion.div
                  className="fixed w-full h-full bg-[rgba(0,0,0,0.6)] top-0 z-30 transtion"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="fixed lg:top-8 top-5 z-30 lg:w-[65%] w-[90%]"
                >
                  <h1
                    onClick={closeOverlay}
                    className="flex justify-end lg:mb-3 mb-1 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </h1>
                  <h2 className="bg-black text-white p-3 text-center tracking-[0.5rem] lg:text-2xl text-base">
                    APPLICATION
                  </h2>
                  <form onSubmit={handleSubmit(onVaild, onInValid)}>
                    <div className="bg-[whitesmoke] lg:h-[38rem] h-[36rem] flex flex-col justify-start lg:p-10 p-3 overflow-y-scroll">
                      <h2 className="text-red-800 font-bold text-sm">
                        * Required Field
                      </h2>

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Name
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("name", {
                          required: "Please write down your name.",
                          validate: {
                            textCheck: (value) =>
                              !value.includes(
                                ">" || "<" || "?" || "/" || "@" || "="
                              ) || "Cannot special text.",
                          },
                        })}
                      />
                      {errors.name ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.name.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Surname
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("surname", {
                          required: "Please write down your surname.",
                          validate: {
                            textCheck: (value) =>
                              !value.includes(
                                ">" || "<" || "?" || "/" || "@" || "="
                              ) || "Cannot special text.",
                          },
                        })}
                      />
                      {errors.surname ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.surname.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Date of Birth
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("birth", {
                          required: "Please write down your birthday.",
                        })}
                      />
                      {errors.birth ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.birth.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold tracking-tight">
                        Current School
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("school")}
                      />

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Attachment for the proof your age
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("proof", {
                          required: "Please upload your file.",
                        })}
                      />
                      <p className="lg:text-xs text-[0.5rem] mt-2 tracking-tight">
                        ( Please scan the first page of your passport and upload
                        it here )
                      </p>
                      {errors.proof ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.proof.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold tracking-tight">
                        Team Member Personal Information
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("team_member")}
                      />

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Section
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("section", {
                          required: "Please choose your section.",
                        })}
                      />
                      {errors.section ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.section.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Age Category
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("age_category", {
                          required: "Please choose your category.",
                        })}
                      />
                      {errors.age_category ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.age_category.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        E-mail Address of the participant
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("my_email", {
                          required: "Please write down your email.",
                          validate: {
                            must: (value) =>
                              value.includes("@") || "Email must have '@'",
                          },
                        })}
                      />
                      {errors.my_email ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.my_email.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Phone-number ( with the Country Code )
                      </span>
                      <input
                        type="number"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("phone", {
                          required: "Please write down your phone number.",
                        })}
                      />
                      {errors.phone ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.phone.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Youtube link of your performance
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("youtube_link", {
                          required: "Please write down your link.",
                        })}
                      />
                      {errors.youtube_link ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.youtube_link.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Name of the depositor ( Application Fee )
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("depostisor", {
                          required: "Please write down depostisor name.",
                        })}
                      />
                      {errors.depostisor ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.depostisor.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Current Teacher
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("teacher", {
                          required:
                            "Please write down your name of current teacher.",
                        })}
                      />
                      {errors.depostisor ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.depostisor.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        E-mail address of the Current Teacher
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("teacher_email", {
                          required: "Please write down teacher_email.",
                          validate: {
                            must: (value) =>
                              value.includes("@") || "Email must have '@'",
                          },
                        })}
                      />
                      {errors.teacher_email ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.teacher_email.message}
                        </p>
                      ) : null}

                      <span className="lg:text-sm text-xs mt-10 mb-2 font-bold text-red-800 tracking-tight">
                        Performing Piece(s) / Duration
                      </span>
                      <input
                        type="text"
                        className="py-3 px-5 rounded-lg shadow-md focus:bg-[#f0f0f0] transition lg:text-base text-xs"
                        autoComplete="off"
                        {...register("performing_piece", {
                          required:
                            "Please write down your performing piece or duration.",
                        })}
                      />
                      {errors.performing_piece ? (
                        <p className="text-xs mt-3 text-red-500">
                          {errors.performing_piece.message}
                        </p>
                      ) : null}

                      <input
                        type="submit"
                        className="mt-24 mb-14 mx-auto bg-red-800 text-white font-thin tracking-tight lg:text-2xl text-lg lg:w-52 w-36 lg:py-5 py-3 hover:bg-black transition rounded-xl"
                        value="SUBMIT"
                      />
                    </div>
                  </form>
                </motion.div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
