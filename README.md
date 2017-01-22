# d3-react-redux-express
A demonstration of implementing d3 charts in an isomorphic react-redux application with express js at server. The application is bundled with webpack. 

CSS framework is Bootstrap JS and the Material theme is implemented with https://bootswatch.com/paper/

Functionality:

1) User hits http://localhost:8000 in the browser

2)The html is loaded along with bundle.js and the css. Isomorphic rendering happens with the REST call to  http://localhost:8000/api/init

3)User clicks 'Add Chart' button and a panel with chart type and data source options will be rendered on screen-shot

4) User selects the chart type and chart source and clicks 'Draw' button.

5) REST call to  http://localhost:8000/api/chart//</charttype/>///</chartsource/>/ will load the data to render the corresponding chart. The data from the source is loaded and formatted as required by NVD3 to render the corresponding chart by the server.

6) The Client renders the chart on successful service call.

7) The failure of REST calls are not displayed in UI. 


Build and Deployment:

npm install

npm bs


![image](https://github.com/AjithJosephThomas/d3-react-redux-express/blob/master/screenshot.jpg)
