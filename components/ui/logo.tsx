import Link from 'next/link'
import LogoImg from '@/public/images/logo.png'
import Image from 'next/image'


export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
                <Image src={LogoImg} width={32} height={32} alt="" />
              
    </Link>
  )
}
