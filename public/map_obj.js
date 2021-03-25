let balls = [
    {
        x: 0,
        y: 0,
        z: 0,
        r: 0.8,
        camera: [10, 6, 10],
        location: 0,
        name: 'zero'
    },
    {
        x: 0,
        y: 0,
        z: -6,
        r: 0.8,
        camera: [10, 6, 10],
        location: 2,
        name: 'two'
    },
    {
        x: 0,
        y: 0,
        z: -14,
        r: 0.8,
        camera: [10, 6, 10],
        location: 5,
        name: 'five'
    },
    {
        x: 0,
        y: 0,
        z: -22,
        r: 0.8,
        camera: [10, 6, 10],
        location: 5,
        name: 'five'
    },
    // {
    //     x: 0,
    //     y: 0,
    //     z: -2,
    //     r: 0.75,
    //     camera: [10, 6, 10],
    //     location: 7,
    //     name: 'Strut G - Oil Pressure Facility'
    // },
    // {
    //     x: 0,
    //     y: 0,
    //     z: 6,
    //     r: 1.25,
    //     camera: [10, 6, 10],
    //     location: 6,
    //     name: 'Shell 1 Core'
    // },
    // {
    //     x: 0,
    //     y: 0,
    //     z: -6,
    //     r: 1.25,
    //     camera: [10, 6, 10],
    //     location: 13,
    //     name: 'Shell 2 Core'
    // },
    // {
    //     x: 0,
    //     y: 0,
    //     z: 10,
    //     r: 0.75,
    //     camera: [10, 6, 10],
    //     location: 0,
    //     name: 'Strut A - Pump Room'
    // },
    // {
    //     x: 0,
    //     y: 0,
    //     z: -10,
    //     r: 0.75,
    //     camera: [10, 6, 10],
    //     location: 10,
    //     name: 'Strut J - Power Plant'
    // },
    // {
    //     x: 3,
    //     y: 0,
    //     z: 4,
    //     r: 0.75,
    //     camera: [10, 6, 10],
    //     location: 4,
    //     name: 'Strut E - Heliport and Parcel Room'
    // },
    // {
    //     x: 3,
    //     y: 0,
    //     z: -4,
    //     r: 0.75,
    //     camera: [10, 6, 10],
    //     location: 12,
    //     name: 'Strut L - Sewage Treatment Facility'
    // },
    // {
    //     x: -3,
    //     y: 0,
    //     z: 4,
    //     r: 0.75,
    //     camera: [10, 6, 10],
    //     location: 2,
    //     name: 'Strut C - Dining Hall'
    // },
    // {
    //     x: -3,
    //     y: 0,
    //     z: -4,
    //     r: 0.75,
    //     camera: [10, 6, 10],
    //     location: 8,
    //     name: 'Strut H - Warehouse and Heliport'
    // },
    // {
    //     x: 3,
    //     y: 0,
    //     z: 8,
    //     r: 0.75,
    //     camera: [10, 6, 10],
    //     location: 5,
    //     name: 'Strut F - Warehouse'
    // },
    // {
    //     x: 3,
    //     y: 0,
    //     z: -8,
    //     r: 0.75,
    //     camera: [10, 6, 10],
    //     location: 11,
    //     name: 'Strut K - Biochem Lab'
    // },
    // {
    //     x: -3,
    //     y: 0,
    //     z: 8,
    //     r: 0.75,
    //     camera: [10, 6, 10],
    //     location: 1,
    //     name: 'Strut B - Transformer Room'
    // },
    // {
    //     x: -3,
    //     y: 0,
    //     z: -8,
    //     r: 0.75,
    //     camera: [10, 6, 10],
    //     location: 9,
    //     name: 'Strut I - Assembley Facility'
    // }
];

let boxes = [
    {
        x: 0,
        y: 0,
        z: -3,
        l: 3,
        camera: [10, 6, 10],
        location: 1,
        name: 'one'
    },
    {
        x: -2,
        y: 0,
        z: -10,
        l: 3,
        camera: [10, 6, 10],
        location: 3,
        name: 'three'
    },
    {
        x: 2,
        y: 0,
        z: -10,
        l: 3,
        camera: [10, 6, 10],
        location: 4,
        name: 'four'
    },
    {
        x: -2,
        y: 0,
        z: -18,
        l: 3,
        camera: [10, 6, 10],
        location: 3,
        name: 'three'
    },
    {
        x: 2,
        y: 0,
        z: -18,
        l: 3,
        camera: [10, 6, 10],
        location: 4,
        name: 'four'
    },
];

