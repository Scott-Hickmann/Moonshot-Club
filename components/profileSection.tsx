import React from 'react';
import styles from '../styles/section.module.css'

export type ProfileProps = {
  imageSrc: string;
  name: string;
  title: string;
  email: string;
  description: string;
  imageLocation: 'left' | 'right';
}

export default function ProfileSection({ imageSrc, name, title, email, description, imageLocation }: ProfileProps) {
  const cardImageStyles = {
    flex: '0 0 40%',
    maxWidth: '40%',
  };

  const cardContentStyles = {
    flex: '0 0 60%',
    maxWidth: '60%',
    padding: '1rem',
  };

  if (imageLocation === 'right') {
    Object.assign(cardImageStyles, {
      order: 2,
    });

    Object.assign(cardContentStyles, {
      order: 1,
    });
  }

  return (
    <div className={styles.container}>
      <div style={cardImageStyles}>
        <img src={imageSrc} alt={name} className={styles.picture} />
      </div>
      <div style={cardContentStyles}>
        <h2 className={styles.head}>{name}</h2>
        <p className={styles.title}>{title}</p>
        <a className={styles.email} href={`mailto:${email}`}>{email}</a>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  );
};
