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
        x: 6,
        y: 0,
        z: -32,
        r: 0.8,
        camera: [10, 6, 10],
        location: 30,
        name: 'thirty'
    },
    {
        x: -10,
        y: 0,
        z: -41,
        r: 0.8,
        camera: [10, 6, 10],
        location: 13,
        name: 'thirteen'
    },
    {
        x: 7.9,
        y: 0,
        z: -39,
        r: 0.8,
        camera: [10, 6, 10],
        location: 32,
        name: 'thirty two'
    },
    {
        x: 8.6,
        y: 0,
        z: -48,
        r: 0.8,
        camera: [10, 6, 10],
        location: 34,
        name: 'thirty four'
    },
    {
        x: 9.3,
        y: 0,
        z: -52,
        r: 0.8,
        camera: [10, 6, 10],
        location: 35,
        name: 'thirty five'
    },
    {
        x: 10,
        y: 0,
        z: -64,
        r: 0.8,
        camera: [10, 6, 10],
        location: 37,
        name: 'thirty seven'
    },
    {
        x: 4,
        y: 0,
        z: -59,
        r: 0.8,
        camera: [10, 6, 10],
        location: 40,
        name: 'forty'
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
        x: -0.95,
        y: 0,
        z: -26,
        l: 3,
        camera: [10, 6, 10],
        location: 9,
        name: 'nine',
        d: null
    },
    {
        x: 2.7,
        y: 0,
        z: -27.4,
        l: 3,
        camera: [10, 6, 10],
        location: 10,
        name: 'ten',
        d: Math.PI / -5.5
    },
    {
        x: 4.9,
        y: 0,
        z: -26,
        l: 3,
        camera: [10, 6, 10],
        location: 11,
        name: 'eleven',
        d: Math.PI / -7
    },
    {
        x: -7.4,
        y: 0,
        z: -31,
        l: 3,
        camera: [10, 6, 10],
        location: 12,
        name: 'twelve',
        d: Math.PI / 13
    },
    {
        x: -3.5,
        y: 0,
        z: -37.2,
        l: 3,
        camera: [10, 6, 10],
        location: 39,
        name: 'thirty nine',
        d: Math.PI / 3.5
    },
    {
        x: 7.1,
        y: 0,
        z: -35.2,
        l: 3,
        camera: [10, 6, 10],
        location: 31,
        name: 'thirty one',
        d: Math.PI / -0.95
    },
    {
        x: 8.1,
        y: 0,
        z: -43.5,
        l: 3,
        camera: [10, 6, 10],
        location: 33,
        name: 'thirty three',
        d: Math.PI / 0.99
    },
    {
        x: 9.4,
        y: 0,
        z: -58.5,
        l: 3,
        camera: [10, 6, 10],
        location: 36,
        name: 'thirty six',
        d: Math.PI / -0.98
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
    }
];

let curves = [
    {
        r: 0.2,
        c: [
            [0, 0, -22],
            [-5, 0, -25],
            [-10, 0, -41],
        ],
        d: null
    },
    {
        r: 0.2,
        c: [
            [0, 0, -22],
            [0.2, 0, -23],
            [2.4, 0, -27],
            [6, 0, -32],
        ],
        d: null
    },
    {
        r: 0.2,
        c: [
            [0, 0, -22],
            [3, 0, -23],
            [6, 0, -29],
            [6, 0, -32],
        ],
        d: null
    },
    {
        r: 0.2,
        c: [
            [0, 0, -30],
            [-2, 0, -36],
            [-10, 0, -41],
        ],
        d: null
    },
    {
        r: 0.2,
        c: [
            [0, 0, -22],
            [-1.1, 0, -26],
            [0, 0, -30],
        ],
        d: null
    },
    {
        r: 0.2,
        c: [
            [2.4, 0, -26.5],
            [1, 0, -29],
            [0, 0, -30],
        ],
        d: null
    },
    {
        r: 0.2,
        c: [
            [6, 0, -32],
            [6.6, 0, -33],
            [7, 0, -34],
        ],
        d: null
    },
    {
        r: 0.2,
        c: [
            [7.2, 0, -36.5],
            [7.5, 0, -38],
            [7.9, 0, -39],
        ],
        d: null
    },
    {
        r: 0.2,
        c: [
            [7.9, 0, -39],
            [3, 0, -36.5],
            [-3.5, 0, -37.5],
        ],
        d: null
    },
    {
        r: 0.2,
        c: [
            [7.9, 0, -39],
            [8.2, 0, -42],
            [8, 0, -45],
            [8.6, 0, -48],
        ],
        d: null
    },
    {
        r: 0.2,
        c: [
            [8.7, 0, -48],
            [9, 0, -50],
            [9.3, 0, -52],
        ],
        d: null
    },
    {
        r: 0.2,
        c: [
            [9.3, 0, -52],
            [9.3, 0, -57],
            [10, 0, -64],
        ],
        d: null
    },
    {
        r: 0.2,
        c: [
            [7.9, 0, -39],
            [5, 3, -51],
            [4, 0, -59],
        ],
        d: null
    },
    {
        r: 0.2,
        c: [
            [-3.5, 0, -37.2],
            [2, 2, -43],
            [9.3, 0, -52],
        ],
        d: null
    },
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
