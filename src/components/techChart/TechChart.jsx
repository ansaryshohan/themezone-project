import { Component } from "react";
import { Container } from "react-bootstrap";
import TopHeader from "../topHeader/TopHeader";
import Chart from "./Chart";

class TechChart extends Component {
  render() {
    return (
      <div className="pt-5 pb-5 mb-3">
        <TopHeader title={"technology used"} />
        <Container className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3">
          {/* chart component */}
          <Chart />
          {/* normal texts */}
          <div>
            <p className="mb-2">If you are new to mobile development, the easiest way to get started is with Expo Go. Expo is a set of tools and services built around React Native and, while it has many features, the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator.</p>
            <p className="mb-2">
            If you{"'"}d like to try out React Native directly in your web browser before installing any tools, you can try out Snack.
            </p>
            <p className="mb-2">
            If you are already familiar with mobile development, you may want to use React Native CLI. It requires Xcode or Android Studio to get started
            </p>
            <p className="mb-2">
            Install the Expo Go app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo Go app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the default iOS Camera app.
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

export default TechChart;
