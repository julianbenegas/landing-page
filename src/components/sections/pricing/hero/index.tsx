import { FC, useState } from 'react'

import { Carousel } from '~/components/common/carousel'
import { Heading } from '~/components/common/heading'
import { Section } from '~/components/common/section'
import { Container } from '~/components/layout/container'

// import { useMedia } from '~/hooks/use-media'
import { Card } from './card'
import s from './hero.module.scss'

const plansData = [
  {
    type: 'Individual',
    price: 'Free',
    mode: 'forever',
    cta: 'Sign Up',
    features: ['100 recordings per month', 'Privacy controls', 'Google SSO']
  },
  {
    type: 'Team',
    price: 20,
    mode: 'per month / per developer',
    cta: 'Create Team',
    features: [
      '100 recordings per month',
      'Up to 10 users + developers',
      'Source map uploads',
      'Record automated tests'
    ]
  },
  {
    type: 'Organization',
    price: 75,
    mode: 'per month / per developer',
    cta: 'Create Organization',
    features: [
      '100 recordings per month',
      'Up to 10 users + developers',
      'Account-level access controls',
      'Additional organizational settings',
      'Additional SSO integrations'
    ]
  },
  {
    type: 'Enterprise',
    cta: 'Email Us',
    features: [
      'Unlimited recordings',
      'Ability to host your own storage',
      'Custom contract',
      'Dedicated support',
      'SLAs'
    ]
  }
]

export const Hero: FC = () => {
  // const isMobile = useMedia('(max-width: 640px)')

  const [annual, setAnnual] = useState(false)

  return (
    <Section className={s.section}>
      <Container className={s.container}>
        <div className={s['hero']}>
          <div className={s['heading']}>
            <Heading size="sm">Pricing</Heading>
            <span>
              Individuals and open source communities
              <br /> will always be able to use Replay for free.
            </span>
            <div className={s.annual}>
              <input
                type="checkbox"
                onChange={() => setAnnual(!annual)}
                name="annual"
                id="annual"
              />
              <span>Annual</span>
              <span>Save 25%</span>
            </div>
          </div>
          <div className={s.plans}>
            {plansData.map((item, i) => (
              <Card
                variant={item.type === 'Organization' ? 'primary' : 'default'}
                annual={annual}
                key={i}
                data={item}
              />
            ))}
          </div>
          <div className={s.plans__mobile}>
            <Carousel
              className={s.slider}
              // config={{
              //   align: isMobile ? 'start' : 'center'
              // }}
              slideClassName={s['slide']}
            >
              {plansData.map((item, i) => (
                <Card
                  variant={item.type === 'Organization' ? 'primary' : 'default'}
                  annual={annual}
                  key={i}
                  data={item}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </Container>
    </Section>
  )
}
