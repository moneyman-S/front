import { ReportHandler } from "web-vitals";

const reportWebVitals = (onPerfEntry?: ReportHandler): boolean => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
  return true;
};

export default reportWebVitals;
