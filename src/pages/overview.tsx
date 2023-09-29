/* eslint-disable */

import { Meta } from '~/components/common/meta'
import { PageLayout } from '~/components/layout/page'
import { Section } from '~/components/layout/section'
import { TitleAndSubtitle } from '~/components/primitives/texts'
import s from '~/components/sections/homepage/developer-tools/developer-tools.module.scss'
import Link from 'next/link'

const Overview = () => {
  return (
    <PageLayout>
    <Meta title="Overview | Replay" />
    <Section
      id="homepage-overview"
      className={s.section}
      data-sitemap
      data-sitemap-icon="workflow"
      data-sitemap-short-title="Record"
      data-sitemap-complete-title="Freeze bugs in time."
    >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div id="travel-back" />
      <TitleAndSubtitle
        className={s.titleAndSubtitle}
        title={{ children: 'Travel Back in Time', as: 'h2' }}
        subtitle={{
          children: (
            <span>
              Replay is a time travel debugger.  Unlike a conventional debugger, which can only show a program’s state at the current point in time, a time travel debugger can show that program’s state at all points in time.  Recording the right information to be able to do this is tricky.  Surface level details like changes to the DOM, network requests, and console logs won’t let you see important information like JavaScript state, but trying to record changes to that JavaScript state causes a flood of millions or even billions of operations that will slow things down hugely if recorded directly.
              <br />
              <br />
Instead, the Replay browser records the inputs it gets from the system – network data, user events like mouse clicks, and so on – and non-determinism resulting from interactions between threads.  There isn’t very much of this and it can be recorded with little overhead.  When replaying, the same browser runs and uses that recorded data to ensure it behaves in the exact same way as it did when recording. The state at any point in time can be reconstructed simply by replaying the browser to that point.
              <br />
              <br />
The main benefit of using Replay is that recording a bug or any other problem on a website is enough for a developer looking at the recording to fully understand the bug and what is needed to fix it.  The developer has a perfect reproduction of the bug, as if it happened on their own machine.  This enables many improvements both to developer productivity and to the overall efficiency and effectiveness of a software development organization, which we describe in more detail below.
              <br></br>
              <br></br>
              <Link href="https://medium.com/replay-io/how-replay-works-5c9c29580c58" aria-label="How Replay Works">
                How Replay Works
              </Link>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </span>
          )
        }}
      />
      <div id="stop-reproducing" />
      <TitleAndSubtitle
        className={s.titleAndSubtitle}
        title={{ children: 'Stop Reproducing Bugs', as: 'h2' }}
        subtitle={{
          children: (
            <span>
              Filing bug reports with enough information for developers to fix the problem is often pretty difficult.  Screenshots, videos, console logs, and so forth can indicate where the problem occurred but not the underlying reason needed for fixing it.  Figuring out that reason requires the developer to reproduce the bug themselves, but writing down repro steps is challenging or even impossible and can require extensive back-and-forths.
              <br></br>
              <br></br>
Bug reports filed using Replay have a perfect reproduction of the bug.  Whoever is filing the report just has to create a recording of the problem and add a link to the recording to the report with a comment or two pointing out where things went wrong.  This gives developers what they need to fix the problem, and is better than any bug report filed without using Replay.
              <br></br>
              <br></br>
              <Link href="https://docs.replay.io/getting-started" aria-label="Getting Started with Bug Reports">
                Getting Started with Bug Reports
              </Link>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </span>
          )
        }}
      />
    </Section>
    </PageLayout>
  )
}

export default Overview
