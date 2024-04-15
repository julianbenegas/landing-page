import { BaseHubButton } from '~/components/Button'
import { Container } from '~/components/Container'
import { LandingPageFragment } from '~/lib/basehub-queries'
import { RichText } from 'basehub/react-rich-text'
import { Carousel } from '~/components/Carousel'
import { featureFlags } from '~/lib/feature-flags'
import CalButton from './cal'
import { HomeHeroMarquee } from './marquee'
import Hyperspace from './hyperspace'

export function Hero({ hero }: LandingPageFragment) {
  return (
    <section className="relative flex">
      <div className="animate-fadeIn absolute -left-[35%] top-0 h-full w-[135%] opacity-0">
        <Hyperspace className="opacity-10" />
      </div>
      <div className="relative flex flex-1 flex-col">
        <Container className="relative z-10 flex w-full max-w-7xl flex-col pt-[180px] lg:pt-[220px] 2xl:pt-[260px]">
          <div className="flex">
            <div className="flex-1">
              <div className="max-w-3xl">
                <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-8xl">
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
                <BaseHubButton {...hero.getStartedLink} />
                <CalButton link={hero.contactUsLink} />
              </div>
            </div>
            <div className="hidden h-fit p-0 lg:flex">
              {featureFlags.showTestSuiteTestimonials && (
                <Carousel testimonials={hero.testimonials.items} />
              )}
            </div>
          </div>

          <div className="pb-10 pt-[120px]">
            <div className="flex min-h-[40px] items-center text-[#8B8B8B]">
              <p className="whitespace-nowrap">Trusted by 5,000+ companies</p>
              <HomeHeroMarquee />
            </div>
          </div>
        </Container>
        {/* <div className="z-10 mx-auto mb-12 mt-auto w-full max-w-7xl rounded-lg py-0">
          <p className="hidden font-display text-base text-slate-900">{hero.logosTitle}</p>

          <div className="flex min-h-[40px] items-center text-[#8B8B8B]">
            <p className="whitespace-nowrap">Trusted by 5,000+ companies</p>
            <HomeHeroMarquee />
          </div>
        </div> */}
      </div>
    </section>
  )
}
