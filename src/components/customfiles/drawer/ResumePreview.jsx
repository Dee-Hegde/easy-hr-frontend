import React from 'react';
import back from 'src/assets/images/close icon.svg';
import 'src/components/popup/popup.css';

const ResumePreview = ({ setResumeModal, resumeModal }) => {
  const { resumeUrl } = resumeModal;
  const closeHandler = () => {
    setResumeModal({ ...resumeModal, visibility: false });
  };
  return (
    <>
      <div className='statusModal'>
        <div className='hrModal'>
          <div className='statusHead'>
            <h4>Resume</h4>
            <img
              width={30}
              src={back}
              onClick={closeHandler}
              alt='back'
            />
          </div>

          <iframe
          title='abcd'
            src={
              resumeUrl.split('.').pop() === 'doc'
                ? `https://docs.google.com/gview?url=${resumeUrl}&embedded=true`
                : resumeUrl.split('.').pop() === 'docx'
                ? `https://docs.google.com/gview?url=${resumeUrl}&embedded=true`
                : resumeUrl
            }></iframe>
        </div>
      </div>
    </>
  );
};

export default ResumePreview;
