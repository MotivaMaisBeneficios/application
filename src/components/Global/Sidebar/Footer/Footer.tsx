import React from 'react';
import { AiFillApi } from 'react-icons/ai';
import InfoFooter from './InfoFooter';
import Divider from '@/components/Divider';

const Footer = () => {
  return (
    <div className="flex flex-col justify-end">
      <InfoFooter />

      <Divider />

      <div>
        <li
          className={
            'flex items-center p-3 rounded transition-colors hover:bg-white hover:shadow-lg cursor-pointer'
          }
          onClick={() => console.log('Sair')}
        >
          <div
            className={
              'flex items-center p-2 justify-center bg-white rounded shadow- mr-3'
            }
          >
            <AiFillApi size={20} />
          </div>
          <span className={'transition-opacity duration-200 opacity-100 '}>
            Sair
          </span>
        </li>
      </div>
    </div>
  );
};

export default Footer;
