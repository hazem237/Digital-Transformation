import React from 'react';

const OurServices:React.FC = () => {
  return (
    <section className="bg-white flex items-center justify-between h-[450px] p-10" id="خدماتنا">
      <div className="h-full w-1/2 p-10 text-right ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">خدماتنا</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          تتوزع خدماتنا باتجاهين
          <br/>
          خدمات فنية تقنية:

          نطور الشركات والمنشآت من خلال فتح الشراكات المحلية والدولية لها وتعزيز مكانتها من خلال الحضور الفعلي في عالم المال والأعمال .

          فنحن نصنع لكل شركة هويتها السمعية والبصرية ، ونتعامل معها في كل ما تحتاجه لانتشارها وتوسعها أفقيا وعموديا على المستوى الفردي وعلى مستوى الكادر والمستويات الإدارية المتنوعة
          <br />
          خدمات استشارية تنموية:

          نقدم لكم خدمات الشهادات العالمية المعتمدة من أعرق المؤسسات العالمية، وخدمات الاستشارات الإدارية والإعلامية والتسويقية، ونسخر كل طاقتنا لنجاح كل مشروع نعمل عليه من خلال الفرق المتخصصة كل في مجاله 
        </p>
      </div>
      <div
        className="h-full w-1/2 rounded-full"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/strategy.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </section>
  );
};

export default OurServices;
