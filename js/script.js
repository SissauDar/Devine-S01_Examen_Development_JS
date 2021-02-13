{
  const episodes = [
    {
      season: 1,
      nr: 1,
      meta: { released: `April 26, 2017`, director: `Reed Morano` },
      title: `Offred`,
      rating: 9,
      image: `https://m.media-amazon.com/images/M/MV5BN2ZjZjU5MjctNWU1NC00YjE0LTk2NzMtYzM1YmUyYWEzZWJhXkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_UY126_UX224_AL_.jpg`,
      description: `Offred, one of the few fertile women known as Handmaids in the oppressive Republic of Gilead, struggles to survive as a reproductive surrogate for a powerful Commander and his resentful wife.`,
    },
    {
      season: 1,
      nr: 2,
      meta: { released: `April 26, 2017`, director: `Reed Morano` },
      title: `Birth Day`,
      rating: 8.2,
      image: `https://m.media-amazon.com/images/M/MV5BYzM2MzY2MzQtNDdhMi00ZGQ1LWE1MzgtZDY0YzNlZjFkZTg3XkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `June and her fellow Handmaids assist with the delivery of Janine's baby, prompting her to recall her own daughter's birth, and draws closer to Ofglen while dreading a secret meeting with the Commander.`,
    },
    {
      season: 1,
      nr: 3,
      meta: { released: `April 26, 2017`, director: `Reed Morano` },
      title: `Late`,
      rating: 8.7,
      image: `https://m.media-amazon.com/images/M/MV5BMWVjYmMyNzUtMjgyYi00Yzg1LTkxNDgtNmJiYjEwYzQ1ZmY1XkEyXkFqcGdeQXVyODgzNzA5MA@@._V1_UY126_CR15,0,224,126_AL_.jpg`,
      description: `June visits Janine and her baby with Serena and remembers the early days of the revolution, before Gilead. Ofglen faces a difficult challenge.`,
    },
    {
      season: 1,
      nr: 4,
      meta: { released: `May 3, 2017`, director: `Mike Barker` },
      title: `Nolite Te Bastardes Carborundorum`,
      rating: 8.2,
      image: `https://m.media-amazon.com/images/M/MV5BY2ZlZmY5MjItNDlkNi00ZDNlLTg3ODUtMmRkMDU3ODdjMjNhXkEyXkFqcGdeQXVyMjkyMzg4OTM@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `Punished by Serena, June begins to unravel and reflects on her time with Moira at the Red Center.`,
    },
    {
      season: 1,
      nr: 5,
      meta: { released: `May 10, 2017`, director: `Mike Barker` },
      title: `Faithful`,
      rating: 8.2,
      image: `https://m.media-amazon.com/images/M/MV5BMzQ5OTk2ZTEtZTlkMy00YmQ5LWIyMDYtYWU4ZTU1NDU2NjkzXkEyXkFqcGdeQXVyODgzNzA5MA@@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `Serena makes June a surprising proposition, as June remembers the unconventional beginning of her relationship with Luke; Emily tries reintegrating into Gilead.`,
    },
    {
      season: 1,
      nr: 6,
      meta: { released: `May 17, 2017`, director: `Floria Sigismondi` },
      title: `A Woman's Place`,
      rating: 8.8,
      image: `https://m.media-amazon.com/images/M/MV5BYjBjNGRhMWEtOTFkNC00M2Q2LTk3ZTMtOTMyOWNjYWNhZDY4XkEyXkFqcGdeQXVyMzMxNTMxMTA@._V1_UY126_CR14,0,224,126_AL_.jpg`,
      description: `When a trade delegation from Mexico comes to Gilead, Offred discovers several shocking secrets.`,
    },
    {
      season: 1,
      nr: 7,
      meta: { released: `May 24, 2017`, director: `Floria Sigismondi` },
      title: `The Other Side`,
      rating: 8.0,
      image: `https://m.media-amazon.com/images/M/MV5BOWZlNzUwZTctMGNhMS00ZmJlLWFjOTMtZmQ1NDA2YTYwZTM2XkEyXkFqcGdeQXVyODgzNzA5MA@@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `Flashbacks show what happened to Luke after being separated from June and Hannah.`,
    },
    {
      season: 1,
      nr: 8,
      meta: { released: `May 31, 2017`, director: `Kate Dennis` },
      title: `Jezebels`,
      rating: 8.1,
      image: `https://m.media-amazon.com/images/M/MV5BYTA3NWFjN2MtNGY2ZC00Mjk4LWFhODEtZWY2YTVjYzJiN2MxXkEyXkFqcGdeQXVyODgzNzA5MA@@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `While his wife is away, Commander Waterford takes Offred on an excursion outside the walls of Gilead to a den of iniquity where she finds a familiar face.`,
    },
    {
      season: 1,
      nr: 9,
      meta: { released: `June 7, 2017`, director: `Kate Dennis` },
      title: `The Bridge`,
      rating: 8.8,
      image: `https://m.media-amazon.com/images/M/MV5BODI2YzM0MzAtN2FlNy00NDFlLWJlNWUtYzNiYjZhN2NhYzdjXkEyXkFqcGdeQXVyNDc2OTg4NTU@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `June is tasked with going back to Jezebels to find a package. Meanwhile in Gilead, Janine has trouble relinquishing her newborn baby.`,
    },
    {
      season: 1,
      nr: 10,
      meta: { released: `June 14, 2017`, director: `Kari Skogland` },
      title: `Night`,
      rating: 9.1,
      image: `https://m.media-amazon.com/images/M/MV5BNjBlNjFhMjUtY2E4Mi00YWJmLTliYmYtZWM5OGRhZWE4ZGFjXkEyXkFqcGdeQXVyNjc5OTE1NjM@._V1_UY126_CR16,0,224,126_AL_.jpg`,
      description: `Serena confronts June and Fred. June struggles with a complicated, life-changing revelation. The Handmaids face a brutal decision.`,
    },
    {
      season: 2,
      nr: 1,
      meta: { released: `April 25, 2018`, director: `Mike Barker` },
      title: `June`,
      rating: 8.9,
      image: `https://m.media-amazon.com/images/M/MV5BYmQxYzUzOGQtNjQ4MC00YzFlLTg2MjktMWJiZDNjNzNjY2U3XkEyXkFqcGdeQXVyNjUzNjgyMDI@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `June reckons with the consequences of a dangerous decision while haunted by memories from her past and the violent beginnings of Gilead.`,
    },
    {
      season: 2,
      nr: 2,
      meta: { released: `April 26, 2018`, director: `Mike Barker` },
      title: `Unwomen`,
      rating: 8.3,
      image: `https://m.media-amazon.com/images/M/MV5BMjI0ODg4MDQ3OF5BMl5BanBnXkFtZTgwMzk3MzMzNTM@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `June adjusts to a new way of life. Emily reflects on her past as a new arrival disrupts life at the Colonies.`,
    },
    {
      season: 2,
      nr: 3,
      meta: { released: `May 2, 2018`, director: `Kari Skogland` },
      title: `Baggage`,
      rating: 8.0,
      image: `https://m.media-amazon.com/images/M/MV5BNWRmYzhhYWYtZTcwMi00ZTNjLWJiZGQtYWYzMTIxNGZlYzY4XkEyXkFqcGdeQXVyNTQwMTc0NDI@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `June reflects on her relationship with her mother as she navigates her way through Gilead. In Little America, Moira tries to cope with the trauma she endured.`,
    },
    {
      season: 2,
      nr: 4,
      meta: { released: `May 9, 2018`, director: `Kari Skogland` },
      title: `Other Women`,
      rating: 8.0,
      image: `https://m.media-amazon.com/images/M/MV5BYmIxNzczOGUtOTdlYS00Y2RmLWEyMTEtNDUxYmMzMTExMjJiXkEyXkFqcGdeQXVyODgzNzA5MA@@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `A baby shower provokes a troubling shift in Offred's relationship with Serena Joy. Offred reckons with the choice she made that led her to become a Handmaid.`,
    },
    {
      season: 2,
      nr: 5,
      meta: { released: `May 16, 2018`, director: `Mike Barker` },
      title: `Seeds`,
      rating: 8.1,
      image: `https://m.media-amazon.com/images/M/MV5BM2I2OGE2ODMtNWZjNS00NDhmLWE2YWEtMDMwY2Y2ZGVjZTc2XkEyXkFqcGdeQXVyODgzNzA5MA@@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `Offred spirals as a Gilead ceremony disrupts her relationship with Nick. Janine tries to adjust to life in the Colonies, jeopardizing her friendship with Emily.`,
    },
    {
      season: 2,
      nr: 6,
      meta: { released: `May 23, 2018`, director: `Mike Barker` },
      title: `First Blood`,
      rating: 8.9,
      image: `https://m.media-amazon.com/images/M/MV5BZmZkZDFlZTEtZDgwNC00MDJlLThhZTItODk3OWVlZjhjNjUxXkEyXkFqcGdeQXVyODQ2MzM2MzY@._V1_UY126_CR5,0,224,126_AL_.jpg`,
      description: `Offred finds unexpected allies and obstacles in her search for a way to protect Hannah. The Commander prepares for the dedication of a new Red Center. Nick struggles with his new assignment.`,
    },
    {
      season: 2,
      nr: 7,
      meta: { released: `May 30, 2018`, director: `Kari Skogland` },
      title: `After`,
      rating: 8.3,
      image: `https://m.media-amazon.com/images/M/MV5BN2FjYzc3MjQtNGM3Yi00Yjk4LTg3NGUtMzZkMzE5ZmE4Y2EzXkEyXkFqcGdeQXVyODc4MzUxMjA@._V1_UY126_UX224_AL_.jpg`,
      description: `An attack sends shockwaves through both Gilead and Little America; Serena makes a dangerous choice; Moira searches for someone from her past.`,
    },
    {
      season: 2,
      nr: 8,
      meta: { released: `June 6, 2018`, director: `Kari Skogland` },
      title: `Women's Work`,
      rating: 8.8,
      image: `https://m.media-amazon.com/images/M/MV5BMzM2MTMyNGQtNGFjZi00NmE1LWE1MzUtMzdhNGRlNjNiYWE1XkEyXkFqcGdeQXVyNTMwMjMzNzc@._V1_UY126_CR14,0,224,126_AL_.jpg`,
      description: `A sick baby tests Offred and Serena; Janine finally faces Naomi.`,
    },
    {
      season: 2,
      nr: 9,
      meta: { released: `June 13, 2018`, director: `Jeremy Podeswa` },
      title: `Smart Power`,
      rating: 9.0,
      image: `https://m.media-amazon.com/images/M/MV5BZTZiYzFlMGMtMTAyNy00OWNhLTgxM2ItNTY4OGE2ZmNlOTNkXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `On a diplomatic trip abroad, Serena faces the temptation of life outside Gilead; Luke and Moira grapple with survivor's guilt; Offred seeks support from allies.`,
    },
    {
      season: 2,
      nr: 10,
      meta: { released: `June 20, 2018`, director: `Jeremy Podeswa` },
      title: `The Last Ceremoney`,
      rating: 9.1,
      image: `https://m.media-amazon.com/images/M/MV5BZDliNzEzMmYtMTExZS00YzM5LWI5MzItNDE0YWFjZThlYWZkXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `A frustrated Serena becomes desperate; The Commander tries to make amends with Offred; Nick pushes Eden farther away; Offred is faced with an unexpected reunion.`,
    },
    {
      season: 2,
      nr: 11,
      meta: { released: `June 27, 2018`, director: `Daina Reid` },
      title: `Holly`,
      rating: 8.4,
      image: `https://m.media-amazon.com/images/M/MV5BYmI3NTk5YzUtYTg4Ni00NjViLThhZGQtYzdjZWM1ZmRjZTFlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `Offred faces a grueling challenge alone as she recalls her life as a mother; Serena and the Commander deal with the fallout of their actions towards Offred.`,
    },
    {
      season: 2,
      nr: 12,
      meta: { released: `July 4, 2018`, director: `Daina Reid` },
      title: `Postpartum`,
      rating: 8.4,
      image: `https://m.media-amazon.com/images/M/MV5BOGUyMjhhZTgtM2NmNS00MDUwLWI2NzEtYzgwYzg3MTVlYjdmXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `Offred is sent to a familiar place; Nick is rocked by Gilead's brutal response to a crime; Emily is assigned to a mysterious new house.`,
    },
    {
      season: 2,
      nr: 13,
      meta: { released: `July 11, 2018`, director: `Mike Barker` },
      title: `The Word`,
      rating: 8.6,
      image: `https://m.media-amazon.com/images/M/MV5BN2U0MGJlMWQtNmM4MC00OTA0LWE3ZDAtYTYwYTIzNzlmMjAyXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `Serena and the other Wives strive to make change; Emily learns more about her new Commander; Offred faces a difficult decision.`,
    },
    {
      season: 3,
      nr: 1,
      meta: { released: `June 5, 2019`, director: `Mike Barker` },
      title: `Night`,
      rating: 8.4,
      image: `https://m.media-amazon.com/images/M/MV5BOGEwNWMwYWItMjc1Mi00MjQxLWFhMTYtYjNiOGY2NDQ1NzAxXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `June embarks on a bold mission with unexpected consequences; Emily and Nichole make a harrowing journey; The Waterfords reckon with Serena Joy's choice to send Nichole away.`,
    },
    {
      season: 3,
      nr: 2,
      meta: { released: `June 5, 2019`, director: `Mike Barker` },
      title: `Marry and Martha`,
      rating: 7.8,
      image: `https://m.media-amazon.com/images/M/MV5BOGRkNTdiYWQtMDU5MS00ZjBkLTg4MjQtYzkwM2Q5ZGU3ODA5XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `June helps the Marthas with a dangerous task while navigating a relationship with her pious new walking partner; Emily and Luke struggle with their altered circumstances.`,
    },
    {
      season: 3,
      nr: 3,
      meta: { released: `June 5, 2019`, director: `Amma Asante` },
      title: `Useful`,
      rating: 8.1,
      image: `https://m.media-amazon.com/images/M/MV5BZGFmODY1NjItYzNlZS00ODUwLTljNzAtZjBiMGRiZmE4ZjFiXkEyXkFqcGdeQXVyMjA0MzY1NTE@._V1_UY126_CR14,0,224,126_AL_.jpg`,
      description: `Serena Joy attempts to recuperate at her mother's home; Lawrence teaches June a hard lesson about the difficult decisions he makes as a Commander.`,
    },
    {
      season: 3,
      nr: 4,
      meta: { released: `June 12, 2019`, director: `Amma Asante` },
      title: `God Bless the Child`,
      rating: 8.0,
      image: `https://m.media-amazon.com/images/M/MV5BMDUxMjliY2UtMWRmNi00Yjg0LThkOTAtNjcxZWY1YjIxMjgzXkEyXkFqcGdeQXVyNzU2NTg2NTI@._V1_UY126_CR0,0,224,126_AL_.jpg`,
      description: `June negotiates a truce in the Waterfords' fractured relationship; Janine oversteps with the Putnam family; A still-healing Aunt Lydia offers a brutal public punishment.`,
    },
    {
      season: 3,
      nr: 5,
      meta: { released: `June 19, 2019`, director: `Colin Watkinson` },
      title: `Unknown Caller`,
      rating: 8.5,
      image: `https://m.media-amazon.com/images/M/MV5BYzlmMzRjNzUtZGQ1ZC00M2QyLTk5MjEtZmZiNWM5YzdjNGIwXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `June and Serena grapple with a new revelation about Nichole, leading to an incident that will have far-reaching ramifications.`,
    },
    {
      season: 3,
      nr: 6,
      meta: { released: `June 26, 2019`, director: `Dearbhla Walsh` },
      title: `Household`,
      rating: 8.2,
      image: `https://m.media-amazon.com/images/M/MV5BMDY0OGNkMzUtNjIzZC00MGEwLWJmN2YtMzM2ODE5MzBkZGMyXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `June makes an important connection as she attempts to protect Nichole while accompanying the Waterfords to Washington D.C., where a powerful family offers a glimpse of the future of Gilead.`,
    },
    {
      season: 3,
      nr: 7,
      meta: { released: `July 3, 2019`, director: `Mike Barker` },
      title: `Under His Eye`,
      rating: 7.3,
      image: `https://m.media-amazon.com/images/M/MV5BMjNiMGMzYjctMzJiNS00ZmEwLThkYjEtMDc5NjFkYTRmNDdmXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `June escalates her risky efforts to find Hannah; Emily must face her past crimes; Serena and Fred contemplate their future in Washington.`,
    },
    {
      season: 3,
      nr: 8,
      meta: { released: `July 10, 2019`, director: `Mike Barker` },
      title: `Unfit`,
      rating: 7.7,
      image: `https://m.media-amazon.com/images/M/MV5BNjAyYjI0YzktMDFlMS00YTQ3LWEyMjAtMmVkYjg4ZjhlYjZhXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `June and the rest of the Handmaids shun Ofmatthew, and both are pushed to their limit at the hands of Aunt Lydia, who reflects on her life and relationships before the rise of Gilead.`,
    },
    {
      season: 3,
      nr: 9,
      meta: { released: `July 17, 2019`, director: `Daina Reid` },
      title: `Heroic`,
      rating: 8.2,
      image: `https://m.media-amazon.com/images/M/MV5BYzFkOTU2MWItMzE3OS00MjkxLTg5YmQtMzBlYzcwY2M2MGVmXkEyXkFqcGdeQXVyODM2NzM1Mzk@._V1_UY126_CR7,0,224,126_AL_.jpg`,
      description: `Confined in a hospital, June's sanity begins to fray, but an encounter with Serena Joy forces June to reassess her recent actions.`,
    },
    {
      season: 3,
      nr: 10,
      meta: { released: `July 24, 2019`, director: `Daina Reid` },
      title: `Bear Witness`,
      rating: 8.2,
      image: `https://m.media-amazon.com/images/M/MV5BOWJkN2QwN2QtN2EzZi00YmM5LTk2ZWQtYzcxZTRkN2M5ZjZjXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `Ready to strike back at her oppressors, June starts making arrangements for an ambitious plan, but a devious ploy on the part of Commander Waterford threatens to derail her.`,
    },
    {
      season: 3,
      nr: 11,
      meta: { released: `July 31, 2019`, director: `Deniz Gamze Ergüven` },
      title: `Liars`,
      rating: 9.3,
      image: `https://m.media-amazon.com/images/M/MV5BY2JmMThhZDctNDYyOS00OTg3LTg3ZWItYTczMGY5MjdlMzUxXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `A return to Jezebels puts everything in jeopardy; Serena Joy and Commander Waterford take a clandestine trip.`,
    },
    {
      season: 3,
      nr: 12,
      meta: { released: `August 17, 2019`, director: `Deniz Gamze Ergüven` },
      title: `Sacrifice`,
      rating: 8.2,
      image: `https://m.media-amazon.com/images/M/MV5BZmE2MDBiOWEtYjRkMC00YWUxLWIwN2EtNGE0ZDNiZDM3OTM1XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX224_CR0,0,224,126_AL_.jpg`,
      description: `Gilead leadership is rocked by losses of their own; Luke and Moira adjust to new arrivals in Canada; A tragedy strikes the Lawrence household.`,
    },
    {
      season: 3,
      nr: 13,
      meta: { released: `August 24, 2019`, director: `Mike Barker` },
      title: `Mayday`,
      rating: 9.4,
      image: `https://m.media-amazon.com/images/M/MV5BZmI3OTk3YzMtYTE4Yy00N2U2LTgwODQtNmU4ZTM5NzBkMDNjXkEyXkFqcGdeQXVyNjA3MzY4NDA@._V1_UY126_CR13,0,224,126_AL_.jpg`,
      description: `With her plan in place, June reaches the point of no return on her bold strike against Gilead; Serena Joy and Commander Waterford attempt to find their way forward in their new lives.`,
    },
  ];

  const init = () => {
    const showResults = (filteredItems) => {
      console.log(`showResults called`);
      console.log(filteredItems);

      const ul = document.querySelector(`.episodes`);
      ul.innerHTML = "";

      filteredItems.forEach((episode) => {
        //console.log(episode);
        const li = document.createElement("li");
        const article = document.createElement("article");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        h3.innerText = `S${episode.season}-E${episode.nr} -- ${episode.title}`;
        const p1 = document.createElement("p");
        p1.innerText = `Rating: ${episode.rating}`;
        const p2 = document.createElement("p");
        p2.innerText = episode.description;
        const p3 = document.createElement("p");
        p3.innerText = `Released on ${episode.meta.released} by ${episode.meta.director}`;

        //Classes toevoegen
        li.classList.add("season__episode");
        article.classList.add("episode");
        img.classList.add("episode__image");
        div.classList.add("episode__details");
        h3.classList.add("episode__title");
        p1.classList.add("episode__rating");

        //Rating color
        if (episode.rating >= 7 && episode.rating < 8) {
          p1.classList.add("bronze");
        }

        if (episode.rating >= 8 && episode.rating < 9) {
          p1.classList.add("silver");
        }

        if (episode.rating >= 9) {
          p1.classList.add("gold");
        }

        p2.classList.add("episode__description");
        p3.classList.add("episode__meta");

        img.src = episode.image;

        //Items aan html toevoegen
        div.append(h3);
        div.append(p1);
        div.append(p2);
        div.append(p3);

        article.append(img);
        article.append(div);
        li.append(article);
        ul.append(li);
        //console.log(ul);
      });
    };

    const filter = (e) => {
      e.preventDefault();
      console.log(`filter called`);
      const filterTitle = document.querySelector(`.filter__title`);
      console.log(filterTitle.value);

      const filteredItems = episodes.filter(function (episode) {
        return episode.title
          .toLowerCase()
          .includes(filterTitle.value.toLowerCase());
      });

      showResults(filteredItems);
    };

    // For loop
    // for (let i = 0; i < episodes.length; i++) {
    //   console.log(episodes[i]);
    // }
    const filterButton = document.querySelector(`.filter-button`);
    console.log(filterButton);
    filterButton.addEventListener("click", filter);

    showResults(episodes);
  };

  init();
}
