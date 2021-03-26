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
        location: 8,
        name: 'eight'
    },
    {
        x: 0,
        y: 0,
        z: -30,
        r: 0.8,
        camera: [10, 6, 10],
        location: 38,
        name: 'thirty eight'
    },
    {
        x: 4.8,
        y: 0,
        z: -32,
        r: 0.8,
        camera: [10, 6, 10],
        location: 38,
        name: 'thirty eight'
    },
];

let boxes = [
    {
        x: 0,
        y: 0,
        z: -3,
        l: 3,
        camera: [10, 6, 10],
        location: 1,
        name: 'one',
        d: null
    },
    {
        x: -2,
        y: 0,
        z: -10,
        l: 3,
        camera: [10, 6, 10],
        location: 3,
        name: 'three',
        d: null
    },
    {
        x: 2,
        y: 0,
        z: -10,
        l: 3,
        camera: [10, 6, 10],
        location: 4,
        name: 'four',
        d: null
    },
    {
        x: -2,
        y: 0,
        z: -18,
        l: 3,
        camera: [10, 6, 10],
        location: 6,
        name: 'six',
        d: null
    },
    {
        x: 2,
        y: 0,
        z: -18,
        l: 3,
        camera: [10, 6, 10],
        location: 7,
        name: 'seven',
        d: null
    },
    {
        x: -1,
        y: 0,
        z: -26,
        l: 3,
        camera: [10, 6, 10],
        location: 9,
        name: 'nine',
        d: null
    },
    {
        x: 2.2,
        y: 0,
        z: -26.5,
        l: 3,
        camera: [10, 6, 10],
        location: 10,
        name: 'ten',
        d: Math.PI / -7
    },
    {
        x: 5,
        y: 0,
        z: -26,
        l: 3,
        camera: [10, 6, 10],
        location: 10,
        name: 'ten',
        d: Math.PI / -6
    },
];

let connectors = [
    {
        x: 0,
        y: 0,
        z: -3,
        r: 0.2,
        l: 6,
        d: null
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
    {
        x: -0.6,
        y: 0,
        z: -23.5,
        r: 0.2,
        l: 3,
        d: Math.PI / -9
    },
    {
        x: 2.4,
        y: 0,
        z: -27,
        r: 0.2,
        l: 10,
        d: Math.PI / 7
    },
    {
        x: 2.5,
        y: 0,
        z: -23.5,
        r: 0.2,
        l: 5,
        d: Math.PI / 3.3
    },
    {
        x: 5.4,
        y: 0,
        z: -29.5,
        r: 0.2,
        l: 5,
        d: Math.PI / -20
    },
    {
        x: -0.6,
        y: 0,
        z: -28.5,
        r: 0.2,
        l: 3,
        d: Math.PI / 9
    },
    {
        x: 1.2,
        y: 0,
        z: -28,
        r: 0.2,
        l: 4,
        d: Math.PI / -6.8
    },
];

let curves = [
    {
        x: 0,
        y: 0,
        z: 0,
        r: 0.2,
        l: 4,
        c: 0,
        d: null
    }
];

let legs = [
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
