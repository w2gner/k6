# Run k6 load test
This is a demo of a load testing using k6, in order to run the test it is necessary to [Install k6](https://k6.io/docs/get-started/installation/).


### Running k6 with web dashboard
It's possible to view the test results in an internal web dashboard:


```K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_PERIOD=2s k6 run script.js```


### Running in k6 cloud with grafana
It's also possible to view the load test results in grafana cloud.

```k6 run script.js --out=cloud```


# References

[K6 with Grafana Cloud](https://k6.io/docs/results-output/real-time/cloud/)

[K6 web dashboard](https://grafana.com/docs/k6/latest/results-output/web-dashboard/)