import HeroSection from '../components/heroSection';
import Layout from '../components/layout';
import TitleSection from '../components/titleSection';

export default function HomePage() {
  return (
    <Layout
      title="Stanford Moonshot Club"
      description="Unleash your creativity"
    >
      <TitleSection />
      <HeroSection
        titleStart="Unleash Your"
        titleEnd="Creativity"
        type="left"
        imageSrc="/images/clubMeeting.jpg"
      >
        Stanford Moonshot is the place for all forms of creativity to thrive:
        Want to ride a motorized couch around campus? Want to make customized
        cloaks for you and all your friends? How about using AI to make a chat
        bot to respond to all your messages for you? Have any other crazy
        project that you want to start but aren&apos;t sure how, or don&apos;t
        have the resources? Then this is the place for you!
      </HeroSection>
      <HeroSection
        titleStart="Build"
        titleEnd="Sessions"
        type="right"
        imageSrc="/images/workingOnCouch.jpg"
      >
        We host weekly Build Sessions where students can brainstorm and
        collaborate on projects, find peers with similar interests, and just
        enjoy the energy of a bustling makerspace. These events are a great
        place to learn the ropes, meet new people, and channel your creativity!
      </HeroSection>
      <HeroSection
        titleStart="Interactive"
        titleEnd="Workshops"
        type="left"
        imageSrc="/images/studySession.jpg"
      >
        We aim to combine innovative thinking and passion with technical
        know-how, so we welcome students of all backgrounds and interests. To
        arm our members with the knowledge they need to start their dream
        projects, we host workshops guided by peer experts on a variety of
        digital, technical, and craft skills. These workshops are a great way to
        try something new!
      </HeroSection>
      <HeroSection
        titleStart="Speaker"
        titleEnd="Events"
        type="right"
        imageSrc="/images/mtlCutout.jpg"
      >
        We also host speaker events to give members a chance to hear from with
        successful speakers who embody our club’s mission of inclusive,
        collaborative tinkering for ambitious projects. These are a great
        opportunity to get the wisdom of successful figures in a variety of
        fields.
      </HeroSection>
    </Layout>
  );
}
