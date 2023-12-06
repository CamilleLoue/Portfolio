const map = [
  {
    id: "real-estate-data-analysis",
    project_title: "Real Estate Data Analysis",
    image_source: "/images/work/data-viz.png",
    image_width: 550,
    dates: "Aug 2022 - Sept 2022",
    skills: ["Data wrangling", "Data Analysis", "Data viz"],
    client: "Data Immo Solutions (French Real Estate Company)",
    project_overview: [
      "Understand the current real estate market in Ile-de-France.",
      "Identify relevant variables for predicting property prices in the Ile-de-France region.",
    ],
    development: [
      "Fetched publicly available data from the French government website.",
      "Performed extensive data cleaning and data wrangling to prepare the dataset.",
      "Leveraged Python, primarily the Pandas library, for data processing.",
      "Generated visualizations using Matplotlib.",
      "Presented the findings in a 15-slide presentation to the CEO and the board.",
    ],
    technologies: ["Python", "Matplotlib", "Azure"],
    results: [
      "The project resulted in a roadmap for prioritizing future work, with an initial focus on predicting property prices for 2 and 3-room flats in the Ile-de-France region, excluding apartments sold off-plan. This strategic approach allowed for more efficient resource allocation and targeted development efforts.",
    ],
    learnings: [
      "Choosing the appropriate visualisation can be critical for the analysis.",
      "The complexity of real estate data necesitates deep analysis and extensive research beyond the datasets provided by the state.",
    ],
  },
  {
    id: "price-estimation-model",
    project_title: "Price Estimation Model",
    image_source: "/images/work/mapbox-prix.png",
    image_width: 700,
    dates: "Nov 2022 - Feb 2023",
    skills: [
      "Web Scraping",
      "ETL",
      "Regression Model",
      "Dashboard development",
    ],
    client: "Data Immo Solutions (French Real Estate Company)",
    project_overview: [
      "Create a robust real estate database and developed an estimation model for Data Immo Solutions.",
    ],
    development: [
      "Web scraped and crawled data from real estate websites using Selenium.",
      "Concatenated the crawled data with publicly available government data using numpy and pandas.",
      "Developed an interactive Plotly Dashboard with Mapbox and geopandas for users to access property price information by hovering over specific regions.",
      "Built an estimation model using scikit-learn, implementing a simple but effective linear regression for property price estimation and integrated it with ETL pipeline.",
    ],
    technologies: ["Python", "Plotly","Scikit-learn","Azure"],
    results: [
      "The project improved the product's value by providing a robust database and an estimation model for property prices.",
    ],
    learnings: [
      "The importance of selecting specific property types and regions when developing predictive models.",
      "It is more difficult to create a robust database with clean data than building the model.",
    ],
  },
  {
    id: "recommender-system-optimisation",
    project_title: "Recommender System Optimisation with RL",
    image_source: "/images/work/mab-plot.jpg",
    image_width: 450,
    dates: "Mar 2023 - Aug 2023",
    skills: [
      "Statistical Analysis",
      "RL (Contextual Bandits)",
      "API integration",
    ],
    client: "CloudIQ (UK Digital Marketing SaaS Company)",
    project_overview: [
      "CloudIQ's AI-powered marketing platform builds a unique profile for each customer and launches tailored email and on-site campaigns to convert them. The goal of this project was to enhance the recommender system behind the platform by designing and deploying a model to optimise it. Specifically, a Reinforcement Learning technique known as the Multi-Armed Bandit (MAB) was used. The existing recommender system consisted of an ensemble of models. The MAB designed for this project assigned different weights to each model to optimise recommendations.",
    ],
    development: [
      "The project was executed in two phases:",
      "Basic MAB: The initial step involved implementing a basic Multi-Armed Bandit.",
      "Contextual MAB: In the second phase, context was introduced into the model by implementing the inference API and using the LinUCB Disjoint Multi-Armed Bandit mode.",
    ],
    technologies: ["Python", "TensorFlow", "Airflow", "Streamlit", "GCP"],
    results: [
      "Achieved a 33% increase in Click Through Rate (CTR) following the implementation of the Multi-Armed Bandit optimization.",
      "Improved the overall effectiveness of CloudIQ's marketing platform, leading to more successful customer conversions.",
    ],
    learnings: [
      "A recommender system can be optimised with a simple Multi-Armed Bandit, while adding contextual information improves it even more.",
      "The right design of the model is a lot of trial and error. That means designing, implementing, waiting for the model to learn, improving the design, reiterate.",
      "There are many different factors that impact the performance of the model (e.g. the appearance of the recommendations overlay)",
    ],
  },
  {
    id: "demand-forecasting",
    project_title: "Demand Forecasting",
    image_source: "/images/work/timeseries-plot.png",
    image_width: 700,
    dates: "Aug 2023 - oct 2023",
    skills: ["Data Analysis", "TimeSeries", "Statistical Evaluation"],
    client: "CloudIQ (UK Digital Marketing SaaS Company)",
    project_overview: [
      "The project's objective was to create a demand forecasting model tailored to CloudIQ's diverse clientele. CloudIQ serves clients of varying sizes and industries, making it essential to develop a model that could adapt to different client profiles.",
    ],
    development: [
      "A benchmark of various Time Series models was established to evaluate their suitability.",
      "DeepAR, a versatile Time Series model developed by Amazon, was selected as the most appropriate choice.",
      "The project involved extensive exploration of the model's capabilities and limitations.",
      "The primary focus was on identifying where the DeepAR model performed optimally (with specific types of data) and where it showed limitations. This assessment was done using a confidence interval.",
    ],
    technologies: ["Python", "Matplotlib", "Scikit-Learn", "GCP"],
    results: [
      "Achieved an accuracy rate of 93% for a prediction window of 3 months, demonstrating the model's effectiveness in delivering reliable forecasts.",
      "Provided CloudIQ's clients with valuable insights into demand patterns, enabling more informed decision-making and resource allocation.",
    ],
    learnings: [
      "There is not a one model fit all solution for TimeSeries.",
      "Finding the right way to design the model comes with a high number of meetings with the clients throughout the process.",
      "Improving the model comes with more feature engineering than more finetuning.",
    ],
  },
];

export { map };
export default map;
