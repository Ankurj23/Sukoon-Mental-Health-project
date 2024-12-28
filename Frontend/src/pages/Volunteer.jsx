import React from 'react';

const founders = [
  {
    name: 'Ankur Jauhari',
    role: 'Full Stack Developer', 
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQGmc-ZEwEjMjQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725437822409?e=2147483647&v=beta&t=Uca45eICb_GTjurjVE2ZxEr6yE2pcvG71MaWWGvnRvU',
  },
];

const Volunteer = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className="founder-image">
              <img src={founder.image} alt={founder.name} />
            </div>
            <div className="founder-details">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1>Healing takes time, and asking for help is a courageous step.</h1>
      </div>
    </div>
  );
};

export default Volunteer;
