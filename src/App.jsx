import { useState } from 'react';
import img7 from './assets/img7.png'
import img2 from './assets/img2.png'
import img4 from './assets/img4.png'
import img6 from './assets/img6.png'
import img3 from './assets/img3.png'






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
      setImageSrc(img4); 
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBmiCategory('وزن طبيعي');
      setImageSrc(img6); 
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBmiCategory('زيادة في الوزن');
      setImageSrc(img3);
      
    }else if (bmiValue >= 30 && bmiValue < 34.9) {
        setBmiCategory('بدانة');
        setImageSrc(img2); 
    } else {
      setBmiCategory('بدانة مفرطة');
      setImageSrc(img7); 
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
