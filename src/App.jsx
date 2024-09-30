import { useState } from 'react';


function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState('');
  const [bmiCategory, setBmiCategory] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const calculateBMI = () => {
    setError('');
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

     if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
      setError('الرجاء إدخال قيم صحيحة لكل من الوزن والطول');
      return;
    }

     const bmiValue = weightValue / (heightValue * heightValue);
    setBmi(bmiValue.toFixed(2));

     if (bmiValue < 18.5) {
      setBmiCategory('نقص في الوزن');
      setImageSrc('https://c0.klipartz.com/pngpicture/484/726/gratis-png-caricatura-nariz-larga-hombre.png'); // Update to correct image path
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBmiCategory('وزن طبيعي');
      setImageSrc('https://cdn.prod.website-files.com/614b13047adcea662f94ef45/61e93c091516097421cc7026_qRzrLexdO7H0WH0FgfvMUB3xIXFM7a4l5lhC1aPggqdoI1IRa8WgtOdwX0Uwj8BsEK-a7nOWNoGV2T-l9wN2illIt_ZEAbh_ost4Xb79aDXrQJA4lsfHRPwg0ss_tEjql1ACR6bg.jpeg'); // Update to correct image path
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBmiCategory('زيادة في الوزن');
      setImageSrc('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-r0f70OIjlbIJfHi7uSn_YY7WXW9dsLKPoSl-6dF2aqJohPNqREv9l7uT6OdCBhSWk5Q&usqp=CAU');
      
    }else if (bmiValue >= 30 && bmiValue < 34.9) {
        setBmiCategory('بدانة');
        setImageSrc('https://cdn.alweb.com/thumbs/nutrition/article/fit710x532/1/%D9%85%D8%A7-%D9%87%D9%88-%D9%85%D8%A4%D8%B4%D8%B1-%D9%83%D8%AA%D9%84%D8%A9-%D8%A7%D9%84%D8%AC%D8%B3%D9%85-bmi-4493.jpg'); 
    } else {
      setBmiCategory('بدانة مفرطة');
      setImageSrc('https://png.pngtree.com/png-clipart/20230914/original/pngtree-childhood-obesity-vector-png-image_12158912.png'); // Update to correct image path
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>حساب مؤشر كتلة الجسم (BMI)</h1>
      
      <input
        type="text"
        placeholder="أدخل وزنك بالكيلوجرام"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={{ margin: '10px', padding: '10px', width: '200px' }}
      />
      <br />
      <input
        type="text"
        placeholder="أدخل طولك بالأمتار (مثلاً 1.75)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={{ margin: '10px', padding: '10px', width: '200px' }}
      />
      <br />
      <button onClick={calculateBMI} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        احسب
      </button>

       {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

       {bmi && !error && (
        <div className='flex justify-center items-center flex-col' style={{ marginTop: '20px' }}>
          <h2>مؤشر كتلة الجسم الخاص بك: {bmi}</h2>
          <h3>فئة كتلة الجسم: {bmiCategory}</h3>
          {imageSrc && (
            <img src={imageSrc}  style={{ marginTop: '20px', maxWidth: '200px' }} />
          )}
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