let connectors = [
    {
        x: 0,
        y: 0,
        z: -3,
        r: 0.2,
        l: 6,
        d: Math.PI
    },
    {
        x: -1.2,
        y: 0,
        z: -7.5,
        r: 0.2,
        l: 3,
        d: Math.PI / -4.8
    },
    {
        x: 1.2,
        y: 0,
        z: -7.5,
        r: 0.2,
        l: 3,
        d: Math.PI / 4.8
    },
    {
        x: -1.2,
        y: 0,
        z: -12.5,
        r: 0.2,
        l: 3,
        d: Math.PI / 4.8
    },
    {
        x: 1.2,
        y: 0,
        z: -12.5,
        r: 0.2,
        l: 3,
        d: Math.PI / -4.8
    },
    {
        x: -1.2,
        y: 0,
        z: -15.5,
        r: 0.2,
        l: 3,
        d: Math.PI / -4.8
    },
    {
        x: 1.2,
        y: 0,
        z: -15.5,
        r: 0.2,
        l: 3,
        d: Math.PI / 4.8
    },
    {
        x: -1.2,
        y: 0,
        z: -20.5,
        r: 0.2,
        l: 3,
        d: Math.PI / 4.8
    },
    {
        x: 1.2,
        y: 0,
        z: -20.5,
        r: 0.2,
        l: 3,
        d: Math.PI / -4.8
    },
    // {
    //     x: 0,
    //     y: 0,
    //     z: -6,
    //     r: 0.2,
    //     l: 6,
    //     d: Math.PI / 2
    // },
    // {
    //     x: 0,
    //     y: 0,
    //     z: 0,
    //     r: 0.2,
    //     l: 3,
    //     d: null
    // },
    // {
    //     x: 3,
    //     y: 0,
    //     z: 6,
    //     r: 0.2,
    //     l: 3,
    //     d: null
    // },
    // {
    //     x: 3,
    //     y: 0,
    //     z: -6,
    //     r: 0.2,
    //     l: 3,
    //     d: null
    // },
    // {
    //     x: -3,
    //     y: 0,
    //     z: 6,
    //     r: 0.2,
    //     l: 3,
    //     d: null
    // },
    // {
    //     x: -3,
    //     y: 0,
    //     z: -6,
    //     r: 0.2,
    //     l: 3,
    //     d: null
    // },
    // {
    //     x: -1.5,
    //     y: 0,
    //     z: 9,
    //     r: 0.2,
    //     l: 3,
    //     d: Math.PI / -3.5
    // },
    // {
    //     x: -1.5,
    //     y: 0,
    //     z: -9,
    //     r: 0.2,
    //     l: 3,
    //     d: Math.PI / 3.5
    // },
    // {
    //     x: 1.5,
    //     y: 0,
    //     z: 9,
    //     r: 0.2,
    //     l: 3,
    //     d: Math.PI / 3.5
    // },
    // {
    //     x: 1.5,
    //     y: 0,
    //     z: -9,
    //     r: 0.2,
    //     l: 3,
    //     d: Math.PI / -3.5
    // },
    // {
    //     x: -1.5,
    //     y: 0,
    //     z: 3,
    //     r: 0.2,
    //     l: 3,
    //     d: Math.PI / 3.5
    // },
    // {
    //     x: -1.5,
    //     y: 0,
    //     z: -3,
    //     r: 0.2,
    //     l: 3,
    //     d: Math.PI / -3.5
    // },
    // {
    //     x: 1.5,
    //     y: 0,
    //     z: 3,
    //     r: 0.2,
    //     l: 3,
    //     d: Math.PI / -3.5
    // },
    // {
    //     x: 1.5,
    //     y: 0,
    //     z: -3,
    //     r: 0.2,
    //     l: 3,
    //     d: Math.PI / 3.5
    // },
];

legs = [
    {
        x: 0,
        y: -1,
        z: 2,
        r: 0.2,
        l: 2
    },
    {
        x: 0,
        y: -1,
        z: -2,
        r: 0.2,
        l: 2
    },
    // {
    //     x: 0,
    //     y: -1.5,
    //     z: 6,
    //     r: 0.3,
    //     l: 3
    // },
    // {
    //     x: 0,
    //     y: -1.5,
    //     z: -6,
    //     r: 0.3,
    //     l: 3
    // },
    {
        x: 0,
        y: -1,
        z: 10,
        r: 0.2,
        l: 2
    },
    {
        x: 0,
        y: -1,
        z: -10,
        r: 0.2,
        l: 2
    },
    {
        x: 3,
        y: -1,
        z: 8,
        r: 0.2,
        l: 2
    },
    {
        x: 3,
        y: -1,
        z: -8,
        r: 0.2,
        l: 2
    },
    {
        x: -3,
        y: -1,
        z: 8,
        r: 0.2,
        l: 2
    },
    {
        x: -3,
        y: -1,
        z: -8,
        r: 0.2,
        l: 2
    },
    {
        x: 3,
        y: -1,
        z: 4,
        r: 0.2,
        l: 2
    },
    {
        x: 3,
        y: -1,
        z: -4,
        r: 0.2,
        l: 2
    },
    {
        x: -3,
        y: -1,
        z: 4,
        r: 0.2,
        l: 2
    },
    {
        x: -3,
        y: -1,
        z: -4,
        r: 0.2,
        l: 2
    },
];