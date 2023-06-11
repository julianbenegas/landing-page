import Link from 'next/link'
import { useRef } from 'react'

import { GoogleIcon } from '~/components/icons/google'
import { LinuxIcon } from '~/components/icons/linux'
import { MacOsIcon } from '~/components/icons/macos'
import { MozillaIcon } from '~/components/icons/mozilla'
import { NodeJsIcon } from '~/components/icons/nodejs'
import { WindowsIcon } from '~/components/icons/windows'
import { Section } from '~/components/layout/section'
import Marquee from '~/components/primitives/marquee'
import { useIsomorphicLayoutEffect } from '~/hooks/use-isomorphic-layout-effect'
import { useTabletLgBreakpoint } from '~/hooks/use-media'
import { gsap } from '~/lib/gsap'

import s from './security.module.scss'

export const Security = () => {
  const bgWrapperRef = useRef<HTMLDivElement>(null)
  const isTablet = useTabletLgBreakpoint()

  return (
    <Section id="homepage-security" className={s.section}>
      <div className={s.container}>
        <div className={s.cardsWrapper}>
          <div className={s.card}>
            <p className={s.title}>
              Replay.io will not access your data
              <br />
              <span>without your explicit permission.</span>
            </p>
            <ul className={s.list}>
              <li>
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 5.25V3.375A2.24999 2.24999 0 0 0 6 1.125a2.24999 2.24999 0 0 0-2.25 2.25V5.25m-.375 5.625h5.25A1.12502 1.12502 0 0 0 9.75 9.75V6.375a1.12504 1.12504 0 0 0-.3295-.7955A1.12504 1.12504 0 0 0 8.625 5.25h-5.25a1.12504 1.12504 0 0 0-.7955.3295 1.12504 1.12504 0 0 0-.3295.7955V9.75a1.12502 1.12502 0 0 0 1.125 1.125Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Private by default</p>
              </li>
              <li>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5295 7.7605C8.7634 7.60077 9.03774 7.51053 9.32078 7.50022C9.60382 7.4899 9.884 7.55993 10.1289 7.70221C10.3738 7.84449 10.5734 8.05319 10.7047 8.30418C10.8359 8.55518 10.8934 8.8382 10.8705 9.1205C10.2706 9.33017 9.63339 9.41176 9 9.36C8.99805 8.79331 8.83486 8.23838 8.5295 7.761C8.25845 7.33589 7.88456 6.98602 7.44242 6.74375C7.00027 6.50149 6.50417 6.37466 6 6.375C5.49592 6.37474 4.99991 6.50161 4.55786 6.74387C4.11582 6.98613 3.742 7.33596 3.471 7.761M8.9995 9.3595L9 9.375C9 9.4875 8.994 9.5985 8.9815 9.708C8.07418 10.2286 7.04604 10.5017 6 10.5C4.915 10.5 3.8965 10.212 3.0185 9.708C3.00565 9.59229 2.99947 9.47593 3 9.3595M3 9.3595C2.36681 9.41313 1.72995 9.33184 1.1305 9.121C1.10768 8.83878 1.1652 8.55585 1.29641 8.30495C1.42763 8.05404 1.62718 7.8454 1.872 7.70314C2.11682 7.56089 2.3969 7.49083 2.67986 7.50107C2.96282 7.5113 3.23711 7.60142 3.471 7.761M3 9.3595C3.0018 8.79286 3.16581 8.23843 3.471 7.761M7.5 3.375C7.5 3.77282 7.34196 4.15436 7.06066 4.43566C6.77936 4.71696 6.39782 4.875 6 4.875C5.60218 4.875 5.22064 4.71696 4.93934 4.43566C4.65804 4.15436 4.5 3.77282 4.5 3.375C4.5 2.97718 4.65804 2.59564 4.93934 2.31434C5.22064 2.03304 5.60218 1.875 6 1.875C6.39782 1.875 6.77936 2.03304 7.06066 2.31434C7.34196 2.59564 7.5 2.97718 7.5 3.375ZM10.5 4.875C10.5 5.02274 10.4709 5.16903 10.4144 5.30552C10.3578 5.44201 10.275 5.56603 10.1705 5.6705C10.066 5.77496 9.94201 5.85783 9.80552 5.91436C9.66903 5.9709 9.52274 6 9.375 6C9.22726 6 9.08097 5.9709 8.94448 5.91436C8.80799 5.85783 8.68397 5.77496 8.5795 5.6705C8.47504 5.56603 8.39217 5.44201 8.33564 5.30552C8.2791 5.16903 8.25 5.02274 8.25 4.875C8.25 4.57663 8.36853 4.29048 8.5795 4.0795C8.79048 3.86853 9.07663 3.75 9.375 3.75C9.67337 3.75 9.95952 3.86853 10.1705 4.0795C10.3815 4.29048 10.5 4.57663 10.5 4.875ZM3.75 4.875C3.75 5.02274 3.7209 5.16903 3.66436 5.30552C3.60783 5.44201 3.52496 5.56603 3.4205 5.6705C3.31603 5.77496 3.19201 5.85783 3.05552 5.91436C2.91903 5.9709 2.77274 6 2.625 6C2.47726 6 2.33097 5.9709 2.19448 5.91436C2.05799 5.85783 1.93397 5.77496 1.82951 5.6705C1.72504 5.56603 1.64217 5.44201 1.58564 5.30552C1.5291 5.16903 1.5 5.02274 1.5 4.875C1.5 4.57663 1.61853 4.29048 1.82951 4.0795C2.04048 3.86853 2.32663 3.75 2.625 3.75C2.92337 3.75 3.20952 3.86853 3.4205 4.0795C3.63147 4.29048 3.75 4.57663 3.75 4.875Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p>Org and team level permissions</p>
              </li>
              <li>
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5295 7.7605a1.49993 1.49993 0 0 1 1.5994-.05829c.2449.14228.4445.35098.5758.60197.1312.251.1887.53402.1658.81632A4.54687 4.54687 0 0 1 9 9.36a2.98726 2.98726 0 0 0-.4705-1.599A2.99757 2.99757 0 0 0 6 6.375a2.99752 2.99752 0 0 0-2.529 1.386m5.5285 1.5985L9 9.375c0 .1125-.006.2235-.0185.333A5.97134 5.97134 0 0 1 6 10.5c-1.085 0-2.1035-.288-2.9815-.792A3.03237 3.03237 0 0 1 3 9.3595m0 0a4.49077 4.49077 0 0 1-1.8695-.2385 1.50002 1.50002 0 0 1 2.3405-1.36M3 9.3595c.0018-.56664.16581-1.12107.471-1.5985M7.5 3.375a1.50002 1.50002 0 0 1-1.5 1.5 1.50002 1.50002 0 0 1-1.5-1.5 1.50002 1.50002 0 0 1 1.5-1.5 1.50002 1.50002 0 0 1 1.5 1.5Zm3 1.5c0 .14774-.0291.29403-.0856.43052a1.12563 1.12563 0 0 1-.2439.36498 1.12493 1.12493 0 0 1-1.22602.24386 1.12504 1.12504 0 0 1-.36498-.24386 1.12504 1.12504 0 0 1 0-1.591 1.12504 1.12504 0 0 1 1.591 0c.211.21098.3295.49713.3295.7955Zm-6.75 0a1.12493 1.12493 0 0 1-.3295.7955 1.12504 1.12504 0 0 1-1.83486-.36498 1.12493 1.12493 0 0 1 .24387-1.22602A1.125 1.125 0 0 1 3.75 4.875Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p>Org and team level permissions</p>
              </li>
              <li>
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.182 9.18203a4.50009 4.50009 0 0 0 0-6.364 4.50003 4.50003 0 0 0-6.364 0m6.364 6.364C8.33808 10.0259 7.19348 10.5001 6 10.5001c-1.19348 0-2.33808-.4742-3.182-1.31807a4.50003 4.50003 0 0 1 0-6.364m6.364 6.364-6.364-6.364"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p>Restrict recordings by domain</p>
              </li>
              <li>
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 5.25V3.375A2.24999 2.24999 0 0 0 6 1.125a2.24999 2.24999 0 0 0-2.25 2.25V5.25m-.375 5.625h5.25A1.12502 1.12502 0 0 0 9.75 9.75V6.375a1.12504 1.12504 0 0 0-.3295-.7955A1.12504 1.12504 0 0 0 8.625 5.25h-5.25a1.12504 1.12504 0 0 0-.7955.3295 1.12504 1.12504 0 0 0-.3295.7955V9.75a1.12502 1.12502 0 0 0 1.125 1.125Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p>Bring your own bucket</p>
              </li>
            </ul>

            <div className={s.backgroundWrapper} ref={bgWrapperRef}>
              <BackgroundSvg isTablet={!!isTablet} />
            </div>

            <Link passHref href="/" aria-label="Go to" className={s.cta}>
              <svg
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3.75v12.5M16.25 10H3.75"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className={s.card}>
            <div>
              <p className={s.title}>
                Replay.io’s recorder is designed to be runtime
                <br />
                <span>and platform agnostic.</span>
              </p>
              <ul className={s.list}>
                <li>
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.182 9.18203a4.50009 4.50009 0 0 0 0-6.364 4.50003 4.50003 0 0 0-6.364 0m6.364 6.364C8.33808 10.0259 7.19348 10.5001 6 10.5001c-1.19348 0-2.33808-.4742-3.182-1.31807a4.50003 4.50003 0 0 1 0-6.364m6.364 6.364-6.364-6.364"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p>Restrict recordings by domain</p>
                </li>
                <li>
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5295 7.7605a1.49993 1.49993 0 0 1 1.5994-.05829c.2449.14228.4445.35098.5758.60197.1312.251.1887.53402.1658.81632A4.54687 4.54687 0 0 1 9 9.36a2.98726 2.98726 0 0 0-.4705-1.599A2.99757 2.99757 0 0 0 6 6.375a2.99752 2.99752 0 0 0-2.529 1.386m5.5285 1.5985L9 9.375c0 .1125-.006.2235-.0185.333A5.97134 5.97134 0 0 1 6 10.5c-1.085 0-2.1035-.288-2.9815-.792A3.03237 3.03237 0 0 1 3 9.3595m0 0a4.49077 4.49077 0 0 1-1.8695-.2385 1.50002 1.50002 0 0 1 2.3405-1.36M3 9.3595c.0018-.56664.16581-1.12107.471-1.5985M7.5 3.375a1.50002 1.50002 0 0 1-1.5 1.5 1.50002 1.50002 0 0 1-1.5-1.5 1.50002 1.50002 0 0 1 1.5-1.5 1.50002 1.50002 0 0 1 1.5 1.5Zm3 1.5c0 .14774-.0291.29403-.0856.43052a1.12563 1.12563 0 0 1-.2439.36498 1.12493 1.12493 0 0 1-1.22602.24386 1.12504 1.12504 0 0 1-.36498-.24386 1.12504 1.12504 0 0 1 0-1.591 1.12504 1.12504 0 0 1 1.591 0c.211.21098.3295.49713.3295.7955Zm-6.75 0a1.12493 1.12493 0 0 1-.3295.7955 1.12504 1.12504 0 0 1-1.83486-.36498 1.12493 1.12493 0 0 1 .24387-1.22602A1.125 1.125 0 0 1 3.75 4.875Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p>Org and team level permissions</p>
                </li>
              </ul>
            </div>

            <Marquee autoFill className={s.marquee}>
              {brands.map((brand, idx) => (
                <div className={s.imageWrapper} key={idx}>
                  {brand.logo}
                </div>
              ))}
            </Marquee>

            <Link passHref href="/" aria-label="Go to" className={s.cta}>
              <svg
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3.75v12.5M16.25 10H3.75"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}

interface BackgroundSvgProps extends React.SVGProps<SVGSVGElement> {
  isTablet: boolean
}

const BackgroundSvg = ({ isTablet }: BackgroundSvgProps) => {
  const timeline = useRef(
    gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
      defaults: { duration: 1.5, ease: 'power1.inOut' }
    })
  )
  const svgRef = useRef(null)
  const gradientMidTop = useRef(null)
  const gradientLeftTop = useRef(null)
  const gradientRightTop = useRef(null)
  const gradientMidBottom = useRef(null)
  const gradientLeftBottom = useRef(null)
  const gradientRightBottom = useRef(null)

  useIsomorphicLayoutEffect(() => {
    const tl = timeline.current
    const gmt = gradientMidTop.current
    const glt = gradientLeftTop.current
    const grt = gradientRightTop.current
    const gmb = gradientMidBottom.current
    const glb = gradientLeftBottom.current
    const grb = gradientRightBottom.current
    const ctx = gsap.context(() => {
      tl.fromTo(
        gmt,
        {
          attr: {
            y1: -125,
            y2: 0
          }
        },
        { attr: { y1: 125, y2: 250 } }
      )
        .fromTo(
          gmb,
          {
            attr: {
              y1: 70,
              y2: 190
            }
          },
          { attr: { y1: 440, y2: 575 } },
          '<+=1'
        )
        .fromTo(
          glt,
          {
            attr: {
              y1: 0,
              y2: 0,
              x1: 0,
              x2: 0
            }
          },
          { attr: { y1: 125, y2: 250, x1: 0, x2: 50 } }
        )
        .fromTo(
          glb,
          {
            attr: {
              y1: 190,
              y2: 190,
              x1: 50,
              x2: 50
            }
          },
          { attr: { y1: 315, y2: 490, x1: 50, x2: 0 } },
          '<+=1'
        )
        .fromTo(
          grt,
          {
            attr: {
              y1: 0,
              y2: 0,
              x1: 92,
              x2: 92
            }
          },
          { attr: { y1: 125, y2: 250, h1: 92, x2: 42 } }
        )
        .fromTo(
          grb,
          {
            attr: {
              y1: 190,
              y2: 190,
              x1: 42,
              x2: 42
            }
          },
          { attr: { y1: 315, y2: 490, x1: 42, x2: 92 } },
          '<+=1'
        )
    }, svgRef)

    return () => {
      ctx.revert()
      ctx.kill()
    }
  }, [])
  return (
    <svg
      className={s.securityAnimation}
      ref={svgRef}
      viewBox="0 0 148 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity=".8" cx="74" cy="153" r="74" fill="url(#a)" />
      <path
        d="M10 2v54.5c0 8.2843 6.7157 15 15 15h10.5c8.2843 0 15 6.7157 15 15v27"
        stroke="url(#b)"
        strokeWidth="2"
      />
      <path
        id="path-left-right"
        d="M10 2v54.5c0 8.2843 6.7157 15 15 15h10.5c8.2843 0 15 6.7157 15 15v27"
        stroke="url(#pulse-lt)"
        strokeWidth="2"
      />
      <path
        d="M134 304.5V250c0-8.284-6.716-15-15-15h-11.5c-8.2843 0-15-6.716-15-15v-27"
        stroke="url(#e)"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
      <path
        id="path-right-bottom"
        d="M134 304.5V250c0-8.284-6.716-15-15-15h-11.5c-8.2843 0-15-6.716-15-15v-27"
        stroke="url(#pulse-rb)"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
      <path
        d="M133.5 2v36.5c0 8.2843-6.716 15-15 15H108c-8.2843 0-15 6.7157-15 15v45"
        stroke="url(#f)"
        strokeWidth="2"
      />
      <path
        id="path-top-right"
        d="M133.5 2v36.5c0 8.2843-6.716 15-15 15H108c-8.2843 0-15 6.7157-15 15v45"
        stroke="url(#pulse-rt)"
        strokeWidth="2"
      />
      <path
        d="M10 304.5V269c0-8.284 6.7157-15 15-15h10.5c8.2843 0 15-6.716 15-15v-46"
        stroke="url(#g)"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
      <path
        id="path-bottom-left"
        d="M10 304.5V269c0-8.284 6.7157-15 15-15h10.5c8.2843 0 15-6.716 15-15v-46"
        stroke="url(#pulse-lb)"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
      <path d="M73.5 113V2" stroke="url(#h)" strokeWidth="2" />
      <path
        id="path-mid-top"
        d="M73.5 113V2"
        stroke="url(#pulse-mt)"
        strokeWidth="2"
      />

      <path
        d="M73 193.5v111"
        stroke="url(#k)"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
      <path
        id="path-mid-bottom"
        d="M73 193.5v111"
        stroke="url(#pulse-mb)"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
      <g
        className={s.lock}
        transform={isTablet ? 'rotate(90, 73, 153)' : undefined}
        filter="url(#l)"
      >
        <rect
          x="33"
          y="113"
          width="80"
          height="80"
          rx="8"
          fill="url(#m)"
          fillOpacity=".88"
        />
        <path
          d="M82 150v-7.5c0-2.387-.9482-4.676-2.636-6.364-1.6879-1.688-3.9771-2.636-6.364-2.636s-4.6761.948-6.364 2.636C64.9482 137.824 64 140.113 64 142.5v7.5m-1.5 22.5h21c1.1935 0 2.3381-.474 3.182-1.318.8439-.844 1.318-1.989 1.318-3.182v-13.5c0-1.193-.4741-2.338-1.318-3.182-.8439-.844-1.9885-1.318-3.182-1.318h-21c-1.1935 0-2.3381.474-3.182 1.318-.8439.844-1.318 1.989-1.318 3.182V168c0 1.193.4741 2.338 1.318 3.182.8439.844 1.9885 1.318 3.182 1.318Z"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M82 150v-7.5c0-2.387-.9482-4.676-2.636-6.364-1.6879-1.688-3.9771-2.636-6.364-2.636s-4.6761.948-6.364 2.636C64.9482 137.824 64 140.113 64 142.5v7.5m-1.5 22.5h21c1.1935 0 2.3381-.474 3.182-1.318.8439-.844 1.318-1.989 1.318-3.182v-13.5c0-1.193-.4741-2.338-1.318-3.182-.8439-.844-1.9885-1.318-3.182-1.318h-21c-1.1935 0-2.3381.474-3.182 1.318-.8439.844-1.318 1.989-1.318 3.182V168c0 1.193.4741 2.338 1.318 3.182.8439.844 1.9885 1.318 3.182 1.318Z"
          stroke="url(#n)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="33.5"
          y="113.5"
          width="79"
          height="79"
          rx="7.5"
          stroke="url(#o)"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53 109h-5v2h-2v2h9v-2h-2v-2Z"
        fill="url(#p)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76 109h-5v2h-2v2h9v-2h-2v-2Z"
        fill="url(#q)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95 109h-5v2h-2v2h9v-2h-2v-2Z"
        fill="url(#r)"
      />
      <g filter="url(#s)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53 109h-5v2h-2v2h9v-2h-2v-2Z"
          fill="url(#t)"
        />
      </g>
      <g filter="url(#u)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53 197h-5v-2h-2v-2h9v2h-2v2Z"
          fill="url(#v)"
        />
      </g>
      <g filter="url(#w)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M76 109h-5v2h-2v2h9v-2h-2v-2Z"
          fill="url(#x)"
        />
      </g>
      <g filter="url(#y)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M76 197h-5v-2h-2v-2h9v2h-2v2Z"
          fill="url(#z)"
        />
      </g>
      <g filter="url(#A)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M95 109h-5v2h-2v2h9v-2h-2v-2Z"
          fill="url(#B)"
        />
      </g>
      <g filter="url(#C)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M95 197h-5v-2h-2v-2h9v2h-2v2Z"
          fill="url(#D)"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="50.5"
          y1="2"
          x2="50.4998"
          y2="114"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="1" stopColor="#1F2937" stopOpacity=".88" />
        </linearGradient>
        <linearGradient
          id="e"
          x1="93.5"
          y1="305"
          x2="93.5"
          y2="201"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F2937" />
          <stop offset="1" stopColor="#1F2937" stopOpacity=".88" />
        </linearGradient>
        <linearGradient
          ref={gradientRightBottom}
          id="pulse-rb"
          x1="93.5"
          y1="305"
          x2="93.5"
          y2="201"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF" stopOpacity="0" />
          <stop offset=".20313" stopColor="#FFF" stopOpacity=".24" />
          <stop offset=".99" stopColor="#FFF" stopOpacity=".88" />
          <stop offset="1" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="f"
          x1="93"
          y1="2"
          x2="93.0002"
          y2="114"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="1" stopColor="#1F2937" stopOpacity=".88" />
        </linearGradient>
        <linearGradient
          id="g"
          x1="50.5"
          y1="305"
          x2="50.4998"
          y2="192.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F2937" />
          <stop offset="1" stopColor="#1F2937" stopOpacity=".88" />
        </linearGradient>
        <linearGradient
          ref={gradientLeftBottom}
          id="pulse-lb"
          x1="50.5"
          y1="305"
          x2="50.4998"
          y2="192.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF" stopOpacity="0" />
          <stop offset=".20313" stopColor="#FFF" stopOpacity=".24" />
          <stop offset=".99" stopColor="#FFF" stopOpacity=".88" />
          <stop offset="1" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="h"
          x1="74.5"
          y1="2"
          x2="74.4929"
          y2="113.498"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="1" stopColor="#1F2937" stopOpacity=".88" />
        </linearGradient>
        <linearGradient
          ref={gradientMidTop}
          id="pulse-mt"
          y1="74.5"
          y2="74.4929"
          x1="74.5"
          x2="74.4929"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF" stopOpacity="0" />
          <stop offset=".20313" stopColor="#FFF" stopOpacity=".24" />
          <stop offset=".99" stopColor="#FFF" stopOpacity=".88" />
          <stop offset="1" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          ref={gradientLeftTop}
          id="pulse-lt"
          y1="74.5"
          y2="74.4929"
          x1="74.5"
          x2="74.4929"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF" stopOpacity="0" />
          <stop offset=".20313" stopColor="#FFF" stopOpacity=".24" />
          <stop offset=".99" stopColor="#FFF" stopOpacity=".88" />
          <stop offset="1" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          ref={gradientRightTop}
          id="pulse-rt"
          y1="74.5"
          y2="74.4929"
          x1="74.5"
          x2="74.4929"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF" stopOpacity="0" />
          <stop offset=".20313" stopColor="#FFF" stopOpacity=".24" />
          <stop offset=".99" stopColor="#FFF" stopOpacity=".88" />
          <stop offset="1" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="j"
          x1="74.5"
          y1="1"
          x2="74.4979"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity=".88" />
        </linearGradient>
        <linearGradient
          id="k"
          x1="74"
          y1="304.998"
          x2="73.9929"
          y2="193.002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F2937" />
          <stop offset="1" stopColor="#1F2937" stopOpacity=".88" />
        </linearGradient>
        <linearGradient
          ref={gradientMidBottom}
          id="pulse-mb"
          x1="74"
          y1="304.998"
          x2="73.9929"
          y2="193.002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF" stopOpacity="0" />
          <stop offset=".20313" stopColor="#FFF" stopOpacity=".24" />
          <stop offset=".99" stopColor="#FFF" stopOpacity=".88" />
          <stop offset="1" stopColor="#FFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="m"
          x1="73"
          y1="113"
          x2="73"
          y2="193"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity=".88" />
          <stop offset="1" stopOpacity=".24" />
        </linearGradient>
        <linearGradient
          id="n"
          x1="73.1282"
          y1="133.5"
          x2="73.1282"
          y2="172.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F2937" stopOpacity=".86" />
          <stop offset="1" stopColor="#1F2937" stopOpacity=".24" />
        </linearGradient>
        <linearGradient
          id="o"
          x1="73.3419"
          y1="113"
          x2="73.3418"
          y2="193"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F2937" stopOpacity=".86" />
          <stop offset="1" stopColor="#1F2937" stopOpacity=".24" />
        </linearGradient>
        <linearGradient
          id="p"
          x1="50.5"
          y1="109"
          x2="50.5"
          y2="113"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset=".51042" stopColor="#202020" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="q"
          x1="73.5"
          y1="109"
          x2="73.5"
          y2="113"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset=".51042" stopColor="#202020" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="r"
          x1="92.5"
          y1="109"
          x2="92.5"
          y2="113"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset=".51042" stopColor="#202020" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="t"
          x1="50.5"
          y1="109"
          x2="50.5"
          y2="113"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F2937" />
          <stop offset=".51042" stopColor="#273344" />
          <stop offset="1" stopColor="#1F2937" />
        </linearGradient>
        <linearGradient
          id="v"
          x1="50.5"
          y1="197"
          x2="50.5"
          y2="193"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F2937" />
          <stop offset=".51042" stopColor="#273344" />
          <stop offset="1" stopColor="#1F2937" />
        </linearGradient>
        <linearGradient
          id="x"
          x1="73.5"
          y1="109"
          x2="73.5"
          y2="113"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F2937" />
          <stop offset=".51042" stopColor="#273344" />
          <stop offset="1" stopColor="#1F2937" />
        </linearGradient>
        <linearGradient
          id="z"
          x1="73.5"
          y1="197"
          x2="73.5"
          y2="193"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F2937" />
          <stop offset=".51042" stopColor="#273344" />
          <stop offset="1" stopColor="#1F2937" />
        </linearGradient>
        <linearGradient
          id="B"
          x1="92.5"
          y1="109"
          x2="92.5"
          y2="113"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F2937" />
          <stop offset=".51042" stopColor="#273344" />
          <stop offset="1" stopColor="#1F2937" />
        </linearGradient>
        <linearGradient
          id="D"
          x1="92.5"
          y1="197"
          x2="92.5"
          y2="193"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F2937" />
          <stop offset=".51042" stopColor="#273344" />
          <stop offset="1" stopColor="#1F2937" />
        </linearGradient>
        <filter
          id="i"
          x="72"
          y="0"
          width="3"
          height="48.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation=".5"
            result="effect1_foregroundBlur_2851_88657"
          />
        </filter>
        <filter
          id="l"
          x="33"
          y="113"
          width="80"
          height="80"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0.491667 0 0 0 0 0.491667 0 0 0 0 0.491667 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_2851_88657" />
        </filter>
        <filter
          id="s"
          x="46"
          y="108"
          width="9"
          height="5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0.211458 0 0 0 0 0.274392 0 0 0 0 0.3625 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_2851_88657" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            in="SourceAlpha"
            result="effect2_innerShadow_2851_88657"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_innerShadow_2851_88657"
            result="effect2_innerShadow_2851_88657"
          />
        </filter>
        <filter
          id="u"
          x="46"
          y="192"
          width="9"
          height="5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0.211458 0 0 0 0 0.274392 0 0 0 0 0.3625 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_2851_88657" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            in="SourceAlpha"
            result="effect2_innerShadow_2851_88657"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_innerShadow_2851_88657"
            result="effect2_innerShadow_2851_88657"
          />
        </filter>
        <filter
          id="w"
          x="69"
          y="108"
          width="9"
          height="5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0.211458 0 0 0 0 0.274392 0 0 0 0 0.3625 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_2851_88657" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            in="SourceAlpha"
            result="effect2_innerShadow_2851_88657"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_innerShadow_2851_88657"
            result="effect2_innerShadow_2851_88657"
          />
        </filter>
        <filter
          id="y"
          x="69"
          y="192"
          width="9"
          height="5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0.211458 0 0 0 0 0.274392 0 0 0 0 0.3625 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_2851_88657" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            in="SourceAlpha"
            result="effect2_innerShadow_2851_88657"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_innerShadow_2851_88657"
            result="effect2_innerShadow_2851_88657"
          />
        </filter>
        <filter
          id="A"
          x="88"
          y="108"
          width="9"
          height="5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0.211458 0 0 0 0 0.274392 0 0 0 0 0.3625 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_2851_88657" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            in="SourceAlpha"
            result="effect2_innerShadow_2851_88657"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_innerShadow_2851_88657"
            result="effect2_innerShadow_2851_88657"
          />
        </filter>
        <filter
          id="C"
          x="88"
          y="192"
          width="9"
          height="5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0.211458 0 0 0 0 0.274392 0 0 0 0 0.3625 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_2851_88657" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            in="SourceAlpha"
            result="effect2_innerShadow_2851_88657"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_innerShadow_2851_88657"
            result="effect2_innerShadow_2851_88657"
          />
        </filter>
        <radialGradient
          id="a"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 77.7336 -74 0 74 153)"
        >
          <stop stopColor="#1F2937" />
          <stop offset=".5625" stopColor="#111827" />
          <stop offset="1" stopColor="#111827" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

type brandType = {
  name: string
  logo: React.ReactNode
}
const brands: brandType[] = [
  {
    name: 'Google',
    logo: <GoogleIcon />
  },
  {
    name: 'Mozilla',
    logo: <MozillaIcon />
  },
  {
    name: 'Node.js',
    logo: <NodeJsIcon />
  },
  {
    name: 'MacOS',
    logo: <MacOsIcon />
  },
  {
    name: 'Windows',
    logo: <WindowsIcon />
  },
  {
    name: 'Linux',
    logo: <LinuxIcon />
  }
]
