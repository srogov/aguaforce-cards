import Image from 'next/image'
import aguaforceLogo from '@/images/logo/aguaforce-logo.svg'
import aguaforceIcon from '@/images/logo/agua-force-icon.svg'
import { COMPANY } from '@/config'

type LogoProps = {
  variant?: 'wordmark' | 'icon'
  className?: string
}

export function Logo({ variant, className = 'h-8 w-auto' }: LogoProps) {
  if (variant === 'wordmark') {
    return <Image alt={COMPANY.brandName} src={aguaforceLogo} className={className} />
  }

  if (variant === 'icon') {
    return <Image alt={COMPANY.brandName} src={aguaforceIcon} className={className} />
  }

  return (
    <>
      <Image alt={COMPANY.brandName} src={aguaforceLogo} className={`hidden lg:block ${className}`} />
      <Image alt={COMPANY.brandName} src={aguaforceIcon} className={`lg:hidden ${className}`} />
    </>
  )
}
