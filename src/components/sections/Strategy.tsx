import React from 'react';

const StrategySection = () => {
  return (
    <section className="bg-white flex items-center justify-between h-[420px] p-10">
      <div className="h-full w-1/2 p-10 text-right ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">منهجيتنا في العمل</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          ندرس السوق بكل احتياجاته بعيون فاحصة خبيرة، نحدد الحاجات والميول للأفراد والشركات، نصنع رؤية للزبون تقوده نحو هدفه بأقل التكاليف وأعلى سقف من الخدمة، نقدم خبراءنا وخبراتنا بصورة شاملة ، ليختار شريك النجاح معنا ما يهمه من مجالات خدماتنا ، فنقدم له خلاصة التجارب والعلوم والمعارف والمهارات والشهادات التخصصية ليرقى بمكانته نحو هدفه المنشود.
        </p>
      </div>
      <div
        className="h-full w-1/2 rounded-full"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/stratgy.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </section>
  );
};

export default StrategySection;
