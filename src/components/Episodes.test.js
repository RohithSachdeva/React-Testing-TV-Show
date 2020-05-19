import React from 'react';
import {render} from '@testing-library/react';
import Episodes from './Episodes';
import * as rtl from '@testing-library/react';


// const episode1and2 = [



// {"id":553946,"url":"http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers","name":"Chapter One: The Vanishing of Will Byers","season":1,"number":1,"airdate":"2016-07-15","airtime":"","airstamp":"2016-07-15T12:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"},"summary":"<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/553946"}}},
// {"id":578663,"url":"http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street","name":"Chapter Two: The Weirdo on Maple Street","season":1,"number":2,"airdate":"2016-07-15","airtime":"","airstamp":"2016-07-15T12:00:00+00:00","runtime":60,"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"},"summary":"<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>","_links":{"self":{"href":"http://api.tvmaze.com/episodes/578663"}}}

// ]

test('render list', () => {
    render(<Episodes episodes ={[]}/>)
})

test('dummy data', () => {

})

//data-testid="episodes-test"
//data-testid="episodenumber-test"

// const missionsData = {
//     data: [
//       {
//         mission_name: "Thaicom",
//         mission_id: "9D1B7E0",
//         manufacturers: ["Orbital ATK"],
//         payload_ids: ["Thaicom 6", "Thaicom 8"],
//         wikipedia: "https://en.wikipedia.org/wiki/Thaicom",
//         website: "http://www.thaicom.net/en/satellites/overview",
//         twitter: "https://twitter.com/thaicomplc",
//         description:
//           "Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.",
//       },
//       {
//         mission_name: "Telstar",
//         mission_id: "F4F83DE",
//         manufacturers: ["SSL"],
//         payload_ids: ["Telstar 19V", "Telstar 18V"],
//         wikipedia: "https://en.wikipedia.org/wiki/Telesat",
//         website: "https://www.telesat.com/",
//         twitter: null,
//         description:
//           "Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.",
//       },
//     ],
//   };
  
//   test("renders without errors", () => {
//     render(<App />);
//   });
  
//   // async/await
//   test("renders data after API is called", async () => {
//     // mock the resolved value (just once so that we can reuse the
//     // mocked function in other tests);
//     mockFetchMissions.mockResolvedValueOnce(missionsData);
  
//     // test needs to render App, click on the "get data" button,
//     // assert that data is rendered _AFTER_ the api fetch is completed
//     const { getByText, queryAllByTestId } = render(<App />);
  
//     // fireEvent.click(getByText(/get data/i));
//     // I want to mimic even better the events from user interactions
//     userEvent.click(getByText(/get data/i)); // if API call happens on mount, don't need this step
  
//     // mockFetchMissions is being called and will resolve with missionsData
  
//     // we need to mimic "waiting" for a promise to be resolved
//     // turn the testfunction into an "async" function
//     // then await the promise to be resolved
//     await waitFor(() => expect(queryAllByTestId(/missions/i)).toHaveLength(2));
//     expect(mockFetchMissions).toHaveBeenCalledTimes(1);
//   });
  