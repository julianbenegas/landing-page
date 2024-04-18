import { ClipboardButton } from '~/components/Button'
import { Container } from '~/components/Container'
import { LandingPageFragment } from '~/lib/basehub-queries'
// import { RichText } from 'basehub/react-rich-text'
import { Carousel } from '~/components/Carousel'
import { featureFlags } from '~/lib/feature-flags'
import CalButton from './cal'
import { HomeHeroMarquee } from './marquee'
import Hyperspace from './hyperspace'

export function Hero({ hero }: LandingPageFragment) {
  return (
    <section className="relative flex overflow-hidden">
      <div className="absolute -top-[30%] left-0 h-[130%] w-full animate-fadeIn lg:-left-[35%] lg:top-0 lg:h-full lg:w-[135%]">
        <Hyperspace className="opacity-10" />
      </div>
      <div className="relative z-10 flex max-w-full flex-1 flex-col">
        <Container className="relative z-10 flex w-full max-w-7xl flex-col pt-[120px] lg:pt-[180px] 2xl:pt-[260px]">
          <div className="flex">
            <div className="flex-1">
              <div className="max-w-3xl">
                <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl xl:text-8xl">
                  Move fast <span className="text-accent">without</span>
                  <br />
                  breaking things.
                </h1>
                <div className="mt-6 max-w-3xl rounded-lg bg-white/20 text-lg tracking-tight text-slate-700">
                  <p className="max-w-[620px]">
                    Meet Replay, the first browser with instant replay. It lets you capture your
                    tests in CI, debug failures with browser DevTools, and find the moment something
                    went wrong.
                  </p>
                  {/* <RichText>{hero.subtitle.json.content}</RichText> */}
                </div>
              </div>

              <div className="mx-auto mt-8 flex max-w-[320px] flex-col justify-start gap-x-6 gap-y-4 lg:max-w-full lg:flex-row">
                <div className="flex flex-col items-center">
                  <ClipboardButton
                    label={hero.installationLink.label || ''}
                    _id={hero.installationLink._id}
                    variant={hero.installationLink.variant || ''}
                  />
                  <a
                    href="https://docs.replay.io/quickstart/"
                    className="pt-2 text-center text-xs hover:underline"
                  >
                    Or check out our Quickstart Guide
                  </a>
                </div>
                <CalButton link={hero.contactUsLink} />
              </div>
            </div>
            <div className="hidden h-fit p-0 lg:flex">
              {featureFlags.showTestSuiteTestimonials && (
                <Carousel testimonials={hero.testimonials.items} />
              )}
            </div>
          </div>

          <div className="pb-10 pt-[90px] xl:pt-[120px] 2xl:pt-[200px]">
            <div className="flex min-h-[40px] items-center text-[#8B8B8B]">
              <p className="hidden whitespace-nowrap xl:inline-block">{hero.logosTitle}</p>
              <div className="max-w-full flex-1">
                <HomeHeroMarquee />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
