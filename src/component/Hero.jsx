import { fields, stats } from "@/data/hero";
import { ResetCode, sendEnquiryRequest } from "@/redux/Reducer/EnquirySlice";
import { useState, useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import LoadingOverlay from "./LoadingOverlay";




export default function Hero() {

  const dispatch= useDispatch();

  const [formData, setFormData] = useState({});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const {loading,addCode}= useSelector((state)=>state.enquiry);

useEffect(()=>{
  if(addCode === 200){
    toast.success("Enquiry submitted successfully!");
    dispatch(ResetCode());
    setFormData('');
  }

},[addCode,dispatch])

const submit = useCallback(() => {
  if (!formData.name?.trim()) {
    toast.error("Please Enter Name");
    return;
  }

  if (!formData.email?.trim()) {
    toast.error("Please Enter Email");
    return;
  }

  if (!formData.phone?.trim()) {
    toast.error("Please Enter Phone");
    return;
  }

 
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(formData.phone.trim())) {
    toast.error("Please Enter a Valid 10 Digit Phone Number");
    return;
  }

  const payload = {
    name: formData.name,
    email: formData.email,
    message: formData.message || "",
    phone: formData.phone,
    company: formData.company || "",
  };



  dispatch(sendEnquiryRequest(payload));
}, [dispatch, formData]);



  return (
    <section className="mb-20 bg-[#020810] pb-20">
      <div className="mx-auto flex min-h-[568px] max-w-[1650px] items-center px-6 pt-8 sm:px-8 lg:px-0 lg:pt-0">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[720px_570px] lg:justify-center lg:gap-[30px]">
          <div className="text-center sm:text-left">
            <h1 className="font-poppins max-w-[631px] text-[58px] leading-[63px] font-semibold tracking-normal text-white">
              Looking for Software,{" "}
              <span className="text-[#009EFF]">Web and App Development?</span>
            </h1>

            <p className="mt-7 max-w-[650px] text-[15px] leading-[1.55] text-white sm:text-[23.8px]">
              Get all three services under one roof with Dignifyd Tech. Our
              comprehensive software solutions manages your entire digital
              experience and provides higher customer satisfaction.
            </p>

            <div className="mt-7 flex w-full max-w-[650px] justify-center sm:justify-start">
              {stats.map((stat, index) => (
                <div
                  key={stat.number}
                  className={`flex min-w-0 flex-1 flex-col items-center justify-start text-center ${index !== 0 ? "border-l border-white/70" : ""}`}
                >
                  <p className="text-[37px] leading-none font-bold text-[#009EFF] sm:text-[40px]">
                    {stat.number}
                  </p>

                  <p className="mt-3 text-[18px] leading-[1.3] text-white sm:mt-4 sm:text-[22px] sm:leading-[1.35]">
                    {stat.title}
                    <br />
                    {stat.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full max-w-[570px] justify-self-end">
            <div className="pointer-events-none absolute top-1/2 -right-[99px] z-0 hidden h-[650px] w-[430px] -translate-y-1/2 overflow-hidden lg:block">
              <video
                src="/hero_bg.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="h-[650px] w-[650px] max-w-none object-contain object-left opacity-80"
              />
            </div>

            <div className="relative z-10 w-full rounded-lg bg-[#07182A] px-8 py-9 sm:px-10 lg:h-[515px] lg:px-[48px] lg:py-10">
              <h2 className="mx-auto max-w-[430px] text-center text-[17px] leading-[1.45] font-medium text-white">
                Let's discuss how our Development services can help you achieve
                your goals
              </h2>

              <div className="mt-7">
                <div>
                  {fields.map((field) => (
                    <div key={field.name}>
                      <input
                      
                        type={field.type}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="h-[52px] w-full border-0 border-b border-white/50 bg-transparent px-1 text-[15px] text-white outline-none placeholder:text-white focus:border-[#009EFF]"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex justify-center">
                  <button
                  disabled={loading}
                  onClick={submit}
                    className="rounded-lg bg-[#009EFF] px-7 py-3 text-[14px] font-medium text-white transition hover:bg-[#008dde]"
                  >
                   Book free call
                   
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          loading && <LoadingOverlay  show={loading}/>
        }
      </div>
    </section>
  );
}
