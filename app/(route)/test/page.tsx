'use client';

import CustomButton from '@components/atoms/button/custom';

export default function page() {
  const testFunction = (text: string) => {
    alert(text);
  };

  return (
    <div>
      <CustomButton
        color={'red'}
        text="Call to action copy"
        onClickFunction={() => testFunction('hi1')}
      />
      <CustomButton
        color={'blue'}
        text="Call to action copy2"
        onClickFunction={() => testFunction('hi2')}
      />
      <CustomButton
        color={'yellow'}
        text="Call to action copy3"
        onClickFunction={() => testFunction('hi3')}
      />
    </div>
  );
}
