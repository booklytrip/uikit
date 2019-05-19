import { map, range } from 'lodash';

export const airports = [
    {
        iata: 'LHR',
        icao: '',
        name: 'Heathrow',
        city: 'London',
        cityCode: 'LON',
        country: 'United Kingdom',
        countryCode: 'GB',
        shift: false,
    },
    {
        iata: 'STN',
        icao: '',
        name: 'Stansted',
        city: 'London',
        cityCode: 'LON',
        country: 'United Kingdom',
        countryCode: 'GB',
        shift: true,
    },
    {
        iata: 'LGW',
        icao: '',
        name: 'Gatwick',
        city: 'London',
        cityCode: 'LON',
        country: 'United Kingdom',
        countryCode: 'GB',
        shift: true,
    },
    {
        iata: '',
        icao: 'EBBX',
        name: 'Bertrix',
        city: 'Bertrix',
        country: 'Belgium',
        countryCode: 'BE',
    },
    {
        iata: 'TMT',
        icao: 'SBTB',
        name: 'Trombetas',
        city: 'Oriximina',
        country: 'Brazil',
        countryCode: 'BR',
    },
    {
        iata: 'AUA',
        icao: 'TNCA',
        name: 'Reina Beatrix Intl',
        city: 'Oranjestad',
        country: 'Aruba',
        countryCode: 'AW',
    },
];

export const priceMatrix = {
    data: {
        '2016-08-05': {
            '2016-08-02': [300],
        },
        '2016-08-06': {
            '2016-08-01': [100],
        },
        '2016-08-07': {
            '2016-08-01': [200],
            '2016-08-02': [500],
        },
        '2016-08-08': {
            '2016-08-04': [400],
        },
        '2016-08-09': {
            '2016-08-03': [450],
        },
    },
    min: 100,
    max: 500,
    rows: [
        '2016-08-05',
        '2016-08-06',
        '2016-08-07',
        '2016-08-08',
        '2016-08-09',
    ],
    columns: ['2016-08-01', '2016-08-02', '2016-08-03', '2016-08-04'],
};

export const checkboxListOptions = map(range(0, 10), idx => ({
    name: `item${idx}`,
    label: `Item ${idx}`,
    checked: idx % 2 === 0,
    details: `00${idx}`,
}));
