import "./styles.css";
import "./MoodLogger";
import MoodLoggerTW from "./MoodLoggerTW";
import KidsNameGrid from "./KidsNameGrid";
import RegistrationSummary from "./RegistrationSummary";
import ChildRegistration from "./ChildRegistration";


export default function App() {
  return <div><ChildRegistration/><MoodLoggerTW/><RegistrationSummary/></div>
}
