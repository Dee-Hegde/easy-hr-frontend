import React from 'react';

const TitleCard = (props) => {
  const {
    titleRequired = true,
    subTitleRequired = false,
    titleClassName,
    subtitleClassName,
    className,
    title,
    subtitle,
  } = props;
  return (
    <div className={`${className}`}>
      {titleRequired && <h1 className={`${titleClassName}`}>{title ?? ''}</h1>}
      {subTitleRequired && (
        <p className={`${subtitleClassName}`}>{subtitle ?? ''}</p>
      )}
    </div>
  );
};

export default TitleCard;
