import { FC, useEffect, useState } from 'react'

import { Section } from '~/components/common/section'

import s from './branding.module.scss'

const downloadSVG = () => {
  const svgElement = document.getElementById('downloadableSVG')
  const svgData = new XMLSerializer().serializeToString(svgElement)
  const blob = new Blob([svgData], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url

  // Check current theme and set the download name accordingly
  const logoContainer = document.querySelector(`.${s['logo-container']}`)
  const isDarkTheme =
    logoContainer && logoContainer.classList.contains(s['dark'])
  a.download = isDarkTheme ? 'replay-logo-dark.svg' : 'replay-logo-light.svg'

  a.click()

  URL.revokeObjectURL(url)
}

const BrandingDownloadWidget: FC = () => {
  const [theme, setTheme] = useState('light')
  const [svgOption, setSvgOption] = useState('wordmark')

  // A side effect that updates the theme
  useEffect(() => {
    const elements = document.querySelectorAll('.theme-toggle')
    const logoContainer = document.querySelector(`.${s['logo-container']}`)

    if (theme === 'dark') {
      elements.forEach((el) => {
        el.setAttribute('fill', '#fff')
      })
      logoContainer && s['dark'] && logoContainer.classList.add(s['dark'])
    } else {
      elements.forEach((el) => {
        el.setAttribute('fill', '#081120')
      })
      logoContainer && s['dark'] && logoContainer.classList.remove(s['dark'])
    }
  }, [theme])

  return (
    <Section className={s.section}>
      <div className={s['bg-container']}>
        <div className={s['widgetWrapper']}>
          <h1 className={s['title']}>Our logo</h1>
          <div className={s['widget']}>
            <div className={s['logo-container']}>
              <div className={s['logo']}>
                <svg
                  id="downloadableSVG"
                  width="422"
                  height="115"
                  viewBox="0 0 422 115"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {svgOption === 'wordmark' ? (
                    <>
                      <path
                        d="M44.7284 22.9978L26.306 12.2574L7.88355 1.51768C7.08456 1.05205 6.17822 0.806962 5.25571 0.807034C4.3332 0.807105 3.42695 1.05232 2.62804 1.51808C1.82912 1.98383 1.16567 2.65371 0.704356 3.46038C0.243043 4.26705 0.000164566 5.1821 3.05344e-05 6.1136V49.0753C-4.33806e-05 50.0069 0.242759 50.9221 0.704022 51.7289C1.16528 52.5357 1.82872 53.2056 2.6277 53.6714C3.42669 54.1372 4.33303 54.3824 5.25563 54.3824C6.17822 54.3823 7.08459 54.1371 7.88355 53.6712L26.306 42.9315L44.7284 32.1911C45.5278 31.7254 46.1915 31.0555 46.6531 30.2486C47.1146 29.4417 47.3577 28.5263 47.3577 27.5944C47.3577 26.6626 47.1146 25.7472 46.6531 24.9403C46.1915 24.1334 45.5278 23.4635 44.7284 22.9978Z"
                        fill="#F02D5E"
                      />
                      <path
                        d="M44.7283 82.8089L26.3059 72.0691L7.88277 61.3294C7.08392 60.8635 6.17769 60.6182 5.25518 60.6181C4.33266 60.618 3.42635 60.8632 2.62742 61.3289C1.82849 61.7946 1.16514 62.4645 0.703908 63.2713C0.242681 64.078 -9.24797e-05 64.9931 2.64265e-08 65.9246V108.886C-4.55694e-06 109.818 0.242764 110.733 0.703992 111.54C1.16522 112.346 1.82862 113.016 2.62751 113.482C3.42639 113.948 4.3326 114.193 5.2551 114.193C6.17759 114.193 7.08383 113.948 7.88277 113.482L26.3059 102.743L44.7283 92.0028C45.5276 91.537 46.1915 90.867 46.653 90.06C47.1145 89.2531 47.3576 88.3377 47.3576 87.4058C47.3576 86.4739 47.1145 85.5585 46.653 84.7515C46.1915 83.9446 45.5276 83.2746 44.7283 82.8089Z"
                        fill="#F02D5E"
                      />
                      <path
                        d="M97.269 52.9039L78.8466 42.1635L60.4242 31.4237C59.6252 30.9579 58.7189 30.7126 57.7963 30.7126C56.8738 30.7126 55.9674 30.9578 55.1684 31.4236C54.3694 31.8893 53.7059 32.5593 53.2447 33.3661C52.7834 34.1729 52.5406 35.0881 52.5407 36.0197V78.9813C52.5408 79.9128 52.7838 80.8279 53.2451 81.6346C53.7064 82.4412 54.3698 83.1111 55.1688 83.5769C55.9677 84.0426 56.8739 84.2879 57.7964 84.2879C58.7189 84.288 59.6252 84.0429 60.4242 83.5773L78.8466 72.8369L97.269 62.0971C98.0684 61.6315 98.7323 60.9615 99.1938 60.1546C99.6554 59.3477 99.8983 58.4323 99.8983 57.5005C99.8983 56.5687 99.6554 55.6533 99.1938 54.8464C98.7323 54.0395 98.0684 53.3695 97.269 52.9039Z"
                        fill="#F02D5E"
                      />
                      <path
                        d="M156.133 83.9697V21.7064H182.638C196.259 21.7064 204.818 28.4907 204.818 40.2929C204.818 50.6079 198.56 56.8339 187.7 57.3915V58.1351C192.21 59.6224 194.879 62.4101 197.18 66.6844L206.383 83.9697H194.879L186.133 67.8925C183.28 62.5031 180.703 59.9938 173.34 59.9938H166.073V83.9704L156.133 83.9697ZM166.073 51.7222H183.835C191.844 51.7222 194.879 48.7484 194.879 41.2212C194.879 33.8801 191.841 30.7202 183.835 30.7202H166.073L166.073 51.7222Z"
                        fill="#081120"
                        className="theme-toggle"
                      />
                      <path
                        d="M208.867 60.8287C208.867 46.5186 217.335 36.8521 230.955 36.8521C243.288 36.8521 251.936 44.287 251.936 56.9259C251.936 59.0445 251.751 61.1591 251.384 63.245H218.16C218.528 71.702 221.562 75.977 231.136 75.977C238.775 75.977 241.72 73.3746 241.72 69.1926V68.4497H251.568V69.2857C251.568 78.764 243.377 84.8984 231.044 84.8984C215.954 84.8991 208.867 75.2312 208.867 60.8287ZM218.255 56.5552H242.459C242.828 48.6551 238.594 45.3104 230.771 45.3104C222.12 45.314 218.809 49.3994 218.255 56.5552Z"
                        fill="#081120"
                        className="theme-toggle"
                      />
                      <path
                        d="M259.484 100.047V37.7828H268.503V45.4031H268.963C271.08 40.013 276.326 36.8531 284.241 36.8531C297.125 36.8531 304.212 46.2405 304.212 60.922C304.212 75.5127 297.31 84.8986 284.885 84.8986C276.694 84.8986 271.63 81.0874 269.607 76.811H269.332V100.044L259.484 100.047ZM281.848 76.3494C290.591 76.3494 294.272 72.2597 294.272 60.922C294.272 49.4927 290.683 45.4031 281.848 45.4031C273.749 45.4031 269.332 49.0268 269.332 56.7415V65.0116C269.332 72.7264 273.749 76.3494 281.848 76.3494Z"
                        fill="#081120"
                        className="theme-toggle"
                      />
                      <path
                        d="M312.125 83.9697V21.7064H322.064V83.9697H312.125Z"
                        fill="#081120"
                        className="theme-toggle"
                      />
                      <path
                        d="M329.335 72.5386C329.335 64.9184 334.857 60.9218 344.612 59.529L360.626 57.1127V54.6027C360.626 47.7267 357.497 45.6819 350.318 45.6819C343.048 45.6819 340.194 48.0052 340.194 54.1389V55.5324H330.625V54.602C330.625 44.287 338.635 36.8521 350.873 36.8521C363.665 36.8521 370.108 44.6592 370.108 55.9031V83.9687H360.904V76.7206H360.444C357.775 81.0865 352.529 84.8991 343.878 84.8991C335.685 84.8991 329.335 80.6241 329.335 72.5386ZM347.097 76.9045C353.54 76.9045 360.626 74.3036 360.626 65.01V64.174L346.085 66.4035C340.839 67.1478 338.996 68.356 338.996 71.7943C338.999 75.4194 341.299 76.9059 347.097 76.9059V76.9045Z"
                        fill="#081120"
                        className="theme-toggle"
                      />
                      <path
                        d="M377.926 98.9313V90.7542H384.184C388.141 90.7542 389.522 90.1029 390.995 86.6646L392.743 82.761L373.322 37.783H384.274L393.477 60.1793L397.619 70.2166H398.355L402.128 60.1793L410.503 37.783H421.458L399.83 89.453C396.428 97.6301 392.008 99.768 384.829 99.768C382.503 99.7766 380.184 99.4955 377.926 98.9313Z"
                        fill="#081120"
                        className="theme-toggle"
                      />
                    </>
                  ) : (
                    <>
                      <path
                        d="M44.7284 22.9978L26.306 12.2574L7.88355 1.51768C7.08456 1.05205 6.17822 0.806966 5.25571 0.807037C4.3332 0.807109 3.42695 1.05233 2.62804 1.51808C1.82912 1.98383 1.16567 2.65371 0.704356 3.46038C0.243043 4.26706 0.000164566 5.1821 3.05344e-05 6.11361V49.0753C-4.33806e-05 50.0069 0.242759 50.9221 0.704022 51.7289C1.16528 52.5357 1.82872 53.2056 2.6277 53.6714C3.42669 54.1372 4.33303 54.3824 5.25563 54.3824C6.17822 54.3823 7.08459 54.1371 7.88355 53.6712L26.306 42.9315L44.7284 32.1911C45.5278 31.7254 46.1915 31.0555 46.6531 30.2486C47.1146 29.4417 47.3577 28.5263 47.3577 27.5944C47.3577 26.6626 47.1146 25.7472 46.6531 24.9403C46.1915 24.1334 45.5278 23.4635 44.7284 22.9978V22.9978Z"
                        fill="#F02D5E"
                      />
                      <path
                        d="M44.7283 82.8089L26.3059 72.0691L7.88277 61.3294C7.08392 60.8635 6.17769 60.6182 5.25518 60.6181C4.33266 60.618 3.42635 60.8632 2.62742 61.3289C1.82849 61.7946 1.16514 62.4645 0.703908 63.2713C0.242681 64.078 -9.24797e-05 64.9931 2.64265e-08 65.9246V108.886C-4.55694e-06 109.818 0.242764 110.733 0.703992 111.54C1.16522 112.346 1.82862 113.016 2.62751 113.482C3.42639 113.948 4.3326 114.193 5.2551 114.193C6.17759 114.193 7.08383 113.948 7.88277 113.482L26.3059 102.743L44.7283 92.0028C45.5276 91.537 46.1915 90.867 46.653 90.06C47.1145 89.2531 47.3576 88.3377 47.3576 87.4058C47.3576 86.4739 47.1145 85.5585 46.653 84.7515C46.1915 83.9446 45.5276 83.2746 44.7283 82.8089Z"
                        fill="#F02D5E"
                      />
                      <path
                        d="M97.269 52.9039L78.8466 42.1635L60.4242 31.4237C59.6252 30.9579 58.7189 30.7126 57.7963 30.7126C56.8738 30.7126 55.9674 30.9578 55.1684 31.4236C54.3694 31.8894 53.7059 32.5593 53.2447 33.3661C52.7834 34.1729 52.5406 35.0881 52.5407 36.0197V78.9813C52.5408 79.9128 52.7838 80.8279 53.2451 81.6346C53.7064 82.4412 54.3698 83.1111 55.1688 83.5769C55.9677 84.0426 56.8739 84.2879 57.7964 84.2879C58.7189 84.288 59.6252 84.0429 60.4242 83.5773L78.8466 72.8369L97.269 62.0971C98.0684 61.6315 98.7323 60.9615 99.1938 60.1546C99.6554 59.3477 99.8983 58.4323 99.8983 57.5005C99.8983 56.5687 99.6554 55.6533 99.1938 54.8464C98.7323 54.0395 98.0684 53.3695 97.269 52.9039V52.9039Z"
                        fill="#F02D5E"
                      />
                    </>
                  )}
                </svg>
              </div>
            </div>
            <div className={s['options-container']}>
              <h1 className={s['title']}>Download options</h1>

              <label>
                <input
                  type="radio"
                  name="theme"
                  checked={theme === 'light'}
                  onChange={() => setTheme('light')}
                />
                Light theme
              </label>

              <label>
                <input
                  type="radio"
                  name="theme"
                  checked={theme === 'dark'}
                  onChange={() => setTheme('dark')}
                />
                Dark theme
              </label>

              <label>
                <input
                  type="radio"
                  name="svgOption"
                  checked={svgOption === 'wordmark'}
                  onChange={() => setSvgOption('wordmark')}
                />
                Wordmark
              </label>
              <label>
                <input
                  type="radio"
                  name="svgOption"
                  checked={svgOption === 'glyph'}
                  onChange={() => setSvgOption('glyph')}
                />
                Glyph
              </label>

              <button onClick={downloadSVG}>Download as SVG</button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default BrandingDownloadWidget
