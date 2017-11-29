var pageTitle = "Lacerra Family Timeline";

var filterTitle = "";

var entries = [
    {
        sort_date: 1856,
        display_date: `1856 or 1860, February 12`,
        event: `Felice "Grandpa" Lacerra born in Italy`,
        people: [
            "Felice Lacerra"
        ]
    },
    {
        sort_date: 1863,
        display_date: `1863, July`,
        event: `Lucia "Grandma' Lacerra (nee Natale?) born in Italy`,
        people: [
            "Lucia Lacerra"
        ]
    },
    {
        sort_date: 1878,
        display_date: `1878, about`,
        event: `Felice and Lucia Lacerra married in Italy`,
        people: [
            "Felice Lacerra", "Lucia Lacerra"
        ]
    },
    {
        sort_date: 1879,
        display_date: `1879, October 27`,
        event: `Felice and Lucia Lacerra arrive in New York Harbor through Castle Garden coming from Italy`,
        emphasis: true,
        image: {
            filename: "lacerra_manifest.png",
            caption: `Felice and Lucia Lacerra recorded aboard the RMS City of Chester`,
            width: 50,
        },
        people: [
            "Felice Lacerra", "Lucia Lacerra"
        ]
    },
    {
        sort_date: 1879.1,
        display_date: `1879`,
        event: `Felice and Lucia Lacerra move into an apartment in Little Italy, New York at corner of Mott Street and Pell Street`,
        people: [
            "Felice Lacerra", "Lucia Lacerra"
        ]
    },
    {
        sort_date: 1883,
        display_date: `1883 or 1893, March 31`,
        event: `James "Poppy" Cherry born at Mott & Pell Street, New York, New York`,
        people: [
            "James Cherry"
        ]
    },
    {
        sort_date: 1896,
        display_date: `Late 1800s`,
        event: `Felice "Grandpa" Lacerra and wife Lucia "Grandma" Lacerra move corner of Mott Street and Pell Street in Little Italy, New York to 12 Laurel Hill Avenue, Sunnyside, New York`,
        people: [
            "Felice Lacerra", "Lucia Lacerra"
        ]
    },
    {
        sort_date: 1896.5,
        display_date: `Late 1800s`,
        event: `Felice "Grandpa" Lacerra and Lucia "Grandma" Lacerra buy one family house in 41-48 43rd Street, Sunnyside, New York`,
        people: [
            "Felice Lacerra", "Lucia Lacerra"
        ]
    },
    {
        sort_date: 1897,
        display_date: `1897, November 27`,
        event: `Julia Lacerra (sister of James "Poppy" Cherry) born in New York`,
        people: [
            "Julia Lacerra"
        ]
    },
    {
        sort_date: 1899.1,
        display_date: `1899, January 3`,
        event: `Matilda "Nana" Cherry (nee Pratt) born`,
        people: [
            "Matilda Cherry"
        ],
        image: {
            filename: "1900_census_pratts.png",
            caption: `The Pratt family in the 1900 U.S. census.`,
            width: 80,
        },
    },
    {
        sort_date: 1899.2,
        display_date: `1899, February 5`,
        event: `Matilda "Nana" Cherry (nee Pratt) baptized in St. Cecilia's Church, 84 Herbert Street, Greenpoint, Brooklyn, New York`,
        people: [
            "Matilda Cherry"
        ]
    },
    {
        sort_date: 1899.9,
        display_date: `1899, December 19`,
        event: `Felice and Lucia Lacerra become naturalized citizens of USA, are living at 11 Laurel Hill Avenue at the time in Sunnyside, Queens, New York`,
        people: [
            "Felice Lacerra", "Lucia Lacerra"
        ],
        emphasis: true,
        image: {
            filename: "felice_lacerra_petition.png",
            caption: `A selection from Felice Lacerra's petition for naturalization.`,
            width: 80,
        },
    },
    {
        sort_date: 1900,
        display_date: `1900, June 1/2`,
        event: `Twelfth Census of the United States conducted Lacerra Family lived at 12 Laurel Hill Avenue which they owned, Felice "Grandpa" Lacerra is listed as a Day Laborer and under the Americanized "Philip Lazarro"`,
        people: [
            "Felice Lacerra", "Lucia Lacerra", "James Cherry",
            "Julia Lacerra",
        ]
    },
    {
        sort_date: 1918.1,
        display_date: `1918, April 8`,
        event: `Julia Lacerra (sister of James "Poppy" Cherry) died at 12 Laurel Hill Avenue, Sunnyside, New York`,
        people: [
            "Julia Lacerra"
        ]
    },
    {
        sort_date: 1918.2,
        display_date: `1918, April 13`,
        event: `Julia Lacerra (sister of James "Poppy" Cherry) buried at Calvery Cemetery, Calvary I in Long Island City, New York`,
        people: [
            "Julia Lacerra"
        ]
    },
    {
        sort_date: 1919,
        display_date: `1919, April 20`,
        event: `James "Poppy" Cherry and Matilda "Nana" (nee Pratt) married at St. Cecilia's Church, 84 Herbert Street, Brooklyn, New York`,
        people: [
            "James Cherry", "Matilda Cherry"
        ]
    },
    {
        sort_date: 1920,
        display_date: `1920s maybe 1928`,
        event: `Lacerra house in 41-48 43rd Street, Sunnyside, New York expanded from one family to two family by James "Poppy" Cherry and his father Felice "Grandpa" Lacerra`,
        people: [
            "Felice Lacerra", "James Cherry"
        ]
    },
    {
        sort_date: 1920.1,
        display_date: `1920, May 18`,
        event: `Marie Staszewski (nee Cherry) born in Brooklyn, New York`,
        people: [
            "Marie Staszewski"
        ]
    },
    {
        sort_date: 1924.1,
        display_date: `1924, January 13`,
        event: `George "Grandpa" Cherry born in Brooklyn, New York`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1924.2,
        display_date: `1924, January 27`,
        event: `George "Grandpa" Cherry baptized at St. Cecilia's Church 84 Herbert Street, Brooklyn, New York`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1925,
        display_date: `1925, April 25`,
        event: `Lucille "Lou" Powers (nee Cherry) born in Brooklyn, New York`,
        people: [
            "Lucille Powers"
        ]
    },
    {
        sort_date: 1927,
        display_date: `1927, September 18`,
        event: `Ruth Cherry (nee Scanlon) born in Shamokin, Pennsylvania`,
        people: [
            "Ruth Cherry"
        ]
    },
    {
        sort_date: 1928,
        display_date: `1927, December 16`,
        event: `Ruth Cherry (nee Scanlon) baptized at St. Joseph's Church in Shamokin, Pennsylvania`,
        people: [
            "Ruth Cherry"
        ]
    },
    {
        sort_date: 1930,
        display_date: `1930, January`,
        event: `George "Grandpa" Cherry began St. Cecilia's Elementary School`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1932.1,
        display_date: `1932, March 12`,
        event: `Felice "Grandpa" Lacerra died of a cerebral hemorrhage and arterosclerosis in Sunnyside, Queens, New York`,
        people: [
            "Felice Lacerra"
        ]
    },
    {
        sort_date: 1932.2,
        display_date: `1932, March 16`,
        event: `Felice "Grandpa" Lacerra is buried in Calvary Cemetery, Calvary I in Long Island City, New York`,
        people: [
            "Felice Lacerra"
        ]
    },
    {
        sort_date: 1933,
        display_date: `1933, January 13`,
        event: `Ralph Arecco born`,
        people: [
            "Ralph Arecco"
        ]
    },
    {
        sort_date: 1935,
        display_date: `1935 or 1938`,
        event: `Patricia "Pat" Arecco (nee Cherry) born in Brooklyn, New York`,
        people: [
            "Patricia Arecco"
        ]
    },
    {
        sort_date: 1936,
        display_date: `1936, January 10`,
        event: `James "Poppy" Cherry performed in Cherry Band at Volkert's Casino in Long Island City, New York`,
        people: [
            "James Cherry"
        ]
    },
    {
        sort_date: 1937.1,
        display_date: `1936, June`,
        event: `George "Grandpa" Cherry graduates from St. Cecilia's Elementary School`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1937,
        display_date: `1937, September`,
        event: `George "Grandpa" Cherry began at Brooklyn Automotive High School`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1941,
        display_date: `1941, January`,
        event: `George "Grandpa" Cherry left Brooklyn Automotive High School in his junior year, with no diploma`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1941.1,
        display_date: `1941, January`,
        event: `George "Grandpa" Cherry went into Civilian Conservation Corps (CCC's) and worked planting trees and doing soil conservation in Gallupville, New York (until July 1941)`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1941.5,
        display_date: `1941, July`,
        event: `George "Grandpa" Cherry worked as a Machine Operator on Lithographing for the Meritt Bros Company on Mulberry Street in Manhattan, New York (until August 1942)`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1941.9,
        display_date: `1941, December 7`,
        event: `Japanese bomb Pearl Harbor, World War II begins`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1942,
        display_date: `1942, August`,
        event: `George "Grandpa" Cherry worked as a Machine Operator on Lithographic for the Einson Freeman Company in Long Island City, New York`,
        people: [
            "George Cherry"
        ],
        image: {
            filename: "einson_freeman_ad.png",
            caption: `A 1945 Einson-Freeman want ad for a machine operator.`,
            width: 50,
        },
    },
    {
        sort_date: 1943,
        display_date: `1943, February 18`,
        event: `George "Grandpa" Cherry date of induction to US Army`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1943,
        display_date: `1943, February 25`,
        event: `George "Grandpa" Cherry date of entry into Active Duty Service in US Army`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1943.7,
        display_date: `1943, July 30`,
        event: `George "Grandpa" Cherry date of departure for Mediterranean Theatre of Operation (MTO) on Empress of Scotland`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1943.8,
        display_date: `1943, August 6`,
        event: `George "Grandpa" Cherry date of arrival for MTO`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1943.9,
        display_date: `1943, December 7`,
        event: `Lawrence "Larry" Towers born`,
        people: [
            "Lawrence Towers"
        ]
    },
    {
        sort_date: 1944,
        display_date: `1944, August 10`,
        event: `George "Grandpa" Cherry date of departure for European Theatre of Operation (ETO)`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1944,
        display_date: `1944, August 15`,
        event: `George "Grandpa" Cherry date of arrival for ETO`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1945.1,
        display_date: `1945, May 7/8`,
        event: `V-E Day World War II`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1945.2,
        display_date: `1945, September 2nd`,
        event: `V-J Day World War II`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1945.3,
        display_date: `1945, November 13`,
        event: `George "Grandpa" Cherry date of departure for USA`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1945.4,
        display_date: `1945, November 24`,
        event: `George "Grandpa" Cherry date of arrival for USA`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1945.5,
        display_date: `1945, December 3`,
        event: `George "Grandpa" Cherry date of Honorable Discharge for US Army`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1945.6,
        display_date: `1945, December`,
        event: `George "Grandpa" Cherry unemployed (until April 1946)`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1946,
        display_date: `1946, April`,
        event: `George "Grandpa" Cherry worked as a Truck Helper for Meyer's Wood Delivery in Ridgewood, Queens, New York (until June 1946)`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1946,
        display_date: `1946, June`,
        event: `George "Grandpa" Cherry worked as a Machine Operator at Victor Metals Corporation at 195 Diamond Street, Brooklyn, New York (until June 1947)`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1947,
        display_date: `1947, June`,
        event: `George "Grandpa" Cherry unemployed (until September 1947)`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1947,
        display_date: `1947, September`,
        event: `George "Grandpa" Cherry worked as a Machine Operator at American Manufacturing Company at Noble & West Street in Brooklyn, New York (until May 1954)`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1948,
        display_date: `1948, September 5`,
        event: `George "Grandpa" Cherry and Ruth (nee Scanlon) married at St. Alphonsus Church, 177 Kent Street, Brooklyn, New York`,
        people: [
            "George Cherry", "Ruth Cherry"
        ]
    },
    {
        sort_date: 1949,
        display_date: `1949, June 28`,
        event: `Bill Staszewski born in Brooklyn, New York`,
        people: [
            "Bill Staszewski"
        ]
    },
    {
        sort_date: 1950,
        display_date: `1950, April 5`,
        event: `Christine "Chris" Towers (nee Cherry) born in New York`,
        people: [
            "Christine Towers"
        ]
    },
    {
        sort_date: 1951,
        display_date: `1951`,
        event: `Lucia "Grandma" Lacerra still alive as per birthday photo`,
        people: [
            "Lucia Lacerra"
        ]
    },
    {
        sort_date: 1954,
        display_date: `1954, February 17`,
        event: `Vincent Cooney, father of Geraldine LaCherra (nee Cooney) arrives in America through New York Harbor aboard the RMS Scythia traveling from his home in Tierlahood, Stradone, County Cavan, Ireland`,
        people: [
            "Vincent Cooney"
        ],
        emphasis: true,
        image: {
            filename: "scythia_berth.jpg",
            caption: `A "berthing card" issued to a passenger, to assign them a particular bunk aboard the Scythia.`,
            width: 50,
        },
    },
    {
        sort_date: 1954,
        display_date: `1954, May`,
        event: `George "Grandpa" Cherry worked as a Machine Operator Lead Man at American Seal-Kap Corporation which became Haskon at 11-05 44th Drive, Long Island City, New York (until September 1965)`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1955,
        display_date: `1955, September`,
        event: `Mary "Maureen" Cooney, mother of Geraldine LaCherra (nee Cooney) arrives in America to join her fiance Vincent Cooney, she comes through Idlewild Airport on board a KLM Airlines flight traveling from her home in Crossmolina, County Mayo, Ireland`,
        people: [
            "Mary Cooney"
        ],
        emphasis: true,
    },
    {
        sort_date: 1956.1,
        display_date: `1956, April`,
        event: `George "Grandpa" Cherry and Ruth Cherry (nee Scanlon) move into apartment at 183 Meserole Avenue, Brooklyn, New York`,
        people: [
            "George Cherry", "Ruth Cherry"
        ]
    },
    {
        sort_date: 1956.2,
        display_date: `1956, Unknown Month 30`,
        event: `Lucia "Grandma" Lacerra died in New York`,
        people: [
            "Lucia Lacerra"
        ]
    },
    {
        sort_date: 1956.7,
        display_date: `1956, October 13`,
        event: `Diane Loesel/Korzeniewski (nee Cherry) born in New York`,
        people: [
            "Diane Korzeniewski"
        ]
    },
    {
        sort_date: 1958,
        display_date: `1958`,
        event: `James "Poppy" Cherry retires from Mobil Chemical Company, formerly Socony`,
        people: [
            "James Cherry"
        ]
    },
    {
        sort_date: 1958.1,
        display_date: `1958, January 21st`,
        event: `James "Jim" Cherry born in New York`,
        people: [
            "Jim Cherry"
        ]
    },
    {
        sort_date: 1958.2,
        display_date: `1958, June 11`,
        event: `Geraldine LaCherra (nee Cooney) born in New York`,
        people: [
            "Geraldine LaCherra"
        ]
    },
    {
        sort_date: 1963,
        display_date: `1963, February 14`,
        event: `Jannine Cherry (nee Shinnick) born in New York`,
        people: [
            "Jannine Cherry"
        ]
    },
    {
        sort_date: 1963,
        display_date: `1963, December 17`,
        event: `Ralph "Ray" Arecco born in New York`,
        people: [
            "Ray Arecco"
        ]
    },
    {
        sort_date: 1964,
        display_date: `1964, September`,
        event: `Geraldine LaCherra (nee Cooney) begins grammar school in 1st grade at St. Fidelis in College Point, Queens, New York`,
        people: [
            "Geraldine LaCherra"
        ]
    },
    {
        sort_date: 1965.5,
        display_date: `1965, September`,
        event: `George "Grandpa" Cherry worked as a Mechanic at American-Kap Corporation Sanita Paper Corporation at 840 E 134th Street, Bronx, New York (until February 1967)`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1965.55,
        display_date: `1965, September 16`,
        event: `Lori Cherry born in Brooklyn, New York`,
        people: [
            "Lori Cherry"
        ]
    },
    {
        sort_date: 1966.6,
        display_date: `1966, June`,
        event: `Bill Staszewski graduated from Sheepshead Bay High School in Sheepshead Bay, Brooklyn, New York`,
        people: [
            "Bill Staszewski"
        ]
    },
    {
        sort_date: 1967,
        display_date: `1967, February`,
        event: `George "Grandpa" Cherry worked as a Machine Operator at Hurley Envelope Company at 21-32 Borden Avenue, Long Island City, New York (until September 1969)`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1968,
        display_date: `1968, April 10`,
        event: `Sondra Arecco born in New York`,
        people: [
            "Sondra Arecco"
        ]
    },
    {
        sort_date: 1969,
        display_date: `1969, September`,
        event: `George "Grandpa" Cherry worked as a Subway Conductor for the New York City Transit Authority (until retirement)`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1970,
        display_date: `1970, February 2nd`,
        event: `Jenny Loesel's (nee Ciro) parents arrive in America, traveling from Bogota, Colombia to John F. Kennedy Airport in Queens, New York`,
        people: [
            "Jenny Loesel"
        ],
        emphasis: true,
    },
    {
        sort_date: 1970,
        display_date: `1970, March 4`,
        event: `James "Poppy" Cherry died in Williamsburgh General Hospital, Brooklyn, New York`,
        people: [
            "James Cherry"
        ]
    },
    {
        sort_date: 1970,
        display_date: `1970, March 7`,
        event: `James "Poppy" Cherry is buried in St. Charles Cemetery in Farmingdale, New York`,
        people: [
            "James Cherry"
        ]
    }
] 
