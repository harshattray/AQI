Air Quality Monitoring App
==========================

This is a React-based web application that shows air quality data for various cities in Germany. The application consists of three main components: `Navbar`, `ParameterGraph`, and `MainComponent`.

## Available Scripts

In the project directory, you can run:

### `npm install`

installs dependencies and dev dependencies<br>

### `npm start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner.

Navbar
------

This component displays a dropdown list of all available cities. Users can select a city to view the air quality data for that city. If the user selects "All Cities", the component shows a message indicating that they need to select a city.

### Props

-   `cities`: An array of strings containing the names of all available cities.
-   `selectedCity`: A string representing the currently selected city.
-   `setSelectedCity`: A function that is called when the user selects a new city.

### Usage


```
import Navbar from "./Navbar";

function App() {
  const cities = ["Berlin", "Munich", "Hamburg"];
  const [selectedCity, setSelectedCity] = useState("All Cities");

  return (
    <div>
      <Navbar
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
    </div>
  );
}
```

ParameterGraph
--------------

This component displays a line chart that shows the air quality data for a particular parameter (e.g., PM2.5) in a particular city. The data is fetched from an external API and is passed to the component as a prop.

### Props

-   `data`: An array of objects containing air quality data for a particular parameter in a particular city.
-   `parameter`: A string representing the parameter (e.g., "PM2.5").
-   `width` (optional): A number representing the width of the chart. Defaults to 500.
-   `height` (optional): A number representing the height of the chart. Defaults to 400.

### Usage


```
import ParameterGraph from "./ParameterGraph";

function App() {
  const data = [
    {
      city: "Berlin",
      value: 23.4,
      unit: "µg/m³",
      date: { local: "2022-02-14T12:00:00Z" },
      parameter: "PM2.5",
      location: "Station 1",
    },
    {
      city: "Berlin",
      value: 24.1,
      unit: "µg/m³",
      date: { local: "2022-02-14T13:00:00Z" },
      parameter: "PM2.5",
      location: "Station 1",
    },
  ];
  const parameter = "PM2.5";

  return (
    <div>
      <ParameterGraph data={data} parameter={parameter} />
    </div>
  );
}

```

MainComponent
-------------

This component is the main component of the application. It fetches air quality data for all cities from an external API, displays a dropdown list of available cities using the `Navbar` component, and displays line charts for all available parameters for the selected city using the `ParameterGraph` component.

### Usage


```
import MainComponent from "./MainComponent";

function App() {
  return (
    <div>
      <MainComponent />
    </div>
  );
}
```

Conclusion
----------

The Air Quality Monitoring App is a simple React-based web application that can be used to monitor air quality in various cities in Germany. It can be easily extended to include more cities and parameters, and can also be adapted to work with other air quality data sources.
