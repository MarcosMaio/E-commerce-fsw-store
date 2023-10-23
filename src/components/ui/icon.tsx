import * as LucideIcons from "lucide-react";

type IconNames = keyof typeof LucideIcons;

type IconProps = LucideIcons.LucideProps & {
  name: IconNames;
};

const Icon = ({ name, ...rest }: IconProps) => {
  if (name in LucideIcons) {
    const IconComponent = LucideIcons[name] as LucideIcons.LucideIcon;
    return <IconComponent {...rest} />;
  }
};

export { Icon };
