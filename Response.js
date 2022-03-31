// using this as mock data from first time searching with google api so we don't exceed the 100 search limit allowed in a day

export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - dada",
        totalResults: "642000",
        searchTerms: "dada",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "94361ada656218c3d",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - dada",
        totalResults: "642000",
        searchTerms: "dada",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "94361ada656218c3d",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.220957,
    formattedSearchTime: "0.22",
    totalResults: "642000",
    formattedTotalResults: "642,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Night - Dada Kada Bhag 1 - YouTube",
      htmlTitle: "Night - <b>Dada</b> Kada Bhag 1 - YouTube",
      link: "https://www.google.com/sorry/index?continue=https://www.youtube.com/watch%3Fv%3D_AADt8yNBvY&q=EgRC-UnlGOXqlIwGIhA1CK1XPPvJCYlsBOUard90MgI-Yw",
      displayLink: "www.google.com",
      snippet:
        'Aug 29, 2017 ... The new album "Jhalka Raya Buka" is out now. Click here for all options:Listen on Apple ...',
      htmlSnippet:
        "Aug 29, 2017 <b>...</b> The new album &quot;Jhalka Raya Buka&quot; is out now. Click here for all options:Listen on Apple&nbsp;...",
      formattedUrl:
        "https://www.google.com/sorry/index?continue=https://www...q...",
      htmlFormattedUrl:
        "https://www.google.com/sorry/index?continue=https://www...q...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRCsx73_259JUvpNsJbl4HiqahOimIRNQIQ8sxDLYRof593rRl4sG90GW_6",
            width: "300",
            height: "168",
          },
        ],
        imageobject: [
          {
            width: "1280",
            url: "https://i.ytimg.com/vi/_AADt8yNBvY/maxresdefault.jpg",
            height: "720",
          },
        ],
        person: [
          {
            name: "Night",
            url: "http://www.youtube.com/user/untothenight",
          },
        ],
        metatags: [
          {
            "og:image": "https://i.ytimg.com/vi/_AADt8yNBvY/maxresdefault.jpg",
            "twitter:app:url:iphone":
              "vnd.youtube://www.youtube.com/watch?v=_AADt8yNBvY&feature=applinks",
            "twitter:app:id:googleplay": "com.google.android.youtube",
            "theme-color": "rgba(255,255,255,0.98)",
            "og:image:width": "1280",
            "twitter:card": "player",
            "og:site_name": "YouTube",
            "twitter:url": "https://www.youtube.com/watch?v=_AADt8yNBvY",
            "twitter:app:url:ipad":
              "vnd.youtube://www.youtube.com/watch?v=_AADt8yNBvY&feature=applinks",
            "al:android:package": "com.google.android.youtube",
            "twitter:app:name:googleplay": "YouTube",
            title: "Night - Dada Kada Bhag 1",
            "al:ios:url":
              "vnd.youtube://www.youtube.com/watch?v=_AADt8yNBvY&feature=applinks",
            "twitter:app:id:iphone": "544007664",
            "og:description":
              'The new album "Jhalka Raya Buka" is out now. Click here for all options:Listen on Apple : https://itunes.apple.com/us/album/jhalka-raya-buka/id1270083989Down...',
            "al:ios:app_store_id": "544007664",
            "twitter:image":
              "https://i.ytimg.com/vi/_AADt8yNBvY/maxresdefault.jpg",
            "twitter:player": "https://www.youtube.com/embed/_AADt8yNBvY",
            "twitter:player:height": "720",
            "twitter:site": "@youtube",
            "og:video:type": "text/html",
            "og:video:height": "720",
            "og:video:url": "https://www.youtube.com/embed/_AADt8yNBvY",
            "og:type": "video.other",
            "twitter:title": "Night - Dada Kada Bhag 1",
            "al:ios:app_name": "YouTube",
            "og:title": "Night - Dada Kada Bhag 1",
            "og:image:height": "720",
            "twitter:app:id:ipad": "544007664",
            "al:web:url":
              "http://www.youtube.com/watch?v=_AADt8yNBvY&feature=applinks",
            "og:video:secure_url": "https://www.youtube.com/embed/_AADt8yNBvY",
            "og:video:tag": "music",
            "og:video:width": "1280",
            "al:android:url":
              "vnd.youtube://www.youtube.com/watch?v=_AADt8yNBvY&feature=applinks",
            "fb:app_id": "87741124305",
            "twitter:app:url:googleplay":
              "https://www.youtube.com/watch?v=_AADt8yNBvY",
            "twitter:app:name:ipad": "YouTube",
            "twitter:description":
              'The new album "Jhalka Raya Buka" is out now. Click here for all options:Listen on Apple : https://itunes.apple.com/us/album/jhalka-raya-buka/id1270083989Down...',
            "og:url": "https://www.youtube.com/watch?v=_AADt8yNBvY",
            "twitter:player:width": "1280",
            "al:android:app_name": "YouTube",
            "twitter:app:name:iphone": "YouTube",
          },
        ],
        videoobject: [
          {
            embedurl: "https://www.youtube.com/embed/_AADt8yNBvY",
            playertype: "HTML5 Flash",
            isfamilyfriendly: "true",
            uploaddate: "2017-08-29",
            description:
              'The new album "Jhalka Raya Buka" is out now. Click here for all options:Listen on Apple : https://itunes.apple.com/us/album/jhalka-raya-buka/id1270083989Down...',
            videoid: "_AADt8yNBvY",
            url: "https://www.youtube.com/watch?v=_AADt8yNBvY",
            duration: "PT4M18S",
            unlisted: "False",
            name: "Night - Dada Kada Bhag 1",
            paid: "False",
            width: "1280",
            regionsallowed:
              "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
            genre: "Music",
            interactioncount: "96966",
            channelid: "UCVv0IaiTmyuHIyAcRnWdSZg",
            datepublished: "2017-08-29",
            thumbnailurl:
              "https://i.ytimg.com/vi/_AADt8yNBvY/maxresdefault.jpg",
            height: "720",
          },
        ],
        cse_image: [
          {
            src: "https://i.ytimg.com/vi/_AADt8yNBvY/maxresdefault.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Dada Nexus Ltd - ADR (DADA) Stock Price & News - Google Finance",
      htmlTitle:
        "<b>Dada</b> Nexus Ltd - ADR (<b>DADA</b>) Stock Price &amp; News - Google Finance",
      link: "https://www.google.com/finance/quote/DADA:NASDAQ",
      displayLink: "www.google.com",
      snippet:
        "Get the latest Dada Nexus Ltd - ADR (DADA) real-time quote, historical performance, charts, and other financial information to help you make more informed ...",
      htmlSnippet:
        "Get the latest <b>Dada</b> Nexus Ltd - ADR (<b>DADA</b>) real-time quote, historical performance, charts, and other financial information to help you make more informed&nbsp;...",
      cacheId: "UlmeUKBiYtgJ",
      formattedUrl: "https://www.google.com/finance/quote/DADA:NASDAQ",
      htmlFormattedUrl:
        "https://www.google.com/finance/quote/<b>DADA</b>:NASDAQ",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQldTHAz14MiWY-2bpICyONYLUjcoY7hJc8AQj1tmfmhHDQ43UNmSVu_8",
            width: "311",
            height: "162",
          },
        ],
        metatags: [
          {
            "application-name": "Google Finance",
            "og:image":
              "https://ssl.gstatic.com/finance/favicon/finance_770x402.png",
            "theme-color": "#ffffff",
            "og:type": "website",
            "og:image:width": "770",
            "twitter:card": "summary",
            "twitter:title":
              "Dada Nexus Ltd - ADR (DADA) Stock Price & News - Google Finance",
            "apple-mobile-web-app-title": "Google Finance",
            "og:title":
              "Dada Nexus Ltd - ADR (DADA) Stock Price & News - Google Finance",
            "og:image:height": "402",
            "og:description":
              "Get the latest Dada Nexus Ltd - ADR (DADA) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.",
            "twitter:image":
              "https://ssl.gstatic.com/finance/favicon/finance_496x496.png",
            referrer: "origin",
            "apple-mobile-web-app-status-bar-style": "default",
            "msapplication-tap-highlight": "no",
            "twitter:site": "@google",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "apple-mobile-web-app-capable": "yes",
            "twitter:description":
              "Get the latest Dada Nexus Ltd - ADR (DADA) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.",
            "mobile-web-app-capable": "yes",
            "og:url": "https://www.google.com/finance/quote/DADA:NASDAQ",
          },
        ],
        cse_image: [
          {
            src: "https://ssl.gstatic.com/finance/favicon/finance_770x402.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "Bholi Soorat Dil Ke Khote | Albela Songs | Bhagwan Dada | Geeta ...",
      htmlTitle:
        "Bholi Soorat Dil Ke Khote | Albela Songs | Bhagwan <b>Dada</b> | Geeta ...",
      link: "https://www.google.com/sorry/index?continue=https://m.youtube.com/watch%3Fv%3DH2uVRRFbJOU%26itct%3DCAgQpDAYCiITCNmA1_v32NcCFYqHAwod2Z8NmzIHcmVsYXRlZEi6iqf3h-yA5_8B&q=EgRC-UC5GLGRl48GIhBRTfEaCO8sM_-ahHZpcx2jMgM-PmM",
      displayLink: "www.google.com",
      snippet:
        "Mar 16, 2016 ... Bholi Soorat Dil Ke Khote | Albela Songs | Bhagwan Dada | Geeta Bali | C Ramchandra | Filmigaane. 614,234 views • Mar 16, 2016 • Movie: ...",
      htmlSnippet:
        "Mar 16, 2016 <b>...</b> Bholi Soorat Dil Ke Khote | Albela Songs | Bhagwan <b>Dada</b> | Geeta Bali | C Ramchandra | Filmigaane. 614,234 views • Mar 16, 2016 • Movie:&nbsp;...",
      formattedUrl:
        "https://www.google.com/sorry/index?continue=https://m...8B...",
      htmlFormattedUrl:
        "https://www.google.com/sorry/index?continue=https://m...8B...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReyzfTU0gyMkeg0iMBw-to95g-zOzxlp9ZaGaOWlLfQkpVQ64MSz3EMnhj",
            width: "300",
            height: "168",
          },
        ],
        imageobject: [
          {
            width: "1280",
            url: "https://i.ytimg.com/vi/H2uVRRFbJOU/maxresdefault.jpg",
            height: "720",
          },
        ],
        person: [
          {
            name: "Shemaroo Filmi Gaane",
            url: "http://www.youtube.com/user/filmigaane",
          },
        ],
        metatags: [
          {
            "og:image": "https://i.ytimg.com/vi/H2uVRRFbJOU/maxresdefault.jpg",
            "theme-color": "rgba(255,255,255,0.98)",
            "og:image:width": "1280",
            "twitter:card": "player",
            "og:site_name": "YouTube",
            "twitter:url": "https://www.youtube.com/watch?v=H2uVRRFbJOU",
            "al:android:package": "com.google.android.youtube",
            title:
              "Bholi Soorat Dil Ke Khote | Albela Songs | Bhagwan Dada | Geeta Bali | C Ramchandra | Filmigaane",
            "al:ios:url":
              "vnd.youtube://www.youtube.com/watch?v=H2uVRRFbJOU&feature=applinks",
            "og:description":
              "Movie: Albela (1951)Music Director: C RamchandraSinger: C Ramchandra, Lata MangeshkarDirector: Bhagwan DadaLyricist: Rajendra KrishnaBholi Soorat Dil Ke Khot...",
            "al:ios:app_store_id": "544007664",
            "twitter:site": "@youtube",
            "og:video:type": "text/html",
            "og:video:height": "720",
            "og:video:url": "https://www.youtube.com/embed/H2uVRRFbJOU",
            "og:type": "video.other",
            "twitter:title":
              "Bholi Soorat Dil Ke Khote | Albela Songs | Bhagwan Dada | Geeta Bali | C Ramchandra | Filmigaane",
            "al:ios:app_name": "YouTube",
            "og:title":
              "Bholi Soorat Dil Ke Khote | Albela Songs | Bhagwan Dada | Geeta Bali | C Ramchandra | Filmigaane",
            "og:image:height": "720",
            "al:web:url":
              "http://www.youtube.com/watch?v=H2uVRRFbJOU&feature=applinks",
            "og:video:secure_url": "https://www.youtube.com/embed/H2uVRRFbJOU",
            "og:video:tag": "Albela Songs",
            "og:video:width": "1280",
            "al:android:url":
              "vnd.youtube://www.youtube.com/watch?v=H2uVRRFbJOU&feature=applinks",
            "fb:app_id": "87741124305",
            "og:url": "https://www.youtube.com/watch?v=H2uVRRFbJOU",
            "al:android:app_name": "YouTube",
          },
        ],
        videoobject: [
          {
            embedurl: "https://www.youtube.com/embed/H2uVRRFbJOU",
            playertype: "HTML5 Flash",
            isfamilyfriendly: "true",
            uploaddate: "2016-03-16",
            description:
              "Movie: Albela (1951)Music Director: C RamchandraSinger: C Ramchandra, Lata MangeshkarDirector: Bhagwan DadaLyricist: Rajendra KrishnaBholi Soorat Dil Ke Khot...",
            videoid: "H2uVRRFbJOU",
            url: "https://www.youtube.com/watch?v=H2uVRRFbJOU",
            duration: "PT4M34S",
            unlisted: "False",
            name: "Bholi Soorat Dil Ke Khote | Albela Songs | Bhagwan Dada | Geeta Bali | C Ramchandra | Filmigaane",
            paid: "False",
            width: "1280",
            regionsallowed:
              "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
            genre: "Music",
            interactioncount: "614234",
            channelid: "UCP6uH_XlsxrXwZQ4DlqbqPg",
            datepublished: "2016-03-16",
            thumbnailurl:
              "https://i.ytimg.com/vi/H2uVRRFbJOU/maxresdefault.jpg",
            height: "720",
          },
        ],
        cse_image: [
          {
            src: "https://i.ytimg.com/vi/H2uVRRFbJOU/maxresdefault.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "50 Dada Gorgud - Google Maps",
      htmlTitle: "50 <b>Dada</b> Gorgud - Google Maps",
      link: "https://www.google.com/maps/?cid=7607855348747887576",
      displayLink: "www.google.com",
      snippet:
        '50 Dada Gorgud, Ganja, Azerbaijan. Suggest an edit on 50 Dada Gorgud. Add a missing place. Add your business. At this location. "" Firdevs şirniyyat.',
      htmlSnippet:
        "50 <b>Dada</b> Gorgud, Ganja, Azerbaijan. Suggest an edit on 50 <b>Dada</b> Gorgud. Add a missing place. Add your business. At this location. &quot;&quot; Firdevs şirniyyat.",
      cacheId: "S2pe8a6iXuEJ",
      formattedUrl: "https://www.google.com/maps/?cid=7607855348747887576",
      htmlFormattedUrl: "https://www.google.com/maps/?cid=7607855348747887576",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLwIsAizwz0TNer6RrcPO0YzOCjBLUdsyZ3SxaSxWUwhOazbMu33VheVw",
            width: "284",
            height: "178",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://maps.google.com/maps/api/staticmap?center=40.6775467%2C46.3720095&zoom=16&size=256x256&language=en&markers=40.6775467%2C46.3720095&sensor=false&client=google-maps-frontend&signature=jcm69g69-gGIbZziy3lG9g6OLgs",
            "og:image:width": "256",
            "twitter:card": "summary",
            "og:site_name":
              "50 Dada Gorgud · 50 Dada Gorgud, Ganja, Azerbaijan",
            viewport:
              "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
            "og:title": "50 Dada Gorgud · 50 Dada Gorgud, Ganja, Azerbaijan",
            "og:image:height": "256",
            google: "notranslate",
            "og:description": "Apartment building",
          },
        ],
        place: [
          {
            image:
              "https://maps.google.com/maps/api/staticmap?center=40.6775467%2C46.3720095&zoom=16&size=256x256&language=en&markers=40.6775467%2C46.3720095&sensor=false&client=google-maps-frontend&signature=jcm69g69-gGIbZziy3lG9g6OLgs",
            name: "50 Dada Gorgud · 50 Dada Gorgud, Ganja, Azerbaijan",
            description: "Apartment building",
          },
        ],
        cse_image: [
          {
            src: "https://maps.gstatic.com/tactile/pane/default_geocode-1x.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Mastiksoul & Dada feat Angelico Vieira - When i Fall In Love ...",
      htmlTitle:
        "Mastiksoul &amp; <b>Dada</b> feat Angelico Vieira - When i Fall In Love ...",
      link: "http://www.google.com/sorry/index?continue=http://www.youtube.com/video/zx1CJ65OJoQ&q=EgRC-UoKGMrNpI8GIhD-d3oaTOBakGO9o71fDxJ6MgM-PmM",
      displayLink: "www.google.com",
      snippet:
        "May 16, 2011 ... Mastiksoul & Dada feat Angelico Vieira - When i Fall In Love. 173,778 views173K views. May 16, 2011. 1.9K. Dislike. Share. Save.",
      htmlSnippet:
        "May 16, 2011 <b>...</b> Mastiksoul &amp; <b>Dada</b> feat Angelico Vieira - When i Fall In Love. 173,778 views173K views. May 16, 2011. 1.9K. Dislike. Share. Save.",
      formattedUrl:
        "www.google.com/sorry/index?continue=http://www.youtube...q...",
      htmlFormattedUrl:
        "www.google.com/sorry/index?continue=http://www.youtube...q...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxjhSOBMYP2I3OeNZhc8kC7pnJGa8qyPVv6zz92cLPhbNhRnkZQXArC5g",
            width: "259",
            height: "194",
          },
        ],
        imageobject: [
          {
            width: "480",
            url: "https://i.ytimg.com/vi/zx1CJ65OJoQ/hqdefault.jpg",
            height: "360",
          },
        ],
        person: [
          {
            name: "Planetworks TV",
            url: "http://www.youtube.com/user/PlanetworksTV",
          },
        ],
        metatags: [
          {
            "og:image": "https://i.ytimg.com/vi/zx1CJ65OJoQ/hqdefault.jpg",
            "twitter:app:url:iphone":
              "vnd.youtube://www.youtube.com/watch?v=zx1CJ65OJoQ&feature=applinks",
            "theme-color": "rgba(255,255,255,0.98)",
            "og:image:width": "480",
            "twitter:card": "player",
            "og:site_name": "YouTube",
            "twitter:url": "https://www.youtube.com/watch?v=zx1CJ65OJoQ",
            "twitter:app:url:ipad":
              "vnd.youtube://www.youtube.com/watch?v=zx1CJ65OJoQ&feature=applinks",
            "al:android:package": "com.google.android.youtube",
            "twitter:app:name:googleplay": "YouTube",
            title:
              "Mastiksoul & Dada feat Angelico Vieira - When i Fall In Love",
            "al:ios:url":
              "vnd.youtube://www.youtube.com/watch?v=zx1CJ65OJoQ&feature=applinks",
            "twitter:app:id:iphone": "544007664",
            "og:description":
              "Facebook: http://www.facebook.com/planetworkscompanyLyrics: When you fall in loveYou're the betterNow I feel good baby,cuz you're by my sideAnd Tonight, I'm ...",
            "al:ios:app_store_id": "544007664",
            "twitter:image": "https://i.ytimg.com/vi/zx1CJ65OJoQ/hqdefault.jpg",
            "twitter:site": "@youtube",
            "og:video:type": "text/html",
            "og:video:height": "360",
            "og:video:url": "https://www.youtube.com/embed/zx1CJ65OJoQ",
            "og:type": "video.other",
            "twitter:title":
              "Mastiksoul & Dada feat Angelico Vieira - When i Fall In Love",
            "al:ios:app_name": "YouTube",
            "og:title":
              "Mastiksoul & Dada feat Angelico Vieira - When i Fall In Love",
            "og:image:height": "360",
            "twitter:app:id:ipad": "544007664",
            "al:web:url":
              "http://www.youtube.com/watch?v=zx1CJ65OJoQ&feature=applinks",
            "og:video:secure_url": "https://www.youtube.com/embed/zx1CJ65OJoQ",
            "og:video:tag": "Mastiksoul",
            "og:video:width": "640",
            "al:android:url":
              "vnd.youtube://www.youtube.com/watch?v=zx1CJ65OJoQ&feature=applinks",
            "fb:app_id": "87741124305",
            "twitter:app:name:ipad": "YouTube",
            "twitter:description":
              "Facebook: http://www.facebook.com/planetworkscompanyLyrics: When you fall in loveYou're the betterNow I feel good baby,cuz you're by my sideAnd Tonight, I'm ...",
            "og:url": "https://www.youtube.com/watch?v=zx1CJ65OJoQ",
            "al:android:app_name": "YouTube",
            "twitter:app:name:iphone": "YouTube",
          },
        ],
        videoobject: [
          {
            embedurl: "https://www.youtube.com/embed/zx1CJ65OJoQ",
            playertype: "HTML5 Flash",
            isfamilyfriendly: "true",
            uploaddate: "2011-05-16",
            description:
              "Facebook: http://www.facebook.com/planetworkscompanyLyrics: When you fall in loveYou're the betterNow I feel good baby,cuz you're by my sideAnd Tonight, I'm ...",
            videoid: "zx1CJ65OJoQ",
            url: "https://www.youtube.com/watch?v=zx1CJ65OJoQ",
            duration: "PT3M17S",
            unlisted: "False",
            name: "Mastiksoul & Dada feat Angelico Vieira - When i Fall In Love",
            paid: "False",
            width: "640",
            regionsallowed:
              "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
            genre: "Music",
            interactioncount: "173778",
            channelid: "UCG3uiuJj_En_DQlZegbV9QQ",
            datepublished: "2011-05-16",
            thumbnailurl: "https://i.ytimg.com/vi/zx1CJ65OJoQ/hqdefault.jpg",
            height: "360",
          },
        ],
        cse_image: [
          {
            src: "https://i.ytimg.com/vi/zx1CJ65OJoQ/hqdefault.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "FLOWER SALON DADA - Google Maps",
      htmlTitle: "FLOWER SALON <b>DADA</b> - Google Maps",
      link: "https://www.google.com/maps/?cid=7821464924836157258",
      displayLink: "www.google.com",
      snippet:
        "CVJETNI SALON DADA · Popular times · Photos · Review summary · Reviews · People also search for · Web results ...",
      htmlSnippet:
        "CVJETNI SALON <b>DADA</b> &middot; Popular times &middot; Photos &middot; Review summary &middot; Reviews &middot; People also search for &middot; Web results&nbsp;...",
      cacheId: "6BgCfHhLe5EJ",
      formattedUrl: "https://www.google.com/maps/?cid=7821464924836157258",
      htmlFormattedUrl: "https://www.google.com/maps/?cid=7821464924836157258",
      pagemap: {
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://lh5.googleusercontent.com/p/AF1QipPtPbr3ppF-6ee8tf1Z3yPTRlo_bZV1XHJqKqst=w256-h256-k-no-p",
            "og:image:width": "256",
            "twitter:card": "summary",
            "og:site_name":
              "FLOWER SALON DADA · Ul. Matije Gupca 33, 35000, Slavonski Brod, Croatia",
            viewport:
              "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
            "og:title":
              "FLOWER SALON DADA · Ul. Matije Gupca 33, 35000, Slavonski Brod, Croatia",
            "og:image:height": "256",
            google: "notranslate",
            "og:description": "★★★★★ · Florist",
          },
        ],
        place: [
          {
            image:
              "https://lh5.googleusercontent.com/p/AF1QipPtPbr3ppF-6ee8tf1Z3yPTRlo_bZV1XHJqKqst=w256-h256-k-no-p",
            name: "FLOWER SALON DADA · Ul. Matije Gupca 33, 35000, Slavonski Brod, Croatia",
            description: "★★★★★ · Florist",
          },
        ],
        cse_image: [
          {
            src: "https://lh5.googleusercontent.com/p/AF1QipPtPbr3ppF-6ee8tf1Z3yPTRlo_bZV1XHJqKqst=w256-h256-k-no-p",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Dada Pubblicità - Google Maps",
      htmlTitle: "<b>Dada</b> Pubblicità - Google Maps",
      link: "https://www.google.com/maps/?cid=4510560345027037957",
      displayLink: "www.google.com",
      snippet:
        "Dada Pubblicità · Add missing information · Photos · Don't see what you need here? · Review summary · Reviews · People also search for · Web results ...",
      htmlSnippet:
        "<b>Dada</b> Pubblicità &middot; Add missing information &middot; Photos &middot; Don&#39;t see what you need here? &middot; Review summary &middot; Reviews &middot; People also search for &middot; Web results&nbsp;...",
      cacheId: "yiXp9y1p0h4J",
      formattedUrl: "https://www.google.com/maps/?cid=4510560345027037957",
      htmlFormattedUrl: "https://www.google.com/maps/?cid=4510560345027037957",
      pagemap: {
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://lh5.googleusercontent.com/p/AF1QipNlUq6Lj2xSquzS1OgqEqdeKv8kMSRCvj6dzRCR=w256-h256-k-no-p",
            "og:image:width": "256",
            "twitter:card": "summary",
            "og:site_name":
              "Dada Pubblicità · 1a Strada Lungarno, 52028 Terranuova Bracciolini AR, Italy",
            viewport:
              "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
            "og:title":
              "Dada Pubblicità · 1a Strada Lungarno, 52028 Terranuova Bracciolini AR, Italy",
            "og:image:height": "256",
            google: "notranslate",
            "og:description": "★★★★★ · Screen printer",
          },
        ],
        place: [
          {
            image:
              "https://lh5.googleusercontent.com/p/AF1QipNlUq6Lj2xSquzS1OgqEqdeKv8kMSRCvj6dzRCR=w256-h256-k-no-p",
            name: "Dada Pubblicità · 1a Strada Lungarno, 52028 Terranuova Bracciolini AR, Italy",
            description: "★★★★★ · Screen printer",
          },
        ],
        cse_image: [
          {
            src: "https://lh5.googleusercontent.com/p/AF1QipNlUq6Lj2xSquzS1OgqEqdeKv8kMSRCvj6dzRCR=w256-h256-k-no-p",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "DADA CLUB Kasper - Google Maps",
      htmlTitle: "<b>DADA</b> CLUB Kasper - Google Maps",
      link: "https://www.google.com/maps/?cid=2076990007499573436",
      displayLink: "www.google.com",
      snippet:
        "(Translated by Google) Dada club is a nice place to have fun with friendly staff with good music and good cask wine. A place for good fun …",
      htmlSnippet:
        "(Translated by Google) <b>Dada</b> club is a nice place to have fun with friendly staff with good music and good cask wine. A place for good fun …",
      cacheId: "PleUQ-HEuN8J",
      formattedUrl: "https://www.google.com/maps/?cid=2076990007499573436",
      htmlFormattedUrl: "https://www.google.com/maps/?cid=2076990007499573436",
      pagemap: {
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://lh5.googleusercontent.com/p/AF1QipMq6FHgazngqrJ5BM2ex_sU3HURL5C0E0gw7sSG=w256-h256-k-no-p",
            "og:image:width": "256",
            "twitter:card": "summary",
            "og:site_name":
              "DADA CLUB Kasper · Kostelní 73, 377 01 Jindřichův Hradec, Czechia",
            viewport:
              "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
            "og:title":
              "DADA CLUB Kasper · Kostelní 73, 377 01 Jindřichův Hradec, Czechia",
            "og:image:height": "256",
            google: "notranslate",
            "og:description": "★★★★☆ · Bar",
          },
        ],
        place: [
          {
            image:
              "https://lh5.googleusercontent.com/p/AF1QipMq6FHgazngqrJ5BM2ex_sU3HURL5C0E0gw7sSG=w256-h256-k-no-p",
            name: "DADA CLUB Kasper · Kostelní 73, 377 01 Jindřichův Hradec, Czechia",
            description: "★★★★☆ · Bar",
          },
        ],
        cse_image: [
          {
            src: "https://lh5.googleusercontent.com/p/AF1QipMq6FHgazngqrJ5BM2ex_sU3HURL5C0E0gw7sSG=w256-h256-k-no-p",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Dada Salon Kabarett - Google Maps",
      htmlTitle: "<b>Dada</b> Salon Kabarett - Google Maps",
      link: "https://www.google.com/maps/?cid=11635516590493943607",
      displayLink: "www.google.com",
      snippet:
        "Dada Salon Kabarett · Add missing information · Photos · Review summary · Reviews · People also search for · Web results ...",
      htmlSnippet:
        "<b>Dada</b> Salon Kabarett &middot; Add missing information &middot; Photos &middot; Review summary &middot; Reviews &middot; People also search for &middot; Web results&nbsp;...",
      cacheId: "reIDkDkDLZAJ",
      formattedUrl: "https://www.google.com/maps/?cid=11635516590493943607",
      htmlFormattedUrl: "https://www.google.com/maps/?cid=11635516590493943607",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThsrEFgRN6w5leqgVL371UnOYwDP_WvmnlKTOSc1ze39PpWhR671xjodE",
            width: "299",
            height: "169",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://lh5.googleusercontent.com/p/AF1QipP2chCKIiHJM0KVvvNnyKa2kG6dc-Ed0nQ9erJF=w256-h256-k-no-p",
            "og:image:width": "256",
            "twitter:card": "summary",
            "og:site_name":
              "Dada Salon Kabarett · Fulya, Quasar Tower, Büyükdere Cd. no:76, 34394 Şişli/İstanbul, Turkey",
            viewport:
              "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
            "og:title":
              "Dada Salon Kabarett · Fulya, Quasar Tower, Büyükdere Cd. no:76, 34394 Şişli/İstanbul, Turkey",
            "og:image:height": "256",
            google: "notranslate",
            "og:description": "★★★★★ · Cabaret club",
          },
        ],
        place: [
          {
            image:
              "https://lh5.googleusercontent.com/p/AF1QipP2chCKIiHJM0KVvvNnyKa2kG6dc-Ed0nQ9erJF=w256-h256-k-no-p",
            name: "Dada Salon Kabarett · Fulya, Quasar Tower, Büyükdere Cd. no:76, 34394 Şişli/İstanbul, Turkey",
            description: "★★★★★ · Cabaret club",
          },
        ],
        cse_image: [
          {
            src: "https://lh5.googleusercontent.com/p/AF1QipP2chCKIiHJM0KVvvNnyKa2kG6dc-Ed0nQ9erJF=w528-h298-k-no",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Don Dada (feat. Beetrus & HypeManTy) - YouTube",
      htmlTitle: "Don <b>Dada</b> (feat. Beetrus &amp; HypeManTy) - YouTube",
      link: "https://www.google.com/sorry/index?continue=https://www.youtube.com/watch%3Fv%3DD42maebuQug&q=EgRC-UGwGIremY8GIhA8Rf4hgr7eZ4C054wdIFTcMgM-PmM",
      displayLink: "www.google.com",
      snippet:
        "Dec 24, 2021 ... Provided to YouTube by DistroKidDon Dada (feat. Beetrus & HypeManTy) · TRØJN , Martins HumphreyDon Dada (feat. Beetrus & HypeManTy)℗ 5 Trees ...",
      htmlSnippet:
        "Dec 24, 2021 <b>...</b> Provided to YouTube by DistroKidDon <b>Dada</b> (feat. Beetrus &amp; HypeManTy) · TRØJN , Martins HumphreyDon <b>Dada</b> (feat. Beetrus &amp; HypeManTy)℗ 5 Trees&nbsp;...",
      formattedUrl:
        "https://www.google.com/sorry/index?continue=https://www...com/...",
      htmlFormattedUrl:
        "https://www.google.com/sorry/index?continue=https://www...com/...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcThTfK2R8L3lzKEWybXmfvbXTLOEvU1oRLeOBeQfWxquGji9DHD00tEOGVn",
            width: "300",
            height: "168",
          },
        ],
        imageobject: [
          {
            width: "1280",
            url: "https://i.ytimg.com/vi/D42maebuQug/maxresdefault.jpg",
            height: "720",
          },
        ],
        person: [
          {
            name: "Various Artists - Topic",
            url: "http://www.youtube.com/channel/UCaEIlQ7Q2OOYoivz9r_yRmw",
          },
        ],
        metatags: [
          {
            "og:image": "https://i.ytimg.com/vi/D42maebuQug/maxresdefault.jpg",
            "twitter:app:url:iphone":
              "vnd.youtube://www.youtube.com/watch?v=D42maebuQug&feature=applinks",
            "twitter:app:id:googleplay": "com.google.android.youtube",
            "theme-color": "rgba(255,255,255,0.98)",
            "og:image:width": "1280",
            "twitter:card": "player",
            "og:site_name": "YouTube",
            "twitter:url": "https://www.youtube.com/watch?v=D42maebuQug",
            "twitter:app:url:ipad":
              "vnd.youtube://www.youtube.com/watch?v=D42maebuQug&feature=applinks",
            "al:android:package": "com.google.android.youtube",
            "twitter:app:name:googleplay": "YouTube",
            title: "Don Dada (feat. Beetrus & HypeManTy)",
            "al:ios:url":
              "vnd.youtube://www.youtube.com/watch?v=D42maebuQug&feature=applinks",
            "twitter:app:id:iphone": "544007664",
            "og:description":
              "Provided to YouTube by DistroKidDon Dada (feat. Beetrus & HypeManTy) · TRØJN , Martins HumphreyDon Dada (feat. Beetrus & HypeManTy)℗ 5 Trees EntertainmentRel...",
            "al:ios:app_store_id": "544007664",
            "twitter:image":
              "https://i.ytimg.com/vi/D42maebuQug/maxresdefault.jpg",
            "twitter:player": "https://www.youtube.com/embed/D42maebuQug",
            "twitter:player:height": "720",
            "twitter:site": "@youtube",
            "og:video:type": "text/html",
            "og:video:height": "720",
            "og:video:url": "https://www.youtube.com/embed/D42maebuQug",
            "og:type": "video.other",
            "twitter:title": "Don Dada (feat. Beetrus & HypeManTy)",
            "al:ios:app_name": "YouTube",
            "og:title": "Don Dada (feat. Beetrus & HypeManTy)",
            "og:image:height": "720",
            "twitter:app:id:ipad": "544007664",
            "al:web:url":
              "http://www.youtube.com/watch?v=D42maebuQug&feature=applinks",
            "og:video:secure_url": "https://www.youtube.com/embed/D42maebuQug",
            "og:video:tag": "TRØJN",
            "og:video:width": "960",
            "al:android:url":
              "vnd.youtube://www.youtube.com/watch?v=D42maebuQug&feature=applinks",
            "fb:app_id": "87741124305",
            "twitter:app:url:googleplay":
              "https://www.youtube.com/watch?v=D42maebuQug",
            "twitter:app:name:ipad": "YouTube",
            "twitter:description":
              "Provided to YouTube by DistroKidDon Dada (feat. Beetrus & HypeManTy) · TRØJN , Martins HumphreyDon Dada (feat. Beetrus & HypeManTy)℗ 5 Trees EntertainmentRel...",
            "og:url": "https://www.youtube.com/watch?v=D42maebuQug",
            "twitter:player:width": "960",
            "al:android:app_name": "YouTube",
            "twitter:app:name:iphone": "YouTube",
          },
        ],
        videoobject: [
          {
            embedurl: "https://www.youtube.com/embed/D42maebuQug",
            playertype: "HTML5 Flash",
            isfamilyfriendly: "true",
            uploaddate: "2021-12-24",
            description:
              "Provided to YouTube by DistroKidDon Dada (feat. Beetrus & HypeManTy) · TRØJN , Martins HumphreyDon Dada (feat. Beetrus & HypeManTy)℗ 5 Trees EntertainmentRel...",
            videoid: "D42maebuQug",
            url: "https://www.youtube.com/watch?v=D42maebuQug",
            duration: "PT2M30S",
            unlisted: "False",
            name: "Don Dada (feat. Beetrus & HypeManTy)",
            paid: "False",
            width: "960",
            regionsallowed:
              "AE,AR,AS,AT,AU,AW,BA,BE,BG,BH,BM,BO,BR,BY,CA,CH,CL,CO,CR,CY,CZ,DE,DK,DO,DZ,EC,EE,EG,ES,FI,FR,GB,GF,GP,GR,GT,GU,HK,HN,HR,HU,ID,IE,IL,IN,IS,IT,JO,JP,KE,KR,KW,KY,LB,LI,LT,LU,LV,MA,MK,MP,MQ,MT,MX,MY,NC...",
            genre: "Music",
            interactioncount: "14",
            channelid: "UCaEIlQ7Q2OOYoivz9r_yRmw",
            datepublished: "2021-12-24",
            thumbnailurl:
              "https://i.ytimg.com/vi/D42maebuQug/maxresdefault.jpg",
            height: "720",
          },
        ],
        cse_image: [
          {
            src: "https://i.ytimg.com/vi/D42maebuQug/maxresdefault.jpg",
          },
        ],
      },
    },
  ],
};
