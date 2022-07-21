import Link from 'next/link'
import { FC } from 'react'

import { Heading } from '~/components/common/heading'
import { Section } from '~/components/common/section'
import { Container } from '~/components/layout/container'
import { Button } from '~/components/primitives/button'

import s from './hero.module.scss'

export const Hero: FC = () => {
  return (
    <Section className={s['section']}>
      <div className={s['illustration']}>
        {/* <svg
          viewBox="0 0 1909 772"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="b"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1909"
            height="772"
          >
            <path fill="url(#a)" d="M0 0h1909v772H0z" />
          </mask>
          <g mask="url(#b)">
            <path
              d="M2250.06 65 741.358 936.051"
              stroke="url(#c)"
              strokeDasharray="8 8"
            />
            <path
              d="M2029.13 872.16 354.001-94.9746"
              stroke="url(#d)"
              strokeDasharray="8 8"
            />
            <path
              d="M2250.06 520.051 741.358-351"
              stroke="url(#e)"
              strokeDasharray="8 8"
            />
            <path
              d="M2029.13-287.109 354.001 680.025"
              stroke="url(#f)"
              strokeDasharray="8 8"
            />
            <path
              d="M1440.31 1260V-674"
              stroke="url(#g)"
              strokeDasharray="8 8"
            />
            <circle
              opacity=".2"
              r="24"
              transform="matrix(-1 0 0 1 1085.31 327)"
              fill="#F41C52"
            />
            <circle
              r="12"
              transform="matrix(-1 0 0 1 1085.31 327)"
              fill="#F41C52"
            />
          </g>
          <defs>
            <linearGradient
              id="a"
              x1="1909"
              y1="605.5"
              x2="247.513"
              y2="-484.34"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D9D9D9" stopOpacity="0" />
              <stop offset=".0344073" stopColor="#D9D9D9" stopOpacity="0" />
              <stop offset=".162578" stopColor="#D9D9D9" />
              <stop offset=".475252" stopColor="#D9D9D9" />
              <stop offset=".553959" stopColor="#D9D9D9" stopOpacity="0" />
              <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="c"
              x1="721.349"
              y1="948.552"
              x2="2211.93"
              y2="85.446"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity=".1" />
              <stop offset=".480779" stopOpacity=".4" />
              <stop offset=".481095" stopColor="#F41C52" />
              <stop offset="1" stopColor="#F41C52" />
            </linearGradient>
            <linearGradient
              id="d"
              x1="411.314"
              y1="-62"
              x2="1759.31"
              y2="716"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity=".1" />
              <stop offset=".499484" stopOpacity=".4" />
              <stop offset=".499584" stopColor="#F41C52" />
              <stop offset="1" stopColor="#F41C52" />
            </linearGradient>
            <linearGradient
              id="e"
              x1="721.349"
              y1="-363.501"
              x2="2211.93"
              y2="499.605"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity=".1" />
              <stop offset=".480779" stopOpacity=".4" />
              <stop offset=".481095" stopColor="#F41C52" />
              <stop offset="1" stopColor="#F41C52" />
            </linearGradient>
            <linearGradient
              id="f"
              x1="411.314"
              y1="647.051"
              x2="1759.31"
              y2="-130.949"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity=".1" />
              <stop offset=".499484" stopOpacity=".4" />
              <stop offset=".499584" stopColor="#F41C52" />
              <stop offset="1" stopColor="#F41C52" />
            </linearGradient>
            <linearGradient
              id="g"
              x1="1440.31"
              y1="737"
              x2="1966.69"
              y2="243.852"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity=".1" />
              <stop offset=".101187" stopOpacity=".4" />
              <stop offset=".104169" stopColor="#F41C52" />
              <stop offset=".738113" stopColor="#F41C52" />
              <stop offset=".741695" stopOpacity=".1" />
              <stop offset="1" stopOpacity=".1" />
            </linearGradient>
          </defs>
        </svg> */}
        <svg
          viewBox="0 0 1440 772"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_2073_6914"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="772"
          >
            <rect width="1440" height="772" fill="url(#a)" />
          </mask>
          <g mask="url(#b)">
            <path
              d="M2030.06 157L521.358 1028.05"
              stroke="url(#c)"
              strokeDasharray="8 8"
            />
            <path
              d="M1809.13 964.16L134 -2.97461"
              stroke="url(#d)"
              strokeDasharray="8 8"
            />
            <path
              d="M2030.06 612.051L521.358 -259"
              stroke="url(#e)"
              strokeDasharray="8 8"
            />
            <path
              d="M1809.13 -195.109L134 772.026"
              stroke="url(#f)"
              strokeDasharray="8 8"
            />
            <path
              d="M1220.31 1352L1220.31 -582"
              stroke="url(#g)"
              strokeDasharray="8 8"
            />
            <circle
              opacity="0.2"
              r="24"
              transform="matrix(-1 0 0 1 865.313 419)"
              fill="#F41C52"
            />
            <circle
              r="12"
              transform="matrix(-1 0 0 1 865.313 419)"
              fill="#F41C52"
            />
          </g>
          <defs>
            <linearGradient
              id="a"
              x1="1440"
              y1="362.5"
              x2="8.35966e-06"
              y2="362.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D9D9D9" />
              <stop offset="0.428539" stopColor="#D9D9D9" />
              <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="c"
              x1="501.349"
              y1="1040.55"
              x2="1991.93"
              y2="177.446"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0.1" />
              <stop offset="0.480779" stopOpacity="0.4" />
              <stop offset="0.481095" stopColor="#F41C52" />
              <stop offset="1" stopColor="#F41C52" />
            </linearGradient>
            <linearGradient
              id="d"
              x1="191.313"
              y1="30"
              x2="1539.31"
              y2="808"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0.1" />
              <stop offset="0.499484" stopOpacity="0.4" />
              <stop offset="0.499584" stopColor="#F41C52" />
              <stop offset="1" stopColor="#F41C52" />
            </linearGradient>
            <linearGradient
              id="e"
              x1="501.349"
              y1="-271.501"
              x2="1991.93"
              y2="591.605"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0.1" />
              <stop offset="0.480779" stopOpacity="0.4" />
              <stop offset="0.481095" stopColor="#F41C52" />
              <stop offset="1" stopColor="#F41C52" />
            </linearGradient>
            <linearGradient
              id="f"
              x1="191.313"
              y1="739.051"
              x2="1539.31"
              y2="-38.9487"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0.1" />
              <stop offset="0.499484" stopOpacity="0.4" />
              <stop offset="0.499584" stopColor="#F41C52" />
              <stop offset="1" stopColor="#F41C52" />
            </linearGradient>
            <linearGradient
              id="g"
              x1="1220.31"
              y1="829"
              x2="1746.69"
              y2="335.852"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0.1" />
              <stop offset="0.101187" stopOpacity="0.4" />
              <stop offset="0.104169" stopColor="#F41C52" />
              <stop offset="0.738113" stopColor="#F41C52" />
              <stop offset="0.741695" stopOpacity="0.1" />
              <stop offset="1" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Container>
        <div className={s['hero']}>
          <div className={s['heading']}>
            <Heading as="h1" size="lg">
              Page Not Found
            </Heading>
            <span>
              The page you are looking for doesn't exist or has been moved.
            </span>
            <div className={s['cta']}>
              <Link passHref href="/">
                <a>
                  <Button variant="primary">Go Home</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
