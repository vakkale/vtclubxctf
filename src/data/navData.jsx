const navData = [
    {
        name: "news",
        url: "/news",
    },
    {
        name: "competition",
        submenus: [
            {
                name: "cross country",
                url: "/competition/cross-country",
                image: 'https://i.imgur.com/tEac9kB.jpg'
            },
            {
                name: "track & field",
                url: "/competition/track-and-field",
                image: 'https://i.imgur.com/JHNPyP2.jpg'
            }
        ]
    },
    {
        name: "training",
        submenus: [
            {
                name: "sprint",
                url: "/training/sprint/spring-plan",
                image: 'https://i.imgur.com/zsLMckC.jpg'
            },
            {
                name: "distance",
                image: 'https://i.imgur.com/orU4bPW.jpg',
                submenus: [
                    {
                        name: "Women's Distance",
                        url: "/training/womens-distance/mid-distance",
                    },
                    {
                        name: "Men's Distance",
                        url: "/training/mens-distance/400m-800m",
                    }
                ]
            },
            {
                name: "field",
                image: 'https://i.imgur.com/iZ9hzza.jpg',
                submenus: [
                    {
                        name: "Jumps",
                        url: "/training/field/jumps",
                    },
                    {
                        name: "Throws",
                        url: "/training/field/throws",
                    }
                ]
            }
        ]
    },
    {
        name: "community",
        submenus: [
            {
                name: "socials",
                url: "/community/socials",
                image: 'https://i.imgur.com/H5zwEvg.jpg'
            },
            {
                name: "traditions",
                url: "/community/traditions",
                image: 'https://i.imgur.com/2oNXRUg.jpg'
            }
        ]
    },
    {
        name: "about",
        submenus: [
            {
                name: "join",
                url: "/join"
            },
            {
                name: "athletic trainer",
                url: "/athletic-trainer"
            },
            {
                name: "sponsors",
                url: "/sponsors"
            },
            {
                name: "officer board",
                url: "/contact"
            },
            {
                name: "support us",
                url: "/donate"
            }
        ]
    }
];
export default navData;