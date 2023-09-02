import React from 'react';

const AboutUs = () => {
    return (
        <section className="bg-white flex items-center justify-between h-[420px] p-10">
            <div
                className="h-full w-1/2 rounded-full"
                style={{
                    backgroundImage: `url(https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <div className="h-full w-1/2 p-10 text-right ">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">من نحن</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    مجموعة متوافقة من الخبراء والمستشارين ومتخصصي الإدارة والإعلام والتقنية الرقمية والعلوم الريادية المعاصرة والتسويق النوعي، التقينا في عالم ما بعد كورونا على فكرة جامعة ، ومظلة تجمعنا في الواقع العملي والافتراضي ، لنصوغ خبرتنا وتجربتنا ومعارفنا وعلاقتنا الدولية في عالم متجدد متغير متطور، ونقدم خلاصة الشهادات والخبرات والاستشارات المعاصرة للجمهور الراغب بصورة احترافية وعلى أعلى مستويات  الخبرة والجودة.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;