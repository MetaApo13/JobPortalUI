// src/components/dashboard/WelcomeBanner.tsx
import { FC } from 'react';

interface WelcomeBannerProps {
  name: string;
}

const WelcomeBanner: FC<WelcomeBannerProps> = ({ name }) => {
  return (
    <h1 className="text-2xl font-bold text-gray-800">
      Welcome back, {name.split(' ')[0]}!
    </h1>
  );
};

export default WelcomeBanner;
