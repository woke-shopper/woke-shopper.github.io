_Helping consumers make ethical purchases._

### Table of contents
- [About WokeShopper: our mission](#about)
- [Product description](#product-description)
- [Values](#values)
- [Data and challenges](#data-and-challenges)
- [Plan](#plan)
- [About the founder](#founder)

## About

#### Vision

WokeShopper helps consumers support responsible companies and boycott unethical ones. Many people unknowingly buy products from companies that engage in poor conduct and go against a set of universal [values](#Values). We believe that more people would choose to support ethical brands if this information was widely accessible. By bringing awareness to companies that engage in harmful behavior and providing alternative brands that offer the same products ethically, consumers can hold corporations accountable for their decisions.

#### We can make empowered choices

For a long time, companies have been able to get away with their poor conduct staying hidden behind closed doors and well-crafted marketing techniques. The internet is quickly changing that. Information spreads faster than ever, and with that information come options. Knowledge _is_ power, and we have the power to choose differently and demand a better world. When buying products, we can choose not to give our money to brands that compromise basic human rights, devastate our environment, and bypass laws to make a profit.

[Voting with your wallet](https://en.wikipedia.org/wiki/Dollar_voting) is a powerful way to demand change. Collective action can make an impact. Not only is this movement intended support "woke" businesses, but trigger the shady ones into acting more responsibly.

#### Examples of successful boycotts

- [When do consumer boycotts work](http://www.nytimes.com/roomfordebate/2017/02/07/when-do-consumer-boycotts-work)
- [Uber CEO bows out of Trump's advisory board due to public demand](https://twitter.com/lsarsour/status/827319789534208000)
- [Nordstrom drops Ivanka Trump brand](https://www.nytimes.com/2017/02/02/business/nordstrom-ivanka-trump.html?ref=politics)
- [How to eat food from countries banned by Trump](http://www.laweekly.com/restaurants/heres-where-to-eat-food-from-the-7-countries-banned-by-trump-7882760)

## Product description

#### Our tool (what we want to be when we grow up)

An increasing percentage of purchases occur online. Once launched, installing our Chrome plug-in will provide you with a helpful tip before transactions. When you go to any online store and put an item in your cart, we will read in data about that company and product. If it's a "woke" brand, we won't interrupt you. If it's a "broke" brand, we'll send you a non-intrusive little tip that offers some info on why this company is harmful, and provide a link to alternative brands carrying similar products if we have that.

Feature: Plugin indicating boycott status of an imminent purchase
- Display boycott status on `Add to cart` button
- Allow user to learn more about boycott source

#### Our tool (now)

What we've outlined above is audacious goal with a non-trivial data dependency. It'll take some time to get there, but we didn't want to wait until it was perfect to launch something. This is why we've started out with a static site to begin curating content about both "woke" and "broke" companies. Woke companies are conscious and ethical. Broke companies are not. We've also open-sourced it because just as we believe in the collective action of consumers demanding change, we also believe that smart people will come help build something great.

## Values

Our values define the rubric we use to determine whether a company is "woke" or "broke". We group companies into three categories:
- [Human rights and social justice](#human-rights-and-social-justice)
- [Animal cruelty-free](#animal-cruelty-free)
- [Environmental protection](#environmental-protection)

#### Human rights and social justice

Child labor, sweatshops, slavery, worker health and safety records, human trafficking, developing world exploitation, international health issues, economic divestment, union busting, fair trade, worker fatalities, livable wages, democratic principles, discrimination and/or harassment (based on race, gender, age, sexuality, ability, religion, ethnicity), class-action lawsuits, unethical business practices, government fines, cover-ups, illegal activities, executive pay.

#### Animal cruelty-free

Humane treatment, factory farming, animal habitat preservation, sustainable seafood harvesting, animal testing, animal-free alternatives, vegan-friendly.

#### Environmental protection

Climate change, renewable energy, toxic waste dumping, recycling, eco-innovations, sustainable farming, ocean conservation, rainforest destruction, ecosystem impacts, overall pollution.

## Data and challenges

- [Better World Shopper](http://betterworldshopper.org/) is a site designed to nudge people to purchase goods from responsible companies, and avoid the irresponsible ones. It ranks companies across five categories: Human Rights, The Environment, Animal Protection, Community Involvement and Social Justice.
 - While this site has incredible content curation, there were a few gaps I noticed:
    1) **Not timely:** This information should be in front of people at the appropriate time, when they're clicking "Add to cart".
    2) **Dated sources:** This is not an open project, and an actively maintained open-source project may provide fresher data.
    3) **Usability:** Navigating this site is not as easy and integrated with purchase flow; information is buried. Related to point #1.
- Actionable data about companies is difficult to come by. The most promising source appeared to be [CSRHub](https://csrhub.com), which normalizes reporting of Corporate Social Responsibility. After some investigation it became clear that this data wouldn't give consumers real actionable insight.
   - Example 1: [United Airlines receives a rating of 64/100](https://www.csrhub.com/CSR_and_sustainability_information/UAL-Corporation/). Even if we scrape and display that to customers it would show a 3 star rating, not necessarily indicative of how bad United Airlines appear to be (following the violence towards a passenger recently).
   - Example 2: [PETA](https://www.peta.org/) provides too broad of a listing of companies. While admirable, boycotting any company that does animal testing seems overly ambitious and impractical. We'd prefer a more focused boycott list.
- The academic literature on CSR primarily uses this KLD database. That measure is apparently not credible, according to [this 10-year-old paper](http://faculty.haas.berkeley.edu/levine/papers/ChatterjiLevineToffel_060707%20WP.pdf).
- The lack of consistency has to do with subjective ideologies and insufficient evidence. Even in the space of non-profits, where the measures directly impact revenue and incentives are better aligned, it’s a mess. Charity Navigator (and donors) overweight indicators like overhead and underweight actual evidence of impact. Some new entrants into the space (e.g. GiveWell) do a thorough and consistent job, but by adopting a super narrow and exhaustive approach that only appeals to a niche market of donors (and one that overly penalizes that which is more difficult to quantify).

#### Data sources

- [Ethical consumer score](http://www.ethicalconsumer.org/shoppingethically/ourethicalratings.aspx)
- [Ethisphere](http://worldsmostethicalcompanies.ethisphere.com/scoring-methodology/)
- [Corporate critic](http://www.corporatecritic.org/)
- [Good shopping guide](http://www.thegoodshoppingguide.com/ethical-business-rating-tables-and-ethicality-audits/)
- [Better World Shopper](http://betterworldshopper.org/)
- [BDS Movement](https://bdsmovement.net)
- [Buycott](https://buycott.com)

- This is an interesting article about tracking of Amazon prices, we'd essentially want to track on a different dimension: [_The High-Speed Trading Behind Your Amazon Purchase_](https://www.wsj.com/articles/the-high-speed-trading-behind-your-amazon-purchase-1490532110)
- A browser plugin that tracks prices, [_Keepa_](https://keepa.com/#!)

## Plan

- Given the above challenges, we'd like to start by focusing on building a plugin that makes it easier to participate in boycotts. We would power `wokeshopper` from two repositories, one for the `API`, which would import data from open source data repository, and one for the `chrome plugin`. The an open-source `wokeshopper/data` repository could allow others to contribute and provide a mechanism to receive updates from the community.

#### Next Steps (MVP)

- Design the initial site experience of "broke" vs. "woke" companies
- Provide categories/tags
- Make items searchable
- Seed the open source data repository with an adequate list of companies to boycott
- Import the open source data into WokeShopper API service

#### Chrome extension open Qs

- What permissions do we want to ask for?
- Can we trigger popover when there is useful information to display?
- Alert on extension icon is probably too subtle (but don't want to disrupt browsing experience)
- Where can we link people to? Amazon search with good companies name and product name?

## Founding story

This project was started and built by me, Ayman Nadeem (@aymannadeem). I had this idea for years, and started investigating the potential for it to become a Chrome extension in 2017. After making minimal-to-zero progress on it for a long time, I was reinvigorated to take action after learning about [Wayfair](https://www.thenation.com/article/wayfair-workers-walk-out/)'s profiting from selling beds to concentration camps at the center of the border migrant crisis.
