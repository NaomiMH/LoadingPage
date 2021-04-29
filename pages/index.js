import Layout from '../components/Layout'
import FrontPage from '../components/FrontPage'
import LearnPage from '../components/LearnPage'
import AboutPage from '../components/AboutPage'
import StoryPage from '../components/StoryPage'
import SubscribePage from '../components/SubscribePage'
import styles from "../styles/index.module.css"

export default function Index() {
  return (
    <Layout>
      <FrontPage />
      <LearnPage />
      <AboutPage />
      <StoryPage />
      <SubscribePage />
    </Layout>
  )
}
