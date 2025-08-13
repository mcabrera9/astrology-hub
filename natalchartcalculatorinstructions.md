# Natal Chart Calculator instructions

This application is a demo for an application that calculates a natal chart from user input.

Due to API limitations, the input has been limited to input based in Chicago.

## Commands
Enter the following command to run the API.
`node server.js`

## Shape of Calculator Response

`{
"input": {
"date": "2025-08-05",
"time": "19:28",
"location": "Chicago, USA"
},
"geocoded": {
"lat": 41.8781,
"lon": -87.6298,
"tz": "America/Chicago",
"offsetHours": -5
},
"planets": {
"statusCode": 200,
"input": {
"year": 2025,
"month": 8,
"date": 5,
"hours": 19,
"minutes": 28,
"seconds": 0,
"latitude": 41.8781,
"longitude": -87.6298,
"timezone": -5
},
"output": [
{
"0": {
"name": "Ascendant",
"fullDegree": 279.2819577664449,
"normDegree": 9.281957766444918,
"isRetro": "false",
"current_sign": 10
},
"1": {
"name": "Sun",
"fullDegree": 109.61230071686423,
"normDegree": 19.612300716864226,
"isRetro": "false",
"current_sign": 4,
"house_number": 7
},
"2": {
"name": "Moon",
"fullDegree": 250.0543300255928,
"normDegree": 10.054330025592805,
"isRetro": "false",
"current_sign": 9,
"house_number": 12
},
"3": {
"name": "Mars",
"fullDegree": 155.20401899586602,
"normDegree": 5.204018995866022,
"isRetro": "false",
"current_sign": 6,
"house_number": 9
},
"4": {
"name": "Mercury",
"fullDegree": 101.48291585595719,
"normDegree": 11.482915855957188,
"isRetro": "true",
"current_sign": 4,
"house_number": 7
},
"5": {
"name": "Jupiter",
"fullDegree": 78.57835010863333,
"normDegree": 18.57835010863333,
"isRetro": "false",
"current_sign": 3,
"house_number": 6
},
"6": {
"name": "Venus",
"fullDegree": 72.58889730721721,
"normDegree": 12.58889730721721,
"isRetro": "false",
"current_sign": 3,
"house_number": 6
},
"7": {
"name": "Saturn",
"fullDegree": 337.2268534985354,
"normDegree": 7.226853498535377,
"isRetro": "true",
"current_sign": 12,
"house_number": 3
},
"8": {
"name": "Rahu",
"fullDegree": 325.79486525493894,
"normDegree": 25.79486525493894,
"isRetro": "true",
"current_sign": 11,
"house_number": 2
},
"9": {
"name": "Ketu",
"fullDegree": 145.79486525493886,
"normDegree": 25.794865254938856,
"isRetro": "true",
"current_sign": 5,
"house_number": 8
},
"10": {
"name": "Uranus",
"fullDegree": 36.87265095541001,
"normDegree": 6.872650955410009,
"isRetro": "false",
"current_sign": 2,
"house_number": 5
},
"11": {
"name": "Neptune",
"fullDegree": 337.6901164535639,
"normDegree": 7.690116453563917,
"isRetro": "true",
"current_sign": 12,
"house_number": 3
},
"12": {
"name": "Pluto",
"fullDegree": 278.0886280639065,
"normDegree": 8.088628063906526,
"isRetro": "true",
"current_sign": 10,
"house_number": 1
},
"13": {
"name": "ayanamsa",
"value": 24.210511128085574
},
"debug": {
"observation_point": "topocentric",
"ayanamsa": "lahiri"
}
},
{
"Ascendant": {
"current_sign": 10,
"fullDegree": 279.2819577664449,
"normDegree": 9.281957766444918,
"isRetro": "false"
},
"Sun": {
"current_sign": 4,
"house_number": 7,
"fullDegree": 109.61230071686423,
"normDegree": 19.612300716864226,
"isRetro": "false"
},
"Moon": {
"current_sign": 9,
"house_number": 12,
"fullDegree": 250.0543300255928,
"normDegree": 10.054330025592805,
"isRetro": "false"
},
"Mars": {
"current_sign": 6,
"house_number": 9,
"fullDegree": 155.20401899586602,
"normDegree": 5.204018995866022,
"isRetro": "false"
},
"Mercury": {
"current_sign": 4,
"house_number": 7,
"fullDegree": 101.48291585595719,
"normDegree": 11.482915855957188,
"isRetro": "true"
},
"Jupiter": {
"current_sign": 3,
"house_number": 6,
"fullDegree": 78.57835010863333,
"normDegree": 18.57835010863333,
"isRetro": "false"
},
"Venus": {
"current_sign": 3,
"house_number": 6,
"fullDegree": 72.58889730721721,
"normDegree": 12.58889730721721,
"isRetro": "false"
},
"Saturn": {
"current_sign": 12,
"house_number": 3,
"fullDegree": 337.2268534985354,
"normDegree": 7.226853498535377,
"isRetro": "true"
},
"Rahu": {
"current_sign": 11,
"house_number": 2,
"fullDegree": 325.79486525493894,
"normDegree": 25.79486525493894,
"isRetro": "true"
},
"Ketu": {
"current_sign": 5,
"house_number": 8,
"fullDegree": 145.79486525493886,
"normDegree": 25.794865254938856,
"isRetro": "true"
},
"Uranus": {
"current_sign": 2,
"house_number": 5,
"fullDegree": 36.87265095541001,
"normDegree": 6.872650955410009,
"isRetro": "false"
},
"Neptune": {
"current_sign": 12,
"house_number": 3,
"fullDegree": 337.6901164535639,
"normDegree": 7.690116453563917,
"isRetro": "true"
},
"Pluto": {
"current_sign": 10,
"house_number": 1,
"fullDegree": 278.0886280639065,
"normDegree": 8.088628063906526,
"isRetro": "true"
}
}
]
}
}`
