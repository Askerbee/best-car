import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, className }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.includes('#')) {
      e.preventDefault();
      const [path, hash] = href.split('#');
      
      if (path && path !== '/') {
        navigate(path);
      }
      
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <RouterLink to={href} className={className} onClick={handleClick}>
      {children}
    </RouterLink>
  );
};