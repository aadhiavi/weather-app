import React from 'react';

const WeatherWarning = ({ weather: {details}}) => {
  const warnings =[
    {
      id:1,
      info: `${details === 'Thunderstorm' ? '⚡️ Thunderstorm Alert: Seek shelter immediately!': ""}`
    },
    {
      id:2,
      info: `${details === 'Drizzle' ? '🌧 Light rain: Carry an umbrella!': ""}`
    },
    {
      id:3,
      info: `${details === 'Rain' ? ["☔️ Heavy rain: Use Umbrellas Stay indoors if possible, prioritize visibility by using headlights and windshield wipers while driving",
      "Farmers should secure loose equipment and consider drainage systems to prevent waterlogging in fields.", 
      "Travelers should anticipate delays and exercise caution on slippery roads to avoid accidents."]: ""}`
    },
    {
      id:4,
      info: `${details === 'Snow' ? ["❄️ Snowfall: Dress in layers and wear waterproof clothing to stay warm and dry in snowy conditions.",
        "Avoid travel during heavy snowfall Travelers should carry emergency supplies like blankets, water, food, and a shovel in case of getting stuck.",
        "Clear snow from vehicle roofs and ensure tires are suitable for winter conditions to prevent accidents."
      ]: ""}`
    },
    {
      id:5,
      info: `${details === 'Mist' ? '🌫 Low visibility: Be cautious while driving!': ""}`
    },
    {
      id:6,
      info: `${details === 'Smoke' ? '🔥 Smoky conditions: Avoid outdoor activities!': ""}`
    },
    {
      id:7,
      info: `${details === 'Haze' ? '🌫 Hazy conditions: Use headlights if driving!': ""}`
    },
    {
      id:8,
      info: `${details === 'Dust' ? '💨 Dusty conditions: Wear a mask outdoors!': ""}`
    },
    {
      id:9,
      info: `${details === 'Fog' ? '🌁 Dense fog: Drive slowly and use low beams!': ""}`
    },
    {
      id:10,
      info: `${details === 'Sand' ? '🏜 Sandstorm: Take cover indoors!': ""}`
    },
    {
      id:11,
      info: `${details === 'Ash' ? '🌋 Ashfall: Stay indoors and wear a mask!': ""}`
    },
    {
      id:12,
      info: `${details === 'Squall' ? '💨 Squally weather: Secure loose objects!': ""}`
    },
    {
      id:13,
      info: `${details === 'Tornado' ? '🌪 Tornado Alert: Seek shelter in a sturdy building!': ""}`
    },
    {
      id:14,
      info: `${details === 'Clouds' ? ["It's Cloudy, might not cooler not clear","Farmers should monitor cloud patterns to plan irrigation and harvesting activities effectively"," Travelers should carry necessary supplies like rain gear and emergency kits to stay prepared for sudden weather shifts."]: ""}`
    },
    {
      id:15,
      info: `${details === 'Clear' ? ["Stay hydrated and protected from the sun's rays with sunscreen and hats, and remain aware of sudden weather changes or potential hazards like wildlife.",
        "For farmers: Monitor crops for signs of drought or overexposure to sunlight, and ensure adequate irrigation.",
        "For travelers: Stay hydrated, protect yourself from the sun, and remain vigilant for sudden weather changes or road hazards."
      ]: ""}`
    },

  ];
   

  return(
    <div className="flex items-center justify-center mt-9 py-10">
      <ul>
        {
          warnings.map((id,index)=>{
            return(
              <li key={index}>{id.info}</li>
            )
          })
        }
      </ul>
    </div>

  )
};

export default WeatherWarning;
