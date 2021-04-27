"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDescription = void 0;
var ApiDescription;
(function (ApiDescription) {
    ApiDescription["fly_from"] = "Kiwi API ID of the departure location. It accepts multiple values separated by a comma, these values might be airport codes, city IDs, two letter country codes, metropolitan codes and radiuses as well as a subdivision, region, autonomous_territory, continent and specials (Points of interest, such as Times Square).\n\n  Some locations have the same code for airport and metropolis (city), e.g. DUS stands for metro code Duesseldorf, Moenchengladbach and Weeze as well as Duesseldorf airport. See the following examples:\n  \n  * 'fly_from=city:DUS' will match all airports in \"DUS\", \"MGL\" and \"NRN\" (all in the city of Duesseldorf)\n  * 'fly_from=DUSf will do the same as the above\n  * 'fly_from=airport:DUS' will only match airport \"DUS\"\n  \nRadius needs to be in form lat-lon-xkm. The number of decimal places for radius is limited to 6. E.g.-23.24--47.86-500km for places around Sao Paulo. 'LON' - checks every airport in London, 'LHR' - checks flights from London Heathrow, 'UK' - flights from the United Kingdom. Link to Locations API.";
    ApiDescription["fly_to"] = "Kiwi api ID of the arrival destination. It accepts the same values in the same format as the 'fly_from' parameter\n\n  If you don\u2019t include any value you\u2019ll get aggregated results for some airports.";
    ApiDescription["date_from"] = "search flights from this date (dd/mm/yyyy). **Use parameters date_from and date_to as a date range for the flight departure**\n\n  Parameters 'date_from=01/05/2020' and 'date_to=30/05/2020' mean that the departure can be anytime between the specified dates.\n  \n  For the dates of the return flights, use the 'return_to' and 'return_from' or 'nights_in_dst_from' and 'nights_in_dst_to' parameters.";
    ApiDescription["date_to"] = "search flights upto this date (dd/mm/yyyy)";
    ApiDescription["return_from"] = "min return date of the whole trip (dd/mm/yyyy)";
    ApiDescription["return_to"] = "max return date of the whole trip (dd/mm/yyyy)";
    ApiDescription["nights_in_dst_from"] = "the minimal length of stay in the destination given in the **fly_to** parameter.";
})(ApiDescription = exports.ApiDescription || (exports.ApiDescription = {}));
//# sourceMappingURL=api-descriptions.enum.js.map