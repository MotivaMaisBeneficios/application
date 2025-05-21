'use client';

import { useState } from 'react';
import { theme } from '@/context/MaterialThemeProvider';
import Logo from '../Logo';
import logoNext from '@/../public/next.svg';
import { useDarkMode } from '@/hooks/useDarkMode';

interface SidebarProps {
  fixed: boolean;
  setFixed: (val: boolean) => void;
}

const Sidebar = ({ fixed, setFixed }: SidebarProps) => {
  const [dark] = useDarkMode();
  const [hovered, setHovered] = useState(false);

  const themeGlobal = dark ? theme.lightTheme : theme.darkTheme;

  const isExpanded = fixed || hovered;

  console.log({ color: themeGlobal.palette.text.primary });

  return (
    <aside
      className={`${
        fixed ? 'relative' : 'absolute z-50'
      } top-0 left-0 h-full flex flex-col justify-between transition-all duration-300
        ${isExpanded ? 'w-64' : 'w-16'} bg-[${
        themeGlobal.palette.background.default
      }] p-2 text-${themeGlobal.palette.text.primary}  shadow-lg shadow-[${
        themeGlobal.palette.text.primary
      }]`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Topo: botão + logotipo */}
      <div>
        <button
          className={`w-full text-left text-sm text-${themeGlobal.palette.text.primary}  mb-2`}
          onClick={() => setFixed(!fixed)}
        >
          {fixed ? '🔒 Fixado (Clique p/ soltar)' : '📌'}
        </button>

        <Logo
          isExpanded={isExpanded}
          image={logoNext.src}
          alt="logo NexJs"
          text="NextJS"
        />
      </div>

      {/* Centro: navegação */}
      <div className={'mt-4 text-sm flex-1 overflow-auto'}>
        {isExpanded && (
          <nav>
            <ul className="list-disc list-inside space-y-2">
              <li>Dashboard</li>
              <li>Relatórios</li>
              <li>Configurações</li>
            </ul>
          </nav>
        )}
      </div>

      {/* Rodapé: botão sair */}
      <div className="text-sm">
        {isExpanded && (
          <button className="w-full text-left text-red-600 hover:text-red-800">
            🚪 Sair
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
