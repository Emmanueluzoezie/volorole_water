import Link from 'next/link'
import React from 'react'
import { MdCall, MdEmail, MdWhatsapp } from 'react-icons/md'
import { appColor } from './AppColor'
import { useForm, SubmitHandler } from "react-hook-form"

type FormValues = {
    firstName: string
    lastName: string
    email: string
}

const ContactComponent = () => {
    const { register, handleSubmit } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <div className='pt-8 md:pt-12'>
        <div className='flex lg:space-x-[100px] flex-col items-center justify-center lg:flex-row md:max-w-[600px] lg:max-w-[1200px] mx-auto'>
                <div className='p-4 lg:-mt-20 lg:w-[40%] xl:w-[45%]'>
                  <h2 className='text-[22px] text-center md:text-[32px] font-[600]'>Have Questions?</h2>
                <div className='text-center'>
                      <p className='py-4 text-[16px] md:text-[20px]'>Please feel free to call or email or chat with us on whatsapp or use our contact form to get in touch with us.</p>
                      <h4 className='font-[500] text-[18px] md:text-[26px]'>We look forward to hearing from you!</h4>
                </div>
                <div className='my-4'>
                    <div className='my-2'>
                        <h2 className='font-[600] text-[16px] md:text-[20px]'>Emergency? Call Us:</h2>
                        <Link href="tel:+2349137436972">
                            <div className="flex items-center space-x-1">
                                <MdCall className='text-[14px] md:text-[26px]' style={{ color: appColor.primaryBgColor }} />
                                <h4 className='font-[500] text-[15px] md:text-[19px]'>+234 9137436972</h4>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='my-4'>
                    <div className='my-2'>
                        <h2 className='font-[600] text-[16px] md:text-[20px]'>Chat with us on WhatsApp</h2>
                        <Link href="https://wa.me/+2349137436972">
                            <div className="flex items-center space-x-1">
                                <MdWhatsapp className='text-[20px] md:text-[26px]' style={{ color: appColor.primaryBgColor }} />
                                <h4 className='font-[500] text-[15px] md:text-[19px]'>+234 9137436972</h4>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='my-4'>
                    <div className='my-2'>
                        <h2 className='font-[600] text-[16px] md:text-[20px]'>Send us Mail</h2>
                        <Link href="mailto:support@volorole.com">
                            <div className="flex items-center space-x-1">
                                <MdEmail className='text-[20px] md:text-[26px]' style={{ color: appColor.primaryBgColor }} />
                                <h4 className='font-[500] text-[15px] md:text-[19px]'>support@volorole.com</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='p-4 lg:w-[40%] pb-16  md:mb-20 md:px-10  xl:w-[45%]' style={{ backgroundColor: appColor.lightPrimaryColor }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='py-2'>
                        <label className='pl-2 font-[400] text-[15px] md:text-[20px]'>Full name</label>
                        <input className='w-full p-2 outline-none rounded-md text-[15px] md:text-[19px]' {...register("firstName")} />
                    </div>
                    <div className='py-2'>
                        <label className='pl-2 font-[400] text-[15px] md:text-[20px]'>Email</label>
                        <input className='w-full p-2 outline-none rounded-md text-[15px] md:text-[19px]' type="email" {...register("email")} />
                    </div>
                    <div className='py-2'>
                        <label className='pl-2 font-[400] text-[15px] md:text-[20px]'>About</label>
                        <input className='w-full p-2 outline-none rounded-md text-[15px] md:text-[19px]' {...register("lastName")} />
                    </div>
                    <div className='py-2'>
                        <label className='pl-2 font-[400] text-[15px] md:text-[20px]'>Your message</label>
                        <textarea className='w-full p-2 outline-none rounded-md text-[15px] md:text-[19px]' id="userInput" name="userInput" rows={4} cols={50} />
                    </div>
                    <input type="submit" className='w-full mt-4 text-white py-2 font-[600] rounded-md [15px] md:text-[19px]' style={{backgroundColor: appColor.primaryBgColor}}/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactComponent