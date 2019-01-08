export function weatherImage(WeatherDescription) {
    switch(WeatherDescription) {
        case "Cloudy":
            return "https://i.imgur.com/S1ansoV.png"
        case "Rain":
            return "https://i.imgur.com/oC985nW.png"
        case "Clear":
            return "https://i.imgur.com/3jnRUf3.png"
        case "Snow":
            return "https://i.imgur.com/C7FH9KU.png"
        default:
            return "https://i.imgur.com/S1ansoV.png"
    }
}
// Link to album of weather icons: https://imgur.com/a/2FttlIQ 

export function dataSelectorDetails(data, selectedday) {
    var Humidity = []
    var Wind = []
    var TempMin = 150
    var TempMax = 0
    var Day = ""
    var CurrentWeatherDesc = ""
    var Image = ""
    data.forEach(time => {
        if(time.Day === selectedday) {
            if(time.tempMin < TempMin) {
                TempMin = time.tempMin
            }
            if(time.tempMax > TempMax){
                TempMax = time.tempMax
            }
            if(time.weatherDesc == "Clear" && CurrentWeatherDesc !== "Cloudy" && CurrentWeatherDesc !== "Rain" && CurrentWeatherDesc !== "Snow") {
                CurrentWeatherDesc = "Clear"
            }
            if(time.weatherDesc == "Cloudy" && CurrentWeatherDesc !== "Rain" && CurrentWeatherDesc !== "Snow") {
                CurrentWeatherDesc = "Cloudy"
            }
            if(time.weatherDesc == "Rain" && CurrentWeatherDesc !== "Snow") {
                CurrentWeatherDesc = "Rain";
            }
            if(time.weatherDesc == "Snow") {
                CurrentWeatherDesc = "Snow";
            }
            Humidity.push(time.humidity)
            Wind.push(time.wind)
            Day = time.Day

        }
    });
    if (TempMin == 150) {
        return "Error"
    }
    Image = weatherImage(CurrentWeatherDesc)
    var average = (array) => array.reduce((a,b) => a + b) / array.length;
    return {tempmin: TempMin.toFixed(1), tempmax: TempMax.toFixed(1), humidity: (average(Humidity)).toFixed(0), wind: average(Wind).toFixed(1), day: Day, image: Image}
}


export function dataSelectorList(data) {
    var FoundDays = []
    var FilteredData = []
    data.forEach(time => {
        if (FoundDays.includes(time.Day)) {
            FilteredData.forEach(item => {
                if(time.Day === item.Day) {
                    if(time.tempMin < item.tempMin) {
                        item.tempMin = time.tempMin;
                    }
                    if(time.tempMax > item.tempMax) {
                        item.tempMax = time.tempMax;
                    }
                
                if(time.weatherDesc === "Cloudy" && item.weatherDesc !== "Snow" && time.weatherDesc !== "Rain") {
                    item.weatherDesc = "Cloudy";
                }
                if(time.weatherDesc == "Rain" && item.weatherDesc !== "Snow") {
                    item.weatherDesc = "Rain";
                }
                if(time.weatherDesc == "Snow") {
                    item.weatherDesc = "Snow"
                }
            }
            })
        }
        else {
            FoundDays.push(time.Day);
            FilteredData.push(time);
        }
    })
    return FilteredData
}

// For selecting data that goes into the WeatherDetails component








