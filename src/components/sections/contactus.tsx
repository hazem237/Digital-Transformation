import React from 'react';
import EmailForm from '../EmailForm';

const ContactUs: React.FC = () => {
    return (
        <section id='للتواصل' className='sm:snap-start flex justify-center'>
            <div
                className={`
                    min-h-[650px] w-screen grid text-right
                    grid-cols-1 grid-rows-[0.6fr_1fr_0.2fr] align-middle lg:mt-28
                    lg:grid-cols-[1fr_1fr] lg:grid-rows-[1fr_0.08fr]
                `}
            >
                <div
                    className={`
                        min-w-full flex flex-col 
                        lg:justify-start lg:items-center lg:pl-20
                        justify-center items-center
                        `}
                >
                    <h1 className={`
                        flex pl-6 mt-6 sm:mt-16 lg:mt-0
                        lg:justify-end lg:text-2xl 
                        text-3xl font-semibold text-gray-800
                        text-[var(--primary-color)] mb-[15px] min-w-full  
                    `}
                    >
                        للتواصل
                    </h1>
                    <p className={`min-w-full flex justify-end items-center text-lg text-gray-600 leading-relaxed pl-6`}>
                        هل انت مهتم بخدماتنا؟ قم بتعبئة النموذج لارسال رسالة او قم بالتواصل معنا من خلال وسائل التواصل الاجتماعي
                    </p>
                    {/* links will be here for social media and git and email and phone */}
                    <div
                        className="h-[50%] mt-20 w-[90%] rounded-full"
                        style={{
                            backgroundImage: `url(https://st4.depositphotos.com/2903611/29109/i/450/depositphotos_291091084-stock-photo-businessman-showing-contact-icons-virtual.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>

                </div>
                <div
                    className={`
                        flex lg:justify-start lg:items-start lg:pl-24
                        justify-center items-center w-full
                    `}
                >
                    <EmailForm />
                </div>

                <div
                    className='flex justify-center items-center row-span-1 min-h-[50px] lg:col-span-2 bg-[var(--background-from-primary-color)]'
                >

                </div>
            </div>
        </section>
    );
};

export default ContactUs;