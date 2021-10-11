export const getForcastsForDaysByCity = (city?: string) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&appid=759eb6c466308a5fe6dea4db39c41f70&units=metric`
  )
    .then((res) => res.json())
