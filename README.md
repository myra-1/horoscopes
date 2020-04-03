My Daily Horoscope


Fun site that allows users to select an astro sign to get yesterday's, today's and tomorrow's horoscope and sign info (Lucky Number, Lucky Color, Mood, Color, Compatibility).

Data and Images provided via:
- https://github.com/sameerkumar18/aztro free API 
- http://newsmobile.in/json-horoscope/ images

Desktop:
![Imgur](https://imgur.com/TtYrzjl.png)
![Imgur](https://imgur.com/883xw33.png)

Mobile & Tablet:
![Imgur](https://imgur.com/mtPf8mw.png)

Component Heirarchy
- Home (App)
- Header (Function)
- Footer (Function)
- Signs (Class, maps through json data)
  - Sign (individual sign images and titles)
- Daily Horoscope (Class w/ API call)
  - Sun Facts (Function)

MVP: The minimum, need-to-have features
- Option to select astrological sign on the home page
- Clicking astro sign will bring user to the individual sign page, containing daily horoscope and sign info (Lucky Number, Lucky Color, Mood, Color, Compatibility)
- User has option to view yesterday's daily horoscope or tomorrow's daily horoscope via click of next and previous buttons

Post-MVP
- Make the individual sign info clickable / fun:
  - "Compatability: Cancer" is clickable to the Cancer daily horoscope page
  - Make background color of (or add a swatch of color to) individual horoscope page to match the sign info "Color"
  - Add countdown to sign-info "Lucky Time" (else: "already passed")
  - Loading page (in case of API slowness)

SWOT Analysis: Strengths, Weaknesses, Opportunities, and Threats

Strengths:
- Following pretty similar format to previous projects

Inconvenience:
- As far as I can tell, the API requires the specific parameters, so the home page cannot populate based on the API, only the individual pages, so I will need to add value to the items on homepage to associate them to the API when clicked.

Opportunity:
- Because of the above, I can create my own dataset to map through on the home page