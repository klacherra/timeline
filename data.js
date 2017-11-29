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
        ]
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
        emphasis: true
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
        ]
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
        sort_date: 1960,
        display_date: `1960, September 25`,
        event: `John LaCherra born in New York`,
        people: [
            "John LaCherra"
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
        sort_date: 1966.9,
        display_date: `1966, September`,
        event: `John "Jack" LaCherra begins grammar school in 1st grade at St. Alphonsus in Greenpoint, Brooklyn, New York`,
        people: [
            "John LaCherra"
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
    },
    {
        sort_date: 1972.5,
        display_date: `1972, June`,
        event: `Geraldine LaCherra (nee Cooney) graduates from grammar school at St. Fidelis in College Point, Queens, New York`,
        people: [
            "Geraldine LaCherra"
        ]
    },
    {
        sort_date: 1972.8,
        display_date: `1972, September`,
        event: `James "Jim" Cherry enters St. Francis Prep High School in Fresh Meadows, Queens, New York`,
        people: [
            "Jim LaCherra"
        ]
    },
    {
        sort_date: 1972.85,
        display_date: `1972, September`,
        event: `Geraldine LaCherra (nee Cooney) enters St. Agnes Academic High School in College Point, Queens, New York`,
        people: [
            "Geraldine LaCherra"
        ]
    },
    {
        sort_date: 1972.9,
        display_date: `1972, December 19`,
        event: `John LaCherra died (brother of James "Poppy" Cherry)`,
        people: [
            "John LaCherra (brother of James)"
        ]
    },
    {
        sort_date: 1974.6,
        display_date: `1974, June`,
        event: `John "Jack" LaCherra graduated from grammar school at St. Alphonsus in Greenpoint, Brooklyn, New York`,
        people: [
            "John LaCherra"
        ]
    },
    {
        sort_date: 1974.9,
        display_date: `1974, September`,
        event: `John "Jack" LaCherra entered high school at New York School of Printing in Manhattan at 439 West 49th Street, New York, New York`,
        people: [
            "John LaCherra"
        ]
    },
    {
        sort_date: 1974.95,
        display_date: `1974, December 25`,
        event: `Cherry Family Party recording made by Christine "Chris" Towers`,
        people: [
            "Christine Towers"
        ]
    },
    {
        sort_date: 1976.1,
        display_date: `1976, June`,
        event: `James "Jim" Cherry graduates from St. Francis Prep High School in Fresh Meadows, Queens, New York`,
        people: [
            "Jim LaCherra"
        ]
    },
    {
        sort_date: 1976.11,
        display_date: `1976, June`,
        event: `Geraldine LaCherra (nee Cooney) graduates from St. Agnes Academic High School in College Point, Queens, New York`,
        people: [
            "Geraldine LaCherra"
        ]
    },
    {
        sort_date: 1976.2,
        display_date: `1976, August`,
        event: `Geraldine LaCherra (nee Cooney) enters CW Post in Nassau County, New York`,
        people: [
            "Geraldine LaCherra"
        ]
    },
    {
        sort_date: 1976.3,
        display_date: `1976 September- 1977 September`,
        event: `John "Jack" LaCherra worked at The Great Atlantic & Pacific Tea Company (A&P) in Greenpoint, Brooklyn, New York`,
        people: [
            "John LaCherra"
        ]
    },
    {
        sort_date: 1976.9,
        display_date: `1976, December 15`,
        event: `Mary DeTota (nee Lacerra) died (sister of James "Poppy" Cherry)`,
        people: [
            "Mary DeTota"
        ]
    },
    {
        sort_date: 1977.6,
        display_date: `1977, June 16`,
        event: `Wil "Billy" Loesel born in New York`,
        people: [
            "Wil Loesel"
        ]
    },
    {
        sort_date: 1977.7,
        display_date: `1977 September-1978 June`,
        event: `John "Jack" LaCherra worked in 2 different print shops as a working Senior with class until noon and work until 5pm during his Senior Year, the two shops were Enquire Printing at 59th & 10th Avenue and Albert's Printing at 148 West 23rd Street both in New York, New York`,
        people: [
            "John LaCherra"
        ]
    },
    {
        sort_date: 1977.75,
        display_date: `1977, September 25`,
        event: `Lacerra House in 41-48 43rd Street, Sunnyside, New York burns to the ground`
    },
    {
        sort_date: 1977.76,
        display_date: `1977, September 25`,
        event: `George LaCherra and Theresa LaCherra died in Lacerra House Fire in 41-48 43rd Street, Sunnyside, New York (brother and sister of James "Poppy" Cherry)`,
        people: [
            "George LaCherra",
            "Theresa LaCherra"
        ]
    },
    {
        sort_date: 1978,
        display_date: `1978, March 21st`,
        event: `George "Grandpa" Cherry named "Employee of the Month" for March 1978 by New York City Transit Authority for "eight years of dependable service" and "keeping an excellent sick leave balance"`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 1978,
        display_date: `1978, June`,
        event: `John "Jack" LaCherra graduated from high school at New York School of Printing in Manhattan at 439 West 49th Street, New York, New York`,
        people: [
            "John LaCherra"
        ]
    },
    {
        sort_date: 1978,
        display_date: `1978, June-1981, January`,
        event: `John "Jack" LaCherra worked in printing shop Scientific Color Graphics in Manhattan, New York`,
        people: [
            "John LaCherra"
        ]
    },
    {
        sort_date: 1978,
        display_date: `1978, June`,
        event: `What's left of Lacerra House in Sunnyside knocked down and taken away`
    },
    {
        sort_date: 1979,
        display_date: `1979, December 17`,
        event: `Jenny Loesel (nee Ciro) born in New York`,
        people: [
            "Jenny Loesel"
        ]
    },
    {
        sort_date: 1980,
        display_date: `1980, March 13`,
        event: `Matilda "Nana" Cherry started The Cherry Tree Book, compiling family history and telling our story in a scrapbook that has since been lost`,
        people: [
            "Matilda Cherry"
        ]
    },
    {
        sort_date: 1980,
        display_date: `1980, May`,
        event: `Geraldine LaCherra (nee Cooney) graduated from CW Post with a Bachelors majoring in Business Administration with a concentration in Marketing`,
        people: [
            "Geraldine LaCherra"
        ]
    },
    {
        sort_date: 1980,
        display_date: `1980, June`,
        event: `Steven Arecco graduated from Walt Whitman High School in Huntington Station, New York`,
        people: [
            "Steven Arecco"
        ]
    },
    {
        sort_date: 1980,
        display_date: `1980, June`,
        event: `Geraldine LaCherra (nee Cooney) started work at America Press as an Assistant to the Business and Advertising Manager in`,
        people: [
            "Geraldine LaCherra"
        ]
    },
    {
        sort_date: 1980,
        display_date: `1980, December 1st`,
        event: `Lacerra House property was sold and estate was settled`
    },
    {
        sort_date: 1981,
        display_date: `1981, January 26`,
        event: `John "Jack" LaCherra enters academy for NYPD`,
        people: [
            "John LaCherra"
        ]
    },
    {
        sort_date: 1982,
        display_date: `1982, January 6`,
        event: `James Cherry born in Florida`,
        people: [
            "James Cherry (1982)"
        ]
    },
    {
        sort_date: 1982,
        display_date: `1982, June`,
        event: `Ralph "Ray" Arecco graduated from Walt Whitman High School in Huntington Station, New York`,
        people: [
            "Ray Arecco"
        ]
    },
    {
        sort_date: 1982,
        display_date: `1982, September`,
        event: `Wil "Billy" Loesel began Kindergarten at St. Francis of Paola in Greenpoint, Brooklyn, New York`,
        people: [
            "Wil Loesel"
        ]
    },
    {
        sort_date: 1983,
        display_date: `1983, August 14`,
        event: `Lawrence "Larry" Towers and Christine "Chris" (nee Cherry) married in New York`,
        people: [
            "Lawrence Towers", "Christine Towers"
        ]
    },
    {
        sort_date: 1983,
        display_date: `1983, September`,
        event: `Jenny Loesel (nee Ciro) began Kindergarten at PS 89 in Queens, New York`,
        people: [
            "Jenny Loesel"
        ]
    },
    {
        sort_date: 1984,
        display_date: `1984, January 20`,
        event: `Brian Towers born in New York`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 1984,
        display_date: `1984, June`,
        event: `Jenny Loesel (nee Ciro) completed Kindergarten at PS 89 in Queens, New York`,
        people: [
            "Jenny Loesel"
        ]
    },
    {
        sort_date: 1984,
        display_date: `1984, August 3`,
        event: `Jason Cherry born in Florida`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 1984,
        display_date: `1984, September`,
        event: `Jenny Loesel (nee Ciro) began 1st grade at St. Joan of Arc in Jackson Heights, Queens, New York`,
        people: [
            "Jenny Loesel"
        ]
    },
    {
        sort_date: 1984,
        display_date: `1984, October`,
        event: `John "Jack" LaCherra and Geraldine (nee Cooney) meet at an NYPD 77th Precinct "War Games" event at a paintball park in Coram, Suffolk County, New York`,
        people: [
            "John LaCherra", "Geraldine LaCherra"
        ]
    },
    {
        sort_date: 1985,
        display_date: `1985/1986`,
        event: `John "Jack" LaCherra moved back into 183 Meserole Avenue to help his mother Ruth Cherry (nee Scanlon) care for her mother Catherine Scanlon (nee Noll) Catherine never moved into the apartment and went into a nursing home because shortly after this Ruth was diagnosed with cancer, John stayed in the apartment and took care of his mother`,
        people: [
            "John LaCherra",
            "Ruth Cherry",
            "Catherine Scanlon"
        ]
    },
    {
        sort_date: 1985,
        display_date: `1985, February 14`,
        event: `Zachary "Zach" Powers born`,
        people: [
            "Zachary Powers"
        ]
    },
    {
        sort_date: 1985,
        display_date: `1985, November 12`,
        event: `Jen Towers born in New Brunswick, New Jersey`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 1986,
        display_date: `1986, May 27`,
        event: `Jenni Towers (nee Aaker) born in Sacramento, California`
        ,
        people: [
            "Jenni Towers"
        ]
    },
    {
        sort_date: 1987,
        display_date: `1987, June`,
        event: `John "Jack" LaCherra and Geraldine (nee Cooney) get engaged to be married`,
        people: [
            "John LaCherra", "Geraldine LaCherra"
        ]
    },
    {
        sort_date: 1987,
        display_date: `1987, October 14`,
        event: `Matilda "Nana" Cherry (nee Pratt) died at Mercy Hospital, Rockville Centre, New York`,
        people: [
            "Matilda Cherry"
        ]
    },
    {
        sort_date: 1987,
        display_date: `1987, October 16`,
        event: `Matilda "Nana" Cherry buried in St. Charles Cemetery in Farmingdale, New York`,
        people: [
            "Matilda Cherry"
        ]
    },
    {
        sort_date: 1987,
        display_date: `1987, November 22nd`,
        event: `Ruth Cherry died in New York`,
        people: [
            "Ruth Cherry"
        ]
    },
    {
        sort_date: 1988,
        display_date: `1988, March 19`,
        event: `John "Jack" LaCherra and Geraldine (nee Cooney) married in New York`,
        people: [
            "John LaCherra", "Geraldine LaCherra"
        ]
    },
    {
        sort_date: 1988,
        display_date: `1988, Late March`,
        event: `Geraldine LaCherra (nee Cooney) moves in with John "Jack" LaCherra at 183 Meserole Avenue, Brooklyn, NY`,
        people: [
            "John LaCherra", "Geraldine LaCherra"
        ]
    },
    {
        sort_date: 1988,
        display_date: `1988, September`,
        event: `James Cherry entered Seminole Elementary School in Seminole, Florida`,
        people: [
            "James Cherry (1982)"
        ]
    },
    {
        sort_date: 1988,
        display_date: `1988, December 21st`,
        event: `Colleen Cherry born in Florida`,
        people: [
            "Colleen Cherry"
        ]
    },
    {
        sort_date: 1989,
        display_date: `1989, September`,
        event: `Brian Towers began Kindergarten at Burlington Road Elementary School in Freehold, New Jersey`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 1989,
        display_date: `1989, September`,
        event: `Jason Cherry entered Seminole Elementary School in Seminole, Florida`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 1991,
        display_date: `1991, February 2nd`,
        event: `Kevin LaCherra born in New York`,
        people: [
            "Kevin LaCherra"
        ]
    },
    {
        sort_date: 1991,
        display_date: `1991, June`,
        event: `Wil "Billy" Loesel completed 8th grade at St. Francis of Paola in Greenpoint, Brooklyn, New York`,
        people: [
            "Wil Loesel"
        ]
    },
    {
        sort_date: 1991,
        display_date: `1991, September`,
        event: `Wil "Billy" Loesel began freshman year of high school at Fiorello H. Laguardia High School of Performing Arts as a Drama major in New York`,
        people: [
            "Wil Loesel"
        ]
    },
    {
        sort_date: 1991,
        display_date: `1991, September`,
        event: `Jen Towers began Kindergarten at Burlington Road Elementary School in Freehold, New Jersey`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 1991,
        display_date: `1991, September`,
        event: `Jenni Towers (nee Aaker) began Kindergarten at Fair Oaks Elementary School in California`,
        people: [
            "Jenni Towers"
        ]
    },
    {
        sort_date: 1992,
        display_date: `1992, June`,
        event: `Wil "Billy" Loesel finishes freshman year of high school at Fiorello H. Laguardia High School of Performing Arts as a Drama major in New York`,
        people: [
            "Wil Loesel"
        ]
    },
    {
        sort_date: 1992,
        display_date: `1992, June`,
        event: `Jenny Loesel (nee Ciro) completed 8th grade at St. Joan of Arc in Jackson Heights, Queens, New York`,
        people: [
            "Jenny Loesel"
        ]
    },
    {
        sort_date: 1992,
        display_date: `1992, September`,
        event: `Wil "Billy" Loesel began sophomore year of high school at Seminole High School in Seminole, Florida`,
        people: [
            "Wil Loesel"
        ]
    },
    {
        sort_date: 1992,
        display_date: `1992, December`,
        event: `Wil "Billy" Loesel leaves halfway through sophomore year at Seminole High School in Seminole, Florida to go back to New York and attend Christ the King High School`,
        people: [
            "Wil Loesel"
        ]
    },
    {
        sort_date: 1993,
        display_date: `1993, January`,
        event: `Wil "Billy" Loesel begins the second half of sophomore year at Christ the King Regional High School in Middle Village, Queens, New York`,
        people: [
            "Wil Loesel"
        ]
    },
    {
        sort_date: 1993,
        display_date: `1993, June`,
        event: `James Cherry graduated Seminole Elementary School in Seminole, Florida`,
        people: [
            "James Cherry (1982)"
        ]
    },
    {
        sort_date: 1993,
        display_date: `1993, June`,
        event: `Jenni Towers (nee Aaker) completed 1st grade at Fair Oaks Elementary School in California`,
        people: [
            "Jenni Towers"
        ]
    },
    {
        sort_date: 1993,
        display_date: `1993, September`,
        event: `Jenni Towers (nee Aaker) began 2nd grade at Gold River Elementary School in California`,
        people: [
            "Jenni Towers"
        ]
    },
    {
        sort_date: 1993,
        display_date: `1993, September`,
        event: `Jenny Loesel (nee Ciro) began high school at Newtown High School in Queens, New York`,
        people: [
            "Jenny Loesel"
        ]
    },
    {
        sort_date: 1993,
        display_date: `1993, December 1st`,
        event: `Kristen LaCherra born in New York`,
        people: [
            "Kristen LaCherra"
        ]
    },
    {
        sort_date: 1994,
        display_date: `1994, June`,
        event: `Jason Cherry graduated Seminole Elementary School in Seminole, Florida`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 1994,
        display_date: `1994, September`,
        event: `James Cherry began middle school at Madeira Beach Middle School in Madeira Beach, Florida`,
        people: [
            "James Cherry (1982)"
        ]
    },
    {
        sort_date: 1995,
        display_date: `1995, June`,
        event: `Wil "Billy" Loesel graduates from high school at Christ the King Regional High School in Middle Village, Queens, New York`,
        people: [
            "Wil Loesel"
        ]
    },
    {
        sort_date: 1995,
        display_date: `1995, June`,
        event: `Brian Towers completed 5th grade at Burlington Road Elementary School in Freehold, New Jersey`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 1995,
        display_date: `1995, September`,
        event: `Jason began middle school at Madeira Beach Middle School in Madeira Beach, Florida`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 1995,
        display_date: `1995, September`,
        event: `Brian Towers began middle school at Dwight D. Eisenhower Middle School in Freehold, New Jersey`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 1996,
        display_date: `1996, September`,
        event: `Kevin LaCherra begins Elementary School in kindergarten at St. Anthony's of Padua in Greenpoint, Brooklyn, New York`,
        people: [
            "Kevin LaCherra"
        ]
    },
    {
        sort_date: 1997,
        display_date: `1997, April 12`,
        event: `Ralph Arecco died`,
        people: [
            "Ralph Arecco"
        ]
    },
    {
        sort_date: 1997,
        display_date: `1997, June`,
        event: `Jenny Loesel (nee Ciro) completed high school at Newtown High School in Queens, New York`,
        people: [
            "Jenny Loesel"
        ]
    },
    {
        sort_date: 1997,
        display_date: `1997, June`,
        event: `Jen Towers completed 5th grade at Burlington Road Elementary School in Freehold, New Jersey`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 1997,
        display_date: `1997, June`,
        event: `James graduated from Madeira Beach Middle School in Madeira Beach, Florida`,
        people: [
            "James Cherry (1982)"
        ]
    },
    {
        sort_date: 1997,
        display_date: `1997, August`,
        event: `Jenny Loesel (nee Ciro) began college at LaGuardia Community College in Hunters Point, Queens, New York`,
        people: [
            "Jenny Loesel"
        ]
    },
    {
        sort_date: 1997,
        display_date: `1997, September`,
        event: `Jen Towers started Middle School in Dwight D. Eisenhower Middle School in Freehold, New Jersey`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 1997,
        display_date: `1997, September`,
        event: `James Cherry entered Seminole High School in Seminole, Florida`,
        people: [
            "James Cherry (1982)"
        ]
    },
    {
        sort_date: 1998,
        display_date: `1998, June`,
        event: `Brian Towers graduated middle school at Dwight D. Eisenhower Middle School in Freehold, New Jersey`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 1998,
        display_date: `1998, June`,
        event: `Jason Cherry graduated from Madeira Beach Middle School in Madeira Beach, Florida`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 1998,
        display_date: `1998, June`,
        event: `Jenni Towers (nee Aaker) graduated 6th grade at Gold River Elementary School in California`,
        people: [
            "Jenni Towers"
        ]
    },
    {
        sort_date: 1998,
        display_date: `1998, September`,
        event: `Kristen LaCherra begins Elementary School in kindergarten at St. Anthony's of Padua in Greenpoint, Brooklyn, New York`,
        people: [
            "Kristen LaCherra"
        ]
    },
    {
        sort_date: 1998,
        display_date: `1998, September`,
        event: `Jenni Towers (nee Aaker) entered Barrett Middle School for 7th and 8th grade in California`,
        people: [
            "Jenni Towers"
        ]
    },
    {
        sort_date: 1998,
        display_date: `1998, June`,
        event: `Kevin and Kristen LaCherra complete 2nd grade and Kindergarten at St. Anthony's of Padua in Greenpoint, Brooklyn, New York (starts 3rd grade and 1st grade at Terryville Road Elementary School)`,
        people: [
            "Kevin LaCherra", "Kristen LaCherra"
        ]
    },
    {
        sort_date: 1998,
        display_date: `1998, September`,
        event: `Jason Cherry entered Seminole High School in Seminole, Florida`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 1998,
        display_date: `1998, September`,
        event: `Brian Towers enters Freehold Borough High School in Freehold, New Jersey`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 1998,
        display_date: `1998, October 29`,
        event: `James Cherry begins work at Shells Seafood Restaurant in Tampa, Florida`,
        people: [
            "James Cherry (1982)"
        ]
    },
    {
        sort_date: 1999,
        display_date: `1999, August 1st`,
        event: `John "Jack" and Geraldine LaCherra with children Kevin and Kristen and George "Grandpa" Cherry move from 183 Meserole Avenue in Greenpoint, Brooklyn, New York to 45 Kool Place, Port Jefferson Station, New York`,
        people: [
            "John LaCherra", "Geraldine LaCherra", "Kevin LaCherra",
            "Kristen LaCherra", "George Cherry"
        ]
    },
    {
        sort_date: 1999,
        display_date: `1999, September`,
        event: `Kevin LaCherra and Kristen LaCherra enter Terryville Road Elementary School (in 3rd and 1st grade respectively) in Port Jefferson Station, New York`,
        people: [
            "Kevin LaCherra", "Kristen LaCherra"
        ]
    },
    {
        sort_date: 2000,
        display_date: `2000, February 19`,
        event: `Ralph "Ray" Arecco married Sondra`,
        people: [
            "Ray Arecco", "Sondra Arecco"
        ]
    },
    {
        sort_date: 2000,
        display_date: `2000, May 2nd`,
        event: `Wil "Billy" Loesel and Jenny (nee Ciro) met on the R Train in New York, New York`,
        people: [
            "Wil Loesel", "Jenny Loesel"
        ]
    },
    {
        sort_date: 2000,
        display_date: `2000, Late May`,
        event: `Jenny Loesel (nee Ciro) completes her Associates Degree from LaGuardia Community College in Hunters Point, Queens, New York`,
        people: [
            "Jenny Loesel"
        ]
    },
    {
        sort_date: 2000,
        display_date: `2000, June 1st`,
        event: `Wil "Billy" Loesel and Jenny (nee Ciro) started dating`,
        people: [
            "Wil Loesel", "Jenny Loesel"
        ]
    },
    {
        sort_date: 2000,
        display_date: `2000, June`,
        event: `Jenni Towers (nee Aaker) graduated 8th grade at Barrett Middle School`,
        people: [
            "Jenni Towers"
        ]
    },
    {
        sort_date: 2000,
        display_date: `2000, June`,
        event: `Jen Towers graduated 8th grade at Dwight D. Eisenhower Middle School in Freehold, New Jersey`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 2000,
        display_date: `2000, August`,
        event: `Jenny Loesel (nee Ciro) continues with college to earn her Bachelors degree from CUNY Baruch in New York, New York`,
        people: [
            "Jenny Loesel"
        ]
    },
    {
        sort_date: 2000,
        display_date: `2000, September`,
        event: `Jen Towers enters Freehold Borough High School in Freehold, New Jersey`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 2000,
        display_date: `2000, September`,
        event: `Jenni Towers (nee Aaker) enters Rio Americano High School in Sacramento, California`,
        people: [
            "Jenni Towers"
        ]
    },
    {
        sort_date: 2001,
        display_date: `2001, January 21st`,
        event: `John "Jack" LaCherra begins working for Special Commissioner of Investigation for the New York City School District in New York, New York (current job)`,
        people: [
            "John LaCherra"
        ]
    },
    {
        sort_date: 2001,
        display_date: `2001, January 31st`,
        event: `John "Jack" LaCherra retires from NYPD`,
        people: [
            "John LaCherra"
        ]
    },
    {
        sort_date: 2001,
        display_date: `2001, June`,
        event: `James Cherry graduated from Seminole High School in Seminole, Florida`,
        people: [
            "James Cherry (1982)"
        ]
    },
    {
        sort_date: 2002,
        display_date: `2002, January 21st`,
        event: `James Cherry started working at Florida PreFab, a steel fabrication plant in Florida`,
        people: [
            "James Cherry (1982)"
        ]
    },
    {
        sort_date: 2002,
        display_date: `2002, February 23`,
        event: `Jason Cherry date of entry in Active Duty Service in US Army`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2002,
        display_date: `2002, June`,
        event: `Jason Cherry graduated from Seminole High School in Seminole Florida`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2002,
        display_date: `2002, June`,
        event: `Brian Towers graduates from Freehold Borough High School in Freehold, New Jersey`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 2002,
        display_date: `2002, June`,
        event: `Kevin LaCherra graduates from Terryville Road Elementary School in Port Jefferson Station, New York`,
        people: [
            "Kevin LaCherra"
        ]
    },
    {
        sort_date: 2002,
        display_date: `2002, August`,
        event: `Brian Towers enters University of Florida`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 2002,
        display_date: `2002, September`,
        event: `Kevin LaCherra enters John F. Kennedy Middle School in Port Jefferson Station, New York`,
        people: [
            "Kevin LaCherra"
        ]
    },
    {
        sort_date: 2002,
        display_date: `2002, September 13`,
        event: `Wil "Billy" Loesel and Jenny (nee Ciro) got engaged in Baraka, Philippines`,
        people: [
            "Jenny Loesel", "Wil Loesel"
        ]
    },
    {
        sort_date: 2003,
        display_date: `2003, May`,
        event: `Jenny Loesel (nee Ciro) completes her Bachelors degree at CUNY Baruch in Business Administration with a concentration in Operations Management in New York, New York`,
        people: [
            "Jenny Loesel"
        ]
    },
    {
        sort_date: 2004,
        display_date: `2004, June`,
        event: `Kristen LaCherra graduates from Terryville Road Elementary School in Port Jefferson Station, New York`,
        people: [
            "Kristen LaCherra"
        ]
    },
    {
        sort_date: 2004,
        display_date: `2004, June`,
        event: `Jen Towers graduates from Freehold Borough High School in Freehold, New Jersey`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 2004,
        display_date: `2004, June`,
        event: `Jenni Towers (nee Aaker) graduated from Rio Americano High School in Sacramento, California`,
        people: [
            "Jenni Towers"
        ]
    },
    {
        sort_date: 2004,
        display_date: `2004, August 17`,
        event: `George "Grandpa" Cherry died in Port Jefferson Station, New York`,
        people: [
            "George Cherry"
        ]
    },
    {
        sort_date: 2004,
        display_date: `2004, August`,
        event: `Jen Towers enters Rider University on Basketball scholarship (until August 2005)`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 2004,
        display_date: `2004, August`,
        event: `Jenni Towers (nee Aaker) enters Oregon State University in Corvallis, Oregon`,
        people: [
            "Jenni Towers"
        ]
    },
    {
        sort_date: 2004,
        display_date: `2004, August 27`,
        event: `Wil "Billy" Loesel and Jenny (nee Ciro) married in New York`,
        people: [
            "Wil Loesel", "Jenny Loesel"
        ]
    },
    {
        sort_date: 2004,
        display_date: `2004, September`,
        event: `Kristen LaCherra enters John F. Kennedy Middle School in Port Jefferson Station, New York`,
        people: [
            "Kristen LaCherra"
        ]
    },
    {
        sort_date: 2005,
        display_date: `2005, June`,
        event: `Kevin LaCherra graduates from John F. Kennedy Middle School in Port Jefferson Station, New York`,
        people: [
            "Kevin LaCherra"
        ]
    },
    {
        sort_date: 2005,
        display_date: `2005, July 15`,
        event: `Jason Cherry deployed to Camp Phoenix in Kabul, Afghanistan with US Army National Guard`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2005,
        display_date: `2005, August`,
        event: `Jen Towers leaves Rider University and enters Brookdale Community College for Fall semester`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 2005,
        display_date: `2005, September`,
        event: `Kevin LaCherra enters Comsewogue High School`,
        people: [
            "Kevin LaCherra"
        ]
    },
    {
        sort_date: 2006,
        display_date: `2006, Spring`,
        event: `Jen Towers transfers to NC State University in Raleigh, North Carolina`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 2006,
        display_date: `2006, May 9`,
        event: `Christine "Chris" Towers (nee Cherry) died in New Jersey`,
        people: [
            "Christine Towers"
        ]
    },
    {
        sort_date: 2006,
        display_date: `2006, Late May`,
        event: `Brian Towers graduates from University of Florida with Bachelors in Exercise and Sports Science`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 2006,
        display_date: `2006, June 4`,
        event: `Jason Cherry promoted to Private First Class (E3) in US Army National Guard`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2006,
        display_date: `2006, July 4`,
        event: `Jason Cherry heads back to United States from deployment to Camp Phoenix in Kabul, Afghanistan with US Army National Guard`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2006,
        display_date: `2006, August`,
        event: `Brian Towers enters University of Florida for Master's Degree in Management`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 2006,
        display_date: `2006, September 20`,
        event: `Diane Loesel/Korzeniewski (nee Cherry) died in New York`,
        people: [
            "Diane Korzeniewski"
        ]
    },
    {
        sort_date: 2007,
        display_date: `2007, March 11`,
        event: `Jason Cherry promoted to Specialist (E4) in US Army National Guard`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2007,
        display_date: `2007, June 13`,
        event: `Geraldine LaCherra (nee Cooney) begins working for New York Unified Court System in Suffolk County Family Court as a Court Assistant in Central Islip, New York`,
        people: [
            "Geraldine LaCherra"
        ]
    },
    {
        sort_date: 2007,
        display_date: `2007, June`,
        event: `Kristen LaCherra graduates from John F. Kennedy Middle School in Port Jefferson Station, New York`,
        people: [
            "Kristen LaCherra"
        ],
        people: [
            "Kristen LaCherra"
        ]
    },
    {
        sort_date: 2007,
        display_date: `2007, September`,
        event: `Kristen LaCherra enters Comsewogue High School in Port Jefferson Station, New York`,
        people: [
            "Kristen LaCherra"
        ]
    },
    {
        sort_date: 2008,
        display_date: `2008, May`,
        event: `Jen Towers graduates from NC State with a Bachelor's degree majoring in Psychology and double minoring in Sociology and Women & Gender Studies in Raleigh, North Carolina`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 2008,
        display_date: `2008, May`,
        event: `Jenni Towers (nee Aaker) graduated from Oregon State University in Corvallis, Oregon with a Bachelors majoring in Business Administration/Marketing focusing in New Media Communication`,
        people: [
            "Jenni Towers"
        ]
    },
    {
        sort_date: 2008,
        display_date: `2008, May 2nd`,
        event: `Jason Cherry earns his Associates Degree at St. Petersburg College in St. Petersburg, Florida`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2008,
        display_date: `2008, May 5`,
        event: `James Cherry started working at Horner Express, a swimming pool company as a driver in Florida`,
        people: [
            "James Cherry (1982)"
        ]
    },
    {
        sort_date: 2008,
        display_date: `2008, Late May`,
        event: `Brian Towers graduates with Masters in Management from University of Florida`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 2008,
        display_date: `2008, June 1st`,
        event: `Brian Towers started working for the NBA Sacramento Kings and the WNBA Sacramento Monarchs in Sacramento, California`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 2008,
        display_date: `2008, July`,
        event: `Brian Towers and Jenni Towers (nee Aaker) met while working for the Sacramento Kings in Sacramento, California`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 2008,
        display_date: `2008, August`,
        event: `Jen Towers enters University of Illinois at Chicago in Chicago, Illinois for Masters Degree in Occupational Therapy`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 2008,
        display_date: `2008, September`,
        event: `Wil "Billy" Loesel and Jenny (nee Ciro) purchased home at 77 Sycamore Lane, Levittown, New York`,
        people: [
            "Wil Loesel",
            "Jenny Loesel"
        ]
    },
    {
        sort_date: 2008,
        display_date: `2008, September 2nd`,
        event: `Jason Cherry promoted to Sergeant (E5) in US Army National Guard`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2009,
        display_date: `2009, March 1st`,
        event: `Jason Cherry purchased home at 8449 78th Terrace, Seminole, Florida`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2009,
        display_date: `2009, June`,
        event: `Kevin LaCherra graduates from Comsewogue High School, in Port Jefferson Station, New York`,
        people: [
            "Kevin LaCherra"
        ]
    },
    {
        sort_date: 2009,
        display_date: `2009, July`,
        event: `Brian Towers and Jenni Towers (nee Aaker) started dating in Sacramento, California`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 2009,
        display_date: `2009, August`,
        event: `Kevin LaCherra enters University of Maryland in College Park, Maryland`,
        people: [
            "Kevin LaCherra"
        ]
    },
    {
        sort_date: 2010,
        display_date: `2010, March 3`,
        event: `Jason Cherry deployed to Camp Virginia in Kuwait with US Army National Guard`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2010,
        display_date: `2010, March 29`,
        event: `Sean Loesel born in Nassau County, New York`,
        people: [
            "Sean Loesel"
        ]
    },
    {
        sort_date: 2011,
        display_date: `2011, April`,
        event: `Brian Towers started working for the New York Met's baseball team in Queens, New York`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 2010,
        display_date: `2010, May`,
        event: `Jen Towers graduates with Masters in Occupational Therapy from University of Illinois at Chicago in Chicago, Illinois`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 2010,
        display_date: `2010, November 18`,
        event: `Jason Cherry promoted to Staff Sergeant (E6) in US Army National Guard`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2010,
        display_date: `2010, December 12`,
        event: `Jason Cherry heads back to United States from deployment to Camp Virginia in Kuwait with US Army National Guard`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2011,
        display_date: `2011, January`,
        event: `James Cherry leaves job at Horner Express, a swimming pool company as a driver in Florida`,
        people: [
            "James Cherry (1982)"
        ]
    },
    {
        sort_date: 2011,
        display_date: `2011, April`,
        event: `Brian Towers left his job working for the NBA Sacramento Kings and WNBA Sacramento Monarchs in Sacramento, California`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 2011,
        display_date: `2011, May`,
        event: `Wil "Billy" Loesel and Jenny (nee Ciro) move and buy home at 11504 Dunham Drive, Matthews, North Carolina`,
        people: [
            "Wil Loesel",
            "Jenny Loesel"
        ]
    },
    {
        sort_date: 2011,
        display_date: `2011, June`,
        event: `Kristen LaCherra graduates Comsewogue High School in Port Jefferson Station, New York`,
        people: [
            "Kristen LaCherra"
        ]
    },
    {
        sort_date: 2011,
        display_date: `2011, August`,
        event: `Kristen LaCherra enters George Mason University in Fairfax, Virginia`,
        people: [
            "Kristen LaCherra"
        ]
    },
    {
        sort_date: 2011,
        display_date: `2011, November 4`,
        event: `George Cherry born in Florida`,
        people: [
            "George Cherry (2011)"
        ]
    },
    {
        sort_date: 2012,
        display_date: `2012, April 23`,
        event: `Jason Cherry moved to Active Guard Stats and appointed to Admin NCO status in US Army National Guard`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2012,
        display_date: `2012, August`,
        event: `1st Annual Cousin's Reunion in Charlotte, North Carolina`
    },
    {
        sort_date: 2012,
        display_date: `2012, November 23`,
        event: `Aidan Loesel born in Charlotte, North Carolina`,
        people: [
            "Aidan Loesel"
        ]
    },
    {
        sort_date: 2013,
        display_date: `2013, August`,
        event: `Wil "Billy" Loesel began college at Central Piedmont Community College in Charlotte, North Carolina`,
        people: [
            "Wil Loesel",
            "Jenny Loesel"
        ]
    },
    {
        sort_date: 2013,
        display_date: `2013, August`,
        event: `2nd Annual Cousin's Reunion in Charlotte, North Carolina`
    },
    {
        sort_date: 2013,
        display_date: `2013, October 11`,
        event: `Brian Towers and Jenni (nee Aaker) got engaged on the roof of their building in Astoria, New York`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 2014,
        display_date: `2014, May`,
        event: `Kevin LaCherra graduates from University of Maryland with a Bachelor's Degree in Government & Politics and History in College Park, Maryland`,
        people: [
            "Kevin LaCherra"
        ]
    },
    {
        sort_date: 2014,
        display_date: `2014, October 11`,
        event: `Brian Towers and Jenni (nee Aaker) married in Napa Valley, California`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 2014,
        display_date: `2014, October`,
        event: `The 3rd Annual Cousin's Reunion took place during Brian Towers and Jenni's Wedding as decided by unanimous consent at the 6th Annual Cousin's Reunion in Charlotte, North Carolina`,
        people: [
            "Brian Towers",
            "Jenni Towers"
        ]
    },
    {
        sort_date: 2014,
        display_date: `2014, December`,
        event: `Wil "Billy" Loesel earned Associates Degree from Central Piedmont Community College graduating as a member of the Phi Theta Kappa Honor Society in Charlotte, North Carolina`,
        people: [
            "Wil Loesel"
        ]
    },
    {
        sort_date: 2015,
        display_date: `2015, January`,
        event: `Wil "Billy" Loesel continues with college to earn his Bachelors degree at UNC Charlotte majoring in Marketing Analytics and minoring in Psychology`,
        people: [
            "Wil Loesel"
        ]
    },
    {
        sort_date: 2015,
        display_date: `2015, February 12`,
        event: `James Cherry leaves job at Florida PreFab, a steel fabrication in Florida`,
        people: [
            "James Cherry (1982)"
        ]
    },
    {
        sort_date: 2015,
        display_date: `2015, February 13`,
        event: `James Cherry begins working at Stone Mart, a tile and paver business in Tampa, Florida (current job)`,
        people: [
            "James Cherry (1982)"
        ]
    },
    {
        sort_date: 2015,
        display_date: `2015, April 9`,
        event: `Kevin LaCherra begins working for New York State Unified Court System in Brooklyn Civil Court, Landlord Tenant Division as a Court Office Assistant at 141 Livingston Street, Brooklyn, New York`,
        people: [
            "Kevin LaCherra"
        ]
    },
    {
        sort_date: 2015,
        display_date: `2015, May`,
        event: `Kristen LaCherra graduates from George Mason University with a Bachelor's majoring in Music and minoring in Arts Management in Fairfax, Virginia`,
        people: [
            "Kristen LaCherra"
        ]
    },
    {
        sort_date: 2015,
        display_date: `2015, September`,
        event: `4th Annual Cousin's Reunion in Charlotte, North Carolina`
    },
    {
        sort_date: 2015,
        display_date: `2015, September`,
        event: `Kristen LaCherra begins working as a Campus Coordinator at Levine Music, a nonprofit community music school in North Bethesda, Maryland`,
        people: [
            "Kristen LaCherra"
        ]
    },
    {
        sort_date: 2015,
        display_date: `2015, October 15`,
        event: `Jason Cherry promoted to Sergeant 1st Class (E7) and appointed to role of Readiness NCO in US Army National Guard (current job)`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2015,
        display_date: `2015, November 5`,
        event: `Kevin LaCherra transfers in Court System to Manhattan Criminal Court, Lower Court Division as a Court Office Assistant at 100 Centre Street, New York, New York`,
        people: [
            "Kevin LaCherra"
        ]
    },
    {
        sort_date: 2015,
        display_date: `2015, December 11`,
        event: `Jason Cherry earned Bachelors of Science in Business Administration from St. Petersburg College in St. Petersburg, Florida`,
        people: [
            "Jason Cherry"
        ]
    },
    {
        sort_date: 2016,
        display_date: `2016, January`,
        event: `Brian and Jenni Towers move from Astoria, New York to Burlingame, California`,
        people: [
            "Brian Towers",
            "Jenni Towers"
        ]
    },
    {
        sort_date: 2016,
        display_date: `2016, January`,
        event: `Brian Towers began working for the NHL San Jose Sharks as Director of Ticket Sales in San Jose, California`,
        people: [
            "Brian Towers"
        ]
    },
    {
        sort_date: 2016,
        display_date: `2016, January 20`,
        event: `Kevin LaCherra and Rebecca Margolies met on a Tinder date at Sweet & Vicious, a bar in Nolita, New York, New York`,
        people: [
            "Kevin LaCherra",
            "Rebecca Margolies"
        ]
    },
    {
        sort_date: 2016,
        display_date: `2016, June 16`,
        event: `James Cherry purchases home at 850 53rd Terrace North, St. Petersburg, Florida`,
        people: [
            "James Cherry (1982)"
        ]
    },
    {
        sort_date: 2016,
        display_date: `2016, July`,
        event: `Kristen LaCherra promoted to Production Manager of Act Two at Levine, the musical theatre department of Levine Music in North Bethesda, Maryland (current job)`,
        people: [
            "Kristen LaCherra"
        ]
    },
    {
        sort_date: 2016,
        display_date: `2016, September`,
        event: `5th Annual Cousin's Reunion in Charlotte, North Carolina`
    },
    {
        sort_date: 2016,
        display_date: `2016, September`,
        event: `Sean Loesel begins elementary school in Kindergarten at The Socrates Academy in Charlotte, North Carolina`,
        people: [
            "Sean Loesel"
        ]
    },
    {
        sort_date: 2016,
        display_date: `2016, September 2nd`,
        event: `Jen Towers purchased home at 32 Poplar Avenue, West Long Branch, New Jersey`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 2016,
        display_date: `2016, November`,
        event: `Jen Towers began work as an Occupational Therapist at Bayshore Healthcare Center in Holmdel, New Jersey (current job)`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 2017,
        display_date: `2017, January 26`,
        event: `Geraldine LaCherra (nee Cooney) promoted in Court System to Senior Court Clerk in Suffolk County Family Court in Central Islip, New York`,
        people: [
            "Geraldine LaCherra"
        ]
    },
    {
        sort_date: 2017,
        display_date: `2017, April 9`,
        event: `Kevin LaCherra promoted in Court System to Court Revenue Assistant in New York County Clerks Office at 60 Centre Street, New York, New York (current job)`,
        people: [
            "Kevin LaCherra"
        ]
    },
    {
        sort_date: 2017,
        display_date: `2017, April 27`,
        event: `Jen Towers inducted into the Freehold Borough High School Hall of Fame for Athletics`,
        people: [
            "Jen Towers"
        ]
    },
    {
        sort_date: 2017,
        display_date: `2017, September`,
        event: `George Cherry begins elementary school in Kindergarten at Starkey Elementary School in Seminole, Florida`,
        people: [
            "George Cherry (2011)"
        ]
    },
    {
        sort_date: 2017,
        display_date: `2017, September 1-4`,
        event: `6th Annual Cousin's Reunion in Charlotte, North Carolina`
    }
] 
