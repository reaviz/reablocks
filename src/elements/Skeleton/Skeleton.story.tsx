import React from 'react';
import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Elements/Skeleton',
  component: Skeleton
};

export const Simple = () => {
  return (
    <div className="w-[300px]">
      <Skeleton className="h-5 mb-2.5" />
    </div>
  );
};

export const Animated = () => {
  return (
    <div className="w-[300px]">
      <Skeleton animated className="h-5 mb-2.5" />
    </div>
  );
};

export const Sizes = () => {
  return (
    <div className="w-[300px]">
      <Skeleton className="h-2.5 mb-2.5" />
      <Skeleton className="h-5 mb-2.5" />
      <Skeleton className="h-[30px] mb-2.5" />
      <Skeleton className="h-10" />
    </div>
  );
};

export const Multiple = () => {
  const widths = ['w-full', 'w-[90%]', 'w-[80%]', 'w-[70%]', 'w-[60%]'];
  return (
    <div className="w-[300px]">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} animated className={`h-5 mb-2.5 ${widths[i]}`} />
      ))}
    </div>
  );
};

export const Shapes = () => {
  return (
    <div className="flex gap-5 items-center flex-wrap">
      <Skeleton animated className="w-[60px] h-[60px] rounded-full" />
      <Skeleton animated className="w-[200px] h-[60px]" />
      <Skeleton animated className="w-[100px] h-[100px] rounded-lg" />
    </div>
  );
};

export const CardPlaceholder = () => {
  return (
    <div className="w-[400px] p-5 border border-gray-300 rounded-lg">
      <Skeleton animated className="w-[60px] h-[60px] rounded-full mb-2.5" />
      <Skeleton animated className="h-6 mb-2.5 w-[60%]" />
      <Skeleton animated className="h-4 mb-2" />
      <Skeleton animated className="h-4 mb-2 w-[90%]" />
      <Skeleton animated className="h-4 w-[70%]" />
    </div>
  );
};

export const CustomStyles = () => {
  return (
    <div className="w-[300px]">
      <Skeleton
        animated
        className="my-4 h-[100px] rounded-2xl bg-blue-500 opacity-30"
      />
      <Skeleton className="h-[50px] rounded bg-gradient-to-r from-red-400 to-yellow-300" />
    </div>
  );
};
