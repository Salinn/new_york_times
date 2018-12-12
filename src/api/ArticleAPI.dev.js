//Allows us to fake data
import faker from 'faker';
//time
import moment from 'moment';

const images = [
    'images/2017/07/29/world/28venezuela-embassy-1/28venezuela-embassy-1-articleLarge.jpg',
    'images/2017/07/23/us/23dc-schumer/merlin-to-scoop-124952627-670097-articleLarge.jpg',
    'images/2017/07/28/multimedia/murkowski-collins/murkowski-collins-articleLarge.jpg',
    'images/2017/07/29/us/28dc-scaramucci_web2/28dc-scaramucci_web2-articleLarge-v2.jpg',
    'images/2017/07/30/world/30int-nkorea3/30int-nkorea3-articleLarge.jpg',
];

export const generateArticles = () => {
    let stories = [];

    for(let i = 0; i < 10; i++) {
        stories.push(
            {
                headline: {
                    main: faker.lorem.sentence(),
                },
                pub_date: moment(faker.date.past()).format('MM/DD/YYYY h:mm a'),
                snippet: faker.lorem.paragraph(),
                web_url: faker.internet.url(),
                byline: {
                    original: `By ${faker.name.firstName()} ${faker.name.lastName()}`
                },
                multimedia: [
                    {
                        url: images[i%5],
                    },
                ],
            }
        )
    }

    return stories;
};

export const fetchArticles = (params) => {
    let stories = generateArticles();

    return {
        data:{
            response: {
                docs: stories,
            }
        }
    };
};