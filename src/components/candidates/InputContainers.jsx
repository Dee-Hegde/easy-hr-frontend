import { UploadOutlined } from '@ant-design/icons';
import { Button, Input, Select, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';

function InputContainers() {
  const [resumeFile, setResumeFile] = useState({});
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  const uploadResume = (e) => {
    setResumeFile(e.file);
  };
  return (
    <div className='co-main-ip-container'>
      <div className='co-sub-ip-container'>
        <div className='co-input-container'>
          <span className='co-input-lable'>
            First Name <span className='required-text'>*</span>
          </span>
          <Input
            className='basic-input'
            placeholder='ABCD'
          />
        </div>
        <div className='co-input-container'>
          <span className='co-input-lable'>
            Last Name <span className='required-text'>*</span>
          </span>
          <Input
            className='basic-input'
            placeholder='XYZ'
          />
        </div>
      </div>
      <div className='co-sub-ip-container'>
        <div className='co-input-container'>
          <span className='co-input-lable'>
            Email <span className='required-text'>*</span>
          </span>
          <Input
            className='basic-input'
            placeholder='abcd@xyz.com'
          />
        </div>
        <div className='co-input-container'>
          <span className='co-input-lable'>
            Phone Number <span className='required-text'>*</span>
          </span>
          <Input
            className='basic-input'
            placeholder='9876543210'
          />
        </div>
      </div>
      <div className='co-sub-ip-container'>
        <div className='co-input-container'>
          <span className='co-input-lable'>
            Current Salary <span className='required-text'>*</span>
          </span>
          <Input
            className='basic-input'
            placeholder='ex:10,00,000'
          />
        </div>
        <div className='co-input-container'>
          <span className='co-input-lable'>
            Expected Salary <span className='required-text'>*</span>
          </span>
          <Input
            className='basic-input'
            placeholder='ex:10,00,000'
          />
        </div>
      </div>
      <div className='co-sub-ip-container'>
        <div className='co-input-container'>
          <span className='co-input-lable'>Current Salary/Month</span>
          <Input
            className='basic-input'
            disabled={true}
          />
        </div>
        <div className='co-input-container'>
          <span className='co-input-lable'>Expected Salary/Month</span>
          <Input
            className='basic-input'
            disabled={true}
          />
        </div>
      </div>
      <div className='co-sub-ip-container'>
        <div className='co-input-container'>
          <span className='co-input-lable'>
            Total Exp <span className='required-text'>*</span>
          </span>
          <Input
            className='basic-input'
            placeholder='First Name'
          />
        </div>
        <div className='co-input-container'>
          <span className='co-input-lable'>
            Relevant Exp <span className='required-text'>*</span>
          </span>
          <Input
            className='basic-input'
            placeholder='First Name'
          />
        </div>
      </div>
      <div className='co-sub-ip-container'>
        <div className='co-input-container'>
          <span className='co-input-lable'>
            Applied Role <span className='required-text'>*</span>
          </span>
          <Select
            size={'large'}
            defaultValue='a1'
            className='co-select'
            options={options}
          />
        </div>
        <div className='co-input-container'>
          <span className='co-input-lable'>
            Skills <span className='required-text'>*</span>
          </span>
          <Select
            mode='tags'
            size={'large'}
            placeholder='Please select'
            defaultValue={['a10', 'c12']}
            className='co-select'
            options={options}
          />
        </div>
      </div>
      <div className='co-sub-ip-container'>
        <div className='co-input-container'>
          <span className='co-input-lable'>
            Added By <span className='required-text'>*</span>
          </span>
          <Select
            size={'large'}
            defaultValue='a1'
            className='co-select'
            options={options}
          />
        </div>
        <div className='co-input-container'>
          <span className='co-input-lable'>
            Source <span className='required-text'>*</span>
          </span>
          <Select
            size={'large'}
            defaultValue='a1'
            className='co-select'
            options={options}
          />
        </div>
      </div>
      <div className='co-sub-ip-container'>
        <div className='co-input-container'>
          <span className='co-input-lable'>
            Other Offer <span className='required-text'>*</span>
          </span>
          <Select
            size={'large'}
            defaultValue='a1'
            className='co-select'
            options={options}
          />
        </div>
        <div className='co-input-container'>
          <span className='co-input-lable'>
            Upload Resume <span className='required-text'>*</span>
          </span>
          <Upload
            className='co-input-upload'
            customRequest={uploadResume}
            name='file'
            progress={{ strokeWidth: '0', showInfo: false }}
            listType={'text'}
            multiple={false}
            maxCount={1}
            showUploadList={true}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </div>
      </div>
      <div className='co-sub-ip-container'>
        <div className='co-remark-container'>
          <span className='co-input-lable'>Remarks</span>
          <TextArea rows={4} />
        </div>
      </div>
      <div className='co-submit-btn-container'>
        <Button className='primary-button'>Submit</Button>
      </div>
    </div>
  );
}

export default InputContainers;
