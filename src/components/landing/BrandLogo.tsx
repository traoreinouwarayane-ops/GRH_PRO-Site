import Image from "next/image";

type BrandLogoProps = {
  variant?: "full" | "icon";
  className?: string;
  priority?: boolean;
};

const sizes = {
  full: { width: 200, height: 220 },
  icon: { width: 48, height: 48 },
} as const;

export function BrandLogo({
  variant = "full",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const src =
    variant === "icon" ? "/logo-grh-pro-icon.png" : "/logo-grh-pro.png";
  const { width, height } = sizes[variant];

  return (
    <Image
      src={src}
      alt="GRH_PRO"
      width={width}
      height={height}
      priority={priority}
      className={`object-contain ${className}`.trim()}
    />
  );
}
