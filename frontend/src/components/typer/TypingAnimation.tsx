import { TypeAnimation } from "react-type-animation";

export const TypingAnim = () => {
    return (
        <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'PHOENIX-SPS',
          3000, // wait 1s before replacing "Mice" with "Hamsters"
          'Built With OpenAI',
          3000,
          'Customized Assistant',
          3000,
          
        ]}
        speed={50}
        style={{ fontSize: '60px',color:"black", display: 'inline-block' , textShadow:"1px 1px 20px #000"}}
        repeat={Infinity}
      />
    );
};

export const description = () => {
  return (
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'You can ask some questions related to knowledge, Business, Advices, Education, etc.',
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        ' The project utilizes MongoDB as a backend database for storing and retrieving data, ensuring scalability and flexibility for handling large datasets',
        3000,
        ' By seamlessly integrating with different APIs and technologies, this project aims to deliver innovative solutions for data-driven decision-making.',
        3000,
        
      ]}
      speed={50}
      style={{ fontSize: '60px',color:"white", display: 'flex' , textShadow:"1px 1px 20px #000"}}
      repeat={Infinity}
    />
  );
};

