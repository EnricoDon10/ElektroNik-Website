import {
  BatteryCharging,
  Cable,
  Factory,
  Network,
  SolarPanel,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { services } from "../../data/site-content";

type ServiceIconName = (typeof services)[number]["icon"];

const serviceIcons = {
  "battery-charging": BatteryCharging,
  cable: Cable,
  factory: Factory,
  network: Network,
  "solar-panel": SolarPanel,
  wrench: Wrench,
} satisfies Record<ServiceIconName, LucideIcon>;

type ServiceIconProps = {
  className?: string;
  name: ServiceIconName;
  size?: number;
};

export default function ServiceIcon({
  className,
  name,
  size = 22,
}: ServiceIconProps) {
  const Icon = serviceIcons[name];

  return (
    <Icon
      aria-hidden="true"
      className={className}
      focusable="false"
      size={size}
      strokeWidth={1.7}
    />
  );
}
