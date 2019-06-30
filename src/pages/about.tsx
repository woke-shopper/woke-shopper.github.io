import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

interface Props {
  readonly data: PageQueryData
}

export default class Tags extends React.Component<Props> {
  render() {
    const {data} = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout title={siteTitle}>
        <Head title="About WokeShopper" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <h2>Vision</h2>
        <p>WokeShopper helps consumers support responsible companies and boycott unethical ones. Many people unknowingly buy products from companies that engage in poor conduct and go against a set of universal values. We believe that more people would choose to support ethical brands if this information was widely accessible. By bringing awareness to companies that engage in harmful behavior and providing alternative brands that offer the same products ethically, consumers can hold corporations accountable for their decisions.</p>
        <h2>We can make empowered choices</h2>
        <p>For a long time, companies have been able to get away with their poor conduct staying hidden behind closed doors and well-crafted marketing techniques. The internet is quickly changing that. Information spreads faster than ever, and with that information come options. Knowledge is power, and we have the power to choose differently and demand a better world. When buying products, we can choose not to give our money to brands that compromise basic human rights, devastate our environment, and bypass laws to make a profit. Voting with your wallet is a powerful way to demand change. Collective action can make an impact. Not only is this movement intended support "woke" businesses, but trigger the shady ones into acting more responsibly.</p>
        <article>"ethical consumerism"...</article>
      </Layout>
    )
  }
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
