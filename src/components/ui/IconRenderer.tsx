import * as Icons from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
}

export const IconRenderer = ({ name, className }: IconRendererProps) => {
  // @ts-ignore
  const Icon = Icons[name];
  
  if (!Icon) {
    return <Icons.Code2 className={className} />; // Fallback
  }
  
  return <Icon className={className} />;
};
