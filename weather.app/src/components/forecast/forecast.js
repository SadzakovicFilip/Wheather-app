import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
  `Sunday`,
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();

  const forecastDays= WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
   console.log(dayInAWeek)
  console.log(forecastDays)

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      alt="weather"
                      className="icon-small"
                      src={`icons/${item.weather[0].icon}.png`}
                    ></img>
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">{item.weather[0].description}</label>
                    <label className="min-max">Min:{Math.round(item.main.temp_min)}°C/ Max:{Math.round(item.main.temp_max)}°C </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label className="title-pad">Pressure</label>
                        <label className="info">{item.main.pressure} hPa</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label className="title-pad">Humidity</label>
                        <label className="info">{item.main.humidity} %</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label className="title-pad">Clouds</label>
                        <label className="info">{item.clouds.all} %</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label className="title-pad">Wind Speed</label>
                        <label className="info">{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label className="title-pad">Sea Level</label>
                        <label className="info">{item.main.sea_level} m</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label className="title-pad">Feels Like</label>
                        <label className="info">{Math.round(item.main.feels_like)}°C</label>
                    </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default Forecast;
