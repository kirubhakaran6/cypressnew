///<reference types ="Cypress" />

describe('book my show',()=>{

it('bookymyshowlaunch',()=>{

    failOnStatusCode: false
cy.visit('https://ticketnew.com/movies')

cy.get("input[type='search']").type('chennai')

//cy.get("div .MovieCityLandingFilterPills_filtersWrap__D718G div div[aria-label='Language filter']")

cy.get('.MobileMovieCitySelector_listing__vG5o4 > li > a').click()

cy.get("div .MovieCityLandingFilterPills_filtersWrap__D718G div div[aria-label='Language filter']").click()
cy.get('label[for="All Languages"]').should('be.visible')
cy.get('label[for="All Languages"]').click()
cy.get('div .H5RunningMovieV2_imgWrapper__Tadcr img[alt="Vaaranam Aayiram"]').click(({force:true}))
cy.get("button[class='Button_btn__NHo2w Button_is-primary__JWiqO Button_is-large__I8Zjp']").as('btn').click()
cy.get('div .MovieSessionsListing_titleFlex__JA009 a[href="/movies/chennai/kamala-cinemas-vadapalani-c/5059"]').click()
cy.get('a[href="/movies/chennai/kamala-cinemas-vadapalani-c/5059"] i').click()
cy.get(':nth-child(1) > .MovieSessionsListing_columnFlex__Hk80K > .MovieSessionsListing_columnFlexInner__n20YL > .MovieSessionsListing_col2__4GGXs > :nth-child(1) > .yellowCol').click()
cy.get(':nth-child(7) > .available').click()
cy.get('.Button_btn__NHo2w').click()



       //cy.get(':nth-child(4) > a > .H5RunningMovieV2_imgWrapper__Tadcr > .bgImg').click()

       //cy.get('.DatesMobile_cinemaDatesActive__oHBpY > .DatesMobile_movieDateText__w8FxI > .DatesMobile_month__dP8jo').click()

//cy.get(':nth-child(1) > .MovieSessionsListing_col1__emRsi > .MovieSessionsListing_details__Rn9eA > .MovieSessionsListing_titleFlex__JA009 > a').click()

       //cy.get('.redCol').click()

//cy.get('.CinemaInfoModal_cinemaLink__8364n').click()

      //cy.get(':nth-child(2) > .FixedSeating_seatL__dETyY > :nth-child(5) > .available').click()

      //cy.get('.Button_btn__NHo2w').click() 
 
 







})
})






