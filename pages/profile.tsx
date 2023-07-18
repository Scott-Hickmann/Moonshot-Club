import React from 'react';
import ProfileSection from '../components/profileSection';
import styles from '../styles/profile.module.css'

const cardData = [
  {
    imageSrc: 'moon.jpg',
    name: 'Neil Armstrong',
    title: 'Shooter of Moons',
    email: 'neil@nasa.gov',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum mauris magna, et rhoncus nulla fringilla et.',
    imageLocation: 'left',
  },
  {
    imageSrc: 'sun.jpg',
    name: 'Amaterasu',
    title: 'Light-Bringer',
    email: 'worship@me.now',
    description: 'Praesent eleifend ultrices mauris id tristique. Vivamus vel purus tristique, fermentum ligula a, tincidunt tortor.',
    imageLocation: 'right',
  },
  // Add more card data objects as needed
];

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {cardData.map((card, index) => (
          <ProfileSection
            key={index}
            imageSrc={card.imageSrc}
            name={card.name}
            title={card.title}
            email={card.email}
            description={card.description}
            imageLocation={card.imageLocation}
          />
        ))}
      </div>
    </div>
  );
};
