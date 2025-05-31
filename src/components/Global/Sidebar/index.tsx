'use client';

import { theme } from '@/context/MaterialThemeProvider';
import Logo from '../Logo';
import logoNext from '@/../public/next.svg';
import { useDarkMode } from '@/hooks/useDarkMode';
import Divider from '@/components/Divider';
import NavigationCenter from './NavigationCenter';
import { AiFillAppstore, AiFillSetting, AiFillSignal } from 'react-icons/ai';
import Footer from './Footer/Footer';

const Sidebar = () => {
  const [dark] = useDarkMode();

  const themeGlobal = dark ? theme.lightTheme : theme.darkTheme;

  const itemsMenu = [
    {
      label: 'Dashboard',
      icon: <AiFillAppstore size={20} />,
      url: '/dashboard',
      disabled: true,
    },
    { label: 'Relatórios', icon: <AiFillSignal size={20} />, url: '/reports' },
    {
      label: 'Configurações',
      icon: <AiFillSetting size={20} />,
      url: '/settings',
    },
  ];

  return (
    <aside
      style={{
        backgroundColor: themeGlobal.palette.background.default,
        color: themeGlobal.palette.text.primary,
        // boxShadow: `0 4px 6px ${themeGlobal.palette.text.primary}`, // shadow custom
      }}
      className={
        'relative top-0 left-0 h-full flex flex-col justify-between transition-all duration-300 w-64 p-2'
      }
    >
      {/* Topo: botão + logotipo */}
      <div>
        {/* <button
          className={`w-full text-left text-sm text-${themeGlobal.palette.text.primary}  mb-2`}
          onClick={() => setFixed(!fixed)}
        >
          {fixed ? '🔒 Fixado (Clique p/ soltar)' : '📌'}
        </button> */}

        <Logo image={logoNext.src} alt="logo NexJs" text="NextJS" />
      </div>
      <Divider />
      {/* Centro: navegação */}
      <div className={'flex-1 overflow-y-auto mt-2 space-y-2'}>
        <NavigationCenter
          items={itemsMenu}
          onNavigate={(val) => console.log({ val })}
          title="Menu Principal"
        />
        <NavigationCenter
          items={itemsMenu}
          onNavigate={(val) => console.log({ val })}
          title="Menu Principal"
        />
      </div>

      <Footer />
    </aside>
  );
};

export default Sidebar;
