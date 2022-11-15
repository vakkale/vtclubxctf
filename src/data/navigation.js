const navData = {
    "menu": {
        "name": "NEWS",
        "curtain": false,
        "link": "/news"
    },
    "competition": [
        {
            "name": "COMPETITION",
            "curtain": true
        },
        {
            "sections": [
                {
                    "id": 0,
                    "name": "Cross Country",
                    "link": "/competition/crosscountry",
                    "image": require("../header/images/xc_selector.jpg")
                },
                {
                    "id": 1,
                    "name": "Track & Field",
                    "link": "/competition/trackandfield",
                    "image": require("../header/images/tf_selector2.jpg")
                }
            ]
        }
    ],
    "training": [
        {
            "name": "TRAINING",
            "curtain": true
        },
        {
            "sections": [
                {
                    "id": 0,
                    "name": "Sprints",
                    "link": "/training/sprints",
                    "image": require("../header/images/sprints_selector.jpg")
                },
                {
                    "id": 1,
                    "name": "Distance",
                    "link": "/training/mens-distance-high-mileage",
                    "image": require("../header/images/distance_selector2.jpg")
                },
                {
                    "id": 2,
                    "name": "Field",
                    "link": "/training/throws",
                    "plan": "https://docs.google.com/document/d/e/2PACX-1vSFsGwbQmx_GCUNEOZkhJILlxIhLegerAP3jB-9SbTuBNqCOdEmATLuEg9OH5IBggHdKLudXZJcdcbQ/pub?embedded=true",
                    "image": require("../header/images/field_selector.jpg")
                }
            ]
        }
    ],
    "community": [
        {
            "name": "COMMUNITY",
            "curtain": true
        },
        {
            "sections": [
                {
                    "id": 0,
                    "name": "Socials",
                    "link": "/community/socials",
                    "image": require("../header/images/socials_selector.jpg")
                },
                {
                    "id": 1,
                    "name": "Traditions",
                    "link": "/community/traditions",
                    "image": require("../header/images/traditions_selector.jpg")
                }
            ]
        }
    ],
    "about": [
        {
            "name": "Forms",
            "link": "/about/"
        }
    ]
}
export default navData;