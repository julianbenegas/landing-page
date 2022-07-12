import { FC } from 'react'

import { Carousel } from '~/components/common/carousel'
import { Heading } from '~/components/common/heading'
import { Section } from '~/components/common/section'
import { Container } from '~/components/layout/container'
import { useMedia } from '~/hooks/use-media'

import s from '../team/team.module.scss'
import { UserCard } from '../team/user-card'
import { investors } from './investors'

export const Investors: FC = () => {
  const isMobile = useMedia('(max-width: 750px)')
  return (
    <Section className={s.section}>
      <Container className={s.container}>
        <div className={s.heading}>
          <Heading as="h2" size="lg">
            Our investors
          </Heading>
          <p>
            We are grateful for the support and guidance we are receiving from
            our institutional investors and angels. Their experience of leading
            and advising companies such as GitHub, Figma, DataDog, Replit, and
            Sourcegraph is helping us become even better.
          </p>
        </div>
      </Container>
      <Container size="lg" className={s['slider-container']}>
        <div className={s.team}>
          <Carousel
            className={s.slider}
            config={{
              align: isMobile ? 'center' : 'start',
              containScroll: !isMobile ? 'trimSnaps' : ''
            }}
            slideClassName={s['slide']}
          >
            {investors.map((member, i) => (
              <UserCard key={i} member={member} />
            ))}
          </Carousel>
        </div>
      </Container>
    </Section>
  )
}
